import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../schema/userModel.js"; 

// ==============================
// 1. SIGNUP USER
// ==============================
export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !password || !email) {
      return res.status(400).json({ error: "Username, email, and password are required" });
    }

    // Check Uniqueness
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).json({ error: "Username or email already in use" });
    }

    // Hash Password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create User
    const newUser = new User({ username, email, passwordHash });
    await newUser.save();

    // SUCCESS
    return res.status(201).json({ message: "User created successfully!" });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ error: "An error occurred during signup." });
  }
};

// ==============================
// 2. LOGIN USER
// ==============================
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Create Token 
        const token = jwt.sign(
          { id: user._id, username: user.username }, 
          process.env.JWT_SECRET,                    
          { expiresIn: "1h" }                        
        );

        // Send Response with Token
        res.status(200).json({ 
            message: "Login successful", 
            token: token, 
            user: { 
                id: user._id, 
                username: user.username,
                email: user.email 
            } 
        });

    } catch (err) {
        console.error("Login Error:", err); 
        res.status(500).json({ error: "Login failed" });
    }
}

// ==============================
// 3. GET ALL USERS
// ==============================
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-passwordHash"); // Exclude passwords
    return res.status(200).json(users);
  } catch (error) {
    console.error("Get Users Error:", error);
    return res.status(500).json({ error: "Could not fetch users" });
  }
};

// ==============================
// 4. GET USER BY ID
// ==============================
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, "-passwordHash"); // Exclude password

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Get User ID Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};