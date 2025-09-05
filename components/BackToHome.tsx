import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

interface BackToHomeProps {
  variant?: 'button' | 'link' | 'floating';
  className?: string;
}

const BackToHome: React.FC<BackToHomeProps> = ({ 
  variant = 'button', 
  className = '' 
}) => {
  const baseClasses = "inline-flex items-center gap-2 transition-all duration-300";
  
  const variantClasses = {
    button: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:scale-105",
    link: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline",
    floating: "fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 z-40"
  };

  return (
    <Link 
      to="/" 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      title="Volver al inicio"
    >
      {variant === 'floating' ? (
        <Home className="w-5 h-5" />
      ) : (
        <>
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </>
      )}
    </Link>
  );
};

export default BackToHome;
