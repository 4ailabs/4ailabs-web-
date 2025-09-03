import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calculator, Zap, BarChart3, Target, Users, Star, Award } from 'lucide-react';
import { serviceCards, stats, testimonials, partners, technologies } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto animate-slide-in-top">
            Especialistas en IA para el desarrollo empresarial y emprendimiento
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto px-4 animate-fade-in-up animate-delay-200">
            Agencia especializada en desarrollar agentes de IA personalizados. Tecnología avanzada con atención personal y precios accesibles.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col justify-center items-center gap-4 animate-fade-in-up animate-delay-400 px-4">
            <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 pulse-cta">
              Consulta Gratuita - Ver mi ROI
            </Link>
            <p className="text-sm text-zinc-500 dark:text-slate-400 mt-2">
              Solo 15 minutos • Sin compromiso • Resultados garantizados
            </p>
          </div>
          <div className="mt-12 sm:mt-16 animate-fade-in-scale animate-delay-600 px-4">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard de soluciones IA empresariales" className="rounded-xl sm:rounded-2xl shadow-2xl mx-auto w-full max-w-4xl transition-transform-smooth" />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Agencia especializada en IA
            </div>
            <p className="text-sm text-zinc-600 dark:text-slate-400 mb-6">
              Agencia con conocimiento sólido y experiencia comprobada
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-600 dark:text-slate-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Testimonial */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl text-zinc-700 dark:text-slate-300 italic mb-4">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">{testimonials[0].name}</div>
                <div className="text-sm text-zinc-600 dark:text-slate-400">{testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Lo que más demandan nuestros clientes</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Nuestros 6 servicios especializados que transforman negocios</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {serviceCards.map((service, index) => {
              const serviceColors = [
                { bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10', border: 'border-purple-200/50 dark:border-purple-700/50', hover: 'hover:border-purple-300 dark:hover:border-purple-600', shadow: 'hover:shadow-xl hover:shadow-purple-500/10', iconBg: 'bg-purple-500', iconColor: 'text-white' },
                { bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10', border: 'border-blue-200/50 dark:border-blue-700/50', hover: 'hover:border-blue-300 dark:hover:border-blue-600', shadow: 'hover:shadow-xl hover:shadow-blue-500/10', iconBg: 'bg-blue-500', iconColor: 'text-white' },
                { bg: 'bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-800/10', border: 'border-red-200/50 dark:border-red-700/50', hover: 'hover:border-red-300 dark:hover:border-red-600', shadow: 'hover:shadow-xl hover:shadow-red-500/10', iconBg: 'bg-red-500', iconColor: 'text-white' },
                { bg: 'bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/10', border: 'border-cyan-200/50 dark:border-cyan-700/50', hover: 'hover:border-cyan-300 dark:hover:border-cyan-600', shadow: 'hover:shadow-xl hover:shadow-cyan-500/10', iconBg: 'bg-cyan-500', iconColor: 'text-white' },
                { bg: 'bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900/20 dark:to-slate-800/10', border: 'border-slate-200/50 dark:border-slate-700/50', hover: 'hover:border-slate-300 dark:hover:border-slate-600', shadow: 'hover:shadow-xl hover:shadow-slate-500/10', iconBg: 'bg-slate-500', iconColor: 'text-white' },
                { bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-900/20 dark:to-yellow-800/10', border: 'border-yellow-200/50 dark:border-yellow-700/50', hover: 'hover:border-yellow-300 dark:hover:border-yellow-600', shadow: 'hover:shadow-xl hover:shadow-yellow-500/10', iconBg: 'bg-yellow-500', iconColor: 'text-white' }
              ];
              const colors = serviceColors[index % 6];
              
              return (
                <Link key={service.title} to="/servicios" className={`block ${colors.bg} backdrop-blur-sm p-4 sm:p-5 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-300 group animate-fade-in-up hover:transform hover:scale-105 cursor-pointer ${colors.shadow}`} style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="text-center">
                    <div className={`inline-flex p-2 sm:p-3 ${colors.iconBg} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-700 dark:group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-500 transition-colors">
                      Ver detalles
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-8 border border-slate-200 dark:border-zinc-600 max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                ¿Cuál transformaría tu negocio?
              </h3>
              <p className="text-zinc-600 dark:text-slate-300 mb-6 text-lg">
                Agenda una <strong>consulta gratuita de 15 minutos</strong> y descubre exactamente cómo implementar IA en tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25">
                  Reservar Consulta GRATIS
                </Link>
                <Link to="/calculadora-roi" className="bg-white dark:bg-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-500 text-zinc-900 dark:text-white font-semibold py-4 px-8 rounded-full transition-all-smooth border border-zinc-200 dark:border-zinc-500">
                  Calcular mi ROI
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  15 minutos
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  100% gratis
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  Roadmap incluido
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-slate-500">
              ¿Quieres ver todos los detalles? <Link to="/servicios" className="text-slate-600 dark:text-slate-400 hover:underline font-medium inline-flex items-center gap-1">
                Explorar servicios <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologías Simplificada */}
      <section className="py-8 sm:py-12 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-slate-400 mb-6">
              Powered by las mejores plataformas de IA
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-sm sm:text-lg font-semibold text-zinc-700 dark:text-slate-300">OpenAI</span>
              <span className="text-sm sm:text-lg font-semibold text-zinc-700 dark:text-slate-300">Google Gemini</span>
              <span className="text-sm sm:text-lg font-semibold text-zinc-700 dark:text-slate-300">Anthropic</span>
              <Link to="/tecnologias" className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                +5 más →
              </Link>
            </div>
          </div>
        </div>
      </section>

                  {/* Calculadora ROI Section */}
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900 dark:to-zinc-900 transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in-up">
                    <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
                    Nueva Herramienta
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up animate-delay-200 px-4">
                    Calcula el ROI de tu Inversión en IA
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animate-delay-300 px-4">
                    Descubre cuánto puedes ahorrar y el retorno de inversión que obtendrás al implementar soluciones de IA en tu empresa. 
                    <span className="text-zinc-600 dark:text-slate-300 font-semibold"> ¡Es gratis y toma solo 3 minutos!</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-yellow-50 dark:bg-zinc-900 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-yellow-200 dark:border-zinc-800 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-slate-300 mb-2 sm:mb-3 mx-auto" />
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white mb-1 sm:mb-2">Cálculo Rápido</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-slate-400">Solo 3 minutos para obtener tu ROI</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-zinc-900 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-200 dark:border-zinc-800 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-slate-300 mb-2 sm:mb-3 mx-auto" />
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white mb-1 sm:mb-2">Resultados Detallados</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-slate-400">Ahorros mensuales, anuales y proyección 3 años</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-slate-200 dark:border-zinc-800 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      <Target className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 dark:text-slate-300 mb-2 sm:mb-3 mx-auto" />
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white mb-1 sm:mb-2">Personalizado</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-slate-400">Adaptado a tu sector y tamaño de empresa</p>
                    </div>
                  </div>
                  <Link to="/calculadora-roi" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                    Calcular mi ROI
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Final con Urgencia */}
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Disponibilidad limitada
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up px-4">
                  Consultas gratuitas disponibles este mes
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animate-delay-200 px-4">
                  <strong>Tiempo limitado:</strong> Consultas estratégicas gratuitas para empresas que quieran implementar IA. Incluye análisis personalizado y roadmap de implementación.
                </p>
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200 dark:border-zinc-700 max-w-2xl mx-auto mb-8">
                  <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-8">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-600 dark:text-slate-400 mb-1">15 min</div>
                      <div className="text-sm text-zinc-600 dark:text-slate-400">Duración</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-600 dark:text-slate-400 mb-1">$0</div>
                      <div className="text-sm text-zinc-600 dark:text-slate-400">Costo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-600 dark:text-slate-400 mb-1">Disponible</div>
                      <div className="text-sm text-zinc-600 dark:text-slate-400">Este mes</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link to="/contacto" className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 pulse-cta">
                      Reservar mi consulta GRATIS
                    </Link>
                    <p className="text-sm text-zinc-500 dark:text-slate-500 mt-6 sm:mt-8">
                      Sin compromiso • Resultados garantizados • Roadmap personalizado
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-slate-500">
                  O si prefieres, <Link to="/calculadora-roi" className="text-slate-600 dark:text-slate-400 hover:underline">calcula tu ROI en 3 minutos</Link>
                </p>
              </div>
            </section>

    </div>
  );
};

export default HomePage;