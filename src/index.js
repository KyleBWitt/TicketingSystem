import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './pages/App';
import './assets/Index.css';

// Create a root element and render your app using createRoot
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <App />
  </BrowserRouter>
);
