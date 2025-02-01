import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional, for global styles

// Create a root for your React app by targeting the element with id "root" in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(<App />);
