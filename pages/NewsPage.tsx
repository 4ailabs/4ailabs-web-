import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Rss, ExternalLink, Calendar, Tag } from 'lucide-react';
import { newsItems, newsCategories } from '../constants';

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredNews = useMemo(() => {
    if (activeCategory === 'Todos') {
      return newsItems;
    }
    return newsItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  const featuredNews = filteredNews.find(item => item.featured) || filteredNews[0];
  const otherNews = filteredNews.filter(item => item.id !== featuredNews?.id);

  return (
    <div className="bg-zinc-950">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rss className="mx-auto h-16 w-16 text-cyan-400 mb-4 fade-in" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white fade-in">Noticias de Inteligencia Artificial</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Mantente al día con los últimos avances, tendencias y debates en el mundo de la IA.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {newsCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-16">
            {featuredNews && (
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 fade-in">
                    <img src={featuredNews.imageUrl} alt={featuredNews.title} className="rounded-xl w-full h-full object-cover aspect-video lg:aspect-auto" />
                    <div>
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                            <div className="flex items-center gap-2"><Tag className="w-4 h-4 text-cyan-400" /> {featuredNews.category}</div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredNews.date}</div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors"><a href="#">{featuredNews.title}</a></h2>
                        <p className="text-slate-300 mb-6">{featuredNews.summary}</p>
                        <a href="#" className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300 group">
                            Leer más <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                 </div>
            )}

            {otherNews.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherNews.map((item, index) => (
                        <div key={item.id} className={`bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex flex-col hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 transform hover:-translate-y-1 fade-in stagger-${index + 1}`}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs text-cyan-400 mb-2"><Tag className="w-3 h-3" /> {item.category}</div>
                                <h3 className="text-lg font-bold text-white mb-3 flex-grow"><a href="#" className="hover:text-cyan-400 transition-colors">{item.title}</a></h3>
                                <div className="flex items-center justify-between text-sm text-slate-400 mt-auto">
                                    <span>{item.source}</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {filteredNews.length === 0 && (
                 <div className="text-center py-16">
                    <p className="text-slate-400 text-lg">No hay noticias en esta categoría.</p>
                 </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;