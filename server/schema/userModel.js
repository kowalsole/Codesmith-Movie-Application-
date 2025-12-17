import mongoose from 'mongoose';

// Defines the schema for a user, including unique credentials and a hashed password
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

// Creates and exports the User model for interacting with the users collection
const User = mongoose.model('User', userSchema);

export default User;
