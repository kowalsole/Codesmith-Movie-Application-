import dotenv from "dotenv";
//explicitly setting the path to the .env file lines 3 -11
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from server directory
dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Debug: Check if environment variables are loaded
console.log("JWT_SECRET loaded:", process.env.JWT_SECRET ? "✓" : "✗");
console.log("MONGODB_URI:", process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moviesApp");

// Import your Routes
import moviesRoutes from "./routes/moviesRoutes.js"; 
import userRoutes from "./routes/userRoutes.js";     

const app = express();
const PORT = process.env.PORT || 5500;

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Solid Front-end and Back-end connection
app.use(cors({ 
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177'],
  credentials: true 
}));

// --- DATABASE CONNECTION ---
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moviesApp";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Drop the old username index if it exists
    mongoose.connection.collection('users').dropIndex('username_1').catch(() => {
      // Index doesn't exist, that's fine
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// --- MOUNTING ROUTES ---

// 1. User Routes (Signup, Login, etc.)
// Full URL example: http://localhost:5500/api/users/signup
app.use("/api/users", userRoutes);

// 2. Movie Routes (Search, Details, etc.)
// Full URL example: http://localhost:5500/api/movies/action
app.use("/api/movies", moviesRoutes);

// --- STARTING THE SERVER ---
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;