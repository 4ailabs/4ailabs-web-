import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown, Search } from 'lucide-react';
import { navLinks, secondaryNavLinks, servicesSubmenu } from '../constants';
import GlobalSearch from './GlobalSearch';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Atajo de teclado para búsqueda (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
      <Bot className="w-8 h-8 text-cyan-400 dark:text-cyan-400" />
      <span className="text-2xl font-bold text-zinc-900 dark:text-white">4ailabs</span>
    </Link>
  );
  
  const NavItems = ({ className }: { className?: string }) => (
    <nav className={className}>
      {navLinks.map((link) => {
        if (link.name === 'Servicios') {
          return (
            <div key={link.path} className="relative group">
                                      <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 flex items-center gap-1"
                        >
                          {link.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
              <div className={`absolute top-full left-0 mt-1 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-50 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-2">
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                                                  className="block px-4 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    Ver todos los servicios
                  </Link>
                  {servicesSubmenu.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                                                    className="block px-4 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        
        return (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'text-cyan-400 dark:text-cyan-400'
                  : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`
            }
          >
            {link.name}
          </NavLink>
        );
      })}
      <div className="relative group hidden lg:block">
        <button
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 flex items-center gap-1"
        >
          Más
          <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="py-2">
            {secondaryNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const MobileNavItems = ({ className }: { className?: string }) => (
    <nav className={className}>
      {navLinks.map((link) => {
        if (link.name === 'Servicios') {
          return (
            <div key={link.path}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 flex items-center justify-between"
              >
                {link.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md transition-colors"
                  >
                    Ver todos los servicios
                  </Link>
                  {servicesSubmenu.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className="block px-3 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }
        
        return (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'text-cyan-400 dark:text-cyan-400'
                  : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`
            }
          >
            {link.name}
          </NavLink>
        );
      })}
      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <p className="px-3 py-1 text-xs font-medium text-zinc-500 dark:text-slate-500 uppercase tracking-wide">Más información</p>
        {secondaryNavLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'text-cyan-400 dark:text-cyan-400'
                  : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="hidden md:flex items-center space-x-4">
            <NavItems className="flex items-center space-x-1" />
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 p-2 text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all-smooth group"
              title="Buscar (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
              <span className="hidden lg:inline-flex items-center gap-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-slate-500 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 group-hover:text-zinc-700 dark:group-hover:text-slate-400 transition-colors">
                <kbd className="text-xs">⌘</kbd>
                <kbd className="text-xs">K</kbd>
              </span>
            </button>
            <ThemeToggle size="sm" />
            <Link to="/contacto" className="ml-4 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-2 px-4 rounded-full text-sm transition-all-smooth transform hover:scale-105 shadow-lg">
              Consulta Gratuita
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 dark:focus:ring-white transition-all-smooth"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <MobileNavItems className="flex flex-col space-y-1" />
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold py-3 px-4 rounded-full text-base transition duration-300"
              >
                <Search className="w-5 h-5" />
                Buscar
              </button>
              <ThemeToggle size="md" />
            </div>
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-2 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-3 px-4 rounded-full text-base transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      )}

      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;