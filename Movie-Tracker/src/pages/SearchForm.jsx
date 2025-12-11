import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import "../pages/SearchForm.css";

const allMovies = [
   {
    id: 1,
    title: "",
    description: ""
  },
  {
    id: 2,
    title: "",
    description: ""
  },
  {
    id: 3,
    title: "",
    description: ""
  }
];

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter movies based on search term
  const filteredMovies = allMovies.filter(movie => {
    if (!searchTerm.trim()) return true;
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", searchTerm);
  };

  return (
    <div className="search-form-page">
      <form onSubmit={handleSubmit} className="search-form">
        <SearchBar 
          onSearch={handleSearch} 
          placeholder="Search movies by title or description..."
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>

      <div className="search-results">
        {searchTerm && filteredMovies.length === 0 ? (
          <div className="no-results">
            <p>No movies found for "{searchTerm}"</p>
          </div>
        ) : (
          <>
            {searchTerm && (
              <p className="results-count">
                Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''}
              </p>
            )}
            
            <div className="movies-grid">
              {filteredMovies.map(movie => (
                <div key={movie.id} className="movie-card">
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}