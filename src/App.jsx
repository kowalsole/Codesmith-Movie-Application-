// Root application component that defines client-side routing and page composition
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import MoviePage from './pages/MoviePage';

// Sets up application routes and determines which pages render for each URL
const App = () => {
  return (
    <div className="app">
      <Routes>
        {/* Home route rendering signup and search functionality */}
        <Route
          path="/"
          element={
            <>
              <Signup />
              <SearchPage />
            </>
          }
        />

        {/* Movie detail route rendering a single movie page by IMDb ID */}
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
