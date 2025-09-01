import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function startApp() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Dynamically load Tailwind CDN to ensure utility classes are available
// even if PostCSS/Tailwind isn't wired in the local build environment.
if (typeof document !== 'undefined') {
  // Set tab title
  document.title = 'Anushka Portfolio';
  // Set favicon to logo.png
  let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
  if (!favicon) {
    favicon = document.createElement('link') as HTMLLinkElement;
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  favicon.href = require('./logo.png');

  const existing = document.querySelector('script[data-tailwind-cdn]');
  if (!existing) {
    const s = document.createElement('script');
    s.setAttribute('data-tailwind-cdn', '1');
    s.src = 'https://cdn.tailwindcss.com';
    s.onload = () => startApp();
    s.onerror = () => {
      // If CDN fails, still start the app so the UI is usable.
      startApp();
    };
    document.head.appendChild(s);
  } else {
    startApp();
  }
} else {
  // Fallback for non-browser environments
  startApp();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
