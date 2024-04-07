import React from 'react';
import "./AuthNavigation.css";
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="navBar">
            <Link href='/'><img src="/SignIn.png" alt="icon"/></Link>
            <ul>
                <li>
                    <Link href='#'>My Restaurants</Link>
                </li>
                <li>
                    <Link href='/add-item'>Add Item</Link>
                </li>
                <li>
                    <a href="#">Offers</a>
                </li>
                <li>
                    <a href='/'>Sign Out</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;