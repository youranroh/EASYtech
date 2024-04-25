'use client'
import React from "react";
import Navigation from "./components/Navigation";
import { UserProvider } from "../../context/UserContext";
import './not-found.css'
 
const PageNotFound = () => {
    return (
        <UserProvider>
            <div className="page">
                <Navigation />
                <div className="content">
                    <h1>404 Error: Page Not Found</h1>
                </div>
            </div>
        </UserProvider>
    );
};
 
export default PageNotFound;