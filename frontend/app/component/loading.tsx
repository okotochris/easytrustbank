'use client';

import React from 'react';

interface FancyLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
  variant?: 'gradient' | 'pulse' | 'orbit';
}

export default function FancyLoader({ 
  size = 'md', 
  message = 'Loading...', 
  fullScreen = false,
  variant = 'gradient'
}: FancyLoaderProps) {

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const Spinner = () => {
    if (variant === 'orbit') {
      return (
        <div className={`relative ${sizeClasses[size]}`}>
          {/* Central Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />
          
          {/* Orbiting Dots */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 60}deg) translateX(${size === 'lg' ? '42px' : size === 'md' ? '34px' : '26px'})`,
                  animation: `orbit ${2.2 + i * 0.1}s linear infinite`,
                  animationDelay: `-${i * 0.15}s`
                }}
              />
            ))}
          </div>

          {/* Center Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-white dark:bg-zinc-900 rounded-full shadow-xl" />
          </div>
        </div>
      );
    }

    // Default Gradient Spinner (Most Fancy)
    return (
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Background Ring */}
        <div className="absolute inset-0 border-4 border-gray-200/60 dark:border-zinc-700/60 rounded-full" />
        
        {/* Main Gradient Spinner */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
             style={{
               borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899, #3b82f6) 1',
               borderImageSlice: 1,
             }}
        />

        {/* Inner Pulse Ring */}
        <div className="absolute inset-2 border-4 border-transparent border-t-white dark:border-t-zinc-200 rounded-full animate-spin" 
             style={{ animationDuration: '0.9s', animationDirection: 'reverse' }} />

        {/* Subtle Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-violet-500 rounded-full blur-sm animate-pulse" />
        </div>
      </div>
    );
  };

  const content = (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      
      {message && (
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm font-medium tracking-widest uppercase">
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-xl z-[200] flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}