import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

// 1. Mount Movie Routes
// This means all routes in that file will start with /api/movies
app.use("/api/movies", moviesRoutes);

// 2. Mount User Routes
// This means all routes in that file will start with /api/users
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
