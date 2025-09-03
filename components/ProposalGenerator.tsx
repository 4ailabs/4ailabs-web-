import React, { useState } from 'react';
import { FileText, Download, Send, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import { ProposalData } from '../services/proposalGeneratorService';

interface ProposalGeneratorProps {
  proposal: ProposalData;
  onClose: () => void;
}

const ProposalGenerator: React.FC<ProposalGeneratorProps> = ({ proposal, onClose }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'technical' | 'pricing' | 'timeline'>('overview');

  const downloadProposal = () => {
    const proposalContent = `
PROPUESTA TÉCNICA - 4AILABS
===========================

INFORMACIÓN DEL CLIENTE:
- Empresa: ${proposal.companyName}
- Contacto: ${proposal.contactPerson}
- Email: ${proposal.email}
- Servicio: ${proposal.serviceType}

REQUERIMIENTOS:
${proposal.requirements}

ESPECIFICACIONES TÉCNICAS:
${proposal.technicalSpecs.map((spec, i) => `${i + 1}. ${spec}`).join('\n')}

ENTREGABLES:
${proposal.deliverables.map((deliverable, i) => `${i + 1}. ${deliverable}`).join('\n')}

PRECIOS:
- Precio base: $${proposal.pricing.basePrice.toLocaleString()}
- Servicios adicionales:
${proposal.pricing.additionalServices.map(service => `  - ${service.name}: $${service.price.toLocaleString()}`).join('\n')}
- TOTAL: $${proposal.pricing.totalPrice.toLocaleString()}

TIMELINE:
${proposal.timeline.phases.map((phase, i) => `${i + 1}. ${phase.name} (${phase.duration}): ${phase.description}`).join('\n')}
- Duración total: ${proposal.timeline.totalDuration}

---
4ailabs - Especialistas en IA
Fecha: ${new Date().toLocaleDateString('es-MX')}
    `;

    const blob = new Blob([proposalContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `propuesta-4ailabs-${proposal.companyName.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sendProposal = () => {
    // Aquí se implementaría la lógica para enviar la propuesta por email
    alert('Funcionalidad de envío por email próximamente disponible');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Propuesta Técnica</h2>
                <p className="text-emerald-100">{proposal.companyName} • {proposal.serviceType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadProposal}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Descargar propuesta"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                onClick={sendProposal}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Enviar por email"
              >
                <Send className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex">
            {[
              { id: 'overview', label: 'Resumen', icon: FileText },
              { id: 'technical', label: 'Técnico', icon: CheckCircle },
              { id: 'pricing', label: 'Precios', icon: DollarSign },
              { id: 'timeline', label: 'Timeline', icon: Clock }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeSection === id
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Información del Cliente</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Empresa:</strong> {proposal.companyName}</p>
                    <p><strong>Contacto:</strong> {proposal.contactPerson}</p>
                    <p><strong>Email:</strong> {proposal.email}</p>
                    <p><strong>Servicio:</strong> {proposal.serviceType}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Resumen del Proyecto</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                    {proposal.requirements}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Entregables Principales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {proposal.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'technical' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Especificaciones Técnicas</h3>
              {proposal.technicalSpecs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{spec}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'pricing' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Estructura de Precios</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white dark:bg-zinc-800 rounded-lg">
                    <span className="font-medium text-zinc-900 dark:text-white">Precio Base</span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      ${proposal.pricing.basePrice.toLocaleString()}
                    </span>
                  </div>

                  {proposal.pricing.additionalServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-white dark:bg-zinc-800 rounded-lg">
                      <span className="text-zinc-700 dark:text-zinc-300">{service.name}</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                  ))}

                  <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold">
                        ${proposal.pricing.totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Rango de Presupuesto</h3>
                <p className="text-zinc-700 dark:text-zinc-300">{proposal.budget}</p>
              </div>
            </div>
          )}

          {activeSection === 'timeline' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">Cronograma del Proyecto</h3>
              
              <div className="space-y-4">
                {proposal.timeline.phases.map((phase, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-zinc-900 dark:text-white">{phase.name}</h4>
                        <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-semibold text-zinc-900 dark:text-white">Duración Total del Proyecto:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{proposal.timeline.totalDuration}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 p-6 bg-zinc-50 dark:bg-zinc-800">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Propuesta generada por IA • 4ailabs • {new Date().toLocaleDateString('es-MX')}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={downloadProposal}
                className="px-4 py-2 bg-zinc-600 hover:bg-zinc-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalGenerator;
