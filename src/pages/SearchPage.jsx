import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import "./SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError(null);

    // fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(query)}`)
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
    <div className="movie-search-content">
      <h1 className="movie-search-title">Movie Search</h1>

      <SearchBar
        query={query}
        isLoading={isLoading}
        onQueryChange={(e)=> setQuery(e.target.value)}
        onSubmit={handleSubmit}
        onKeyPress={handleKeyPress}
      />

      {isLoading && <p className="movie-loading-text">Loading results...</p>}

      {error && <p className="movie-error-text">Error: {error}</p>}

      {results && results.description && results.description.length > 0 && (
        <div>
          <h2 className="movie-results-title">
            Found {results.description.length} result
            {results.description.length !== 1 ? "s" : ""}
          </h2>

          <div className="movie-grid">
            {results.description.map((movie, index) => (
              <div key={movie["#IMDB_ID"] || index} className="movie-card">
                {movie["#IMG_POSTER"] && (
                  <img
                    src={movie["#IMG_POSTER"]}
                    alt={movie["#TITLE"]}
                    className="movie-poster"
                  />
                )}

                <div className="movie-card-content">
                  <h3 className="movie-title">{movie["#TITLE"]}</h3>

                  {movie["#YEAR"] && (
                    <p className="movie-year">Year: {movie["#YEAR"]}</p>
                  )}

                  {movie["#ACTORS"] && movie["#ACTORS"].trim() && (
                    <p className="movie-actors">
                      <span className="movie-actors-label">Actors:</span>{" "}
                      {movie["#ACTORS"]}
                    </p>
                  )}

                  {movie["#RANK"] && (
                    <p className="movie-rank">Rank: #{movie["#RANK"]}</p>
                  )}

                  {movie["#IMDB_URL"] && (
                    <a
                      href={movie["#IMDB_URL"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="movie-link"
                    >
                      View on IMDb
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {results && results.description && results.description.length === 0 && (
        <p className="movie-no-results">
          No results found. Try a different search term.
        </p>
      )}
    </div>
    </>
  );
};

export default SearchPage;
