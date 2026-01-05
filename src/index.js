import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you're using a custom service worker
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
