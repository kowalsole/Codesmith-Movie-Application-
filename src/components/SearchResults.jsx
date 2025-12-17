// Component responsible for rendering search results and handling loading/error states
import React from 'react';
import MovieCard from './MovieCard';

// Displays a list of movie results or appropriate UI feedback based on request state
const SearchResults = ({ results, error }) => {
  if (error) {
    return <p className="movie-error-text">Error: {error}</p>;
  }

  if (!results || !results.description) {
    return null;
  }

  if (results.description.length === 0) {
    return (
      <p className="movie-no-results">
        No results found. Try a different search term.
      </p>
    );
  }

  return (
    <div>
      <h2 className="movie-results-title">
        Found {results.description.length} result
        {results.description.length !== 1 ? 's' : ''}
      </h2>

      <div className="movie-grid">
        {results.description.map((movie, index) => (
          <MovieCard key={movie['#IMDB_ID'] || index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
