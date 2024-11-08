import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Fix: contact path */}
        <Route path="/services" element={<Services />} /> {/* Fix: services path */}
        <Route path="/blog" element={<Blog />} /> {/* Fix: blog path */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
        <Route path="*" element={<NotFound />} /> {/* 404 page for undefined routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
