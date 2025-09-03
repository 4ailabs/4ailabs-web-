import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Zap, Target, Layers, Cpu, TrendingUp, Code, Database } from 'lucide-react';

const ContextEngineeringPage: React.FC = () => {

  const techniques = [
    { icon: BrainCircuit, title: "Prompt Engineering Avanzado", description: "Diseño de prompts optimizados para maximizar la precisión y relevancia de las respuestas de IA." },
    { icon: Layers, title: "Chain-of-Thought", description: "Implementación de patrones de razonamiento paso a paso para mejorar la calidad de las respuestas." },
    { icon: Database, title: "RAG (Retrieval-Augmented Generation)", description: "Sistemas que combinan recuperación de información con generación de texto para mayor precisión." },
    { icon: Target, title: "Few-Shot Learning", description: "Optimización de modelos con ejemplos específicos para mejorar el rendimiento en tareas particulares." },
    { icon: Cpu, title: "Fine-Tuning Especializado", description: "Ajuste fino de modelos pre-entrenados para dominios específicos y casos de uso únicos." },
    { icon: Zap, title: "Context Optimization", description: "Optimización del uso de tokens y contexto para maximizar eficiencia y rendimiento." }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Mayor Precisión", description: "Mejoras del 30-50% en la precisión de respuestas mediante técnicas avanzadas de contexto." },
    { icon: Code, title: "Eficiencia Computacional", description: "Reducción de costos operativos optimizando el uso de tokens y recursos computacionales." },
    { icon: Target, title: "Personalización", description: "Adaptación específica para dominios, industrias y casos de uso particulares." },
    { icon: BrainCircuit, title: "Razonamiento Mejorado", description: "Capacidades de razonamiento más sofisticadas y coherentes en tareas complejas." }
  ];

  const useCases = [
    "Optimización de chatbots empresariales",
    "Mejora de sistemas de análisis de documentos",
    "Personalización de asistentes virtuales",
    "Optimización de motores de búsqueda con IA",
    "Mejora de sistemas de recomendación",
    "Optimización de agentes conversacionales"
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-violet-50/50 dark:from-purple-900/50 dark:via-zinc-950 dark:to-black overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-zinc-200 dark:bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-4 fade-in">
            <BrainCircuit className="h-12 w-12 text-purple-500 dark:text-purple-400" />
            <Layers className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            <Zap className="h-12 w-12 text-purple-500 dark:text-purple-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto fade-in">
            Context Engineering Avanzado
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Optimizamos el rendimiento de modelos de IA mediante técnicas avanzadas de ingeniería de contexto, prompt engineering y fine-tuning para obtener resultados superiores.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Optimiza tu Modelo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Técnicas de Context Engineering</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Metodologías avanzadas para maximizar el potencial de los modelos de IA.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => {
              const colors = [
                { bg: 'bg-purple-50 dark:bg-zinc-900', border: 'border-purple-200 dark:border-zinc-800', hover: 'hover:border-purple-400 dark:hover:border-purple-400/50', iconBg: 'bg-purple-100/50 dark:bg-purple-500/10', icon: 'text-purple-600 dark:text-purple-400' },
                { bg: 'bg-indigo-50 dark:bg-zinc-900', border: 'border-indigo-200 dark:border-zinc-800', hover: 'hover:border-indigo-400 dark:hover:border-purple-400/50', iconBg: 'bg-indigo-100/50 dark:bg-purple-500/10', icon: 'text-indigo-600 dark:text-purple-400' },
                { bg: 'bg-violet-50 dark:bg-zinc-900', border: 'border-violet-200 dark:border-zinc-800', hover: 'hover:border-violet-400 dark:hover:border-purple-400/50', iconBg: 'bg-violet-100/50 dark:bg-purple-500/10', icon: 'text-violet-600 dark:text-purple-400' },
                { bg: 'bg-blue-50 dark:bg-zinc-900', border: 'border-blue-200 dark:border-zinc-800', hover: 'hover:border-blue-400 dark:hover:border-purple-400/50', iconBg: 'bg-blue-100/50 dark:bg-purple-500/10', icon: 'text-blue-600 dark:text-purple-400' },
                { bg: 'bg-cyan-50 dark:bg-zinc-900', border: 'border-cyan-200 dark:border-zinc-800', hover: 'hover:border-cyan-400 dark:hover:border-purple-400/50', iconBg: 'bg-cyan-100/50 dark:bg-purple-500/10', icon: 'text-cyan-600 dark:text-purple-400' },
                { bg: 'bg-emerald-50 dark:bg-zinc-900', border: 'border-emerald-200 dark:border-zinc-800', hover: 'hover:border-emerald-400 dark:hover:border-purple-400/50', iconBg: 'bg-emerald-100/50 dark:bg-purple-500/10', icon: 'text-emerald-600 dark:text-purple-400' }
              ][index % 6];
              
              return (
              <div key={technique.title} className={`${colors.bg} ${colors.border} ${colors.hover} p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-purple-400/10 group fade-in stagger-${index + 1}`}>
                <div className={`p-3 ${colors.iconBg} rounded-xl inline-block mb-4`}>
                  <technique.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-purple-400 transition-colors">{technique.title}</h3>
                <p className="text-zinc-600 dark:text-slate-400">{technique.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Beneficios del Context Engineering</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Resultados medibles que transforman el rendimiento de tus sistemas de IA.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const colors = [
                { iconBg: 'bg-green-100/50 dark:bg-purple-500/10', icon: 'text-green-600 dark:text-purple-400' },
                { iconBg: 'bg-blue-100/50 dark:bg-purple-500/10', icon: 'text-blue-600 dark:text-purple-400' },
                { iconBg: 'bg-purple-100/50 dark:bg-purple-500/10', icon: 'text-purple-600 dark:text-purple-400' },
                { iconBg: 'bg-indigo-100/50 dark:bg-purple-500/10', icon: 'text-indigo-600 dark:text-purple-400' }
              ][index % 4];
              
              return (
              <div key={benefit.title} className={`text-center fade-in stagger-${index + 1}`}>
                <div className={`p-4 ${colors.iconBg} rounded-xl inline-block mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">{benefit.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Casos de Uso Especializados</h2>
              <p className="text-zinc-600 dark:text-slate-400 mb-6">Aplicamos context engineering en diversos sectores para optimizar el rendimiento de sistemas de IA.</p>
              <ul className="space-y-3 text-zinc-700 dark:text-slate-300">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-slate-500 dark:bg-purple-400 rounded-full"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contacto" className="bg-slate-500/20 dark:bg-purple-500/20 hover:bg-slate-500/30 dark:hover:bg-purple-500/30 text-slate-700 dark:text-purple-300 font-bold py-3 px-6 rounded-full transition duration-300">
                  Consulta Especializada
                </Link>
              </div>
            </div>
            <div className="fade-in stagger-1">
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop" alt="Context Engineering y optimización de IA" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContextEngineeringPage;
