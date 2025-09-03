import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      padding: '1rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          4ailabs
        </Link>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/servicios" style={{ color: '#fff', textDecoration: 'none' }}>
            Servicios
          </Link>
          <Link to="/calculadora-roi" style={{ color: '#fff', textDecoration: 'none' }}>
            ROI
          </Link>
          <Link to="/contacto" style={{ color: '#fff', textDecoration: 'none' }}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;