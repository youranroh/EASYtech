import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';
import './Logout.css';

const LogIn = () => {
    const { userData, setUserData } = useContext(UserContext);
    const router = useRouter();

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined }); // Clear user data
        localStorage.removeItem('auth-token'); // Clear the token from local storage
        router.push('/');
    };

    const goBack = () => {
        router.push('/');
    }

    return (
        <div className="login-container form">
        <div className="card">
            <h1>Confirm Logout?</h1>
            <img src='/leaf.png' alt='Sad to See You Leaf' />
            <div className='options'>
                <button onClick={goBack}>Return</button>
                <button onClick={handleLogout}>Logout</button>

            </div>
        </div>
        </div>
    );
};

export default LogIn;