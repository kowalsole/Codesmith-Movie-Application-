import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import MoviePage from "./pages/MoviePage";

const App = () => {

  return (
    <div className="app">

      <Routes>

        <Route 
          path="/"
          element={
            <>
              <Signup />
              <SearchPage />
            </>
          }
        />

          <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
