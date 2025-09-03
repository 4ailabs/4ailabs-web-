import React from 'react';
import { Rocket, Eye, Gem, Users, Shuffle, Clock } from 'lucide-react';
import { teamMembers } from '../constants';

const AboutPage: React.FC = () => {

  const missionVision = [
    { icon: Rocket, title: "Misión", text: "Transformar empresas e industrias a través de la aplicación estratégica de la inteligencia artificial, generando un impacto positivo y medible." },
    { icon: Eye, title: "Visión", text: "Ser el socio líder en innovación de IA en Latinoamérica, reconocido por nuestra excelencia técnica, ética y compromiso con el éxito de nuestros clientes." },
    { icon: Gem, title: "Valores", text: "Innovación, Integridad, Colaboración, Excelencia y Pasión por la tecnología." },
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">Sobre 4ailabs</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Somos una agencia de IA especializada en el desarrollo de agentes inteligentes. Nuestro equipo de expertos crea soluciones autónomas que automatizan y optimizan los procesos empresariales.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {missionVision.map((item, index) => {
              const colors = [
                { bg: 'bg-blue-50 dark:bg-zinc-900', border: 'border-blue-200 dark:border-zinc-800', icon: 'text-blue-600 dark:text-cyan-400' },
                { bg: 'bg-indigo-50 dark:bg-zinc-900', border: 'border-indigo-200 dark:border-zinc-800', icon: 'text-indigo-600 dark:text-cyan-400' },
                { bg: 'bg-purple-50 dark:bg-zinc-900', border: 'border-purple-200 dark:border-zinc-800', icon: 'text-purple-600 dark:text-cyan-400' }
              ][index % 3];
              
              return (
              <div key={item.title} className={`${colors.bg} ${colors.border} p-8 rounded-2xl border fade-in stagger-${index + 1}`}>
                <item.icon className={`w-12 h-12 ${colors.icon} mx-auto mb-4`} />
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-zinc-600 dark:text-slate-400">{item.text}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Conoce a Nuestro Equipo</h2>
            <p className="mt-4 text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto">Expertos en IA, ciencia de datos e ingeniería de software.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`text-center fade-in stagger-${index + 1}`}>
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-zinc-300 dark:border-zinc-700 object-cover" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{member.name}</h3>
                <p className="text-zinc-600 dark:text-cyan-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;