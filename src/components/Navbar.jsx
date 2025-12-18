import { useNavigate, Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    // 1. Clear the token and user info from storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    // 2. Redirect the user to the login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/search">MovieApp</Link>
      </div>
      
      <div className="nav-links">
        {username && <span className="welcome-text">Welcome, {username}!</span>}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;