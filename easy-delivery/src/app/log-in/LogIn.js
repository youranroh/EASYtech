'use client'
import React, { useState } from 'react';
import './LogIn.css';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      console.log('Sign Up or Log in')
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <h1>Sign Up or Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {mode === 'login' ? "Don't have an account? " : 'Forgot Password? '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
