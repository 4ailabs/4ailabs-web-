import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { allServices } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">Nuestros Servicios de IA</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Impulsamos la innovación y la eficiencia en tu empresa con soluciones de inteligencia artificial a la medida.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {allServices.map((service, index) => {
              const colors = [
                { iconBg: 'bg-purple-100/50 dark:bg-cyan-500/10', icon: 'text-purple-600 dark:text-cyan-400', buttonBg: 'bg-purple-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-purple-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-purple-700 dark:text-cyan-300' },
                { iconBg: 'bg-indigo-100/50 dark:bg-cyan-500/10', icon: 'text-indigo-600 dark:text-cyan-400', buttonBg: 'bg-indigo-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-indigo-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-indigo-700 dark:text-cyan-300' },
                { iconBg: 'bg-blue-100/50 dark:bg-cyan-500/10', icon: 'text-blue-600 dark:text-cyan-400', buttonBg: 'bg-blue-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-blue-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-blue-700 dark:text-cyan-300' },
                { iconBg: 'bg-cyan-100/50 dark:bg-cyan-500/10', icon: 'text-cyan-600 dark:text-cyan-400', buttonBg: 'bg-cyan-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-cyan-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-cyan-700 dark:text-cyan-300' },
                { iconBg: 'bg-emerald-100/50 dark:bg-cyan-500/10', icon: 'text-emerald-600 dark:text-cyan-400', buttonBg: 'bg-emerald-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-emerald-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-emerald-700 dark:text-cyan-300' },
                { iconBg: 'bg-orange-100/50 dark:bg-cyan-500/10', icon: 'text-orange-600 dark:text-cyan-400', buttonBg: 'bg-orange-100/50 dark:bg-cyan-500/20', buttonHover: 'hover:bg-orange-200/50 dark:hover:bg-cyan-500/30', buttonText: 'text-orange-700 dark:text-cyan-300' }
              ][index % 6];
              
              return (
              <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in stagger-${index + 1}`}>
                <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${colors.iconBg} rounded-xl`}>
                      <service.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">{service.title}</h2>
                  </div>
                  <p className="text-zinc-600 dark:text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-slate-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to={service.ctaLink}
                      className={`inline-flex items-center ${colors.buttonBg} ${colors.buttonHover} ${colors.buttonText} font-bold py-3 px-6 rounded-full transition duration-300 group`}
                    >
                      {service.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                  <img src={service.imageUrl} alt={service.title} className="rounded-2xl shadow-lg shadow-slate-400/10 dark:shadow-cyan-500/10 w-full h-auto object-cover" />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;