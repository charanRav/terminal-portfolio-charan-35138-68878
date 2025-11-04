import { lazy, Suspense, ComponentType } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  component: ComponentType<any>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const SectionSkeleton = () => (
  <div className="container mx-auto px-6 py-20">
    <div className="space-y-6">
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="h-48 w-full" />
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
