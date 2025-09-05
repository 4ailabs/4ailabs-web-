import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { allServices } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
            Startup innovadora con resultados reales
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">Nuestros Servicios de IA</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Soluciones de inteligencia artificial <strong>prácticas y efectivas</strong> para pequeñas y medianas empresas. Cada servicio está diseñado para generar resultados reales desde el primer mes.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-slate-200 dark:border-zinc-700">
              <div className="text-xl font-bold text-slate-600 dark:text-slate-400">4</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Servicios especializados</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-slate-200 dark:border-zinc-700">
              <div className="text-xl font-bold text-slate-600 dark:text-slate-400">15 min</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Consulta gratuita</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-slate-200 dark:border-zinc-700">
              <div className="text-xl font-bold text-slate-600 dark:text-slate-400">100%</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Personalizado</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl border border-slate-200 dark:border-zinc-700">
              <div className="text-xl font-bold text-slate-600 dark:text-slate-400">24/7</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Soporte incluido</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {allServices.map((service, index) => {
              const colors = [
                { iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600', icon: 'text-white', cardBg: 'bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20', border: 'border-purple-200 dark:border-purple-700', buttonBg: 'bg-purple-500 hover:bg-purple-600', buttonText: 'text-white' },
                { iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: 'text-white', cardBg: 'bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20', border: 'border-blue-200 dark:border-blue-700', buttonBg: 'bg-blue-500 hover:bg-blue-600', buttonText: 'text-white' },
                { iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', icon: 'text-white', cardBg: 'bg-gradient-to-br from-cyan-50/50 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/20', border: 'border-cyan-200 dark:border-cyan-700', buttonBg: 'bg-cyan-500 hover:bg-cyan-600', buttonText: 'text-white' },
                { iconBg: 'bg-gradient-to-br from-slate-500 to-slate-600', icon: 'text-white', cardBg: 'bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900/20 dark:to-slate-800/20', border: 'border-slate-200 dark:border-slate-700', buttonBg: 'bg-slate-500 hover:bg-slate-600', buttonText: 'text-white' }
              ][index % 4];
              
              return (
              <div key={service.title} className={`${colors.cardBg} backdrop-blur-sm rounded-3xl p-8 border ${colors.border} transition-all duration-300 hover:shadow-xl fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 ${colors.iconBg} rounded-2xl shadow-lg`}>
                        <service.icon className={`w-8 h-8 ${colors.icon}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">{service.title}</h2>
                    </div>
                    <p className="text-lg text-zinc-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-zinc-700 dark:text-slate-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.ctaLink}
                      className={`inline-flex items-center ${colors.buttonBg} ${colors.buttonText} font-bold py-4 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105`}
                    >
                      {service.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative">
                      <img src={service.imageUrl} alt={service.title} className="rounded-2xl w-full h-64 lg:h-80 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Consultas gratuitas disponibles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              ¿Cuál de estos servicios transformaría tu negocio?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-slate-300 mb-8">
              Agenda una consulta de <strong>15 minutos completamente gratis</strong> y descubre exactamente cómo implementar IA en tu empresa con un roadmap personalizado.
            </p>
            <div className="bg-gradient-to-br from-white to-slate-50 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-8 shadow-xl border border-emerald-200 dark:border-zinc-700 mb-8 relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full translate-y-10 -translate-x-10"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 relative z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-2">15 min</div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">Duración de la consulta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-2">100% Gratis</div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">Sin compromisos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-400 mb-2">Roadmap</div>
                  <div className="text-sm text-zinc-600 dark:text-slate-400">Plan personalizado incluido</div>
                </div>
              </div>
              <Link to="/contacto" className="inline-block bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25">
                Reservar Mi Consulta GRATIS
              </Link>
              <p className="text-xs text-zinc-500 dark:text-slate-500 mt-4">
                Análisis personalizado • Roadmap de implementación • Estimación de ROI
              </p>
            </div>
            <p className="text-sm text-zinc-500 dark:text-slate-500">
              ¿Prefieres ver números primero? <Link to="/calculadora-roi" className="text-slate-600 dark:text-slate-400 hover:underline">Calcula tu ROI en 3 minutos →</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;