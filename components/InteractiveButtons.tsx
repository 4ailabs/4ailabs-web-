import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calculator, Eye, ArrowRight, Bot, Zap, Brain, Target } from 'lucide-react';

interface InteractiveButtonsProps {
  type: 'hero' | 'services' | 'technologies' | 'cta';
  className?: string;
  onQuickStart?: (serviceType: string, serviceTitle: string) => void;
  onAgentBuilder?: () => void;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ 
  type, 
  className = '', 
  onQuickStart, 
  onAgentBuilder 
}) => {
  const handleQuickStart = (serviceType: string, serviceTitle: string) => {
    if (onQuickStart) {
      onQuickStart(serviceType, serviceTitle);
    }
  };

  const handleAgentBuilder = () => {
    if (onAgentBuilder) {
      onAgentBuilder();
    }
  };

  const handleWhatsAppContact = (message: string) => {
    const whatsappUrl = `https://wa.me/+525534417252?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (type === 'hero') {
    return (
      <>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button
            onClick={() => handleWhatsAppContact(`Hola! Me interesa reservar una consulta gratuita de 15 minutos para conocer más sobre sus servicios de IA.

¿Podemos agendar una reunión para discutir cómo la IA puede transformar mi negocio?`)}
            className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar Consulta GRATIS
          </button>
          <Link 
            to="/calculadora-roi" 
            className="bg-white dark:bg-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-500 text-zinc-900 dark:text-white font-semibold py-4 px-8 rounded-full transition-all-smooth border border-zinc-200 dark:border-zinc-500 inline-flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Calcular mi ROI
          </Link>
        </div>
      </>
    );
  }

  if (type === 'services') {
    return (
      <>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleQuickStart('Chatbots Inteligentes', 'Chatbots Inteligentes')}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 px-6 rounded-full transition-all-smooth transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <Bot className="w-5 h-5" />
            Crear mi Chatbot
          </button>
          <button
            onClick={handleAgentBuilder}
            className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-3 px-6 rounded-full transition-all-smooth transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            <Brain className="w-5 h-5" />
            Construir Agente IA
          </button>
          <Link
            to="/servicios"
            className="bg-white dark:bg-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-500 text-zinc-900 dark:text-white font-semibold py-3 px-6 rounded-full transition-all-smooth border border-zinc-200 dark:border-zinc-500 inline-flex items-center gap-2"
          >
            <Eye className="w-5 h-5" />
            Ver Todos los Servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </>
    );
  }

  if (type === 'technologies') {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/tecnologias" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-500/25 min-h-[48px] w-full sm:w-auto justify-center"
        >
          <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
          Ver Todas las Tecnologías
        </Link>
        <button
          onClick={() => handleWhatsAppContact(`Hola! Me interesa conocer más sobre las tecnologías de IA que utilizan.

¿Podemos agendar una demostración técnica de sus capacidades?`)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all-smooth transform hover:scale-105 shadow-lg shadow-blue-500/25 min-h-[48px] w-full sm:w-auto justify-center"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          Solicitar Demo
        </button>
      </div>
    );
  }

  if (type === 'cta') {
    return (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => handleWhatsAppContact(`Hola! Estoy listo para transformar mi negocio con IA.

¿Podemos agendar una consulta para comenzar mi proyecto de automatización?`)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up min-h-[48px] w-full sm:w-auto justify-center"
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          Comenzar mi Proyecto
        </button>
        <Link 
          to="/calculadora-roi" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up min-h-[48px] w-full sm:w-auto justify-center"
        >
          <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
          Calcular mi ROI
        </Link>
      </div>
    );
  }

  return null;
};

export default InteractiveButtons;
