import React, { useState } from "react";
import "./SearchPage.css";
import SearchResults from "../components/SearchResults";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
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
    <>
    
      <div className="top-bar">
       <h1 className="movie-search-title-name"></h1> 
<div className="movie-search-content">
    <SearchBar
        query={query}
        isLoading={isLoading}
        onQueryChange={(e)=> setQuery(e.target.value)}
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
      />
</div>
      <SearchResults
        results={results}
        isLoading={isLoading}
        error={error}
      />
    </div>
    </>
  );
};

export default SearchPage;
