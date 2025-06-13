import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ 
  showAfter = 400,
  smooth = true,
  className = '',
  position = 'bottom-right' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-center': 'bottom-8 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white 
        shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${positionClasses[position]}
        ${className}
      `}
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg 
        className="absolute inset-0 w-full h-full transform -rotate-90" 
        viewBox="0 0 36 36"
      >
        <path
          className="text-blue-200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-white"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeLinecap="round"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      
      {/* Arrow Icon */}
      <ArrowUp 
        size={20} 
        className="relative z-10"
      />
    </button>
  );
};

// Alternative simple version without progress ring
export const SimpleScrollToTop = ({ 
  showAfter = 400,
  smooth = true,
  className = '',
  position = 'bottom-right'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > showAfter);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-center': 'bottom-8 left-1/2 transform -translate-x-1/2',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-50 p-3 rounded-full bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 
        text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        ${positionClasses[position]}
        ${className}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;