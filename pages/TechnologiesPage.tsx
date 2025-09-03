import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Database, Layers, Zap, BrainCircuit, Code, Cloud, Shield } from 'lucide-react';
import { technologies } from '../constants';

const TechnologiesPage: React.FC = () => {

  const categories = [
    { 
      icon: BrainCircuit, 
      title: "Modelos de Lenguaje", 
      description: "Los modelos más avanzados de IA conversacional y generativa",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    { 
      icon: Layers, 
      title: "Frameworks", 
      description: "Herramientas y frameworks para desarrollo de aplicaciones IA",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    { 
      icon: Database, 
      title: "Bases de Datos", 
      description: "Sistemas de almacenamiento y recuperación de vectores",
      color: "text-slate-400",
      bgColor: "bg-slate-500/10"
    },
    { 
      icon: Cpu, 
      title: "Machine Learning", 
      description: "Frameworks para entrenamiento y deployment de modelos",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    }
  ];

  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as { [key: string]: typeof technologies });

  const getCategoryInfo = (category: string) => {
    const categoryMap: { [key: string]: any } = {
      'LLM': categories[0],
      'Framework': categories[1],
      'Database': categories[2],
      'ML Framework': categories[3],
      'Platform': categories[1]
    };
    return categoryMap[category] || categories[1];
  };

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-blue-100/30 via-white to-zinc-50 dark:from-blue-900/30 dark:via-zinc-950 dark:to-black overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-zinc-200 dark:bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-4 fade-in">
            <Cpu className="h-12 w-12 text-blue-500 dark:text-blue-400" />
            <BrainCircuit className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            <Code className="h-12 w-12 text-blue-500 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto fade-in">
            Tecnologías y APIs que Utilizamos
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Trabajamos con las mejores plataformas, modelos y herramientas de IA del mercado para ofrecerte soluciones de vanguardia y máximo rendimiento.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Consulta Técnica
            </Link>
          </div>
        </div>
      </section>

      {/* Modelos de Lenguaje Premium Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Modelos de Última Generación
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Modelos de IA que Utilizamos</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Los modelos de lenguaje más avanzados del mercado, cada uno optimizado para casos de uso específicos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {/* OpenAI GPT-4 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-slate-200 dark:border-zinc-700 hover:border-slate-300 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-400/20 dark:hover:shadow-cyan-400/20 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500/10 to-transparent w-32 h-32 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center">
                    <BrainCircuit className="w-8 h-8 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">OpenAI GPT-4</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Modelo más avanzado</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Tokens contexto</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">128K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Multimodal</span>
                    <span className="font-bold text-green-600 dark:text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Razonamiento</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">Superior</span>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-zinc-700 pt-4">
                  <p className="text-sm text-zinc-600 dark:text-slate-400">Ideal para tareas complejas, análisis de código, y aplicaciones empresariales críticas.</p>
                </div>
              </div>
            </div>

            {/* Google Gemini */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-blue-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20 dark:hover:shadow-cyan-400/20 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500/10 to-transparent w-32 h-32 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Gemini Pro</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Google DeepMind</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Tokens contexto</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Velocidad</span>
                    <span className="font-bold text-green-600 dark:text-green-400">Ultra rápida</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Matemáticas</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">Excelente</span>
                  </div>
                </div>
                <div className="border-t border-blue-200 dark:border-zinc-700 pt-4">
                  <p className="text-sm text-zinc-600 dark:text-slate-400">Perfecto para análisis de documentos largos, procesamiento de datos y aplicaciones en tiempo real.</p>
                </div>
              </div>
            </div>

            {/* Anthropic Claude */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-3xl border border-orange-200 dark:border-zinc-700 hover:border-orange-300 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/20 dark:hover:shadow-cyan-400/20 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500/10 to-transparent w-32 h-32 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Claude 3.5</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Anthropic</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Tokens contexto</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">200K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Seguridad</span>
                    <span className="font-bold text-green-600 dark:text-green-400">Máxima</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-700 dark:text-slate-300">Creatividad</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">Superior</span>
                  </div>
                </div>
                <div className="border-t border-orange-200 dark:border-zinc-700 pt-4">
                  <p className="text-sm text-zinc-600 dark:text-slate-400">Especializado en tareas que requieren máxima seguridad, creatividad y alineación ética.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas y Frameworks */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Herramientas y Frameworks
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Stack Tecnológico Complementario</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Plataformas y herramientas que potencian nuestras implementaciones de IA.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* LangChain */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">LangChain</h4>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">Framework para aplicaciones LLM</p>
              </div>
            </div>

            {/* Pinecone */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Pinecone</h4>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">Vector Database para RAG</p>
              </div>
            </div>

            {/* TensorFlow */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">TensorFlow</h4>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">ML Framework</p>
              </div>
            </div>

            {/* Hugging Face */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Hugging Face</h4>
                <p className="text-zinc-600 dark:text-slate-400 text-sm">Open Source Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-100 dark:bg-zinc-900/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">¿Por qué estas tecnologías?</h2>
              <p className="text-zinc-600 dark:text-slate-400 mb-6">Seleccionamos cuidadosamente cada herramienta y API para garantizar el mejor rendimiento, seguridad y escalabilidad en nuestros proyectos.</p>
              <ul className="space-y-4 text-zinc-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Máximo rendimiento y eficiencia computacional</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-slate-500 dark:text-slate-400 mt-1 flex-shrink-0" />
                  <span>Seguridad y privacidad de datos garantizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <span>Escalabilidad para proyectos de cualquier tamaño</span>
                </li>
                <li className="flex items-start gap-3">
                  <BrainCircuit className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-1 flex-shrink-0" />
                  <span>Innovación constante con las últimas tecnologías</span>
                </li>
              </ul>
            </div>
            <div className="fade-in stagger-1">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Tecnologías y arquitectura de IA avanzada" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
