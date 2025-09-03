import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Monitor, Users, Combine, Award } from 'lucide-react';

const EducationPage: React.FC = () => {

  const courses = [
    "Introducción a la IA para Empresarios",
    "Machine Learning Aplicado",
    "IA en Medicina y Healthcare",
    "Desarrollo de Agentes Conversacionales",
    "Automatización con IA",
    "Ética en Inteligencia Artificial",
    "IA para Marketing y Ventas",
    "Computer Vision para Diagnóstico Médico",
    "Procesamiento de Lenguaje Natural Avanzado"
  ];

  const modalities = [
    { icon: Users, name: "Presencial" },
    { icon: Monitor, name: "Online en vivo" },
    { icon: BookOpen, name: "E-learning asíncrono" },
    { icon: Combine, name: "Híbrido" },
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="mx-auto h-16 w-16 text-cyan-500 dark:text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">Educación y Capacitación en IA</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Preparamos a profesionales y empresas para el futuro de la inteligencia artificial con programas de vanguardia.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Cursos Disponibles</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Desde conceptos fundamentales hasta especializaciones técnicas avanzadas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const colors = [
                { bg: 'bg-blue-50 dark:bg-zinc-900', border: 'border-blue-200 dark:border-zinc-800' },
                { bg: 'bg-indigo-50 dark:bg-zinc-900', border: 'border-indigo-200 dark:border-zinc-800' },
                { bg: 'bg-purple-50 dark:bg-zinc-900', border: 'border-purple-200 dark:border-zinc-800' }
              ][index % 3];
              
              return (
              <div key={index} className={`${colors.bg} ${colors.border} p-6 rounded-lg border fade-in stagger-${(index % 3) + 1}`}>
                <p className="text-zinc-900 dark:text-white font-semibold">{course}</p>
              </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/contacto" className="bg-slate-600 hover:bg-slate-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Ver calendario de cursos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Modalidades Flexibles</h2>
              <div className="space-y-6">
                {modalities.map((modality, index) => {
                  const colors = [
                    { iconBg: 'bg-blue-100/50 dark:bg-cyan-500/10', icon: 'text-blue-600 dark:text-cyan-400' },
                    { iconBg: 'bg-indigo-100/50 dark:bg-cyan-500/10', icon: 'text-indigo-600 dark:text-cyan-400' },
                    { iconBg: 'bg-purple-100/50 dark:bg-cyan-500/10', icon: 'text-purple-600 dark:text-cyan-400' },
                    { iconBg: 'bg-cyan-100/50 dark:bg-cyan-500/10', icon: 'text-cyan-600 dark:text-cyan-400' }
                  ][index % 4];
                  
                  return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`p-3 ${colors.iconBg} rounded-xl`}>
                      <modality.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{modality.name}</h3>
                      <p className="text-zinc-600 dark:text-slate-400">Adaptado a tus necesidades y horarios.</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
            <div className="fade-in stagger-1">
              <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop" alt="Capacitación profesional en inteligencia artificial" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;