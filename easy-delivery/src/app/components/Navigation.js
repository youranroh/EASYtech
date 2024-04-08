import React from 'react';
import "./Navigation.css";
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="navBar">
            <a href='/'><img src="/SignIn.png" alt="icon"/></a>
            <ul>
                <li>
                    <a href="/offers">Offers</a>
                </li>
                <li>
                    <Link href='/log-in'>Log In</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;