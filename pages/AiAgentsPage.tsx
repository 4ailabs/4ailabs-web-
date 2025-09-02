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
    <div className="bg-zinc-950">
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-purple-900/30 via-zinc-950 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc-800 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-4 fade-in">
              <MessageSquare className="h-12 w-12 text-cyan-400" />
              <Headset className="h-16 w-16 text-cyan-400" />
              <ShoppingCart className="h-12 w-12 text-cyan-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto fade-in">
            Crea agentes inteligentes que trabajen para ti 24/7
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto fade-in stagger-1">
            Automatiza tareas complejas, mejora la experiencia de cliente y escala tus operaciones con agentes de IA personalizados.
          </p>
          <div className="mt-10 fade-in stagger-2">
            <Link to="/contacto" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Desarrolla tu Agente
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Tipos de Agentes de IA</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Soluciones específicas para cada necesidad de tu negocio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <div key={agent.title} className={`bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group fade-in stagger-${index + 1}`}>
                <div className="p-3 bg-cyan-500/10 rounded-xl inline-block mb-4">
                  <agent.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{agent.title}</h3>
                <p className="text-slate-400">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="fade-in stagger-1">
                <div className="bg-black p-4 rounded-xl border border-zinc-700">
                    <div className="bg-black p-6 rounded-lg h-80 flex flex-col font-mono text-sm text-green-400">
                        <p>&gt; <span className="text-white">Connecting to 4ailabs Agent Framework...</span></p>
                        <p>&gt; Connection successful.</p>
                        <p className="mt-4">&gt; <span className="text-white">Agent_Sales_Bot:</span> What can I help you find today?</p>
                        <p className="text-yellow-400 animate-pulse mt-2">_</p>
                    </div>
                </div>
             </div>
             <div className="fade-in">
                <h2 className="text-3xl font-bold text-white mb-4">Showcase Interactivo</h2>
                <p className="text-slate-400 mb-6">Experimenta el poder de nuestros agentes en tiempo real. Prueba nuestro showcase para ver cómo pueden interactuar, analizar y ejecutar tareas de forma autónoma.</p>
                <ul className="space-y-3 text-slate-300 mb-8">
                  <li className="flex items-center gap-3">Métricas de rendimiento en vivo</li>
                  <li className="flex items-center gap-3">Casos de uso por industria</li>
                  <li className="flex items-center gap-3">Cálculo de ROI instantáneo</li>
                </ul>
                <Link to="#" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
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