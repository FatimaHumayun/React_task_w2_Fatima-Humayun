import React, { useState, useCallback } from "react";

export default function Search({ onSearch }) {
  const [searchName, setSearchName] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 100),
    [onSearch]
  );

  //handle change for search event
  function handleChange(event) {
    const value = event.target.value;
    setSearchName(value);
    debouncedSearch(value);
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
