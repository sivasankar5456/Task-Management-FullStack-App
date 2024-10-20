import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../constants/routeConstants';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
    //   await API.post('/register', { username, password });
      setMessage('User registered successfully!');
    } catch (error) {
      setMessage(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className='center-content' >
        <div class="signup-container">
    <h2>Create an Account</h2>
    <form action="#" method="POST">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />
      </div>

      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
      </div>

      <div class="input-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
      </div>

      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to={routeConstants.LOGIN}>Login here</Link></p>
    </form>
  </div>
    </div>
  );
}

export default SignUp;
