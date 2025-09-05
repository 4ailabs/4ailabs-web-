import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  // Mapeo de rutas a nombres legibles
  const routeNames: { [key: string]: string } = {
    '/': 'Inicio',
    '/servicios': 'Servicios',
    '/ia-medica': 'IA Médica',
    '/agentes-ia': 'Agentes de IA',
    '/context-engineering': 'Context Engineering',
    '/tecnologias': 'Tecnologías',
    '/calculadora-roi': 'Calculadora ROI',
    '/educacion': 'Educación IA',
    '/investigacion': 'Investigación',
    '/noticias': 'Noticias',
    '/nosotros': 'Nosotros',
    '/contacto': 'Contacto',
  };

  // Generar breadcrumbs basado en la ruta actual
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Inicio', path: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = routeNames[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ name, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // No mostrar breadcrumbs en la página de inicio
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Ir al inicio"
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </Link>
          
          {breadcrumbs.slice(1).map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
              {index === breadcrumbs.length - 2 ? (
                <span className="text-zinc-900 dark:text-white font-medium">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link 
                  to={breadcrumb.path}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
