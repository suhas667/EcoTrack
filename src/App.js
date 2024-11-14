import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
// Import  component
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; 
import './App.css';

function App() {
  return (
    <Router> {/* Changed BrowserRouter to HashRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page for undefined routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

