import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800 text-white px-4 py-3 fixed top-0 left-0 right-0 z-50 border-b border-slate-700" style={{ backgroundColor: '#1e293b', color: '#ffffff', padding: '0.75rem 1rem', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #334155' }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          4ailabs
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/servicios" className="text-white hover:text-blue-400 transition-colors">
            Servicios
          </Link>
          <Link to="/calculadora-roi" className="text-white hover:text-blue-400 transition-colors">
            ROI
          </Link>
          <Link to="/contacto" className="text-white hover:text-blue-400 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;