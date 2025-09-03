import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md',
  showLabel = false 
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        relative overflow-hidden
        bg-zinc-200 dark:bg-zinc-800
        hover:bg-zinc-300 dark:hover:bg-zinc-700
        border border-zinc-300 dark:border-zinc-600
        rounded-full
        flex items-center justify-center
        transition-all-smooth
        transform hover:scale-105 active:scale-95
        group
        ${className}
      `}
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {/* Sun Icon */}
      <Sun 
        className={`
          ${iconSizes[size]}
          text-yellow-500
          transition-all duration-500 ease-in-out
          ${theme === 'light' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-180 scale-0'
          }
          absolute
        `}
      />
      
      {/* Moon Icon */}
      <Moon 
        className={`
          ${iconSizes[size]}
          text-slate-600 dark:text-slate-300
          transition-all duration-500 ease-in-out
          ${theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-180 scale-0'
          }
          absolute
        `}
      />

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {showLabel && (
        <span className="ml-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {theme === 'dark' ? 'Oscuro' : 'Claro'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
