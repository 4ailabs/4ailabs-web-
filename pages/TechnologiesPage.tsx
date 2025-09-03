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
      color: "text-green-400",
      bgColor: "bg-green-500/10"
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

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Nuestro Stack Tecnológico</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Cada tecnología está cuidadosamente seleccionada para optimizar el rendimiento y la calidad de nuestras soluciones.</p>
          </div>

          {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => {
            const categoryInfo = getCategoryInfo(category);
            return (
              <div key={category} className={`mb-16 fade-in stagger-${categoryIndex + 1}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 ${categoryInfo.bgColor} rounded-xl`}>
                    <categoryInfo.icon className={`w-8 h-8 ${categoryInfo.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{categoryInfo.title}</h3>
                    <p className="text-zinc-600 dark:text-slate-400">{categoryInfo.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techs.map((tech, index) => (
                    <div key={tech.name} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-cyan-400/10 group">
                      <div className="flex items-start gap-4">
                        <img src={tech.logoUrl} alt={tech.name} className="h-12 w-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-zinc-600 dark:text-slate-400 text-sm leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
                  <Shield className="w-5 h-5 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
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
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Stack tecnológico y APIs de IA" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;
