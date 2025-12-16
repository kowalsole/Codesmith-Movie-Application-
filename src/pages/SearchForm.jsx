import React, { useState } from "react";
import "./SearchForm.css";
import SearchResults from "../components/SearchResults";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    fetch(`http://localhost:5500/api/${encodeURIComponent(query)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setResults(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="movie-search-content">
      <h1 className="movie-search-title">Movie Search</h1>

      <div className="movie-search-box">
        <div className="movie-input-group">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="movie-search-input"
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="movie-search-button"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      <SearchResults
        results={results}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default SearchBar;
