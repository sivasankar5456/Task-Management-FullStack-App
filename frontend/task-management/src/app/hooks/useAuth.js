// hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if a token exists on page load
    return Boolean(localStorage.getItem('token'));
  });

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
