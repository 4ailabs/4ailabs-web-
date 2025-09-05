import React, { useState } from 'react';
import { X, Send, Loader2, FileText, Download } from 'lucide-react';
import { proposalGeneratorService } from '../services/proposalGeneratorService';
import { ProposalGenerator } from './ProposalGenerator';

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
            <div>
              <ProposalGenerator 
                proposalData={proposalData}
                onClose={handleClose}
              />
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
