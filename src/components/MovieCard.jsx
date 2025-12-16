import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
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

        {movie[""] && (
          <a
            // href={movie["#IMDB_URL"]}
            target="_blank"
            rel="noopener noreferrer"
            className="movie-link"
          >
            {/* View on IMDb */}
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
