import React from "react";
import {Link}from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage=() =>{
    return(
        <div className="notfound-container">
            <h1 classname="notfound-message">404</h1>
            <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};
export default NotFoundPage;
