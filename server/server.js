// Main Express server configuration handling API routing, authentication, and database connections
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './schema/userModel.js';
import router from './routes/routes.js';

// Sets up __dirname support for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initializes the Express application and core middleware
const app = express();
const PORT = 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

// Configures database connection and mounts API routes
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moviesApp';

app.use('/api', router);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Handles user signup, including validation, password hashing, and persistence
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send('username, email and password are required');
    }

    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).send('username or email already in use');
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, passwordHash });
    await newUser.save();

    // redirect to login page after successful signup
    return res.redirect('/login');
  } catch (err) {
    console.error(err);
    return res.status(500).send('server error');
  }
});

// Starts the server and listens for incoming requests
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
