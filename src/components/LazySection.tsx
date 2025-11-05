import { lazy, Suspense, ComponentType } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  component: ComponentType<any>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const SectionSkeleton = () => (
  <div className="container mx-auto px-6 py-20">
    <div className="space-y-8 animate-pulse">
      {/* Section Title Skeleton */}
      <div className="text-center space-y-4">
        <Skeleton className="h-12 w-80 mx-auto bg-gradient-to-r from-muted via-muted/50 to-muted" />
        <Skeleton className="h-6 w-[500px] max-w-full mx-auto" />
      </div>
      
      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const LazySection = ({ 
  component: Component, 
  fallback = <SectionSkeleton />,
  ...props 
}: LazySectionProps) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};
