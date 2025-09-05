import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calculator, Zap, BarChart3, Target, Users, Star, Award, Play, Clock, Eye, ExternalLink, GraduationCap, BookOpen, Microscope, Users2, MessageCircle, Bot, Brain, Crosshair, Heart, Link as LinkIcon, Database, Search, Waves, Cpu, Smartphone, Globe, Code2 } from 'lucide-react';
import { serviceCards, stats, testimonials, partners, technologies } from '../constants';
import ServiceQuickStart from '../components/ServiceQuickStart';
import AgentBuilder from '../components/AgentBuilder';
import ConsultationModal from '../components/ConsultationModal';
import AcademicModal from '../components/AcademicModal';
import MedicalConsultationModal from '../components/MedicalConsultationModal';
import UnifiedCTA from '../components/UnifiedCTA';

const HomePage: React.FC = () => {
  const [quickStartOpen, setQuickStartOpen] = useState(false);
  const [agentBuilderOpen, setAgentBuilderOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [academicModalOpen, setAcademicModalOpen] = useState(false);
  const [medicalModalOpen, setMedicalModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{type: string, title: string} | null>(null);

  return (
    <div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto animate-slide-in-top">
            Especialistas en <span className="text-blue-600 dark:text-blue-400">creación de agentes de IA</span> para empresas y emprendedores
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto px-4 animate-fade-in-up animate-delay-200">
            Creamos <strong>agentes de IA autónomos</strong> que automatizan procesos complejos y transforman tu negocio. Tecnología avanzada con precios que se ajustan a tu presupuesto.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col justify-center items-center gap-6 animate-fade-in-up animate-delay-400 px-4">
            <div className="relative">
              {/* Badge móvil - arriba del botón */}
              <div className="flex justify-center mb-2 sm:hidden">
                <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full border-2 border-yellow-300 animate-bounce">
                  ✨ CONSULTA 100% GRATUITA
                </div>
              </div>
              
              <UnifiedCTA
                variant="hero"
                size="lg"
                onConsultationClick={() => setConsultationOpen(true)}
                className="w-full max-w-sm sm:w-auto mx-auto relative"
              />
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 dark:text-slate-400 mt-3 text-center space-y-1 sm:space-y-0">
              <div className="sm:hidden">
                <div>✓ Solo 15 minutos</div>
                <div>✓ Sin compromiso</div>
                <div>✓ Resultados garantizados</div>
              </div>
              <div className="hidden sm:block">
                Solo 15 minutos • Sin compromiso • Resultados garantizados
              </div>
            </div>
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
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <div className="flex flex-col items-center gap-2 mb-4">
              {/* Progreso compacto */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <span className="text-xs text-slate-500 ml-1 sm:ml-2">2/3</span>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">Servicios Especializados</span>
                <span className="sm:hidden">Paso 2: Servicios</span>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-tight">Agentes de IA más demandados</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">6 tipos de agentes inteligentes que automatizan tu negocio</p>
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
                  Descubre exactamente cómo implementar IA en tu empresa con nuestra <strong>evaluación personalizada</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-4">
                  <div className="flex flex-col items-center gap-1">
                    {/* Badge móvil - arriba */}
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full sm:hidden">
                      👆 Recomendado para principiantes
                    </div>
                    
                    <Link 
                      to="/calculadora-roi" 
                      className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold py-3 px-4 sm:px-6 rounded-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-600 hover:shadow-lg text-sm sm:text-base min-h-[52px] w-full max-w-xs sm:w-auto justify-center relative"
                    >
                      {/* Badge desktop */}
                      <div className="hidden sm:block absolute -top-2 -right-2 bg-blue-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                        INICIO
                      </div>
                      
                      <Calculator className="w-4 h-4 flex-shrink-0" />
                      <span className="text-center">
                        <span className="block sm:inline">Calcular ROI</span>
                        <span className="hidden sm:inline ml-1">Primero</span>
                      </span>
                    </Link>
                  </div>
                  <span className="text-xs text-zinc-400 dark:text-slate-500">¿No estás seguro? Empieza aquí</span>
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
            <div className="mt-6">
              <Link 
                to="/servicios" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/25 min-h-[56px] w-full max-w-xs mx-auto sm:w-auto justify-center text-sm sm:text-base"
              >
                <Eye className="w-5 h-5" />
                Explorar Todos los Servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IA Médica - Sección Fusionada */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 dark:from-cyan-950/20 dark:via-teal-950/20 dark:to-blue-950/20 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              IA Médica Especializada
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              <span className="text-cyan-600 dark:text-cyan-400">Soluciones de IA</span> para 
              <span className="text-teal-600 dark:text-teal-400"> Profesionales Médicos</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Agentes inteligentes y plataformas completas que asisten en diagnósticos, análisis de síntomas, 
              gestión de historiales médicos y seguimiento de tratamientos para mejorar la precisión clínica.
            </p>
          </div>

          {/* Características principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Microscope, title: "Diagnóstico Asistido", desc: "Análisis de síntomas y diagnóstico diferencial" },
              { icon: Brain, title: "Interpretación Médica", desc: "Estudios e imágenes médicas con IA" },
              { icon: Database, title: "Historiales Inteligentes", desc: "Gestión automatizada de historiales clínicos" },
              { icon: Globe, title: "Telemedicina", desc: "Plataformas de consulta remota inteligente" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm rounded-xl border border-cyan-200/50 dark:border-cyan-700/50 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>


          {/* CTA Específico para Médicos */}
          <div className="text-center px-2">
            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/5 dark:to-teal-500/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 border border-cyan-200/50 dark:border-cyan-700/50 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Oferta Especial para Médicos</span>
                <span className="sm:hidden">⚕️ Para Médicos</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
                Consulta Médica Especializada - Sin Costo
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
                Como médico, sabemos que tu tiempo es valioso. Te ofrecemos una <strong>evaluación especializada</strong> 
                para mostrar exactamente cómo la IA puede transformar tu práctica médica.
              </p>
              
              <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center mb-4 sm:mb-6 text-center">
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span>Demo personalizada para tu especialidad</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span>Análisis de ROI específico para consultorios</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span>Plan de implementación paso a paso</span>
                </div>
              </div>

              <div className="relative">
                {/* Badge móvil */}
                <div className="flex justify-center mb-2 sm:hidden">
                  <div className="bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                    ⚡ ESPECIALIZADO MÉDICO
                  </div>
                </div>
                
                <button
                  onClick={() => setMedicalModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold py-4 px-4 sm:px-6 lg:px-8 rounded-2xl text-sm sm:text-base lg:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-cyan-500/25 min-h-[56px] w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg justify-center relative"
                >
                  {/* Badge desktop */}
                  <div className="hidden sm:block absolute -top-2 -right-2 bg-yellow-300 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                    MÉDICOS
                  </div>
                  
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-center leading-tight">
                    <span className="block text-sm sm:text-base lg:text-lg">Consulta Médica Especializada</span>
                    <span className="block text-xs sm:text-sm opacity-90">Formulario especializado</span>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 hidden sm:block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creación de Agentes de IA y Apps con IA */}
      <section className="py-20 sm:py-24 md:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              Especialistas en IA
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              <span className="text-indigo-600 dark:text-indigo-400">Agentes de IA</span> y <span className="text-purple-600 dark:text-purple-400">Apps Inteligentes</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">
              Soluciones de IA personalizadas para tu empresa.
            </p>
          </div>

          {/* Tarjeta unificada */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="group bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400">Agentes de IA</span> y <span className="text-purple-600 dark:text-purple-400">Apps Inteligentes</span>
                </h3>
                <p className="text-zinc-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                  Desarrollamos agentes inteligentes autónomos y aplicaciones completas con IA integrada, 
                  diseñadas para automatizar procesos complejos y ofrecer experiencias personalizadas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Características de Agentes */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    Agentes Autónomos
                  </h4>
                  {[
                    { icon: Cpu, text: "Procesamiento de datos en tiempo real" },
                    { icon: Brain, text: "Toma de decisiones inteligente" },
                    { icon: Zap, text: "Automatización de procesos complejos" },
                    { icon: Target, text: "Optimización continua de resultados" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-800/30 transition-colors duration-300">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg">
                        <feature.icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-slate-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Características de Apps */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4 flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Aplicaciones Inteligentes
                  </h4>
                  {[
                    { icon: Globe, text: "Aplicaciones web inteligentes" },
                    { icon: Smartphone, text: "Apps móviles con IA integrada" },
                    { icon: Code2, text: "APIs y microservicios de IA" },
                    { icon: Users, text: "Interfaces conversacionales" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 dark:bg-purple-900/20 group-hover:bg-purple-100/50 dark:group-hover:bg-purple-800/30 transition-colors duration-300">
                      <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg">
                        <feature.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-slate-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-6 py-3 rounded-lg">
                  <Bot className="w-4 h-4" />
                  <span>🤖 Agentes autónomos especializados</span>
                  <span className="mx-2">•</span>
                  <Smartphone className="w-4 h-4" />
                  <span>📱 Apps inteligentes personalizadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-indigo-200/30 dark:border-indigo-700/30 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-xs text-slate-500 ml-1 sm:ml-2">Especialistas</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                ¿Listo para crear tu solución de IA?
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Desde agentes autónomos hasta aplicaciones completas, desarrollamos la solución perfecta para tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setAgentBuilderOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Bot className="w-5 h-5" />
                  Crear mi Agente IA
                </button>
                <button
                  onClick={() => setQuickStartOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  Desarrollar mi App
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Colaboración Académica - Equilibrada */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Colaboración Académica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              ¿Eres de una <span className="text-blue-600 dark:text-blue-400">Universidad o Instituto</span>?
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Colaboramos con instituciones académicas para impulsar la investigación en IA, formar talento especializado y desarrollar soluciones innovadoras.
            </p>
          </div>

          {/* Características principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Microscope, title: "Investigación Conjunta", desc: "Proyectos colaborativos en IA médica y sistemas autónomos" },
              { icon: GraduationCap, title: "Formación Especializada", desc: "Cursos y programas de capacitación en tecnologías de IA" },
              { icon: Zap, title: "Transferencia Tecnológica", desc: "Convertimos investigación en soluciones comerciales viables" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={() => setAcademicModalOpen(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              Colaborar con nosotros
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Tecnologías Expandida */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-100 dark:from-slate-900 dark:via-zinc-900 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
              Tecnologías de Vanguardia
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              Powered by las <span className="text-slate-600 dark:text-slate-300">mejores plataformas</span> de IA
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-400 max-w-3xl mx-auto">
              Utilizamos las tecnologías más avanzadas para crear agentes de IA que superen las expectativas.
            </p>
          </div>

          {/* Grid de Tecnologías */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {[
              { 
                name: "OpenAI", 
                description: "GPT-4, DALL-E, Whisper",
                color: "from-green-500 to-emerald-600",
                icon: Bot
              },
              { 
                name: "Google Gemini", 
                description: "Gemini Pro, Bard, PaLM",
                color: "from-blue-500 to-cyan-600",
                icon: Brain
              },
              { 
                name: "Anthropic", 
                description: "Claude, Constitutional AI",
                color: "from-purple-500 to-violet-600",
                icon: Crosshair
              },
              { 
                name: "Hugging Face", 
                description: "Transformers, Datasets",
                color: "from-yellow-500 to-orange-600",
                icon: Heart
              },
              { 
                name: "LangChain", 
                description: "Framework de desarrollo",
                color: "from-red-500 to-pink-600",
                icon: LinkIcon
              },
              { 
                name: "Pinecone", 
                description: "Vector Database",
                color: "from-indigo-500 to-blue-600",
                icon: Database
              },
              { 
                name: "Weaviate", 
                description: "GraphQL Vector Search",
                color: "from-teal-500 to-green-600",
                icon: Search
              },
              { 
                name: "Flowise", 
                description: "Low-code AI workflows",
                color: "from-rose-500 to-pink-600",
                icon: Waves
              }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10 animate-fade-in-up" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-slate-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-200/50 dark:border-slate-700/50 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                ¿Quieres conocer más sobre nuestras tecnologías?
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Explora en detalle cómo utilizamos cada plataforma para crear soluciones de IA personalizadas y de alto rendimiento.
              </p>
              <Link 
                to="/tecnologias" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-500/25 min-h-[56px] w-full max-w-sm mx-auto sm:w-auto justify-center"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                Explorar Nuestras Tecnologías
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              </div>
          </div>
        </div>
      </section>

                  {/* Calculadora ROI Section */}
            <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50/50 to-slate-100/50 dark:from-slate-900 dark:to-zinc-900 transition-colors duration-300">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
                    {/* Progreso compacto para móvil */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                      <span className="text-xs text-slate-500 ml-1 sm:ml-2">1/3</span>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-500/10 text-slate-700 dark:text-slate-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-fade-in-up">
                      <Calculator className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Comienza Aquí: Calcula tu Potencial</span>
                      <span className="sm:hidden">Paso 1: Calcula ROI</span>
                    </div>
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
                  <Link to="/calculadora-roi" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg lg:text-xl transition-all-smooth transform hover:scale-105 shadow-lg shadow-slate-400/25 animate-fade-in-up min-h-[60px] w-full max-w-sm mx-auto sm:w-auto justify-center" style={{animationDelay: '0.7s'}}>
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
                <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 animate-pulse">
                  <span className="hidden sm:inline">🔥 ÚLTIMAS PLAZAS DISPONIBLES - DICIEMBRE 2024</span>
                  <span className="sm:hidden">🔥 ÚLTIMAS PLAZAS - DIC 2024</span>
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
                    <div className="relative">
                      {/* Badge móvil arriba del botón */}
                      <div className="flex justify-center mb-3 sm:hidden">
                        <div className="bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                          ⚡ ACCIÓN REQUERIDA
                        </div>
                      </div>
                      
                      <button
                        onClick={() => {
                          setSelectedService({ type: 'strategy', title: 'Estrategia de IA' });
                          setConsultationOpen(true);
                        }}
                        className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-5 sm:py-6 px-6 sm:px-10 rounded-2xl text-base sm:text-xl lg:text-2xl transition-all-smooth transform hover:scale-105 sm:hover:scale-110 shadow-2xl shadow-red-400/30 pulse-cta mb-4 min-h-[64px] sm:min-h-[72px] w-full max-w-sm sm:max-w-lg mx-auto justify-center border-2 border-red-400/20 relative overflow-hidden"
                      >
                        {/* Efecto de brillo - solo desktop */}
                        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce flex-shrink-0" />
                        <span className="relative z-10 text-center leading-tight">
                          <span className="block text-base sm:text-xl">¡Comenzar mi</span>
                          <span className="block text-sm sm:text-lg opacity-90">Transformación con IA!</span>
                        </span>
                      </button>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-slate-500 mt-4">
                      Sin compromiso • Resultados garantizados • Roadmap personalizado
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-slate-500">
                  O si prefieres, <Link to="/calculadora-roi" className="text-slate-600 dark:text-slate-400 hover:underline">calcula tu ROI en 3 minutos</Link>
                </p>
        </div>
      </section>

      {/* Modals */}
      {selectedService && (
        <ServiceQuickStart
          isOpen={quickStartOpen}
          onClose={() => setQuickStartOpen(false)}
          serviceType={selectedService.type}
          serviceTitle={selectedService.title}
        />
      )}
      <AgentBuilder
        isOpen={agentBuilderOpen}
        onClose={() => setAgentBuilderOpen(false)}
      />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        presetType={selectedService?.type}
      />
      <AcademicModal
        isOpen={academicModalOpen}
        onClose={() => setAcademicModalOpen(false)}
      />
      <MedicalConsultationModal
        isOpen={medicalModalOpen}
        onClose={() => setMedicalModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;