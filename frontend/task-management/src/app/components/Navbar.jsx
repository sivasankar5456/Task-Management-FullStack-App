// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token (simulated logout)
    onLogout();
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">TaskManagement</h1>
      <div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
