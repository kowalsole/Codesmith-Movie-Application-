import express from 'express';// 
import * as userController from '../controllers/userController.js'; //importing user controller
import authenticateToken from '../middleware/auth.js'; //importing auth middleqware

const router = express.Router(); ///creates a contrainer of simiar routes

// Public Routes (No Login Required)    

router.get('/', userController.getUsers); // when someone visits this URL run this function and do not ask for a password

router.get('/:id', userController.getUserById); // when someone visits this URL run this function and do not ask for a password

router.get('/', (req, res) => res.send('All Users')); 
router.get('/profile', (req, res) => res.send('User Profile'));

// Protected Routes (Requires Login)
// We add 'authenticateToken' before the controller to protect this route
router.get('/:id', authenticateToken, userController.getUserById);

// Example of how the POST route 
router.post('/', userController.registerUser); 

export default router;