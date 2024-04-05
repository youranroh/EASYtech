import React from 'react';
import "./Navigation.css";
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="navBar">
            <img src={"../images/SignIn.png"}  alt="icon"/>
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
                    <a href="#">Sign In</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;