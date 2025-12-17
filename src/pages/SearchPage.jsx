// Search page component responsible for querying movies and displaying search results
import React, { useState } from 'react';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

// Manages search state, API requests, and conditional rendering for the movie search experience
const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Submits the search query to the backend API and updates loading, results, and error states
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

  // Allows users to submit a search by pressing the Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Renders the search UI, results grid, and appropriate loading/error/empty states
  return (
    <>
      <div className="movie-search-content">
        <h1 className="movie-search-title">Movie Search</h1>

        <SearchBar
          query={query}
          isLoading={isLoading}
          onQueryChange={(e) => setQuery(e.target.value)}
          onSubmit={handleSubmit}
          onKeyPress={handleKeyPress}
        />

        {isLoading && <p className="movie-loading-text">Loading results...</p>}

        {error && <p className="movie-error-text">Error: {error}</p>}

        {results && results.description && results.description.length > 0 && (
          <div>
            <h2 className="movie-results-title">
              Found {results.description.length} result
              {results.description.length !== 1 ? 's' : ''}
            </h2>

            <div className="movie-grid">
              {results.description.map((movie, index) => (
                <div key={movie['#IMDB_ID'] || index} className="movie-card">
                  <Link to={`/movie/${movie['#IMDB_ID']}`}>
                    {movie['#IMG_POSTER'] && (
                      <img
                        src={movie['#IMG_POSTER']}
                        alt={movie['#TITLE']}
                        className="movie-poster"
                      />
                    )}
                    <h3 className="movie-title">{movie['#TITLE']}</h3>
                  </Link>

                  {movie['#YEAR'] && (
                    <p className="movie-year">Year: {movie['#YEAR']}</p>
                  )}

                  {movie['#ACTORS'] && movie['#ACTORS'].trim() && (
                    <p className="movie-actors">
                      <span className="movie-actors-label">Actors:</span>{' '}
                      {movie['#ACTORS']}
                    </p>
                  )}

                  {movie['#RANK'] && (
                    <p className="movie-rank">Rank: #{movie['#RANK']}</p>
                  )}

                  {movie['#IMDB_URL'] && (
                    <a
                      href={movie['#IMDB_URL']}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="movie-link"
                    >
                      View on IMDb
                    </a>
                  )}
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
        <SearchResults results={results} isLoading={isLoading} error={error} />
      </div>
    </>
  );
};

export default SearchPage;
