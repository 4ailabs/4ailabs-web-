import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, Clock, TrendingUp, Filter } from 'lucide-react';
import { searchService, SearchResult, SearchFilters } from '../services/searchService';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [popularSearches] = useState<string[]>(searchService.getPopularSearches());
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const searchResults = searchService.search(query, filters);
        const searchSuggestions = searchService.getSuggestions(query);
        setResults(searchResults);
        setSuggestions(searchSuggestions);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, [query, filters]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    onClose();
    setQuery('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  const handlePopularSearchClick = (popularSearch: string) => {
    setQuery(popularSearch);
  };

  const toggleFilter = (type: string, value: string) => {
    setFilters(prev => {
      const currentValues = prev[type as keyof SearchFilters] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [type]: newValues.length > 0 ? newValues : undefined
      };
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'service': return '⚙️';
      case 'technology': return '🔧';
      case 'news': return '📰';
      case 'article': return '📝';
      default: return '🔍';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'page': return 'Página';
      case 'service': return 'Servicio';
      case 'technology': return 'Tecnología';
      case 'news': return 'Noticia';
      case 'article': return 'Artículo';
      default: return 'Resultado';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-start justify-center pt-12 sm:pt-20 px-2 sm:px-4" onClick={(e) => e.stopPropagation()}>
        <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 sm:gap-3">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar en toda la aplicación..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-slate-400 focus:outline-none text-sm sm:text-base lg:text-lg"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                  showFilters ? 'bg-slate-500/20 dark:bg-cyan-500/20 text-slate-600 dark:text-cyan-400' : 'text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 text-zinc-600 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-slate-300 mb-1 sm:mb-2">Tipo</label>
                    <div className="space-y-1 sm:space-y-2">
                      {['page', 'service', 'technology', 'news'].map(type => (
                        <label key={type} className="flex items-center gap-2 text-xs sm:text-sm">
                          <input
                            type="checkbox"
                            checked={filters.type?.includes(type) || false}
                            onChange={() => toggleFilter('type', type)}
                            className="rounded border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-slate-600 dark:text-cyan-500 focus:ring-slate-500 dark:focus:ring-cyan-500"
                          />
                          <span className="text-zinc-700 dark:text-slate-300">{getTypeLabel(type)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-slate-300 mb-1 sm:mb-2">Categoría</label>
                    <div className="space-y-1 sm:space-y-2">
                      {['Servicios', 'LLM', 'Framework', 'Aplicaciones Emergentes', 'Avances Tecnológicos'].map(category => (
                        <label key={category} className="flex items-center gap-2 text-xs sm:text-sm">
                          <input
                            type="checkbox"
                            checked={filters.category?.includes(category) || false}
                            onChange={() => toggleFilter('category', category)}
                            className="rounded border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-slate-600 dark:text-cyan-500 focus:ring-slate-500 dark:focus:ring-cyan-500"
                          />
                          <span className="text-zinc-700 dark:text-slate-300">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="p-8 text-center">
                <div className="animate-spin w-6 h-6 border-2 border-slate-500 dark:border-cyan-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-zinc-600 dark:text-slate-400">Buscando...</p>
              </div>
            )}

            {!isLoading && query && results.length > 0 && (
              <div className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-zinc-600 dark:text-slate-400">Resultados para "{query}"</span>
                  <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-slate-400 px-2 py-1 rounded-full">
                    {results.length}
                  </span>
                </div>
                <div className="space-y-2">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{getTypeIcon(result.type)}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                              {result.title}
                            </h3>
                            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-slate-400 px-2 py-1 rounded-full">
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-slate-400 line-clamp-2">
                            {result.description}
                          </p>
                          {result.category && (
                            <p className="text-xs text-slate-600 dark:text-cyan-400 mt-1">{result.category}</p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLoading && query && results.length === 0 && (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-zinc-400 dark:text-slate-400 mx-auto mb-4" />
                <p className="text-zinc-600 dark:text-slate-400 mb-2">No se encontraron resultados</p>
                <p className="text-sm text-zinc-500 dark:text-slate-500">Intenta con otros términos de búsqueda</p>
              </div>
            )}

            {!isLoading && !query && (
              <div className="p-4">
                {/* Popular Searches */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-slate-600 dark:text-cyan-400" />
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Búsquedas populares</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search) => (
                      <button
                        key={search}
                        onClick={() => handlePopularSearchClick(search)}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white rounded-full text-sm transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Suggestions */}
                {suggestions.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-zinc-500 dark:text-slate-400" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Sugerencias</h3>
                    </div>
                    <div className="space-y-1">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left text-zinc-700 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
