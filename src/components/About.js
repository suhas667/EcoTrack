import React from 'react';
import './About.css';  // Importing the CSS for About page

const About = () => {
  return (
    <section className="about-section">
      <h2>About Us</h2>
      <p>We are an environmental organization dedicated to promoting sustainability and conservation.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to empower individuals and businesses to take action in protecting our planet.</p>
      <h3>Our Values</h3>
      <ul>
        <li>Respect for Nature</li>
        <li>Community Engagement</li>
        <li>Sustainability</li>
        <li>Innovation</li>
      </ul>
    </section>
  );
};

export default About;
