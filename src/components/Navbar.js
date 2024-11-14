import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // impoting the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="company-name">EcoTrack</span>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
