import React from 'react';
import './Footer.css'; // impoting the CSS file

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>&copy; 2024 EcoTrack. All Rights Reserved.</span>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
