import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// server set up 
const app = express();
const PORT = 5500;

// serve static files (CSS/HTML in this folder)
app.use(express.static(__dirname));

// serve the navbar as root (change to index.html if you have one)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'NavigationBar.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;
