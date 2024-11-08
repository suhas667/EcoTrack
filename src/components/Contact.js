import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS for Contact page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
