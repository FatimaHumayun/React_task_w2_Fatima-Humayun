// CharacterInfo.js
import React from "react";
// import "./CharacterInfo.css"; // Make sure to create this CSS file

export default function CharacterInfo({
  name,
  onClose,
  height,
  mass,
  noFilm,
  climate,
  birthYear,
  terrain,
  nameHome,
  resident,
  created,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h1 style={{ color: "yellow" }}>Character Details</h1>
        <p> Name : {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass} kg</p>
        <p>Birth Year: {birthYear}</p>
        <p>Films: {noFilm}</p>
        <p>Date: {created} </p>
        <h1 style={{ color: "Brown" }}>Home World Details</h1>
        <p>Name: {nameHome}</p>
        <p>Climate: {climate}</p>
        <p>Terrain:{terrain}</p>
        <p>Resident: {resident}</p>
      </div>
    </div>
  );
}
