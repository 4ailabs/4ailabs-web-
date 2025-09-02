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
    <div className="bg-zinc-950">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white fade-in">Sobre 4ailabs</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Somos un equipo de expertos apasionados por la inteligencia artificial, dedicados a resolver los desafíos más complejos de nuestros clientes.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {missionVision.map((item, index) => (
              <div key={item.title} className={`bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 fade-in stagger-${index + 1}`}>
                <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Conoce a Nuestro Equipo</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Expertos en IA, ciencia de datos e ingeniería de software.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className={`text-center fade-in stagger-${index + 1}`}>
                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-zinc-700 object-cover" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;