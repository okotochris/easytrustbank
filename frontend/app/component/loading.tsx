'use client';

import React from 'react';

interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

export default function LoadingIndicator({ 
  size = 'md', 
  message = 'Loading...', 
  fullScreen = false 
}: LoadingIndicatorProps) {

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const spinner = (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Outer Ring */}
      <div className="absolute inset-0 border-4 border-gray-200 dark:border-zinc-700 rounded-full"></div>
      
      {/* Animated Spinner */}
      <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin"></div>
      
      {/* Inner Glow Ring */}
      <div className="absolute inset-0 border-4 border-transparent border-t-violet-500 dark:border-t-violet-400 rounded-full animate-spin" 
           style={{ animationDuration: '1.2s', animationDirection: 'reverse' }}></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center">
        <div className="flex flex-col items-center">
          {spinner}
          {message && (
            <p className="mt-6 text-white text-lg font-medium tracking-wide">
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {spinner}
      {message && (
        <p className="mt-5 text-gray-600 dark:text-gray-400 text-sm font-medium">
          {message}
        </p>
      )}
    </div>
  );
}