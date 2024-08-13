import React, { useState } from "react";
import "../index.css";
import { getRandomImageUrl, formatDate, getCharacterColor } from "../util.js";
import { useFetch } from "../hooks/useFetch.js";
import Search from "../components/Search.jsx";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import UserLogOut from "../components/UserLogOut.jsx"; // Import the UserLogOut component

function Listings() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const { loading, data, nextPage, prevPage, currentPageNumber, totalPages } =
    useFetch();

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase())
  );

  // Handle Next Page Click
  const handleNextPage = () => {
    nextPage();
  };

  // Handle Previous Page Click
  const handlePrevPage = () => {
    prevPage();
  };

  return (
    <main>
      <header className="header">Star Wars Character Gallery</header>
      <Search onSearch={setSearchCharacter} />
      <UserLogOut /> {/* Render the logout button here */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="cards-container">
            {filteredData.length > 0 ? (
              filteredData.map((character, index) => (
                <Card
                  key={index}
                  name={character.name}
                  imageUrl={getRandomImageUrl()}
                  world={character.homeworld}
                  color={getCharacterColor(character.skin_color)}
                  height={character.height}
                  mass={character.mass}
                  noFilms={character.films}
                  birthYear={character.birth_year}
                  created={formatDate(character.created)}
                />
              ))
            ) : (
              <p>Not Found, try again...</p>
            )}
          </div>
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={currentPageNumber === 1}>
              Previous
            </button>
            <span>
              Page {currentPageNumber} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPageNumber === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Listings;
