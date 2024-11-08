// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 method
import App from './App';  // Import the App component
import './index.css';  // Import global styles (optional)

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element for rendering

root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
