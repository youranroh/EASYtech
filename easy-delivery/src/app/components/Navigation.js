'use client'
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '../../../context/UserContext';
import Link from 'next/link';
import "./Navigation.css";

const Navigation = () => {
    const { userData, setUserData } = useContext(UserContext);
    const router = useRouter();

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined }); // Clear user data
        localStorage.removeItem('auth-token'); // Clear the token from local storage
        router.push('/');
    };

    const login = () => {
        router.push('/log-in')
    }

    const offers = () => {
        router.push('/offers')
    }

    const addItem = () => {
        router.push('/add-item')
    }

    return (
        <nav className="navBar">
            <Link href='/'><img src="/SignIn.png" alt="icon"/></Link>
            <ul>
                <li>
                    {userData.token ? (
                        <button onClick={addItem}>Add Item</button>
                    ) : null}
                    
                </li>
                <li>
                    <button onClick={offers}>Offers</button>
                </li>
                <li>
                    {userData.token ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <button onClick={login}>Login</button>
                    )}
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;