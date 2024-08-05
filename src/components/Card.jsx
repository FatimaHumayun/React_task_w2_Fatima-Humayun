import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterInfo from "./CharacterInfo";

export default function Card({
  name,
  imageUrl,
  world,
  color,
  height,
  mass,
  noFilms,
  birthYear,
  created,
}) {
  const [worldData, setWorldData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getWorld = async () => {
    try {
      const response = await axios.get(world);
      setWorldData(response.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorld();
  }, [world]);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  //let residentNumber = worldData.resident.length;
  return (
    <div>
      <div
        style={{ backgroundColor: color }}
        onClick={handleCardClick}
        className="card"
      >
        <img src={imageUrl} alt={name} className="card-image" />
        <h2 className="card-title">{name}</h2>
      </div>
      {isModalOpen && (
        <CharacterInfo
          name={name}
          height={height}
          onClose={handleCloseModal}
          mass={mass}
          created={created}
          noFilm={noFilms.length}
          climate={worldData.climate}
          birthYear={birthYear}
          terrain={worldData.terrain}
          nameHome={worldData.name}
          resident={worldData.residents.length}
        />
      )}
    </div>
  );
}
