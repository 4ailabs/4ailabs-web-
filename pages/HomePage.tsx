import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calculator, Zap, BarChart3, Target, Users, Star, Award, Play, Clock, Eye, ExternalLink, GraduationCap, BookOpen, Microscope, Users2 } from 'lucide-react';
import { serviceCards, stats, testimonials, partners, technologies } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto animate-slide-in-top">
            Especialistas en <span className="text-blue-600 dark:text-blue-400">creación de agentes de IA</span> para empresas y emprendedores
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto px-4 animate-fade-in-up animate-delay-200">
            Creamos <strong>agentes de IA autónomos</strong> que automatizan procesos complejos, toman decisiones inteligentes y transforman tu negocio. Tecnología avanzada con atención personal y precios accesibles.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col justify-center items-center gap-4 animate-fade-in-up animate-delay-400 px-4">
            <a href="https://wa.me/+525543417252?text=Hola! Me interesa agendar una consulta gratuita de 15 minutos para conocer más sobre sus servicios de IA y calcular mi ROI." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 pulse-cta min-h-[48px] flex items-center justify-center w-full sm:w-auto">
              Consulta Gratuita - Ver mi ROI
            </a>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-slate-400 mt-2 text-center">
              Solo 15 minutos • Sin compromiso • Resultados garantizados
            </p>
          </div>
          <div className="mt-12 sm:mt-16 animate-fade-in-scale animate-delay-600 px-4">
             <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="Agentes de IA autónomos trabajando en procesos empresariales - automatización inteligente" className="rounded-xl sm:rounded-2xl shadow-2xl mx-auto w-full max-w-4xl transition-transform-smooth" loading="eager" />
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
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Servicios Especializados
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Agentes de IA que más demandan nuestros clientes</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">6 tipos de agentes inteligentes especializados que automatizan y transforman tu negocio</p>
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
                <Link key={service.title} to="/servicios" className={`block ${colors.bg} backdrop-blur-sm p-4 sm:p-5 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-300 group animate-fade-in-up hover:transform hover:scale-105 cursor-pointer ${colors.shadow} relative overflow-hidden`} style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className={`inline-flex p-2 sm:p-3 ${colors.iconBg} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 relative`}>
                      <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.iconColor}`} />
                      {/* Subtle glow effect */}
                      <div className={`absolute inset-0 ${colors.iconBg} rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
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
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl p-8 border border-slate-200 dark:border-zinc-600 max-w-3xl mx-auto mb-8 relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Consulta Personalizada
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  ¿Cuál transformaría tu negocio?
                </h3>
                <p className="text-zinc-600 dark:text-slate-300 mb-6 text-lg">
                  Agenda una <strong>consulta gratuita de 15 minutos</strong> y descubre exactamente cómo implementar IA en tu empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <a href="https://wa.me/+525543417252?text=Hola! Me interesa reservar una consulta gratuita de 15 minutos para conocer más sobre sus servicios de IA." target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25">
                    Reservar Consulta GRATIS
                  </a>
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
            </div>
            <p className="text-sm text-zinc-500 dark:text-slate-500">
              ¿Quieres ver todos los detalles? <Link to="/servicios" className="text-slate-600 dark:text-slate-400 hover:underline font-medium inline-flex items-center gap-1">
                Explorar servicios <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Videos de Ejemplos */}
      <section className="py-12 sm:py-16 md:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
              Agentes de IA en Acción
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ve cómo nuestros agentes de IA transforman procesos empresariales reales. Ejemplos prácticos de automatización inteligente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Video 1: Agentes de IA */}
            <a 
              href="https://youtu.be/F8NKVhkZZWI?si=U4ait5B8RS2nOmkq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 rounded-xl overflow-hidden border border-green-200/50 dark:border-green-700/50 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 animate-fade-in-up block" 
              style={{animationDelay: '0.1s'}}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://img.youtube.com/vi/F8NKVhkZZWI/maxresdefault.jpg" 
                  alt="Agentes de IA en Acción" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px]">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  YouTube
                </div>
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Agentes de IA
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Agentes de IA en Acción
                </h3>
                <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                  Descubre cómo funcionan los agentes de IA autónomos y cómo pueden transformar tu negocio.
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Tutorial
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Ver en YouTube
                  </div>
                </div>
              </div>
            </a>

            {/* Video 2: MCP - Integración con Bases de Datos */}
            <a 
              href="https://youtu.be/eur8dUO9mvE?si=p85nrAQlBt_53XQ4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl overflow-hidden border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 animate-fade-in-up block" 
              style={{animationDelay: '0.2s'}}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://img.youtube.com/vi/eur8dUO9mvE/maxresdefault.jpg" 
                  alt="¿Qué es MCP? Integración con Bases de Datos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px]">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  YouTube
                </div>
                <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  MCP Protocol
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  ¿Qué es MCP? Integración con Bases de Datos
                </h3>
                <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                  Aprende cómo integrar agentes de IA con bases de datos y APIs usando el Model Context Protocol (MCP).
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Tutorial
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Ver en YouTube
                  </div>
                </div>
              </div>
            </a>

            {/* Video 3: Flowise - Agentes de IA */}
            <a 
              href="https://youtu.be/TbZaj5SZcbM?si=jlcwdcfkSky6UPJZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 rounded-xl overflow-hidden border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 animate-fade-in-up block" 
              style={{animationDelay: '0.3s'}}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://img.youtube.com/vi/TbZaj5SZcbM/maxresdefault.jpg" 
                  alt="Agentes de IA con Flowise" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 min-h-[56px] min-w-[56px] sm:min-h-[64px] sm:min-w-[64px]">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  YouTube
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Flowise
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Agentes de IA con Flowise
                </h3>
                <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                  Aprende a crear agentes de IA avanzados usando Flowise, la plataforma visual para construir flujos de trabajo inteligentes.
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Tutorial
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Ver en YouTube
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://wa.me/+525543417252?text=Hola! Me interesa ver más ejemplos de sus agentes de IA en acción." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up min-h-[48px] w-full sm:w-auto justify-center" style={{animationDelay: '0.4s'}}>
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver Más Ejemplos
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Colaboración Académica */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Colaboración Académica
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
              Desarrollando el Futuro de la IA con <span className="text-blue-600 dark:text-blue-400">Universidades e Institutos</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">
              Colaboramos activamente con instituciones académicas para impulsar la investigación en IA, formar talento especializado y desarrollar soluciones innovadoras que transformen la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Investigación Conjunta */}
            <div className="group bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Investigación Conjunta</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                Proyectos de investigación colaborativos en IA médica, procesamiento de lenguaje natural y sistemas autónomos.
              </p>
              <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 font-medium">
                <BookOpen className="w-4 h-4 mr-1" />
                Publicaciones científicas
              </div>
            </div>

            {/* Programas de Formación */}
            <div className="group bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Programas de Formación</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                Cursos especializados, talleres prácticos y programas de capacitación para estudiantes y profesionales.
              </p>
              <div className="flex items-center text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                <Users2 className="w-4 h-4 mr-1" />
                Certificaciones profesionales
              </div>
            </div>

            {/* Transferencia Tecnológica */}
            <div className="group bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 animate-fade-in-up md:col-span-2 lg:col-span-1" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Transferencia Tecnológica</h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-slate-400 mb-4">
                Convertimos investigación académica en soluciones comerciales viables para empresas e industrias.
              </p>
              <div className="flex items-center text-xs text-purple-600 dark:text-purple-400 font-medium">
                <Target className="w-4 h-4 mr-1" />
                Innovación aplicada
              </div>
            </div>
          </div>

          {/* Instituciones Colaboradoras */}
          <div className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200/30 dark:border-blue-700/30 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Instituciones Colaboradoras
              </h3>
              <p className="text-sm text-zinc-600 dark:text-slate-400">
                Trabajamos con universidades e institutos de investigación líderes en México y Latinoamérica
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "UNAM", type: "Universidad Nacional" },
                { name: "IPN", type: "Instituto Politécnico" },
                { name: "ITESM", type: "Tecnológico de Monterrey" },
                { name: "UAM", type: "Universidad Autónoma" },
                { name: "CINVESTAV", type: "Centro de Investigación" },
                { name: "CONACYT", type: "Consejo Nacional" },
                { name: "UABC", type: "Universidad Autónoma" },
                { name: "UDG", type: "Universidad de Guadalajara" }
              ].map((institution, index) => (
                <div key={institution.name} className="text-center p-3 rounded-lg bg-white/60 dark:bg-zinc-700/60 hover:bg-white/80 dark:hover:bg-zinc-600/80 transition-colors duration-300 animate-fade-in-up" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">
                    {institution.name}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-slate-400">
                    {institution.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a href="https://wa.me/+525543417252?text=Hola! Soy de una universidad/instituto y me interesa colaborar en proyectos de investigación en IA." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base transition-all-smooth transform hover:scale-105 shadow-lg shadow-blue-500/25 animate-fade-in-up min-h-[48px] w-full sm:w-auto justify-center" style={{animationDelay: '0.6s'}}>
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              Colaborar con Nosotros
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
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
                  {/* Explicación simple de ROI */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto animate-fade-in-up animate-delay-400">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      ¿Qué es el ROI?
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-slate-300 mb-3">
                      <strong>ROI = Retorno de Inversión</strong> - Te dice cuánto dinero ganas o ahorras por cada peso que inviertes.
                    </p>
                    <div className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-zinc-600 dark:text-slate-400 mb-2">
                        <strong>Ejemplo:</strong> Si inviertes $10,000 en IA y ahorras $15,000 al año:
                      </p>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">ROI = 50%</span>
                        <p className="text-xs text-zinc-500 dark:text-slate-500 mt-1">Por cada $1 invertido, recuperas $1.50</p>
                      </div>
                    </div>
                  </div>
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
                  <Link to="/calculadora-roi" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up min-h-[48px] w-full sm:w-auto justify-center" style={{animationDelay: '0.7s'}}>
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
                    <a href="https://wa.me/+525543417252?text=Hola! Me interesa reservar mi consulta gratuita de 15 minutos para conocer más sobre sus servicios de IA." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 pulse-cta min-h-[56px] flex items-center justify-center">
                      Reservar mi consulta GRATIS
                    </a>
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