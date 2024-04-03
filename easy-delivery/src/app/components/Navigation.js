import React from 'react';
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navBar">
            <img src={"./images/SignIn.png"} alt="icon" />
            <ul>
                <li>
                    <a href="#">Shop</a>
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