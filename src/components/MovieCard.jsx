import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie["#IMDB_ID"]}`}>
      {movie["#IMG_POSTER"] && (
        <img
          src={movie["#IMG_POSTER"]}
          alt={movie["#TITLE"]}
          className="movie-poster"
        />
      )}

      <div className="movie-card-content">
        <h1 className="movie-title">{movie["#TITLE"]}</h1>
        {movie["#YEAR"] && (
          <p className="movie-year">{movie[""]}
          <span className="movie-year-label">Year:</span>
  <span className="movie-year-value">{movie["#YEAR"]}</span>
          </p>
        )}

        {movie["#ACTORS"] && movie["#ACTORS"].trim() && (
          <p className="movie-actors">
            <span className="movie-actors-label">Actors:</span>
             <span className="movie-actors-text">
            {movie["#ACTORS"]}
            </span>
          </p>
        )}

        {movie["#RANK"] && (
          <p className="movie-rank">Rank: #{movie["#RANK"]}</p>
        )}

        {movie[""] && (
          <a
            // href={movie["#IMDB_URL"]}
            target="_blank"
            rel="noopener noreferrer"
            className="movie-link"
          >
        
          </a>
        )}
      </div>
      </Link>
  </div>
  );
};

export default MovieCard;
