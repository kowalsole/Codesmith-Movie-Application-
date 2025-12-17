import express from 'express';
import { 
  signupUser, 
  loginUser, 
  getAllUsers, 
  getUserById 
} from '../controller/userController.js';

// Import authentication middleware
// (If you haven't created this file yet, comment this line out)
import authenticateToken from '../middleware/auth.js'; 

const router = express.Router();

// ==============================
// 1. PUBLIC ROUTES (Open to everyone)
// ==============================

// Create a new user
// URL: POST /api/users/signup
router.post('/signup', signupUser);

// Log in an existing user
// URL: POST /api/users/login
router.post('/login', loginUser);


// ==============================
// 2. PROTECTED ROUTES (Requires Token)
// ==============================

// Get a list of all users
// URL: GET /api/users/
// We add 'authenticateToken' to ensure only logged-in users can see this
router.get('/', authenticateToken, getAllUsers);

// Get details for a specific user ID
// URL: GET /api/users/:id
router.get('/:id', authenticateToken, getUserById);

export default router;