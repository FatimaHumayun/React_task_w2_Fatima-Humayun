import React from "react";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchName, setSearchName] = useState("");

  function handleChange(event) {
    setSearchName(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter character name..."
        required
        value={searchName}
        onChange={handleChange}
      />
    </div>
  );
}
