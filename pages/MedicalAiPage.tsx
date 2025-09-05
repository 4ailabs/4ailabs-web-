import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, BrainCircuit, Microscope, HeartPulse, FileText, Bot, Search, FlaskConical, BookOpen, TrendingUp } from 'lucide-react';

const MedicalAiPage: React.FC = () => {

  const useCases = [
    { icon: BrainCircuit, title: "Diagnóstico por imágenes", description: "Análisis de rayos X, tomografías y resonancias con precisión sobrehumana." },
    { icon: Microscope, title: "Análisis de laboratorio", description: "Automatización y aceleración del análisis de muestras y patologías." },
    { icon: HeartPulse, title: "Predicción de complicaciones", description: "Modelos predictivos para anticipar riesgos y mejorar resultados de pacientes." },
    { icon: Stethoscope, title: "Optimización de tratamientos", description: "Personalización de terapias basadas en datos genómicos y clínicos." },
    { icon: FileText, title: "Gestión de historiales clínicos", description: "Extracción y estructuración inteligente de datos de HCE." },
    { icon: Bot, title: "Telemedicina inteligente", description: "Asistentes virtuales para triaje, monitoreo y consulta a distancia." }
  ];

  const researchServices = [
    { icon: Search, title: "Análisis de literatura médica", description: "IA para revisar y sintetizar miles de papers científicos en minutos." },
    { icon: FlaskConical, title: "Drug discovery y desarrollo", description: "Identificación de compuestos prometedores y predicción de efectos secundarios." },
    { icon: BookOpen, title: "Minería de datos clínicos", description: "Extracción de patrones ocultos en grandes bases de datos médicos." },
    { icon: TrendingUp, title: "Predicción de resultados", description: "Modelos para predecir eficacia de tratamientos y evolución de enfermedades." },
    { icon: Microscope, title: "Análisis de biomarcadores", description: "Identificación de marcadores genéticos y proteómicos para diagnóstico precoz." },
    { icon: BrainCircuit, title: "Simulación de ensayos clínicos", description: "Optimización del diseño de estudios y predicción de resultados." }
  ];
  
  const specializedServices = [
    "Consultoría para hospitales y clínicas",
    "Desarrollo de sistemas de diagnóstico",
    "Integración con equipos médicos existentes",
    "Capacitación para personal médico",
    "Certificaciones en IA médica",
    "Apoyo en investigaciones médicas",
    "Análisis de datos de ensayos clínicos",
    "Drug discovery y desarrollo farmacéutico"
  ];
  
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-zinc-900 dark:via-blue-900/10 dark:to-zinc-950 transition-colors duration-300 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <Stethoscope className="mx-auto h-12 w-12 text-blue-700 dark:text-blue-400 relative z-10" />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150"></div>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Especialistas en IA para el Sector Salud
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto mb-6">
              Inteligencia Artificial para la Medicina
            </h1>
            <p className="text-lg text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto mb-12">
              Desarrollamos soluciones de inteligencia artificial que mejoran la precisión diagnóstica, optimizan procesos hospitalarios y apoyan la investigación médica con los más altos estándares de calidad y seguridad.
            </p>
          </div>
          
          {/* Métricas Profesionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center border border-slate-200 dark:border-zinc-700 shadow-sm">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">95%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Precisión diagnóstica</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center border border-slate-200 dark:border-zinc-700 shadow-sm">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">HIPAA</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Cumplimiento normativo</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center border border-slate-200 dark:border-zinc-700 shadow-sm">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">ISO 13485</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Certificación médica</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg text-center border border-slate-200 dark:border-zinc-700 shadow-sm">
              <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-1">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Soporte técnico</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contacto" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md text-base transition duration-300 shadow-md hover:shadow-lg">
              Consulta Especializada
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
              Certificación médica • Cumplimiento normativo • Soporte especializado
            </p>
          </div>
        </div>
      </section>
      
      {/* Aplicaciones Médicas Principales */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Aplicaciones Clínicas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Aplicaciones Clínicas</h2>
            <p className="text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Soluciones de IA especializadas para mejorar la atención médica y los resultados clínicos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-gradient-to-br from-white to-slate-50/50 dark:from-zinc-900 dark:to-zinc-800/50 p-8 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden group">
                {/* Subtle background decoration */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                    <useCase.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{useCase.title}</h3>
                  <p className="text-zinc-600 dark:text-slate-400 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA como Herramienta para Médicos */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-900/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              IA: Tu Asistente Médico Digital
            </h2>
            <p className="text-lg text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">
              La inteligencia artificial potencia las capacidades del médico, ofreciendo apoyo en diagnósticos, 
              análisis de datos clínicos y optimización de tratamientos para mejorar la atención al paciente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Diagnóstico Asistido por IA
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400">
                    Algoritmos que analizan imágenes médicas, síntomas y historial clínico para sugerir diagnósticos diferenciales, 
                    reduciendo errores y acelerando el proceso diagnóstico hasta en un 40%.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Análisis Inteligente de Datos
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400">
                    Procesamiento automático de historiales clínicos, resultados de laboratorio y estudios de imagen 
                    para identificar patrones, tendencias y alertas médicas relevantes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Monitoreo Predictivo
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400">
                    Sistemas que predicen complicaciones médicas, deterioro del paciente o respuesta a tratamientos, 
                    permitiendo intervenciones tempranas y personalizadas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Asistente de Documentación
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400">
                    Automatización de notas clínicas, transcripción de consultas y actualización de expedientes médicos, 
                    liberando tiempo para la atención directa al paciente.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg border border-slate-200 dark:border-zinc-700 shadow-lg">
              <div className="text-center mb-6">
                <Stethoscope className="mx-auto w-16 h-16 text-blue-700 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Beneficios Comprobados
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Impacto real en la práctica médica
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-700">
                  <span className="text-zinc-700 dark:text-slate-300">Reducción en errores diagnósticos</span>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">35%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-700">
                  <span className="text-zinc-700 dark:text-slate-300">Tiempo ahorrado por consulta</span>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">12 min</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-700">
                  <span className="text-zinc-700 dark:text-slate-300">Mejora en satisfacción del médico</span>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">78%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-700 dark:text-slate-300">Detección temprana de complicaciones</span>
                  <span className="font-semibold text-blue-700 dark:text-blue-400">+65%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
                  <strong>La IA no reemplaza al médico</strong><br/>
                  Amplifica su experiencia y conocimiento clínico
                </p>
              </div>
            </div>
          </div>

          {/* Casos de Uso Específicos */}
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 border border-slate-200 dark:border-zinc-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                Casos de Uso en la Consulta Diaria
              </h3>
              <p className="text-zinc-600 dark:text-slate-400">
                Ejemplos prácticos de cómo la IA apoya al médico en situaciones clínicas reales
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-zinc-700 rounded-lg">
                <Microscope className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-4" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  Radiología Asistida
                </h4>
                <p className="text-sm text-zinc-600 dark:text-slate-400">
                  Detección automática de anomalías en radiografías, TAC y resonancias, destacando áreas de interés para revisión médica.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-zinc-700 rounded-lg">
                <FileText className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-4" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  Análisis de Laboratorio
                </h4>
                <p className="text-sm text-zinc-600 dark:text-slate-400">
                  Interpretación automática de resultados de laboratorio con alertas sobre valores críticos y tendencias preocupantes.
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-zinc-700 rounded-lg">
                <TrendingUp className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-4" />
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">
                  Seguimiento de Pacientes
                </h4>
                <p className="text-sm text-zinc-600 dark:text-slate-400">
                  Monitoreo continuo de signos vitales y parámetros clínicos con alertas automáticas ante cambios significativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Investigación Médica */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <FlaskConical className="mx-auto h-12 w-12 text-purple-600 dark:text-purple-400 relative z-10" />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-150"></div>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              Investigación Médica
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">IA para Investigación Médica</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">Aceleramos el descubrimiento científico y el desarrollo de nuevos tratamientos con inteligencia artificial avanzada.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchServices.map((service, index) => (
              <div key={service.title} className="bg-gradient-to-br from-white to-purple-50/30 dark:from-zinc-900 dark:to-purple-900/20 p-8 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 relative overflow-hidden group">
                {/* Subtle background decoration */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                    <service.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-blue-50/30 dark:from-zinc-950 dark:to-blue-900/10 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Servicios Médicos Especializados
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Experiencia Médica Comprobada</h2>
            <p className="text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Colaboramos con hospitales, clínicas y centros de investigación para implementar IA médica de vanguardia.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop" alt="Profesionales médicos utilizando tecnología IA" className="rounded-2xl shadow-2xl w-full h-80 object-cover"/>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Nuestros Servicios Médicos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-blue-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HeartPulse className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-zinc-700 dark:text-slate-300 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Final Profesional */}
          <div className="bg-slate-50 dark:bg-zinc-800 rounded-lg p-8 lg:p-12 text-center border border-slate-200 dark:border-zinc-700">
            <div className="mb-8">
              <Stethoscope className="mx-auto w-12 h-12 text-blue-700 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Implementación de IA Médica
              </h2>
              <p className="text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                Consulte con nuestros especialistas sobre la integración de soluciones de IA en su institución médica.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Consulta inicial</div>
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">Sin costo</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Análisis técnico</div>
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">Incluido</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Propuesta personalizada</div>
                <div className="text-lg font-semibold text-zinc-900 dark:text-white">15 días</div>
              </div>
            </div>
            
            <Link to="/contacto" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md text-base transition duration-300 shadow-md hover:shadow-lg">
              Agendar Consulta Especializada
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-8">
              Certificación ISO 13485 • Cumplimiento HIPAA • Soporte especializado
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalAiPage;