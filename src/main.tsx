import {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove Lovable widget and branding on app load
useEffect(() => {
  // Initial removal
  const removeLovableElements = () => {
    const selectors = [
      '[class*="lovable"]',
      '[id*="lovable"]',
      '.lovable-logo',
      '.edit-with-lovable',
      '[data-testid*="lovable"]',
      '[data-lovable-widget]',
      'iframe[src*="lovable"]',
      'div[class*="lovableai"]',
      'button[aria-label*="lovable"]',
      'a[href*="lovable.com"]',
      'div[style*="lovable"]',
      'span[class*="edit-with"]'
    ];

    selectors.forEach(selector => {
      try {
        document.querySelectorAll(selector).forEach(el => {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
          el.remove();
        });
      } catch (e) {
        // Ignore invalid selectors
      }
    });
  };

  // Remove on initial load
  removeLovableElements();

  // Check periodically for dynamically injected elements
  const interval = setInterval(removeLovableElements, 500);

  return () => clearInterval(interval);
}, []);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
