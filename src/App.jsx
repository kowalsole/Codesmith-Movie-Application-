import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

// Components
import Signup from "./components/Signup";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
// 
// Pages
import SearchPage from "./pages/SearchPage";
import Login from "./components/Login.jsx";
// import Login from "./components/login.jsx";

const App = () => {
  // Use state to track the token so the UI (like Navbar) updates ASAP on login/logout
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Listen for changes in localStorage to keep the token state in sync
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Navbar only shows if token exists in state */}
        {token && <Navbar />}

        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* --- Protected Routes --- */}
          <Route 
            path="/search" 
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            } 
          />

          {/* --- Navigation Helpers --- */}
          {/* Default to search */}
          <Route path="/" element={<Navigate to="/search" replace />} />
          
          {/* Catch-all for broken links */}
          <Route path="*" element={<Navigate to="/search" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
