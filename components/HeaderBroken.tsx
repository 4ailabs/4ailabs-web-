import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';
import { navLinks, secondaryNavLinks, servicesSubmenu } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-zinc-950 shadow-sm border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Bot className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-zinc-900 dark:text-white">4ailabs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === 'Servicios') {
                return (
                  <div key={link.path} className="relative group">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 z-50">
                        <div className="py-2">
                          <Link
                            to={link.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
                              className="block px-4 py-2 text-sm text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            >
                              {subLink.name}
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
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
            
            {/* Secondary Nav */}
            {secondaryNavLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-zinc-600 dark:text-slate-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {link.name}
                </Link>
              ))}
              {secondaryNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;