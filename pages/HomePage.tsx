import React from 'react';
import { Link } from 'react-router-dom';
import { serviceCards, stats, testimonials, partners } from '../constants';
import { ArrowRight, Quote } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-950 via-black to-zinc-950">
      
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto fade-in">
            Transformamos empresas con Inteligencia Artificial
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Asesoría especializada, desarrollo de sistemas IA y educación tecnológica para impulsar tu negocio al futuro
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 active:scale-95 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg touch-manipulation ripple btn-enhanced pulse-cta">
              Solicitar Consulta
            </Link>
            <Link to="/investigacion" className="bg-zinc-800/50 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-700 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition duration-300 touch-manipulation ripple btn-enhanced">
              Ver Casos de Éxito
            </Link>
          </div>
          <div className="mt-16 fade-in stagger-3">
             <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop" alt="Demostración de soluciones IA" className="rounded-2xl shadow-2xl shadow-fuchsia-500/10 mx-auto" />
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Nuestros Servicios Principales</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Soluciones de IA a medida para cada desafío de negocio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCards.map((service, index) => (
              <div key={service.title} className={`bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group fade-in stagger-${index + 1}`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7" style={{color: service.color}} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`fade-in stagger-${index+1}`}>
                <p className="text-4xl md:text-5xl font-bold text-cyan-400">{stat.value}</p>
                <p className="mt-2 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonios */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-zinc-900 p-6 sm:p-8 rounded-xl border border-zinc-800 relative h-full flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 fade-in stagger-${index + 1}`}>
                <div>
                  <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 text-zinc-700" />
                  <p className="relative z-10 text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="relative z-10 mt-auto">
                  <p className="font-bold text-white text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-cyan-400 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-white mb-8">Con la confianza de empresas líderes y startups innovadoras</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {partners.map((partner, index) => (
              <div key={partner.name} className={`fade-in stagger-${index+1}`}>
                <img src={partner.logoUrl} alt={partner.name} className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;