import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../util.js";

//custom hook
export function useFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //fetch data from API
  const getDataFromAPI = async (page) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}?page=${page}`);
      setData(res.data.results || []);
      setTotalPages(Math.ceil(res.data.count / 10));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromAPI(currentPage);
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  //return the states
  return {
    loading,
    data,
    error,
    nextPage: goToNextPage,
    prevPage: goToPrevPage,
    currentPageNumber: currentPage,
    totalPages,
  };
}
