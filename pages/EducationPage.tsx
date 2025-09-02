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
    <div className="bg-zinc-950">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="mx-auto h-16 w-16 text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white fade-in">Educación y Capacitación en IA</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Preparamos a profesionales y empresas para el futuro de la inteligencia artificial con programas de vanguardia.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Cursos Disponibles</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Desde conceptos fundamentales hasta especializaciones técnicas avanzadas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className={`bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 fade-in stagger-${(index % 3) + 1}`}>
                <p className="text-white font-semibold">{course}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contacto" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Ver calendario de cursos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">Modalidades Flexibles</h2>
              <div className="space-y-6">
                {modalities.map((modality, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl">
                      <modality.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{modality.name}</h3>
                      <p className="text-slate-400">Adaptado a tus necesidades y horarios.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in stagger-1 text-center bg-zinc-900 p-8 rounded-2xl border border-cyan-400/30 shadow-lg">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Certificaciones Profesionales</h3>
                <p className="text-slate-300 mb-6">Valida tus habilidades en IA con certificaciones reconocidas en la industria. Impulsa tu carrera y demuestra tu expertise.</p>
                <Link to="/contacto" className="text-cyan-400 font-semibold hover:text-cyan-300">
                  Obtén más información
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;