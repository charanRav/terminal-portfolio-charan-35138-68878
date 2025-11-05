import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <div className="max-w-2xl w-full space-y-8 text-center">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-destructive" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't worry, this happens sometimes. The error has been logged and we'll look into it.
              </p>
            </div>

            {/* Error Details (Development only) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="bg-muted/50 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-sm text-foreground mb-2">Error Details:</h3>
                <pre className="text-xs text-muted-foreground overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                size="lg"
                className="gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </div>

            {/* Help Text */}
            <p className="text-sm text-muted-foreground">
              If this problem persists, try clearing your browser cache or contact support.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
