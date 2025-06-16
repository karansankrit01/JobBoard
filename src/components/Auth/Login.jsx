import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    onLogin({ email, password });
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>WelCome Back!</h2>
      <form onSubmit={handleSubmit}>
        <input  required className='input-field'
          type="email"
          
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input required className='input-field'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
        <p className='register-link'>
          Don't have an account? <a href="/register">Register</a>
        </p>
        {/* <p className='forgot-password-link'>
          <a href="/forgot-password">Forgot Password?</a>
          
        </p> */}
        <p className='back-to-home'>
          <a href="/">Back to Home</a>
        </p>
      </form>
    </div>
  );
};

export default Login; 