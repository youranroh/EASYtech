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
      <div>
        <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {mode === 'login' ? "Don't have an account? " : 'Forgot Password? '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    );
  }
  
  export default LogIn;