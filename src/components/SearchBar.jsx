// Presentational search input component for querying movies
const SearchBar = ({
  query,
  isLoading,
  onQueryChange,
  onSubmit,
  onKeyPress,
}) => {
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
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
