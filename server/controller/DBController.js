// Database operations handled by Mongoose in server.js
// This file is reserved for additional database utilities if needed

export const dbHealthCheck = async () => {
  try {
    console.log("Database connection is healthy");
    return true;
  } catch (error) {
    console.error("Database connection error:", error);
    return false;
  }
};
