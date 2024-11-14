import React from 'react';
import './Services.css';  // Importing the CSS file

import { FaLeaf, FaRecycle, FaSolarPanel } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <FaLeaf size={40} color="#1f8a70" />
          <h3>Eco-Friendly Solutions</h3>
          <p>We offer consulting services to help businesses go green and reduce environmental impact.</p>
        </div>
        <div className="service-card">
          <FaRecycle size={40} color="#1f8a70" />
          <h3>Recycling Programs</h3>
          <p>We manage and support local recycling programs that help reduce waste in landfills.</p>
        </div>
        <div className="service-card">
          <FaSolarPanel size={40} color="#1f8a70" />
          <h3>Renewable Energy</h3>
          <p>We assist with the transition to renewable energy sources like solar power and wind.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
