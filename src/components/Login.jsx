import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css"; // IMPORT THE CSS FILE

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Points to your Node.js server on port 5500
      const response = await fetch("http://localhost:5500/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // --- TOKEN SECURITY ---
      // 1. Save the token to the browser's storage
      localStorage.setItem("token", data.token);
      // 2. Save user info for the Navbar "Welcome" message
      localStorage.setItem("username", data.user.email);

      // 3. Move to the protected Search Page
      navigate("/search");

    } catch (err) {
      setError("Cannot connect to server. Is the backend running on port 5500?");
    }
  };

  return (
    <div className="login-container">
      {/* The form uses the glassmorphism CSS we wrote */}
      <form onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        
        {error && <p className="error-message">{error}</p>}
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        
        <button type="submit">Login</button>
        
        <p className="signup-link">
          Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </form>
    </div>
  );
}