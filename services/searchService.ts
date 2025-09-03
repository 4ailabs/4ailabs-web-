import { navLinks, servicesSubmenu, technologies, newsItems, allServices } from '../constants';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'service' | 'technology' | 'news' | 'article';
  path: string;
  category?: string;
  tags?: string[];
  relevance: number;
}

export interface SearchFilters {
  type?: string[];
  category?: string[];
}

class SearchService {
  private searchIndex: SearchResult[] = [];

  constructor() {
    this.buildSearchIndex();
  }

  private buildSearchIndex() {
    // Páginas principales
    navLinks.forEach(link => {
      this.searchIndex.push({
        id: `page-${link.path}`,
        title: link.name,
        description: this.getPageDescription(link.path),
        type: 'page',
        path: link.path,
        relevance: 10
      });
    });

    // Servicios
    allServices.forEach(service => {
      this.searchIndex.push({
        id: `service-${service.title}`,
        title: service.title,
        description: service.description,
        type: 'service',
        path: service.ctaLink,
        category: 'Servicios',
        tags: service.points,
        relevance: 9
      });
    });

    // Tecnologías
    technologies.forEach(tech => {
      this.searchIndex.push({
        id: `tech-${tech.name}`,
        title: tech.name,
        description: tech.description,
        type: 'technology',
        path: '/tecnologias',
        category: tech.category,
        relevance: 8
      });
    });

    // Noticias
    newsItems.forEach(news => {
      this.searchIndex.push({
        id: `news-${news.id}`,
        title: news.title,
        description: news.summary,
        type: 'news',
        path: `/noticias/${news.id}`,
        category: news.category,
        relevance: 7
      });
    });

    // Servicios del submenú
    servicesSubmenu.forEach(service => {
      this.searchIndex.push({
        id: `subservice-${service.path}`,
        title: service.name,
        description: this.getServiceDescription(service.path),
        type: 'service',
        path: service.path,
        category: 'Servicios',
        relevance: 8
      });
    });
  }

  private getPageDescription(path: string): string {
    const descriptions: { [key: string]: string } = {
      '/servicios': 'Descubre todos nuestros servicios de IA y automatización empresarial',
      '/tecnologias': 'Conoce las tecnologías y APIs que utilizamos para crear soluciones de IA',
      '/nosotros': 'Conoce al equipo de 4ailabs y nuestra misión de transformar empresas con IA',
      '/noticias': 'Mantente al día con las últimas noticias e innovaciones en inteligencia artificial',
      '/contacto': 'Ponte en contacto con nuestro equipo para consultas y proyectos de IA'
    };
    return descriptions[path] || 'Página de 4ailabs';
  }

  private getServiceDescription(path: string): string {
    const descriptions: { [key: string]: string } = {
      '/agentes-ia': 'Desarrollo de agentes inteligentes autónomos para automatizar procesos empresariales',
      '/ia-medica': 'Soluciones de IA para el sector salud, diagnóstico médico e investigación',
      '/context-engineering': 'Optimización avanzada de modelos de IA mediante técnicas de ingeniería de contexto',
      '/educacion': 'Programas de capacitación y educación en inteligencia artificial',
      '/investigacion': 'Investigación y desarrollo en tecnologías de IA de vanguardia'
    };
    return descriptions[path] || 'Servicio especializado de 4ailabs';
  }

  search(query: string, filters?: SearchFilters): SearchResult[] {
    if (!query.trim()) return [];

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    let results = this.searchIndex.map(item => {
      const titleMatch = this.calculateRelevance(item.title.toLowerCase(), searchTerms);
      const descriptionMatch = this.calculateRelevance(item.description.toLowerCase(), searchTerms);
      const tagsMatch = item.tags ? this.calculateRelevance(item.tags.join(' ').toLowerCase(), searchTerms) : 0;
      const categoryMatch = item.category ? this.calculateRelevance(item.category.toLowerCase(), searchTerms) : 0;

      const totalRelevance = (titleMatch * 3) + (descriptionMatch * 2) + (tagsMatch * 1.5) + (categoryMatch * 1) + item.relevance;

      return {
        ...item,
        relevance: totalRelevance
      };
    });

    // Filtrar por tipo si se especifica
    if (filters?.type && filters.type.length > 0) {
      results = results.filter(item => filters.type!.includes(item.type));
    }

    // Filtrar por categoría si se especifica
    if (filters?.category && filters.category.length > 0) {
      results = results.filter(item => item.category && filters.category!.includes(item.category));
    }

    // Ordenar por relevancia y devolver los mejores resultados
    return results
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 20);
  }

  private calculateRelevance(text: string, searchTerms: string[]): number {
    let score = 0;
    
    searchTerms.forEach(term => {
      if (text.includes(term)) {
        score += 1;
        // Bonus por coincidencia exacta
        if (text.includes(` ${term} `) || text.startsWith(term) || text.endsWith(term)) {
          score += 0.5;
        }
        // Bonus por coincidencia al inicio
        if (text.startsWith(term)) {
          score += 1;
        }
      }
    });

    return score;
  }

  getSuggestions(query: string): string[] {
    if (!query.trim()) return [];

    const suggestions = new Set<string>();
    const searchTerms = query.toLowerCase();

    // Buscar en títulos
    this.searchIndex.forEach(item => {
      if (item.title.toLowerCase().includes(searchTerms)) {
        suggestions.add(item.title);
      }
    });

    // Buscar en descripciones
    this.searchIndex.forEach(item => {
      const words = item.description.toLowerCase().split(' ');
      words.forEach(word => {
        if (word.startsWith(searchTerms) && word.length > searchTerms.length) {
          suggestions.add(word);
        }
      });
    });

    return Array.from(suggestions).slice(0, 5);
  }

  getPopularSearches(): string[] {
    return [
      'agentes de IA',
      'context engineering',
      'IA médica',
      'OpenAI',
      'automatización',
      'chatbots',
      'machine learning',
      'diagnóstico médico'
    ];
  }
}

export const searchService = new SearchService();
