import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">4ailabs</span>
            </Link>
            <p className="text-slate-400 text-sm">
              Asesoría especializada, desarrollo de sistemas IA y educación tecnológica para impulsar tu negocio al futuro.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/ia-medica" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">IA Médica y Healthcare</Link></li>
              <li><Link to="/agentes-ia" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Agentes de IA</Link></li>
              <li><Link to="/servicios" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Asesoría Empresarial</Link></li>
              <li><Link to="/educacion" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm">Educación y Capacitación</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>Dirección de la empresa, Ciudad, País</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>info@4ailabs.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} 4ailabs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;