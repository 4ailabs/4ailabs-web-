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
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-emerald-50/50 dark:from-blue-900/30 dark:via-zinc-950 dark:to-black overflow-hidden transition-colors duration-300">
         <div className="absolute inset-0 bg-grid-zinc-200 dark:bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Stethoscope className="mx-auto h-16 w-16 text-cyan-500 dark:text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto fade-in">
            Revolucionando la Medicina con Inteligencia Artificial
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Desarrollamos soluciones de IA que mejoran la precisión diagnóstica, optimizan la gestión hospitalaria y aceleran la investigación médica. Especialistas en aplicar IA para descubrimientos científicos y desarrollo farmacéutico.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Consulta Especializada
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Casos de Uso en Healthcare</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Aplicaciones de IA que salvan vidas y optimizan recursos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const colors = [
                { bg: 'bg-blue-50 dark:bg-zinc-900', border: 'border-blue-200 dark:border-zinc-800', hover: 'hover:border-blue-400 dark:hover:border-cyan-400/50', iconBg: 'bg-blue-100/50 dark:bg-cyan-500/10', icon: 'text-blue-600 dark:text-cyan-400' },
                { bg: 'bg-cyan-50 dark:bg-zinc-900', border: 'border-cyan-200 dark:border-zinc-800', hover: 'hover:border-cyan-400 dark:hover:border-cyan-400/50', iconBg: 'bg-cyan-100/50 dark:bg-cyan-500/10', icon: 'text-cyan-600 dark:text-cyan-400' },
                { bg: 'bg-emerald-50 dark:bg-zinc-900', border: 'border-emerald-200 dark:border-zinc-800', hover: 'hover:border-emerald-400 dark:hover:border-cyan-400/50', iconBg: 'bg-emerald-100/50 dark:bg-cyan-500/10', icon: 'text-emerald-600 dark:text-cyan-400' }
              ][index % 3];
              
              return (
              <div key={useCase.title} className={`${colors.bg} ${colors.border} ${colors.hover} p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-cyan-400/10 group fade-in stagger-${index + 1}`}>
                <div className={`p-3 ${colors.iconBg} rounded-xl inline-block mb-4`}>
                  <useCase.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors">{useCase.title}</h3>
                <p className="text-zinc-600 dark:text-slate-400">{useCase.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección de Investigación Médica */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FlaskConical className="mx-auto h-12 w-12 text-purple-500 dark:text-purple-400 mb-4 fade-in" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">IA para Investigación Médica</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">Aceleramos el descubrimiento científico y el desarrollo de nuevos tratamientos con inteligencia artificial avanzada.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchServices.map((service, index) => {
              const colors = [
                { bg: 'bg-purple-50/80 dark:bg-zinc-900/80', border: 'border-purple-200 dark:border-zinc-800', hover: 'hover:border-purple-400 dark:hover:border-purple-400/50', iconBg: 'bg-purple-100/50 dark:bg-purple-500/10', icon: 'text-purple-600 dark:text-purple-400' },
                { bg: 'bg-indigo-50/80 dark:bg-zinc-900/80', border: 'border-indigo-200 dark:border-zinc-800', hover: 'hover:border-indigo-400 dark:hover:border-purple-400/50', iconBg: 'bg-indigo-100/50 dark:bg-purple-500/10', icon: 'text-indigo-600 dark:text-purple-400' },
                { bg: 'bg-blue-50/80 dark:bg-zinc-900/80', border: 'border-blue-200 dark:border-zinc-800', hover: 'hover:border-blue-400 dark:hover:border-purple-400/50', iconBg: 'bg-blue-100/50 dark:bg-purple-500/10', icon: 'text-blue-600 dark:text-purple-400' },
                { bg: 'bg-cyan-50/80 dark:bg-zinc-900/80', border: 'border-cyan-200 dark:border-zinc-800', hover: 'hover:border-cyan-400 dark:hover:border-purple-400/50', iconBg: 'bg-cyan-100/50 dark:bg-purple-500/10', icon: 'text-cyan-600 dark:text-purple-400' },
                { bg: 'bg-emerald-50/80 dark:bg-zinc-900/80', border: 'border-emerald-200 dark:border-zinc-800', hover: 'hover:border-emerald-400 dark:hover:border-purple-400/50', iconBg: 'bg-emerald-100/50 dark:bg-purple-500/10', icon: 'text-emerald-600 dark:text-purple-400' },
                { bg: 'bg-pink-50/80 dark:bg-zinc-900/80', border: 'border-pink-200 dark:border-zinc-800', hover: 'hover:border-pink-400 dark:hover:border-purple-400/50', iconBg: 'bg-pink-100/50 dark:bg-purple-500/10', icon: 'text-pink-600 dark:text-purple-400' }
              ][index % 6];
              
              return (
              <div key={service.title} className={`${colors.bg} ${colors.border} ${colors.hover} backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-purple-400/10 group fade-in stagger-${index + 1}`}>
                <div className={`p-3 ${colors.iconBg} rounded-xl inline-block mb-4`}>
                  <service.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-zinc-600 dark:text-slate-400">{service.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="fade-in">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Nuestro Portafolio Médico</h2>
                <p className="text-zinc-600 dark:text-slate-400 mb-6">Proyectos reales con impacto tangible en el sector salud.</p>
                <ul className="space-y-3 text-zinc-700 dark:text-slate-300">
                  <li className="flex items-center gap-3"><HeartPulse className="w-5 h-5 text-red-500 dark:text-red-400" /> Sistema de detección temprana de cáncer</li>
                  <li className="flex items-center gap-3"><Bot className="w-5 h-5 text-blue-500 dark:text-blue-400" /> Plataforma de telemedicina con IA</li>
                  <li className="flex items-center gap-3"><FileText className="w-5 h-5 text-yellow-500 dark:text-yellow-400" /> Asistente virtual para triaje de pacientes</li>
                  <li className="flex items-center gap-3"><Microscope className="w-5 h-5 text-purple-500 dark:text-purple-400" /> Herramienta de drug discovery</li>
                </ul>
             </div>
             <div className="fade-in stagger-1">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Portafolio Médico" className="rounded-2xl shadow-xl w-full"/>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalAiPage;