import React from 'react';
import './Blog.css';  // Importing the CSS for Blog page

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>Our Blog</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <h3>Understanding Climate Change</h3>
          <p>Climate change is real and urgent. Read more to learn how we can reduce our carbon footprint.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="blog-card">
          <h3>How to Save Water</h3>
          <p>Simple tips and methods that everyone can use to save water and preserve this vital resource.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="blog-card">
          <h3>Greener Cities</h3>
          <p>Explore how cities around the world are becoming greener and more sustainable.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
