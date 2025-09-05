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
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group" 
      onClick={() => setIsMenuOpen(false)}
      title="Ir al inicio"
    >
      <Bot className="w-8 h-8 text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      <span className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">4ailabs</span>
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
                className="px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                {link.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-50">
                  <div className="py-2">
                    {servicesSubmenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-slate-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800'
                  : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
              }`
            }
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );

  const MobileNavItems = () => (
    <nav className="px-4 py-6 space-y-4">
      {navLinks.map((link) => {
        if (link.name === 'Servicios') {
          return (
            <div key={link.path} className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white"
              >
                {link.name}
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2">
                  {servicesSubmenu.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block px-3 py-2 text-sm text-zinc-500 dark:text-slate-400 hover:text-zinc-700 dark:hover:text-slate-300"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {subItem.name}
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
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded-md'
                  : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        );
      })}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
        {secondaryNavLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm transition-colors ${
                isActive
                  ? 'text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 rounded-md'
                  : 'text-zinc-500 dark:text-slate-400 hover:text-zinc-700 dark:hover:text-slate-300'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );

  return (
    <>
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
              <a href="https://wa.me/+525534403571?text=Hola! Me interesa agendar una consulta gratuita de 15 minutos para conocer más sobre sus servicios de IA." target="_blank" rel="noopener noreferrer" className="ml-4 bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-2 px-4 rounded-full text-sm transition-all-smooth transform hover:scale-105 shadow-lg">
                Consulta Gratuita
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
            <MobileNavItems />
            <div className="px-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full p-3 text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Search className="w-5 h-5" />
                <span>Buscar...</span>
              </button>
              <div className="mt-3">
                <ThemeToggle size="sm" />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {isSearchOpen && (
        <GlobalSearch onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
};

export default Header;