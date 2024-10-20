// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({children }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated",isAuthenticated)

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }
  // Render the protected component
  return children;
};

export default ProtectedRoute;
