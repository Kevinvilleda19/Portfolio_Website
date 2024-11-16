import React, { StrictMode } from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this path matches your actual file structure
import App from './App.jsx'; // Ensure App.jsx exists in the src folder

// Ensure the root element with id 'root' exists in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
