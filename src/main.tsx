import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { initPerformanceMonitoring } from '@/lib/performance';

// Initialize performance monitoring
initPerformanceMonitoring();

// Register service worker for PWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('ServiceWorker registered:', registration);
      },
      (error) => {
        console.log('ServiceWorker registration failed:', error);
      }
    );
  });
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
