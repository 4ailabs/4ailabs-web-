import React, { useState } from 'react';
import { X, GraduationCap, Building, Mail, Phone, MapPin, Users, BookOpen, Microscope, Send } from 'lucide-react';

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AcademicFormData {
  institutionName: string;
  contactPerson: string;
  position: string;
  email: string;
  phone: string;
  institutionType: string;
  department: string;
  researchArea: string;
  collaborationType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
}

const AcademicModal: React.FC<AcademicModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AcademicFormData>({
    institutionName: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    institutionType: 'universidad',
    department: '',
    researchArea: '',
    collaborationType: 'investigacion',
    projectDescription: '',
    budget: '',
    timeline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const institutionTypes = [
    { value: 'universidad', label: 'Universidad' },
    { value: 'instituto', label: 'Instituto de Investigación' },
    { value: 'centro', label: 'Centro de Investigación' },
    { value: 'conacyt', label: 'Centro CONACYT' },
    { value: 'otro', label: 'Otro' }
  ];

  const collaborationTypes = [
    { value: 'investigacion', label: 'Proyecto de Investigación Conjunto' },
    { value: 'desarrollo', label: 'Desarrollo de Tecnología' },
    { value: 'capacitacion', label: 'Capacitación y Transferencia de Conocimiento' },
    { value: 'consultoria', label: 'Consultoría Especializada' },
    { value: 'estudiantes', label: 'Programa de Estudiantes' },
    { value: 'otro', label: 'Otro' }
  ];

  const handleInputChange = (field: keyof AcademicFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Crear mensaje para WhatsApp
      const message = `🏛️ *Solicitud de Colaboración Académica*

📋 *Información de la Institución:*
• Institución: ${formData.institutionName}
• Tipo: ${institutionTypes.find(t => t.value === formData.institutionType)?.label}
• Departamento: ${formData.department}
• Área de Investigación: ${formData.researchArea}

👤 *Información de Contacto:*
• Nombre: ${formData.contactPerson}
• Cargo: ${formData.position}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

🤝 *Tipo de Colaboración:*
${collaborationTypes.find(t => t.value === formData.collaborationType)?.label}

📝 *Descripción del Proyecto:*
${formData.projectDescription}

💰 *Presupuesto Estimado:* ${formData.budget}
⏱️ *Timeline:* ${formData.timeline}

📌 *Información Adicional:*
${formData.additionalInfo}

¿Podemos agendar una reunión para discutir esta colaboración académica?`;

      const whatsappUrl = `https://wa.me/+525534403571?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Colaboración Académica
              </h2>
              <p className="text-zinc-600 dark:text-slate-400">
                Formulario para instituciones educativas y de investigación
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información de la Institución */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Información de la Institución
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Nombre de la Institución *
                  </label>
                  <input
                    type="text"
                    value={formData.institutionName}
                    onChange={(e) => handleInputChange('institutionName', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Universidad Nacional Autónoma de México"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Tipo de Institución *
                  </label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => handleInputChange('institutionType', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    required
                  >
                    {institutionTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Departamento/Facultad
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Facultad de Ingeniería"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Área de Investigación
                  </label>
                  <input
                    type="text"
                    value={formData.researchArea}
                    onChange={(e) => handleInputChange('researchArea', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Inteligencia Artificial, Machine Learning"
                  />
                </div>
              </div>
            </div>

            {/* Información de Contacto */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Información de Contacto
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Dr. Juan Pérez"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Cargo/Posición *
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Director de Investigación"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Email Institucional *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="juan.perez@universidad.edu.mx"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>
            </div>

            {/* Detalles del Proyecto */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5" />
                Detalles del Proyecto
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Tipo de Colaboración *
                  </label>
                  <select
                    value={formData.collaborationType}
                    onChange={(e) => handleInputChange('collaborationType', e.target.value)}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    required
                  >
                    {collaborationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Descripción del Proyecto *
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Describe el proyecto de investigación, objetivos, metodología, y cómo la IA puede contribuir..."
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Presupuesto Estimado
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="$50,000 - $100,000 USD"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Timeline del Proyecto
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="6-12 meses"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                    Información Adicional
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    placeholder="Información adicional sobre el proyecto, recursos disponibles, estudiantes involucrados, etc."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-zinc-200 dark:border-zinc-700 flex-shrink-0">
          <p className="text-sm text-zinc-500 dark:text-slate-400">
            * Campos obligatorios
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.institutionName || !formData.contactPerson || !formData.email || !formData.projectDescription}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Solicitud
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicModal;
