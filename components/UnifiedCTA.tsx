import React from 'react';
import { MessageCircle, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UnifiedCTAProps {
  variant?: 'primary' | 'secondary' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onConsultationClick?: () => void;
  onROIClick?: () => void;
}

const UnifiedCTA: React.FC<UnifiedCTAProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  onConsultationClick,
  onROIClick
}) => {
  const baseClasses = "inline-flex items-center gap-2 font-bold transition-all-smooth transform hover:scale-105 shadow-lg";
  
  const sizeClasses = {
    sm: "py-2 px-4 rounded-lg text-sm min-h-[40px]",
    md: "py-3 px-6 rounded-xl text-base min-h-[48px]",
    lg: "py-4 px-8 rounded-2xl text-lg min-h-[56px]"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white shadow-slate-400/25",
    secondary: "bg-white dark:bg-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-500 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-500",
    hero: "bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white shadow-xl shadow-slate-400/25 pulse-cta"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (variant === 'hero') {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onConsultationClick}
          className={`${classes} w-full sm:w-auto justify-center`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-center leading-tight">
            <span className="block">Consulta Gratuita</span>
            <span className="block text-xs sm:text-sm opacity-90">15 min • Sin compromiso</span>
          </span>
        </button>
        <Link
          to="/calculadora-roi"
          className={`${classes} w-full sm:w-auto justify-center`}
        >
          <Calculator className="w-5 h-5" />
          <span>Calcular mi ROI</span>
        </Link>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onConsultationClick}
          className={`${classes} w-full sm:w-auto justify-center`}
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consulta Gratuita</span>
        </button>
        <Link
          to="/calculadora-roi"
          className={`${classes} w-full sm:w-auto justify-center`}
        >
          <Calculator className="w-4 h-4" />
          <span>Calcular ROI</span>
        </Link>
      </div>
    );
  }

  // Primary variant (default)
  return (
    <button
      onClick={onConsultationClick}
      className={`${classes} w-full sm:w-auto justify-center`}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-center leading-tight">
        <span className="block">Consulta Gratuita</span>
        <span className="block text-xs sm:text-sm opacity-90">15 min • Sin compromiso</span>
      </span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

export default UnifiedCTA;
