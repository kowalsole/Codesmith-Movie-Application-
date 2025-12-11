import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from './schema/userModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// server set up
const app = express();
const PORT = 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/moviesApp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// serve static files (CSS/HTML in this folder)
app.use(express.static(__dirname));

// serve the navbar as root (change to index.html if you have one)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "NavigationBar.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send('username, email and password are required');
    }

    // check uniqueness by username or email
    const existing = await User.findOne({ $or: [ { username }, { email } ] });
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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
