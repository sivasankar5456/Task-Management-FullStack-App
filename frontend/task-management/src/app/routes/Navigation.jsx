import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute ";
import { routeConstants } from "../constants/routeConstants";
import { useAuth } from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import WelcomeScreen from "../pages/WelcomeScreen";

const Navigation = () => {
  const { login, logout } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path={routeConstants.LOGIN} element={<Login />} />
        <Route path={routeConstants.SIGNUP} element={<SignUp />} />
        <Route path={routeConstants.HOME} element={<ProtectedRoute ><Home onLogout={logout}  /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default Navigation;
