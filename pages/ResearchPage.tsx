import React, { useState, useMemo } from 'react';
import { FileText, Download, Calendar, Users, Tag, Search } from 'lucide-react';
import { researchArticles, researchCategories } from '../constants';

const ResearchPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    let articles = researchArticles;

    // 1. Filter by category
    if (activeCategory !== 'Todos') {
      articles = articles.filter(article => article.category === activeCategory);
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      articles = articles.filter(article => 
        article.title.toLowerCase().includes(lowercasedQuery) ||
        article.summary.toLowerCase().includes(lowercasedQuery) ||
        article.authors.join(', ').toLowerCase().includes(lowercasedQuery) ||
        article.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedQuery))
      );
    }

    return articles;
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-zinc-950">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="mx-auto h-16 w-16 text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white fade-in">Investigación y Artículos Científicos</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Explora nuestras publicaciones y los avances más recientes en el campo de la inteligencia artificial.
          </p>
        </div>
      </section>
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {researchCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
                <input 
                    type="text" 
                    placeholder="Buscar por palabra clave..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-slate-400 w-full focus:outline-none focus:border-cyan-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>
          
          <div className="space-y-8">
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
              <div key={article.id} className={`bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 fade-in stagger-${index + 1}`}>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">{article.title}</h2>
                    <a href={article.pdfUrl} className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 font-semibold px-4 py-2 rounded-full text-sm hover:bg-cyan-500/30 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Descargar PDF</span>
                    </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-2"><Users className="w-4 h-4" /> <span>{article.authors.join(', ')}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <span>{article.date}</span></div>
                  <div className="flex items-center gap-2"><Tag className="w-4 h-4" /> <span>{article.category}</span></div>
                </div>
                <p className="text-slate-300 mb-4">{article.summary}</p>
                <div className="flex flex-wrap gap-2">
                    {article.keywords.map(keyword => (
                        <span key={keyword} className="bg-zinc-700 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">{keyword}</span>
                    ))}
                </div>
              </div>
            ))
            ) : (
                <div className="text-center py-16">
                    <p className="text-slate-400 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
                </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;