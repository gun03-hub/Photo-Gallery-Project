import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS for signup page

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate fields
    if (username && password && email) {
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.username === username);

      if (userExists) {
        setError('Username already exists.');
      } else {
        // Save user data
        users.push({ username, password, email });
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/'); // Redirect to login page after successful sign-up
      }
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
