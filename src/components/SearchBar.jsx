import searchIcon from "../assets/search.png";


const SearchBar = ({ query, isLoading, onQueryChange, onSubmit, onKeyPress }) => {
  return (
    <div className="movie-search-box">
      <div className="movie-input-group">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={onQueryChange}
          onKeyDown={onKeyPress}
          className="movie-search-input"
        />
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="movie-search-button"
        >
         {isLoading ? (
  <span></span>
) : (
  <img
    src={searchIcon}
    alt="Search"
    className="search-icon"
  />
)}

        </button>
      </div>
    </div>
  );
}
export default SearchBar;