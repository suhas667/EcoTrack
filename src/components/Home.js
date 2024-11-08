import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to EcoTrack</h1>
      <p>Your personal guide to tracking environmental data!</p>
      <div>
        <Link to="/dashboard">
          <button className="home-button">Go to Dashboard</button>
        </Link>
        <Link to="/about">
          <button className="home-button">About Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
