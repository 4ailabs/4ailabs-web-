import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calculator, Zap, BarChart3, Target } from 'lucide-react';
import { serviceCards, stats, testimonials, partners, technologies } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto animate-slide-in-top">
            Automatiza tu negocio con agentes de IA que trabajan 24/7
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto px-4 animate-fade-in-up animate-delay-200">
            Reduce costos operativos hasta 60% con agentes inteligentes personalizados para ventas, soporte y automatización
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col justify-center items-center gap-4 animate-fade-in-up animate-delay-400 px-4">
            <Link to="/contacto" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-emerald-400/25 pulse-cta">
              🚀 Consulta Gratuita - Ver mi ROI
            </Link>
            <p className="text-sm text-zinc-500 dark:text-slate-400 mt-2">
              ⏱️ Solo 15 minutos • 💬 Sin compromiso • 📈 Resultados garantizados
            </p>
          </div>
          <div className="mt-12 sm:mt-16 animate-fade-in-scale animate-delay-600 px-4">
             <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="Demostración de soluciones IA" className="rounded-xl sm:rounded-2xl shadow-2xl mx-auto w-full max-w-4xl transition-transform-smooth" />
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Lo que más demandan nuestros clientes</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Los 3 servicios que más impacto generan en tu negocio</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {serviceCards.slice(0, 3).map((service, index) => {
              const serviceColors = [
                { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', hover: 'hover:border-purple-400 dark:hover:border-purple-600', shadow: 'hover:shadow-purple-400/10 dark:hover:shadow-purple-400/10', iconBg: 'bg-purple-100 dark:bg-purple-500/10', iconHover: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20', iconColor: 'text-purple-600 dark:text-purple-400' }, // Agentes de IA
                { bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800', hover: 'hover:border-indigo-400 dark:hover:border-indigo-600', shadow: 'hover:shadow-indigo-400/10 dark:hover:shadow-indigo-400/10', iconBg: 'bg-indigo-100 dark:bg-indigo-500/10', iconHover: 'group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20', iconColor: 'text-indigo-600 dark:text-indigo-400' }, // Context Engineering
                { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', hover: 'hover:border-red-400 dark:hover:border-red-600', shadow: 'hover:shadow-red-400/10 dark:hover:shadow-red-400/10', iconBg: 'bg-red-100 dark:bg-red-500/10', iconHover: 'group-hover:bg-red-200 dark:group-hover:bg-red-500/20', iconColor: 'text-red-600 dark:text-red-400' }, // IA Médica
                { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', hover: 'hover:border-green-400 dark:hover:border-green-600', shadow: 'hover:shadow-green-400/10 dark:hover:shadow-green-400/10', iconBg: 'bg-green-100 dark:bg-green-500/10', iconHover: 'group-hover:bg-green-200 dark:group-hover:bg-green-500/20', iconColor: 'text-green-600 dark:text-green-400' }, // Desarrollo de Sistemas
                { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', hover: 'hover:border-blue-400 dark:hover:border-blue-600', shadow: 'hover:shadow-blue-400/10 dark:hover:shadow-blue-400/10', iconBg: 'bg-blue-100 dark:bg-blue-500/10', iconHover: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20', iconColor: 'text-blue-600 dark:text-blue-400' }, // Asesoría Empresarial
                { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', hover: 'hover:border-yellow-400 dark:hover:border-yellow-600', shadow: 'hover:shadow-yellow-400/10 dark:hover:shadow-yellow-400/10', iconBg: 'bg-yellow-100 dark:bg-yellow-500/10', iconHover: 'group-hover:bg-yellow-200 dark:group-hover:bg-yellow-500/20', iconColor: 'text-yellow-600 dark:text-yellow-400' }  // Educación
              ];
              const colors = serviceColors[index];
              
              return (
                <div key={service.title} className={`${colors.bg} backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border ${colors.border} ${colors.hover} transition-all-smooth hover:shadow-lg ${colors.shadow} group animate-fade-in-up`} style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 ${colors.iconBg} rounded-lg sm:rounded-xl ${colors.iconHover} transition-colors duration-300`}>
                      <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${colors.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3 group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link to="/servicios" className="inline-flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold py-3 px-6 rounded-full transition-all-smooth">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tecnologías y APIs - Versión Simplificada */}
      <section className="py-12 sm:py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Tecnologías de Vanguardia</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Trabajamos con OpenAI, Google Gemini, Anthropic y las mejores plataformas de IA del mercado.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {technologies.slice(0, 4).map((tech, index) => {
              const techColors = [
                { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', hover: 'hover:border-green-400 dark:hover:border-green-600', shadow: 'hover:shadow-green-400/10 dark:hover:shadow-green-400/10' }, // OpenAI
                { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', hover: 'hover:border-blue-400 dark:hover:border-blue-600', shadow: 'hover:shadow-blue-400/10 dark:hover:shadow-blue-400/10' }, // Google Gemini
                { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', hover: 'hover:border-purple-400 dark:hover:border-purple-600', shadow: 'hover:shadow-purple-400/10 dark:hover:shadow-purple-400/10' }, // Anthropic
                { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', hover: 'hover:border-orange-400 dark:hover:border-orange-600', shadow: 'hover:shadow-orange-400/10 dark:hover:shadow-orange-400/10' }  // Hugging Face
              ];
              const colors = techColors[index];
              
              return (
                <div key={tech.name} className={`${colors.bg} backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl border ${colors.border} ${colors.hover} transition-all-smooth hover:shadow-lg ${colors.shadow} group animate-fade-in-up`} style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  <div className="text-center">
                    <img src={tech.logoUrl} alt={tech.name} className="h-6 sm:h-7 lg:h-8 mx-auto mb-1 sm:mb-2 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/tecnologias" className="text-zinc-600 dark:text-cyan-400 hover:text-zinc-500 dark:hover:text-cyan-300 transition-colors">
              Ver todas las tecnologías →
            </Link>
          </div>
        </div>
      </section>

                  {/* Calculadora ROI Section */}
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-slate-900 dark:to-zinc-900 transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-slate-500/10 text-emerald-700 dark:text-slate-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in-up">
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                    <div className="bg-green-50 dark:bg-zinc-900 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-green-200 dark:border-zinc-800 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-slate-300 mb-2 sm:mb-3 mx-auto" />
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white mb-1 sm:mb-2">Personalizado</h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-slate-400">Adaptado a tu sector y tamaño de empresa</p>
                    </div>
                  </div>
                  <Link to="/calculadora-roi" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-emerald-400/25 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                    Calcular mi ROI
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 sm:mb-6 animate-fade-in-up px-4">
                  ¿Listo para transformar tu negocio con IA?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animate-delay-200 px-4">
                  Agenda una consulta gratuita y descubre cómo nuestros agentes de IA pueden automatizar y optimizar tus procesos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 animate-fade-in-up animate-delay-300 px-4">
                  <Link to="/contacto" className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg">
                    Consulta Gratuita
                  </Link>
                  <Link to="/servicios" className="w-full sm:w-auto bg-zinc-200 dark:bg-zinc-800/50 hover:bg-zinc-300 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth">
                    Ver Servicios
                  </Link>
                </div>
              </div>
            </section>

    </div>
  );
};

export default HomePage;