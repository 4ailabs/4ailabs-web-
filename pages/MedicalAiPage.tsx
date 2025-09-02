import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, BrainCircuit, Microscope, HeartPulse, FileText, Bot } from 'lucide-react';

const MedicalAiPage: React.FC = () => {

  const useCases = [
    { icon: BrainCircuit, title: "Diagnóstico por imágenes", description: "Análisis de rayos X, tomografías y resonancias con precisión sobrehumana." },
    { icon: Microscope, title: "Análisis de laboratorio", description: "Automatización y aceleración del análisis de muestras y patologías." },
    { icon: HeartPulse, title: "Predicción de complicaciones", description: "Modelos predictivos para anticipar riesgos y mejorar resultados de pacientes." },
    { icon: Stethoscope, title: "Optimización de tratamientos", description: "Personalización de terapias basadas en datos genómicos y clínicos." },
    { icon: FileText, title: "Gestión de historiales clínicos", description: "Extracción y estructuración inteligente de datos de HCE." },
    { icon: Bot, title: "Telemedicina inteligente", description: "Asistentes virtuales para triaje, monitoreo y consulta a distancia." }
  ];
  
  const specializedServices = [
    "Consultoría para hospitales y clínicas",
    "Desarrollo de sistemas de diagnóstico",
    "Integración con equipos médicos existentes",
    "Capacitación para personal médico",
    "Certificaciones en IA médica"
  ];
  
  return (
    <div className="bg-zinc-950">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-900/30 via-zinc-950 to-black overflow-hidden">
         <div className="absolute inset-0 bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Stethoscope className="mx-auto h-16 w-16 text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto fade-in">
            Revolucionando la Medicina con Inteligencia Artificial
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Desarrollamos soluciones de IA que mejoran la precisión diagnóstica, optimizan la gestión hospitalaria y aceleran la investigación médica.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Consulta Especializada
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Casos de Uso en Healthcare</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Aplicaciones de IA que salvan vidas y optimizan recursos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className={`bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group fade-in stagger-${index + 1}`}>
                <div className="p-3 bg-cyan-500/10 rounded-xl inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{useCase.title}</h3>
                <p className="text-slate-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="fade-in">
                <h2 className="text-3xl font-bold text-white mb-4">Nuestro Portafolio Médico</h2>
                <p className="text-slate-400 mb-6">Proyectos reales con impacto tangible en el sector salud.</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><HeartPulse className="w-5 h-5 text-red-400" /> Sistema de detección temprana de cáncer</li>
                  <li className="flex items-center gap-3"><Bot className="w-5 h-5 text-blue-400" /> Plataforma de telemedicina con IA</li>
                  <li className="flex items-center gap-3"><FileText className="w-5 h-5 text-yellow-400" /> Asistente virtual para triaje de pacientes</li>
                  <li className="flex items-center gap-3"><Microscope className="w-5 h-5 text-purple-400" /> Herramienta de drug discovery</li>
                </ul>
             </div>
             <div className="fade-in stagger-1">
                <img src="https://images.unsplash.com/photo-1620912189837-796ae7021d69?q=80&w=1932&auto=format&fit=crop" alt="Portafolio Médico" className="rounded-2xl shadow-xl w-full"/>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalAiPage;