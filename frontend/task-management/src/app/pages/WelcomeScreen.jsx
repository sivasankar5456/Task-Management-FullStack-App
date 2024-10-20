// Welcome.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeConstants } from '../constants/routeConstants';
import { useAuth } from '../hooks/useAuth';

const WelcomeScreen = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      if(isAuthenticated){
        navigate(routeConstants.HOME)
      }
    }, []);
  
  return (
    <div className='center-content' >
    <div className="welcome-container">
      <h1>Welcome to TaskMaster</h1>
      <p>Stay organized and boost your productivity.</p>
      <button onClick={() => navigate(routeConstants.LOGIN)}>Get Started</button>
    </div>
    </div>
  );
};

export default WelcomeScreen;
