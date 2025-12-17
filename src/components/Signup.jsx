import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:3000/api/users", { // this URL should match the backend route created in main.jsx
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
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setError(""); // what does this line of code do? 

      
    } catch (err) {
      setError("An error occurred. Server is offline or unreachable. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* {success && <p style={{ color: "green" }}>Signup successful!</p>}
      {error && !success && <p>Please fill in all fields.</p>}
       */}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
