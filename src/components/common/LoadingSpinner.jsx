import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  text = '', 
  fullScreen = false,
  className = '' 
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Color variants
  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600',
    purple: 'border-purple-600',
    white: 'border-white'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const spinnerElement = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Primary Spinner */}
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 rounded-full animate-spin`}
        />
        <div
          className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent ${colorClasses[color]} border-t-current rounded-full animate-spin`}
        />
      </div>
      
      {/* Loading Text */}
      {text && (
        <p className={`mt-4 ${textSizeClasses[size]} text-gray-600 dark:text-gray-400 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );

  // Full screen overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {spinnerElement}
      </div>
    );
  }

  return spinnerElement;
};

// Skeleton loader component
export const SkeletonLoader = ({ 
  lines = 3, 
  className = '',
  animated = true 
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
        />
      ))}
    </div>
  );
};

// Card skeleton loader
export const CardSkeleton = ({ className = '', animated = true }) => {
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg p-6 ${className}`}>
      <div className={`h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 ${animated ? 'animate-pulse' : ''}`} />
      <div className={`h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 ${animated ? 'animate-pulse' : ''}`} />
      <div className={`h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 ${animated ? 'animate-pulse' : ''}`} />
    </div>
  );
};

// Dots loader (alternative style)
export const DotsLoader = ({ 
  size = 'md', 
  color = 'blue',
  className = '' 
}) => {
  const dotSizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const dotColorClasses = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${dotSizeClasses[size]} ${dotColorClasses[color]} rounded-full animate-bounce`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;