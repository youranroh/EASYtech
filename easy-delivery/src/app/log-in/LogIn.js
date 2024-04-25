import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';
import './LogIn.css';

const LogIn = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);

    // Redirect if user is already logged in
    useEffect(() => {
        if (userData.token) {
            router.push('/'); // redirect
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Send login request to the server
            const response = await axios.post('http://localhost:8082/api/users/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user
            });
            // Store the authenticationtoken in local storage
            localStorage.setItem("auth-token", response.data.token);
            router.push('/');
        } catch (error) {
            console.error('Login failed: ', error);
            // Handle login error
        }
    };

    return (
        <div className="login-container form">
        <div className="card">
            <h1>Login or <Link href='/sign-up' className='signup'>Sign Up</Link></h1>
            <form onSubmit={handleLogin}>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                type="email"
                id='email'
                name='email'
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input
                type="password"
                id='password'
                name='password'
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default LogIn;