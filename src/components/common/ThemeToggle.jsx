import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <div className="relative w-5 h-5">
              {/* Sun Icon */}
              <Sun
                size={20}
                className={`absolute inset-0 text-yellow-500 transition-all duration-300 ${
                  isDark 
                    ? 'opacity-0 rotate-90 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              
              {/* Moon Icon */}
              <Moon
                size={20}
                className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
                  isDark 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
    </button>
  );
}

export default ThemeToggle;