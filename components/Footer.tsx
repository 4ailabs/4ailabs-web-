import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, MapPin } from 'lucide-react';
import { navLinks, socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 dark:text-cyan-400" />
              <span className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">4ailabs</span>
            </Link>
            <p className="text-zinc-600 dark:text-slate-400 text-xs sm:text-sm">
              Asesoría especializada, desarrollo de sistemas IA y educación tecnológica para impulsar tu negocio al futuro.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={`https://${social.name.toLowerCase()}.com/4ailabs`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300">
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Navegación</h3>
            <ul className="space-y-1 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link to="/ia-medica" className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">IA Médica y Healthcare</Link></li>
              <li><Link to="/agentes-ia" className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">Agentes de IA</Link></li>
              <li><Link to="/servicios" className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">Asesoría Empresarial</Link></li>
              <li><Link to="/educacion" className="text-zinc-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm">Educación y Capacitación</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-slate-400">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-slate-600 dark:text-cyan-400 flex-shrink-0" />
                <span>Ciudad de México</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-slate-600 dark:text-cyan-400 flex-shrink-0" />
                <span>info@4ailabs.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs sm:text-sm text-zinc-500 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} 4ailabs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;