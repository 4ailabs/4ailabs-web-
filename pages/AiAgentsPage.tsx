import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ShoppingCart, Headset, BarChart, PenTool, TrendingUp } from 'lucide-react';

const AiAgentsPage: React.FC = () => {

  const agentTypes = [
    { icon: MessageSquare, title: "Agentes conversacionales", description: "Chatbots avanzados para engagement y soporte multimodal." },
    { icon: ShoppingCart, title: "Agentes autónomos para ventas", description: "Automatización de prospección, seguimiento y cierre de ventas." },
    { icon: Headset, title: "Agentes de atención al cliente", description: "Soporte 24/7 con resolución de problemas y escalamiento inteligente." },
    { icon: BarChart, title: "Agentes de análisis de datos", description: "Monitoreo y análisis de datos en tiempo real para insights accionables." },
    { icon: PenTool, title: "Agentes creativos para contenido", description: "Generación automática de texto, imágenes y código." },
    { icon: TrendingUp, title: "Agentes financieros para trading", description: "Análisis de mercado y ejecución de estrategias de inversión." }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-cyan-50/50 dark:from-purple-900/30 dark:via-zinc-950 dark:to-black overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-zinc-200 dark:bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-4 fade-in">
              <MessageSquare className="h-12 w-12 text-cyan-500 dark:text-cyan-400" />
              <Headset className="h-16 w-16 text-cyan-500 dark:text-cyan-400" />
              <ShoppingCart className="h-12 w-12 text-cyan-500 dark:text-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-4xl mx-auto fade-in">
            Agencia especializada en desarrollo de agentes de IA
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Somos expertos en crear agentes inteligentes autónomos que automatizan procesos, mejoran la experiencia del cliente y escalan tus operaciones 24/7.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Desarrolla tu Agente
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Nuestros Agentes de IA Especializados</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Desarrollamos agentes inteligentes personalizados para automatizar y optimizar cada proceso de tu empresa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => {
              const colors = [
                { bg: 'bg-purple-50 dark:bg-zinc-900', border: 'border-purple-200 dark:border-zinc-800', hover: 'hover:border-purple-400 dark:hover:border-cyan-400/50', iconBg: 'bg-purple-100/50 dark:bg-cyan-500/10', icon: 'text-purple-600 dark:text-cyan-400' },
                { bg: 'bg-indigo-50 dark:bg-zinc-900', border: 'border-indigo-200 dark:border-zinc-800', hover: 'hover:border-indigo-400 dark:hover:border-cyan-400/50', iconBg: 'bg-indigo-100/50 dark:bg-cyan-500/10', icon: 'text-indigo-600 dark:text-cyan-400' },
                { bg: 'bg-cyan-50 dark:bg-zinc-900', border: 'border-cyan-200 dark:border-zinc-800', hover: 'hover:border-cyan-400 dark:hover:border-cyan-400/50', iconBg: 'bg-cyan-100/50 dark:bg-cyan-500/10', icon: 'text-cyan-600 dark:text-cyan-400' },
                { bg: 'bg-slate-50 dark:bg-zinc-900', border: 'border-slate-200 dark:border-zinc-800', hover: 'hover:border-slate-400 dark:hover:border-cyan-400/50', iconBg: 'bg-slate-100/50 dark:bg-cyan-500/10', icon: 'text-slate-600 dark:text-cyan-400' },
                { bg: 'bg-orange-50 dark:bg-zinc-900', border: 'border-orange-200 dark:border-zinc-800', hover: 'hover:border-orange-400 dark:hover:border-cyan-400/50', iconBg: 'bg-orange-100/50 dark:bg-cyan-500/10', icon: 'text-orange-600 dark:text-cyan-400' },
                { bg: 'bg-rose-50 dark:bg-zinc-900', border: 'border-rose-200 dark:border-zinc-800', hover: 'hover:border-rose-400 dark:hover:border-cyan-400/50', iconBg: 'bg-rose-100/50 dark:bg-cyan-500/10', icon: 'text-rose-600 dark:text-cyan-400' }
              ][index % 6];
              
              return (
              <div key={agent.title} className={`${colors.bg} ${colors.border} ${colors.hover} p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-cyan-400/10 group fade-in stagger-${index + 1}`}>
                <div className={`p-3 ${colors.iconBg} rounded-xl inline-block mb-4`}>
                  <agent.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors">{agent.title}</h3>
                <p className="text-zinc-600 dark:text-slate-400">{agent.description}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

       <section className="py-16 sm:py-24 bg-zinc-100 dark:bg-zinc-900/50 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="fade-in stagger-1">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop" alt="Sistema de agentes IA automatizados" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
             </div>
             <div className="fade-in">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Showcase Interactivo</h2>
                <p className="text-zinc-600 dark:text-slate-400 mb-6">Experimenta el poder de nuestros agentes en tiempo real. Prueba nuestro showcase para ver cómo pueden interactuar, analizar y ejecutar tareas de forma autónoma.</p>
                <ul className="space-y-3 text-zinc-700 dark:text-slate-300 mb-8">
                  <li className="flex items-center gap-3">Métricas de rendimiento en vivo</li>
                  <li className="flex items-center gap-3">Casos de uso por industria</li>
                  <li className="flex items-center gap-3">Cálculo de ROI instantáneo</li>
                </ul>
                <Link to="#" className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300">
                    Probar Demo
                </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AiAgentsPage;