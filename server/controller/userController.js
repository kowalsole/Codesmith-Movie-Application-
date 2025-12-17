import User from "../schema/model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send("username, email and password are required");
    }

    // check uniqueness by username or email
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).send("username or email already in use");
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, passwordHash });
    await newUser.save();
    //this entire page needs some work. and then routed properly // RENE's comment 

    // redirect to login page after successful signup
    return res.redirect("/login");
  } catch (error) {
    return next({
      log: "signupUser error",
      status: 500,
      message: { err: "An error occurred during signup." },
    });
  }
};

//create and save new use into the database
const userController = {
  createUser: (req, res, next) => {
    //pull out the username, email, password from req.body
    const { username, email, password } = req.body;

    //validate input
    if (!username || !password || !email) {
      return next({
        log: "UserController.createUser: Missing required fields",
        status: 400,
        message: { err: "Username, email, and password are required." },
      });
    }

    User.create({ username, password, email }, (err, user) => {
      if (err) {
        return next({
          log: "UserController.createUser: Error creating user",
          status: 500,
          message: { err: "An error occured while creating the user." },
        });
      } else {
        //save the user info in res.locals
        res.locals.user = user.id;
        return next();
      }
    });
  },

  getAllUsers: (req, res, next) => {
    User.find({}, (err, users) => {
      // error handling for express global middleware to catch
      if (err) {
        return next({
          log: "UserController.getAllUsers: Error retrieving users",
          status: 500,
          message: { err: "An error occurred while retrieving users." },
        });
      }
      //store received users in res.locals
      res.locals.users = users;
      return next();
    });
  },
};

//New code added below for additional user controller functions lines 50-78
const db = require('../db'); // Import our DB connection

// Function 1: Get all users
const getUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function 2: Get specific user by ID
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Export the functions so the Router can use them
module.exports = {
  getUsers,
  getUserById,
};

export default userController;
