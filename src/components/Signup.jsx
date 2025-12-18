import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Recommended for moving to login page

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(false);

    try {
      // UPDATED URL: Port 5500 and the /signup path
      const response = await fetch("http://localhost:5500/api/users/signup", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); // UPDATED to .json()

      if (!response.ok) {
        // Since the backend sends { error: "msg" }, we use data.error
        setError(data.error || "Signup failed");
        return;
      }

      setSuccess(true);
      setEmail("");
      setPassword("");
      
      // Navigate to login after a short delay so they can see the success message
      setTimeout(() => {
        navigate("/login"); 
      }, 2000);

    } catch (err) {
      setError("Server is offline. Make sure to run 'node server.js' in your terminal.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Signup successful! Redirecting to login...</p>}

      <form onSubmit={handleSubmit}>
        <div>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}