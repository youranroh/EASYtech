import React from 'react';
import "./Navigation.css";
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="navBar">
            <Link href='/'><img src="/SignIn.png" alt="icon"/></Link>
            <ul>
                <li>
                    <Link href='/add-item'>Add Item</Link>
                </li>
                <li>
                    <a href="#">Gift Cards</a>
                </li>
                <li>
                    <a href="#">Offers</a>
                </li>
                <li>
                    <Link href='/log-in'>Log In</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;