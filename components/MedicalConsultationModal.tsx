import React, { useState } from 'react';
import { X, MessageCircle, Stethoscope, User, Building, Mail, Phone, Calendar, FileText, Shield, CheckCircle, Loader2, Heart, Brain, Eye, Activity } from 'lucide-react';

interface MedicalConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MedicalFormData {
  // Información personal
  fullName: string;
  email: string;
  phone: string;
  medicalLicense: string;
  
  // Información profesional
  specialty: string;
  institution: string;
  position: string;
  yearsExperience: string;
  
  // Necesidades específicas
  practiceType: string;
  patientVolume: string;
  currentChallenges: string;
  specificNeeds: string;
  
  // Tecnología actual
  currentEMR: string;
  currentSystems: string;
  integrationNeeds: string;
  
  // Compliance y regulaciones
  complianceRequirements: string[];
  dataSecurityLevel: string;
  hipaaCompliance: boolean;
  
  // Timeline y presupuesto
  timeline: string;
  budget: string;
  additionalInfo: string;
}

const MedicalConsultationModal: React.FC<MedicalConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'generating' | 'proposal'>('form');
  const [formData, setFormData] = useState<MedicalFormData>({
    fullName: '',
    email: '',
    phone: '',
    medicalLicense: '',
    specialty: '',
    institution: '',
    position: '',
    yearsExperience: '',
    practiceType: '',
    patientVolume: '',
    currentChallenges: '',
    specificNeeds: '',
    currentEMR: '',
    currentSystems: '',
    integrationNeeds: '',
    complianceRequirements: [],
    dataSecurityLevel: '',
    hipaaCompliance: false,
    timeline: '',
    budget: 'personalizado',
    additionalInfo: ''
  });
  const [proposalData, setProposalData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const medicalSpecialties = [
    'Medicina General',
    'Cardiología',
    'Neurología',
    'Oncología',
    'Radiología',
    'Patología',
    'Psiquiatría',
    'Pediatría',
    'Ginecología',
    'Ortopedia',
    'Dermatología',
    'Oftalmología',
    'Otorrinolaringología',
    'Urología',
    'Anestesiología',
    'Medicina Interna',
    'Cirugía General',
    'Medicina de Emergencias',
    'Medicina Familiar',
    'Otra'
  ];

  const practiceTypes = [
    'Hospital Público',
    'Hospital Privado',
    'Clínica Privada',
    'Consultorio Individual',
    'Grupo Médico',
    'Centro de Investigación',
    'Universidad/Instituto',
    'Telemedicina',
    'Otro'
  ];

  const complianceOptions = [
    'HIPAA (Estados Unidos)',
    'GDPR (Europa)',
    'LGPD (Brasil)',
    'LFPDPPP (México)',
    'ISO 27001',
    'SOC 2',
    'FDA 510(k)',
    'CE Marking',
    'Otro'
  ];

  const dataSecurityLevels = [
    'Básico - Datos desidentificados',
    'Intermedio - Datos pseudonimizados',
    'Alto - Datos identificables con consentimiento',
    'Máximo - Datos sensibles con encriptación avanzada'
  ];

  const handleInputChange = (field: keyof MedicalFormData, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleComplianceChange = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      complianceRequirements: prev.complianceRequirements.includes(requirement)
        ? prev.complianceRequirements.filter(r => r !== requirement)
        : [...prev.complianceRequirements, requirement]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setStep('generating');

    // Simular generación de propuesta
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generar propuesta médica especializada
    const proposal = generateMedicalProposal();
    setProposalData(proposal);
    setStep('proposal');
    setIsGenerating(false);
  };

  const generateMedicalProposal = () => {
    return {
      professionalInfo: {
        name: formData.fullName,
        specialty: formData.specialty,
        institution: formData.institution,
        experience: formData.yearsExperience
      },
      practiceDetails: {
        type: formData.practiceType,
        patientVolume: formData.patientVolume,
        currentEMR: formData.currentEMR
      },
      challenges: formData.currentChallenges,
      specificNeeds: formData.specificNeeds,
      technicalSpecs: [
        'Sistema de IA compatible con HIPAA',
        'Integración con EMR existente',
        'Análisis de imágenes médicas con IA',
        'Diagnóstico asistido por computadora',
        'Sistema de alertas clínicas',
        'Dashboard de métricas médicas',
        'API para integración con sistemas hospitalarios',
        'Backup y recuperación de datos médicos'
      ],
      deliverables: [
        'Sistema de IA médica certificado',
        'Integración con EMR actual',
        'Capacitación médica especializada (16 horas)',
        'Documentación de cumplimiento normativo',
        'Certificación de seguridad médica',
        'Soporte técnico especializado (6 meses)',
        'Manual de usuario médico',
        'Protocolos de emergencia y backup'
      ],
      compliance: {
        requirements: formData.complianceRequirements,
        dataSecurity: formData.dataSecurityLevel,
        hipaaCompliant: formData.hipaaCompliance
      },
      timeline: {
        phases: [
          { name: 'Análisis y Compliance', duration: '2-3 semanas', description: 'Evaluación de regulaciones y requisitos médicos' },
          { name: 'Desarrollo Especializado', duration: '8-10 semanas', description: 'Implementación de IA médica con certificaciones' },
          { name: 'Validación Clínica', duration: '2-3 semanas', description: 'Pruebas con datos médicos reales y validación clínica' },
          { name: 'Capacitación y Entrega', duration: '1-2 semanas', description: 'Entrenamiento médico especializado e implementación' }
        ],
        totalDuration: '12-16 semanas'
      },
      pricing: {
        basePrice: 0,
        range: "Presupuesto personalizado para sector salud",
        additionalServices: [],
        totalPrice: 0
      }
    };
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hola! Soy el Dr./Dra. ${formData.fullName} (${formData.specialty}) y me interesa una consulta médica especializada.

🏥 *Información Profesional:*
• Institución: ${formData.institution}
• Experiencia: ${formData.yearsExperience} años
• Tipo de práctica: ${formData.practiceType}
• Volumen de pacientes: ${formData.patientVolume}

🎯 *Necesidades Específicas:*
${formData.specificNeeds}

🔍 *Desafíos Actuales:*
${formData.currentChallenges}

📋 *Propuesta Técnica Generada:*
• Especialidad: ${formData.specialty}
• Timeline: 12-16 semanas
• Incluye: Sistema HIPAA, integración EMR, validación clínica

💰 *Presupuesto Personalizado:*
Te enviaré un presupuesto detallado basado en esta propuesta técnica, ajustado a las necesidades específicas del sector salud.

¿Podemos agendar una consulta médica especializada?`;

    const whatsappUrl = `https://wa.me/+525534417252?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      medicalLicense: '',
      specialty: '',
      institution: '',
      position: '',
      yearsExperience: '',
      practiceType: '',
      patientVolume: '',
      currentChallenges: '',
      specificNeeds: '',
      currentEMR: '',
      currentSystems: '',
      integrationNeeds: '',
      complianceRequirements: [],
      dataSecurityLevel: '',
      hipaaCompliance: false,
      timeline: '',
      budget: 'personalizado',
      additionalInfo: ''
    });
    setProposalData(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full max-h-[90vh] flex flex-col mx-2 sm:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Consulta Médica Especializada
              </h2>
              <p className="text-sm text-zinc-600 dark:text-slate-400">
                Formulario especializado para profesionales de la salud
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-zinc-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-700">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información Personal
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="Dr. Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Email profesional *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="dr.perez@hospital.com"
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
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="+52 55 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Cédula Profesional
                    </label>
                    <input
                      type="text"
                      value={formData.medicalLicense}
                      onChange={(e) => handleInputChange('medicalLicense', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="12345678"
                    />
                  </div>
                </div>
              </div>

              {/* Información Profesional */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Información Profesional
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Especialidad médica *
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => handleInputChange('specialty', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      required
                    >
                      <option value="">Selecciona tu especialidad</option>
                      {medicalSpecialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Institución *
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) => handleInputChange('institution', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="Hospital General de México"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Cargo/Posición
                    </label>
                    <input
                      type="text"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="Jefe de Cardiología"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Años de experiencia
                    </label>
                    <select
                      value={formData.yearsExperience}
                      onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    >
                      <option value="">Selecciona</option>
                      <option value="0-2">0-2 años</option>
                      <option value="3-5">3-5 años</option>
                      <option value="6-10">6-10 años</option>
                      <option value="11-15">11-15 años</option>
                      <option value="16-20">16-20 años</option>
                      <option value="20+">Más de 20 años</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Necesidades Específicas */}
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Necesidades Específicas
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Tipo de práctica *
                    </label>
                    <select
                      value={formData.practiceType}
                      onChange={(e) => handleInputChange('practiceType', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      required
                    >
                      <option value="">Selecciona el tipo de práctica</option>
                      {practiceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Volumen de pacientes mensual
                    </label>
                    <select
                      value={formData.patientVolume}
                      onChange={(e) => handleInputChange('patientVolume', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    >
                      <option value="">Selecciona</option>
                      <option value="0-50">0-50 pacientes</option>
                      <option value="51-100">51-100 pacientes</option>
                      <option value="101-200">101-200 pacientes</option>
                      <option value="201-500">201-500 pacientes</option>
                      <option value="500+">Más de 500 pacientes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Desafíos actuales en tu práctica *
                    </label>
                    <textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="Describe los principales desafíos que enfrentas en tu práctica médica..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Necesidades específicas de IA *
                    </label>
                    <textarea
                      value={formData.specificNeeds}
                      onChange={(e) => handleInputChange('specificNeeds', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                      placeholder="¿Qué tipo de soluciones de IA necesitas? (diagnóstico asistido, análisis de imágenes, etc.)"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Compliance y Seguridad */}
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Compliance y Seguridad
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                      Requisitos de cumplimiento (selecciona todos los aplicables)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {complianceOptions.map((option) => (
                        <label key={option} className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.complianceRequirements.includes(option)}
                            onChange={() => handleComplianceChange(option)}
                            className="w-4 h-4 text-red-600 border-zinc-300 rounded focus:ring-red-500"
                          />
                          <span className="text-sm text-zinc-700 dark:text-slate-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-2">
                      Nivel de seguridad de datos requerido
                    </label>
                    <select
                      value={formData.dataSecurityLevel}
                      onChange={(e) => handleInputChange('dataSecurityLevel', e.target.value)}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
                    >
                      <option value="">Selecciona el nivel requerido</option>
                      {dataSecurityLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="hipaaCompliance"
                      checked={formData.hipaaCompliance}
                      onChange={(e) => handleInputChange('hipaaCompliance', e.target.checked)}
                      className="w-4 h-4 text-red-600 border-zinc-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="hipaaCompliance" className="text-sm text-zinc-700 dark:text-slate-300">
                      Requiero cumplimiento HIPAA estricto
                    </label>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Stethoscope className="w-5 h-5" />
                  Generar Propuesta Médica
                </button>
              </div>
            </form>
          )}

          {step === 'generating' && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
                <Loader2 className="w-8 h-8 text-red-600 dark:text-red-400 animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Generando tu propuesta médica especializada...
              </h3>
              <p className="text-zinc-600 dark:text-slate-400">
                Nuestra IA está analizando tus necesidades médicas y creando una propuesta técnica especializada
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
                      Propuesta Médica Generada
                    </h3>
                    <p className="text-green-700 dark:text-green-300">
                      Especializada para {proposalData.professionalInfo.specialty}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Información Profesional</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Nombre:</span> {proposalData.professionalInfo.name}</div>
                    <div><span className="font-medium">Especialidad:</span> {proposalData.professionalInfo.specialty}</div>
                    <div><span className="font-medium">Institución:</span> {proposalData.professionalInfo.institution}</div>
                    <div><span className="font-medium">Experiencia:</span> {proposalData.professionalInfo.experience} años</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-3">Detalles de la Práctica</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Tipo:</span> {proposalData.practiceDetails.type}</div>
                    <div><span className="font-medium">Volumen:</span> {proposalData.practiceDetails.patientVolume}</div>
                    <div><span className="font-medium">EMR Actual:</span> {proposalData.practiceDetails.currentEMR}</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-lg">Presupuesto Personalizado</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Especializado para el sector salud
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Pago escalonado (50% inicio, 50% entrega)</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Descuentos por proyectos a largo plazo</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Financiamiento especial para instituciones médicas</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Garantía de cumplimiento normativo</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                    💬 <strong>Contacta por WhatsApp</strong> para recibir tu presupuesto personalizado especializado para el sector salud
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center p-6 border-t border-zinc-200 dark:border-zinc-700 flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {step === 'form' && (
              <>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors order-2 sm:order-1"
                >
                  Cancelar
                </button>
              </>
            )}

            {step === 'proposal' && (
              <>
                <button
                  onClick={() => setStep('form')}
                  className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors order-2 sm:order-1"
                >
                  ← Volver
                </button>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-800 dark:hover:text-slate-200 transition-colors order-3 sm:order-2"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors order-1 sm:order-3"
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

export default MedicalConsultationModal;
