import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calculator, Bot, Brain, Target, Zap, Clock, CheckCircle, Loader2, FileText, ArrowRight } from 'lucide-react';
import { proposalGeneratorService } from '../services/proposalGeneratorService';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetType?: string;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, presetType }) => {
  const [selectedType, setSelectedType] = useState<string>(presetType || '');
  const [company, setCompany] = useState('');
  const [needs, setNeeds] = useState('');
  const [step, setStep] = useState<'form' | 'generating' | 'proposal'>('form');
  const [proposalData, setProposalData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Update selectedType when presetType changes
  useEffect(() => {
    if (presetType) {
      setSelectedType(presetType);
    }
  }, [presetType]);

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

  const handleGenerateProposal = async () => {
    if (!selectedType) return;
    
    setIsGenerating(true);
    setStep('generating');
    
    // Simular tiempo de generación
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const selectedConsultation = consultationTypes.find(type => type.id === selectedType);
      
      // Generar propuesta básica sin API
      const proposal = generateBasicProposal(selectedConsultation, company, needs);
      setProposalData(proposal);
      setStep('proposal');
      
      // Auto-enviar a WhatsApp después de mostrar la propuesta
      setTimeout(() => {
        handleWhatsAppRedirect();
      }, 2000);
      
    } catch (error) {
      console.error('Error generating proposal:', error);
      // Fallback to direct WhatsApp if generation fails
      handleWhatsAppRedirect();
    } finally {
      setIsGenerating(false);
    }
  };

  const generateBasicProposal = (consultation: any, companyName: string, needs: string) => {
    const basePrices = {
      'roi': { base: 750, range: '$500 - $1,000' },
      'chatbot': { base: 1100, range: '$750 - $1,500' },
      'agent': { base: 1750, range: '$1,250 - $2,500' },
      'strategy': { base: 900, range: '$600 - $1,250' },
      'automation': { base: 1400, range: '$1,000 - $2,000' },
      'general': { base: 600, range: '$400 - $1,000' }
    };

    const price = basePrices[selectedType as keyof typeof basePrices] || basePrices.general;
    const additionalServices = [
      { name: 'Soporte técnico 30 días', price: Math.round(price.base * 0.2) },
      { name: 'Capacitación del equipo', price: Math.round(price.base * 0.15) },
      { name: 'Documentación técnica', price: Math.round(price.base * 0.1) }
    ];

    const totalAdditional = additionalServices.reduce((sum, service) => sum + service.price, 0);
    const totalPrice = price.base + totalAdditional;

    return {
      companyName: companyName || 'Tu Empresa',
      contactPerson: 'Cliente Potencial',
      email: 'consulta@empresa.com',
      serviceType: consultation?.title || 'Consulta General',
      requirements: needs || 'Por discutir en la consulta',
      budget: price.range,
      technicalSpecs: [
        'Análisis de requerimientos técnicos',
        'Arquitectura de solución personalizada',
        'Integración con sistemas existentes',
        'Implementación de mejores prácticas de IA',
        'Monitoreo y optimización continua'
      ],
      deliverables: [
        'Propuesta técnica detallada',
        'Roadmap de implementación',
        'Cálculo de ROI personalizado',
        'Demo funcional del sistema',
        'Documentación completa',
        'Capacitación del equipo'
      ],
      pricing: {
        basePrice: price.base,
        additionalServices: additionalServices,
        totalPrice: totalPrice
      },
      timeline: {
        phases: [
          { name: 'Análisis y Planificación', duration: '1-2 semanas', description: 'Evaluación de necesidades y diseño de solución' },
          { name: 'Desarrollo', duration: '3-4 semanas', description: 'Implementación de la solución de IA' },
          { name: 'Pruebas y Optimización', duration: '1 semana', description: 'Testing y ajustes finales' },
          { name: 'Entrega y Capacitación', duration: '1 semana', description: 'Implementación y entrenamiento del equipo' }
        ],
        totalDuration: '6-8 semanas'
      }
    };
  };

  const handleWhatsAppRedirect = () => {
    try {
      const selectedConsultation = consultationTypes.find(type => type.id === selectedType);
      
      let message = `Hola! Me interesa agendar una consulta gratuita de 15 minutos.

📋 *Tipo de consulta:* ${selectedConsultation?.title || 'Consulta General'}
🏢 *Empresa:* ${company || 'Por definir'}
🎯 *Necesidades:* ${needs || 'Por discutir en la consulta'}`;

      // Si hay propuesta generada, incluir información de presupuesto
      if (proposalData) {
        message += `

💰 *Presupuesto estimado:* $${proposalData.pricing.totalPrice.toLocaleString()}
⏱️ *Timeline:* ${proposalData.timeline.totalDuration}
📋 *Incluye:* ${proposalData.deliverables.slice(0, 3).join(', ')}`;
      }

      message += `

¿Podemos agendar una reunión para discutir cómo la IA puede transformar mi negocio?`;
      
      console.log('Opening WhatsApp with message:', message);
      
      const whatsappUrl = `https://wa.me/525534403571?text=${encodeURIComponent(message)}`;
      console.log('WhatsApp URL:', whatsappUrl);
      
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      if (!opened) {
        alert('No se pudo abrir WhatsApp. Por favor, permite ventanas emergentes o copia este enlace: ' + whatsappUrl);
      }
      
      onClose();
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      alert('Error al abrir WhatsApp. Por favor, contacta directamente al +52 55 3440 3571');
    }
  };

  const handleClose = () => {
    setStep('form');
    setSelectedType(presetType || '');
    setCompany('');
    setNeeds('');
    setProposalData(null);
    setIsGenerating(false);
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
            onClick={handleClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {step === 'form' && (
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                
                {/* Botones de acción dentro del formulario */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppRedirect}
                    disabled={!selectedType}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-zinc-300 disabled:to-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar Consulta por WhatsApp
                  </button>
                  <button
                    onClick={handleGenerateProposal}
                    disabled={!selectedType}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 disabled:from-zinc-300 disabled:to-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors justify-center"
                  >
                    <FileText className="w-5 h-5" />
                    Generar Propuesta Primero
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'generating' && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6">
                <Loader2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400 animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Generando tu propuesta personalizada...
              </h3>
              <p className="text-zinc-600 dark:text-slate-400">
                Nuestra IA está analizando tus necesidades y creando una propuesta técnica
              </p>
            </div>
          )}

          {step === 'proposal' && proposalData && (
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">
                      Propuesta Generada
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Basada en tu consulta de {consultationTypes.find(t => t.id === selectedType)?.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                      🚀 Abriendo WhatsApp automáticamente...
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Te redirigimos a WhatsApp con toda la información de tu propuesta
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Información del Proyecto</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Empresa:</span> {proposalData.companyName}</div>
                    <div><span className="font-medium">Servicio:</span> {proposalData.serviceType}</div>
                    <div><span className="font-medium">Timeline:</span> {proposalData.timeline.totalDuration}</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Presupuesto Estimado</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Precio base:</span> ${proposalData.pricing.basePrice.toLocaleString()}</div>
                    <div><span className="font-medium">Servicios adicionales:</span> ${proposalData.pricing.additionalServices.reduce((sum: number, service: any) => sum + service.price, 0).toLocaleString()}</div>
                    <div className="border-t pt-2 font-semibold text-lg">
                      <span className="font-medium">Total:</span> ${proposalData.pricing.totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Próximos Pasos</h4>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-300">
                  {proposalData.deliverables.slice(0, 3).map((deliverable: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-slate-400">
            <Clock className="w-4 h-4" />
            <span>Duración: 15 minutos</span>
          </div>
          <div className="flex gap-3">
            {step === 'form' && (
              <>
                <button
                  onClick={handleClose}
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
                  Enviar por WhatsApp
                </button>
                <button
                  onClick={handleGenerateProposal}
                  disabled={!selectedType}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 disabled:from-zinc-300 disabled:to-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Ver Propuesta
                </button>
              </>
            )}
            {step === 'generating' && (
              <button
                onClick={handleClose}
                className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors"
              >
                Cancelar
              </button>
            )}
            {step === 'proposal' && (
              <>
                <button
                  onClick={() => setStep('form')}
                  className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors"
                >
                  ← Volver
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;