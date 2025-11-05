import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

const reportMetric = (metric: Metric) => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }

  // In production, you could send to analytics
  // Example: analytics.track('web_vital', { metric: metric.name, value: metric.value });
};

export const initPerformanceMonitoring = () => {
  // Core Web Vitals
  onCLS(reportMetric); // Cumulative Layout Shift
  onFCP(reportMetric); // First Contentful Paint
  onLCP(reportMetric); // Largest Contentful Paint
  onTTFB(reportMetric); // Time to First Byte
  onINP(reportMetric); // Interaction to Next Paint (replaces FID)
};

// Performance observer for custom metrics
export const measurePerformance = (metricName: string, startTime: number) => {
  const duration = performance.now() - startTime;
  
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${metricName}: ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};
