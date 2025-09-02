import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
      <Bot className="w-8 h-8 text-cyan-400" />
      <span className="text-2xl font-bold text-white">4ailabs</span>
    </Link>
  );
  
  const NavItems = ({ className }: { className?: string }) => (
    <nav className={className}>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              isActive
                ? 'text-cyan-400'
                : 'text-slate-300 hover:text-white hover:bg-zinc-800/50'
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex items-center space-x-4">
            <NavItems className="flex items-center space-x-1" />
            <Link to="/contacto" className="ml-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300 transform hover:scale-105 shadow-lg">
              Consulta Gratuita
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <NavItems className="flex flex-col space-y-1" />
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-bold py-3 px-4 rounded-full text-base transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;