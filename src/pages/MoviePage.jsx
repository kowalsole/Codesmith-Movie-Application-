// Movie detail page component that fetches and displays information for a single title
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MoviePage.css';

// Fetches movie data by IMDb ID from the backend and renders a detailed view
const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // Fetch movie details whenever the route ID changes
  useEffect(() => {
    fetch(`http://localhost:5500/api/info/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('FULL RESPONSE:', data);
        setMovie(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Displays a loading state while movie data is being fetched
  if (!movie) return <p>Loading...</p>;

  console.log('movie response:', movie);

  // Extracts and normalizes relevant movie fields for rendering
  const title = movie.main.titleText?.text;
  const year = movie.main.releaseDate?.year;
  const moviePoster = movie.main.primaryImage?.url;
  const runtime = movie.main.runtime.displayableProperty.value.plainText;
  const genre = movie.short.genre?.[0];

  const description = movie.short.description;
  const contentRating = movie.short.contentRating;

  // Safely retrieves director and actor data from nested API response
  const director = movie.main?.crewV2?.[0]?.credits?.[0].name.nameText.text;

  const actors = movie.main?.castV2?.[0]?.credits
    ? Object.values(movie.main.castV2[0].credits)
        .slice(0, 2)
        .map((actor) => actor?.name?.nameText?.text)
    : [];

  const formattedActors = `${actors[0]} and ${actors[1]}`;

  // Renders movie poster, metadata, description, and credits
  return (
    <div className="movie-page">
      <img src={moviePoster} className="movie-poster" />
      <div className="movie-details">
        <h1 className="movie-title">
          <span className="movie-title-text">{title}</span>
          <span className="movie-year"> ({year})</span>
        </h1>

        <div className="movie-meta">
          <span className="contentRating">{contentRating}</span>
          <span className="dot">·</span>
          <span className="movie-runtime">{runtime}</span>
          <span className="dot">·</span>
          <span>{genre}</span>
        </div>

        {description && <p className="movie-description">{description}</p>}

        {director && <p className="movie-director">Directed by {director}</p>}

        {actors.length > 0 && (
          <p className="movie-actors">Starring: {formattedActors}</p>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
