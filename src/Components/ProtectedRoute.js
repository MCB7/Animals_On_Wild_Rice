import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ auth: { isAuthenticated }, children }) => {
    return isAuthenticated ? children : <Navigate to="/upload" />;
  };
export default ProtectedRoute;

