import React, { useState } from "react";
import "../pages/SearchForm.css";

export default function SearchBar({ onSearch, placeholder }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setValue(term);
    onSearch(term);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(value);
  // };

  return (
    <form className="search-container" onSubmit={value}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={handleChange}
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
