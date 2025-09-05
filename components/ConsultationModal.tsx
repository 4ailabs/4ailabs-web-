import React, { useState } from 'react';
import { X, MessageCircle, Calculator, Bot, Brain, Target, Zap, Clock, CheckCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [company, setCompany] = useState('');
  const [needs, setNeeds] = useState('');

  const consultationTypes = [
    {
      id: 'roi',
      title: 'Análisis de ROI',
      description: 'Calcula el retorno de inversión de tu proyecto de IA',
      icon: Calculator,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
      id: 'chatbot',
      title: 'Desarrollo de Chatbot',
      description: 'Crea un asistente virtual para tu empresa',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      id: 'agent',
      title: 'Agente de IA Autónomo',
      description: 'Desarrolla un agente inteligente personalizado',
      icon: Brain,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-700'
    },
    {
      id: 'strategy',
      title: 'Estrategia de IA',
      description: 'Planifica la implementación de IA en tu negocio',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    {
      id: 'automation',
      title: 'Automatización',
      description: 'Automatiza procesos con IA',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    },
    {
      id: 'general',
      title: 'Consulta General',
      description: 'Habla con nuestros expertos sobre IA',
      icon: MessageCircle,
      color: 'from-slate-500 to-slate-600',
      bgColor: 'bg-slate-50 dark:bg-slate-900/20',
      borderColor: 'border-slate-200 dark:border-slate-700'
    }
  ];

  const handleWhatsAppRedirect = () => {
    const selectedConsultation = consultationTypes.find(type => type.id === selectedType);
    const message = `Hola! Me interesa agendar una consulta gratuita de 15 minutos.

📋 *Tipo de consulta:* ${selectedConsultation?.title || 'Consulta General'}
🏢 *Empresa:* ${company || 'Por definir'}
🎯 *Necesidades:* ${needs || 'Por discutir en la consulta'}

¿Podemos agendar una reunión para discutir cómo la IA puede transformar mi negocio?`;
    
    const whatsappUrl = `https://wa.me/+525534417252?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Agenda tu Consulta Gratuita
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 mt-1">
              Solo 15 minutos • Sin compromiso • Resultados garantizados
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-6">
            {/* Step 1: Select consultation type */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                1. ¿Qué tipo de consulta necesitas?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {consultationTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedType === type.id
                          ? `${type.borderColor} ${type.bgColor} ring-2 ring-offset-2 ring-current`
                          : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-zinc-900 dark:text-white">{type.title}</h4>
                          <p className="text-sm text-zinc-600 dark:text-slate-400 mt-1">{type.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Company info */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                2. Información básica (opcional)
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Nombre de tu empresa
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Ej: Mi Empresa S.A."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    ¿Qué necesitas resolver con IA?
                  </label>
                  <textarea
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Describe brevemente tu desafío o objetivo..."
                  />
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3">
                ¿Qué incluye tu consulta gratuita?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-cyan-800 dark:text-cyan-200">Análisis de tu negocio</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-cyan-800 dark:text-cyan-200">Roadmap personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-cyan-800 dark:text-cyan-200">Cálculo de ROI estimado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-cyan-800 dark:text-cyan-200">Propuesta técnica básica</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-slate-400">
            <Clock className="w-4 h-4" />
            <span>Duración: 15 minutos</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              disabled={!selectedType}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-zinc-300 disabled:to-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ir a WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
