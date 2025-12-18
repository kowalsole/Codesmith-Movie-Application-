import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute Wrapper
 * @param {Object} children - The component you want to protect (e.g., SearchPage)
 */
const ProtectedRoute = ({ children }) => {
  // 1. Look for the token we saved during login
  const token = localStorage.getItem("token");

  // 2. If the token doesn't exist, redirect them to the Login page
  // 'replace' prevents them from hitting the "back" button to return here
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 3. If the token exists, render the child component (the "SearchPage")
  return children;
};

export default ProtectedRoute;