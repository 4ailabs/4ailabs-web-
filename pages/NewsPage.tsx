import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Rss, ExternalLink, Calendar, Tag, Search } from 'lucide-react';
import { newsItems, newsCategories } from '../constants';

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    let filtered = newsItems;
    
    // Filtrar por categoría
    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeCategory, searchTerm]);
  
  const featuredNews = filteredNews.find(item => item.featured) || filteredNews[0];
  const otherNews = filteredNews.filter(item => item.id !== featuredNews?.id);

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rss className="mx-auto h-16 w-16 text-cyan-500 dark:text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">Noticias de Inteligencia Artificial</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Mantente al día con los últimos avances, tendencias y debates en el mundo de la IA.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra de búsqueda */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500 dark:text-slate-400" />
              <input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-slate-400 focus:outline-none focus:border-slate-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-slate-500 dark:focus:ring-cyan-500 transition"
              />
            </div>
          </div>

          {/* Filtros por categoría */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {newsCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-slate-600 dark:bg-cyan-500 text-white'
                      : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-slate-300 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-16">
            {featuredNews && (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-2xl border border-blue-200 dark:border-zinc-800 fade-in">
                    <img src={featuredNews.imageUrl} alt={featuredNews.title} className="rounded-xl w-full h-full object-cover aspect-video lg:aspect-auto" />
                    <div>
                        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-slate-400 mb-3">
                            <div className="flex items-center gap-2"><Tag className="w-4 h-4 text-zinc-600 dark:text-cyan-400" /> {featuredNews.category}</div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredNews.date}</div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4 hover:text-zinc-600 dark:hover:text-cyan-400 transition-colors">
                          <Link to={`/noticias/${featuredNews.id}`}>{featuredNews.title}</Link>
                        </h2>
                        <p className="text-zinc-700 dark:text-slate-300 mb-6">{featuredNews.summary}</p>
                        <Link to={`/noticias/${featuredNews.id}`} className="inline-flex items-center font-semibold text-zinc-600 dark:text-cyan-400 hover:text-zinc-500 dark:hover:text-cyan-300 group">
                            Leer más <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                 </div>
            )}

            {otherNews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherNews.map((item, index) => {
                      const colors = [
                        { bg: 'bg-blue-50 dark:bg-zinc-900', border: 'border-blue-200 dark:border-zinc-800', hover: 'hover:border-blue-400 dark:hover:border-cyan-400/50' },
                        { bg: 'bg-indigo-50 dark:bg-zinc-900', border: 'border-indigo-200 dark:border-zinc-800', hover: 'hover:border-indigo-400 dark:hover:border-cyan-400/50' },
                        { bg: 'bg-purple-50 dark:bg-zinc-900', border: 'border-purple-200 dark:border-zinc-800', hover: 'hover:border-purple-400 dark:hover:border-cyan-400/50' }
                      ][index % 3];
                      
                      return (
                        <Link key={item.id} to={`/noticias/${item.id}`} className={`${colors.bg} ${colors.border} ${colors.hover} rounded-xl overflow-hidden border flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-cyan-400/10 transform hover:-translate-y-1 fade-in stagger-${index + 1} group`}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-cyan-400 mb-2"><Tag className="w-3 h-3" /> {item.category}</div>
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 flex-grow group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-slate-400 mt-auto">
                                    <span>{item.source}</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </Link>
                      );
                    })}
                </div>
            )}

            {filteredNews.length === 0 && (
                 <div className="text-center py-16">
                    <Search className="mx-auto w-16 h-16 text-zinc-400 dark:text-slate-400 mb-4" />
                    <p className="text-zinc-600 dark:text-slate-400 text-lg mb-2">
                      {searchTerm 
                        ? `No se encontraron noticias para "${searchTerm}"`
                        : "No hay noticias en esta categoría."
                      }
                    </p>
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="text-zinc-600 dark:text-cyan-400 hover:text-zinc-500 dark:hover:text-cyan-300 transition-colors"
                      >
                        Limpiar búsqueda
                      </button>
                    )}
                 </div>
            )}

            {filteredNews.length > 0 && (
              <div className="text-center py-4">
                <p className="text-zinc-600 dark:text-slate-400 text-sm">
                  Mostrando {filteredNews.length} noticia{filteredNews.length !== 1 ? 's' : ''}
                  {searchTerm && ` para "${searchTerm}"`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;