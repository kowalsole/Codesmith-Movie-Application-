import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.text();
      if (!response.ok) {
        setError(data || "Signup failed");
        return;
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2></h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
 <div className="top-bar"> 
  <h1 className="movie-search-title-name"></h1> 
 <form onSubmit={handleSubmit} className="signup-form">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="signup-toggle"
      >
       {open ? "Sign Up" : "Movie Search"}
      </button>

      <div className={`signup-dropdown ${open ? "open" : ""}`}>
        
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit" className="create-account-btn">Create Account</button>
      </div>
    </form>
</div>
</div>
  );
} 