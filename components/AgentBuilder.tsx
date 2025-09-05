import React, { useState } from 'react';
import { X, Bot, Loader2, FileText, MessageCircle, Zap, Brain, Target } from 'lucide-react';
import { proposalGeneratorService } from '../services/proposalGeneratorService';

interface AgentBuilderProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AgentFormData {
  name: string;
  email: string;
  company: string;
  agentType: string;
  useCase: string;
  requirements: string;
  timeline: string;
  budget: string;
}

const AgentBuilder: React.FC<AgentBuilderProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'generating' | 'proposal'>('form');
  const [formData, setFormData] = useState<AgentFormData>({
    name: '',
    email: '',
    company: '',
    agentType: 'conversacional',
    useCase: '',
    requirements: '',
    timeline: '4-6 semanas',
    budget: '2000-5000'
  });
  const [proposalData, setProposalData] = useState<any>(null);

  const agentTypes = [
    { value: 'conversacional', label: 'Agente Conversacional', description: 'Chatbots avanzados para engagement y soporte' },
    { value: 'ventas', label: 'Agente de Ventas', description: 'Automatización de prospección y cierre de ventas' },
    { value: 'atencion', label: 'Atención al Cliente', description: 'Soporte 24/7 con resolución de problemas' },
    { value: 'analisis', label: 'Análisis de Datos', description: 'Monitoreo y análisis en tiempo real' },
    { value: 'creativo', label: 'Agente Creativo', description: 'Generación de contenido y creatividad' },
    { value: 'financiero', label: 'Agente Financiero', description: 'Trading y análisis de mercado' }
  ];

  const handleInputChange = (field: keyof AgentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateProposal = async () => {
    setStep('generating');
    
    try {
      const contactFormData = {
        name: formData.name,
        email: formData.email,
        service: `Agente de IA - ${agentTypes.find(t => t.value === formData.agentType)?.label}`,
        message: `Empresa: ${formData.company}\nTipo de Agente: ${agentTypes.find(t => t.value === formData.agentType)?.label}\nCaso de Uso: ${formData.useCase}\nRequerimientos: ${formData.requirements}\nTimeline: ${formData.timeline}\nPresupuesto: ${formData.budget}`
      };

      const proposal = await proposalGeneratorService.generateProposal(contactFormData);
      setProposalData(proposal);
      setStep('proposal');
    } catch (error) {
      console.error('Error generating proposal:', error);
      setStep('form');
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      company: '',
      agentType: 'conversacional',
      useCase: '',
      requirements: '',
      timeline: '4-6 semanas',
      budget: '2000-5000'
    });
    setProposalData(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {step === 'form' && 'Construye tu Agente de IA'}
              {step === 'generating' && 'Generando Propuesta...'}
              {step === 'proposal' && 'Propuesta de Agente Generada'}
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 mt-1">
              {step === 'form' && 'Diseña tu agente inteligente personalizado paso a paso'}
              {step === 'generating' && 'Nuestra IA está creando una propuesta técnica detallada...'}
              {step === 'proposal' && 'Tu agente de IA está listo para implementar'}
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {step === 'form' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                  Tipo de Agente de IA *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {agentTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.agentType === type.value
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                          : 'border-zinc-300 dark:border-zinc-600 hover:border-cyan-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="agentType"
                        value={type.value}
                        checked={formData.agentType === type.value}
                        onChange={(e) => handleInputChange('agentType', e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 mt-1 ${
                          formData.agentType === type.value
                            ? 'border-cyan-500 bg-cyan-500'
                            : 'border-zinc-300 dark:border-zinc-600'
                        }`}>
                          {formData.agentType === type.value && (
                            <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-zinc-900 dark:text-white">{type.label}</div>
                          <div className="text-sm text-zinc-600 dark:text-slate-400">{type.description}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                  Caso de Uso Específico *
                </label>
                <textarea
                  value={formData.useCase}
                  onChange={(e) => handleInputChange('useCase', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  placeholder="Describe específicamente cómo quieres que tu agente ayude a tu negocio..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                  Requerimientos Técnicos
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  placeholder="Integraciones necesarias, APIs, bases de datos, etc..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Timeline deseado
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  >
                    <option value="2-4 semanas">2-4 semanas</option>
                    <option value="4-6 semanas">4-6 semanas</option>
                    <option value="6-8 semanas">6-8 semanas</option>
                    <option value="8-12 semanas">8-12 semanas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Presupuesto estimado (USD)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  >
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2000-5000">$2,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">
                      🤖 Tu Agente Personalizado
                    </h4>
                    <p className="text-sm text-cyan-800 dark:text-cyan-200 mb-2">
                      Crearemos un agente de IA único para tu negocio con:
                    </p>
                    <ul className="text-xs text-cyan-700 dark:text-cyan-300 space-y-1">
                      <li>• <strong>Capacidades específicas</strong> para tu industria</li>
                      <li>• <strong>Integración completa</strong> con tus sistemas</li>
                      <li>• <strong>Entrenamiento personalizado</strong> con tus datos</li>
                      <li>• <strong>Monitoreo 24/7</strong> y optimización continua</li>
                    </ul>
                  </div>
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
                Diseñando tu agente de IA...
              </h3>
              <p className="text-zinc-600 dark:text-slate-400">
                Nuestra IA está analizando tus requerimientos y creando un agente personalizado
              </p>
            </div>
          )}

          {step === 'proposal' && proposalData && (
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">
                      Tu Agente de IA está Listo
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Propuesta técnica personalizada generada
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Información del Proyecto</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Empresa:</span> {proposalData.companyName}</div>
                    <div><span className="font-medium">Contacto:</span> {proposalData.contactPerson}</div>
                    <div><span className="font-medium">Tipo de Agente:</span> {proposalData.serviceType}</div>
                    <div><span className="font-medium">Timeline:</span> {proposalData.timeline.totalDuration}</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Presupuesto</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Precio base:</span> ${proposalData.pricing.basePrice.toLocaleString()}</div>
                    <div><span className="font-medium">Servicios adicionales:</span> ${proposalData.pricing.additionalServices.reduce((sum: number, service: any) => sum + service.price, 0).toLocaleString()}</div>
                    <div className="border-t pt-2 font-semibold text-lg">
                      <span className="font-medium">Total:</span> ${proposalData.pricing.totalPrice.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-600 dark:text-green-400 text-lg">💰</span>
                      <span className="font-semibold text-green-900 dark:text-green-100 text-sm">Precios Flexibles</span>
                    </div>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      <strong>Nos ajustamos a tu presupuesto.</strong> Ofrecemos opciones de pago escalonado y descuentos por proyectos a largo plazo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Capacidades del Agente</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-zinc-900 dark:text-white mb-2">Especificaciones Técnicas</h5>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-300">
                      {proposalData.technicalSpecs.map((spec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-zinc-900 dark:text-white mb-2">Entregables</h5>
                    <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-300">
                      {proposalData.deliverables.map((deliverable: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div>
                  <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-1">
                    ¿Listo para crear tu agente?
                  </h4>
                  <p className="text-cyan-700 dark:text-cyan-300 text-sm">
                    Agenda una consulta técnica para comenzar el desarrollo
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const message = `Hola! Me interesa desarrollar un agente de IA:

🤖 *${proposalData.serviceType}*
🏢 *Empresa:* ${proposalData.companyName}
💰 *Presupuesto:* $${proposalData.pricing.totalPrice.toLocaleString()}
⏱️ *Timeline:* ${proposalData.timeline.totalDuration}

¿Podemos agendar una reunión técnica para comenzar?`;
                      
                      const whatsappUrl = `https://wa.me/+525534417252?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contactar por WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center bg-zinc-600 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 'form' && (
          <div className="flex items-center justify-between p-6 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-sm text-zinc-500 dark:text-slate-400">
              * Campos obligatorios
            </p>
            <button
              onClick={handleGenerateProposal}
              disabled={!formData.name || !formData.email || !formData.company || !formData.useCase}
              className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Bot className="w-5 h-5 mr-2" />
              Generar Propuesta del Agente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentBuilder;
