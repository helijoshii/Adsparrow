import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/PageNotFound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="notfound-description">
          It seems like you wandered off the beaten path. But don't worry, we’ll guide you back.
        </p>
        <Link to="/" className="notfound-home-link">
          Take Me Home
        </Link>
      </div>
      <div className="notfound-image">
        <img src={logo} alt="Page Not Found" />
      </div>
    </div>
    </div>
  )
}

export default NotFound
