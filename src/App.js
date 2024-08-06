import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import { SKIN_COLOR_MAP } from "./skintones.js";
import "./index.css"; // Ensure CSS is imported
import Search from "./components/Search.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [data, setData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = (query) => {
    setSearchCharacter(query);
  };

  const getFound = async () => {
    setLoading(true);
    await axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setData(res.data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getFound();
  }, []);

  const getRandomImageUrl = () =>
    `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 59)}`;

  const getCharacterColor = (skinColor) => {
    return SKIN_COLOR_MAP[skinColor.toLowerCase()] || "#F4C2C2";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const filteredData = [];
  for (const character of data) {
    if (
      character.name.toLowerCase().indexOf(searchCharacter.toLowerCase()) !== -1
    ) {
      filteredData.push(character);
    }
  }

  return (
    <main>
      <header className="header">Star Wars Character Gallery</header>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </main>
  );
}

export default App;
