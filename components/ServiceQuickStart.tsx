import React, { useState } from 'react';
import { X, Send, Loader2, FileText, Download, MessageCircle } from 'lucide-react';
import { proposalGeneratorService } from '../services/proposalGeneratorService';
// import { ProposalGenerator } from './ProposalGenerator';

interface ServiceQuickStartProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
  serviceTitle: string;
}

interface QuickFormData {
  name: string;
  email: string;
  company: string;
  requirements: string;
  timeline: string;
  budget: string;
}

const ServiceQuickStart: React.FC<ServiceQuickStartProps> = ({ 
  isOpen, 
  onClose, 
  serviceType, 
  serviceTitle 
}) => {
  const [step, setStep] = useState<'form' | 'generating' | 'proposal'>('form');
  const [formData, setFormData] = useState<QuickFormData>({
    name: '',
    email: '',
    company: '',
    requirements: '',
    timeline: '1-3 meses',
    budget: '5000-10000'
  });
  const [proposalData, setProposalData] = useState<any>(null);

  const handleInputChange = (field: keyof QuickFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateProposal = async () => {
    setStep('generating');
    
    try {
      const contactFormData = {
        name: formData.name,
        email: formData.email,
        service: serviceType,
        message: `Empresa: ${formData.company}\nRequerimientos: ${formData.requirements}\nTimeline: ${formData.timeline}\nPresupuesto: ${formData.budget}`
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
      requirements: '',
      timeline: '1-3 meses',
      budget: '5000-10000'
    });
    setProposalData(null);
    onClose();
  };

  console.log('ServiceQuickStart render:', { isOpen, serviceType, serviceTitle });
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {step === 'form' && `Configurar ${serviceTitle}`}
              {step === 'generating' && 'Generando Propuesta...'}
              {step === 'proposal' && 'Propuesta Técnica Generada'}
            </h2>
            <p className="text-zinc-600 dark:text-slate-400 mt-1">
              {step === 'form' && 'Completa los datos para generar tu propuesta personalizada'}
              {step === 'generating' && 'Nuestra IA está creando una propuesta técnica detallada...'}
              {step === 'proposal' && 'Tu propuesta está lista para revisar y descargar'}
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
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
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
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
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
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                  Requerimientos específicos *
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  placeholder="Describe qué necesitas específicamente para tu proyecto de IA..."
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
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  >
                    <option value="1-3 meses">1-3 meses</option>
                    <option value="3-6 meses">3-6 meses</option>
                    <option value="6-12 meses">6-12 meses</option>
                    <option value="12+ meses">12+ meses</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Presupuesto estimado (USD)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                  >
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  ¿Qué incluye la propuesta?
                </h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Análisis detallado de tus requerimientos</li>
                  <li>• Especificaciones técnicas personalizadas</li>
                  <li>• Timeline y fases de implementación</li>
                  <li>• Presupuesto detallado en USD</li>
                  <li>• Entregables y resultados esperados</li>
                </ul>
              </div>
            </div>
          )}

          {step === 'generating' && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                <Loader2 className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Generando tu propuesta técnica...
              </h3>
              <p className="text-zinc-600 dark:text-slate-400">
                Nuestra IA está analizando tus requerimientos y creando una propuesta personalizada
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
                      Propuesta Técnica Generada
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Tu propuesta personalizada está lista
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
                    <div><span className="font-medium">Servicio:</span> {proposalData.serviceType}</div>
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
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Requerimientos</h4>
                <p className="text-zinc-700 dark:text-slate-300 text-sm">{proposalData.requirements}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Especificaciones Técnicas</h4>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-slate-300">
                    {proposalData.technicalSpecs.map((spec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Entregables</h4>
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

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Timeline del Proyecto</h4>
                <div className="space-y-3">
                  {proposalData.timeline.phases.map((phase: any, index: number) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-zinc-900 dark:text-white">{phase.name}</div>
                        <div className="text-sm text-zinc-600 dark:text-slate-400">{phase.duration} - {phase.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    ¿Te interesa esta propuesta?
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Agenda una consulta gratuita para discutir los detalles
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const message = `Hola! Me interesa esta propuesta técnica de IA:

📋 *${proposalData.serviceType}*
🏢 *Empresa:* ${proposalData.companyName}
💰 *Presupuesto:* $${proposalData.pricing.totalPrice.toLocaleString()}
⏱️ *Timeline:* ${proposalData.timeline.totalDuration}

¿Podemos agendar una reunión para discutir los detalles?`;
                      
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
                    <Download className="w-5 h-5 mr-2" />
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
              disabled={!formData.name || !formData.email || !formData.company || !formData.requirements}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Generar Propuesta
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceQuickStart;
