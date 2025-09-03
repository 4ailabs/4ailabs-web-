import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ExternalLink, Share2, Bookmark } from 'lucide-react';
import { newsItems } from '../constants';

const NewsArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Buscar la noticia por ID
  const article = newsItems.find(item => item.id === id);
  
  if (!article) {
    return (
      <div className="bg-white dark:bg-zinc-950 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Noticia no encontrada</h1>
                                  <Link to="/noticias" className="text-zinc-600 dark:text-cyan-400 hover:text-zinc-500 dark:hover:text-cyan-300">
            Volver a las noticias
          </Link>
        </div>
      </div>
    );
  }

  // Contenido ficticio extendido para cada noticia
  const getArticleContent = (articleId: string) => {
    const contents: { [key: string]: { content: string; author: string; readTime: string } } = {
      'n-001': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En un avance revolucionario que podría transformar la industria farmacéutica, investigadores han logrado utilizar inteligencia artificial para diseñar una nueva molécula candidata a fármaco en un tiempo récord, reduciendo potencialmente años del ciclo de descubrimiento de medicamentos.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El equipo de investigación, liderado por científicos de instituciones de renombre mundial, utilizó un modelo de IA generativa especializado en química medicinal para identificar y optimizar una nueva clase de compuestos terapéuticos. El proceso, que tradicionalmente toma entre 5 a 10 años, se completó en solo 18 meses.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Metodología Innovadora</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La metodología combina técnicas avanzadas de machine learning con simulación molecular para predecir la eficacia y seguridad de nuevos compuestos. El sistema de IA analizó más de 2 millones de estructuras moleculares conocidas y generó variaciones optimizadas para un objetivo terapéutico específico.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Este hito representa un cambio de paradigma en el descubrimiento de fármacos", comentó la Dra. Sarah Chen, directora del proyecto. "La IA no solo acelera el proceso, sino que también identifica patrones que los humanos podrían pasar por alto".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Implicaciones para el Futuro</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este avance tiene implicaciones significativas para el tratamiento de enfermedades raras y condiciones médicas complejas. La capacidad de acelerar el descubrimiento de fármacos podría llevar a tratamientos más efectivos y accesibles para millones de pacientes en todo el mundo.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los investigadores planean continuar refinando su metodología y esperan que esta tecnología esté disponible para la comunidad científica en los próximos dos años.
          </p>
        `,
        author: "Dr. María González",
        readTime: "8 min"
      },
      'n-002': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En una movida que está redefiniendo el panorama tecnológico, uno de los gigantes tecnológicos más influyentes del mundo ha anunciado una inversión histórica de $5 mil millones en computación cuántica aplicada a inteligencia artificial.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Esta inversión masiva busca acelerar el desarrollo de algoritmos de IA que puedan resolver problemas actualmente intratables, con aplicaciones prometedoras en finanzas, ciencia de materiales, y especialmente en el sector salud.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Revolución Cuántica en IA</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La computación cuántica promete revolucionar la IA al permitir el procesamiento de datos a una escala y velocidad sin precedentes. Los algoritmos cuánticos podrían resolver problemas de optimización que actualmente requieren años de computación en solo minutos.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Estamos en el umbral de una nueva era computacional", declaró el CEO de la empresa. "La combinación de IA y computación cuántica nos permitirá abordar desafíos globales que antes considerábamos imposibles".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Aplicaciones Prácticas</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Entre las aplicaciones más prometedoras se encuentran el descubrimiento de nuevos materiales para energías limpias, la optimización de cadenas de suministro globales, y el desarrollo de medicamentos personalizados basados en el perfil genético individual.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La inversión incluye la construcción de nuevos centros de investigación cuántica y la contratación de más de 1,000 especialistas en física cuántica y machine learning.
          </p>
        `,
        author: "Carlos Rodríguez",
        readTime: "6 min"
      },
      'n-003': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Un reciente estudio publicado en Nature ha demostrado cómo los nuevos algoritmos de "árbol de pensamiento" permiten a la IA explorar múltiples líneas de razonamiento antes de llegar a una conclusión, mejorando drásticamente su rendimiento en tareas complejas.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La investigación, desarrollada por un equipo internacional de científicos, muestra que estos algoritmos superan consistentemente a los humanos en tareas que requieren razonamiento lógico complejo y planificación estratégica.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">El Método del Árbol de Pensamiento</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            A diferencia de los modelos tradicionales que generan respuestas de forma lineal, el método del árbol de pensamiento permite a la IA explorar múltiples caminos de razonamiento simultáneamente, evaluando cada opción antes de seleccionar la más prometedora.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Es como si la IA pudiera pensar en voz alta y explorar diferentes estrategias antes de decidir", explica la Dra. Elena Torres, coautora del estudio. "Esto le da una ventaja significativa en tareas que requieren planificación y razonamiento abstracto".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Resultados Impresionantes</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En pruebas estandarizadas de razonamiento matemático, los algoritmos de árbol de pensamiento lograron un 94% de precisión, superando el 87% promedio de los humanos expertos. En tareas de planificación estratégica, la IA demostró una capacidad superior para anticipar consecuencias a largo plazo.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los investigadores creen que esta tecnología podría revolucionar campos como la investigación científica, la toma de decisiones empresariales y el desarrollo de políticas públicas.
          </p>
        `,
        author: "Ana García",
        readTime: "7 min"
      },
      'n-004': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La Unión Europea ha finalizado el borrador de la primera Ley de Inteligencia Artificial a nivel mundial, estableciendo un marco regulatorio pionero que clasifica las aplicaciones de IA por nivel de riesgo y establece normas estrictas para sistemas considerados de "alto riesgo".
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Esta legislación histórica, que entrará en vigor en 2025, representa el intento más ambicioso hasta la fecha de regular el desarrollo y uso de la inteligencia artificial, balanceando la innovación con la protección de derechos fundamentales.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Clasificación por Riesgo</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La ley establece cuatro categorías de riesgo: mínimo, limitado, alto y prohibido. Los sistemas de alto riesgo, como aquellos utilizados en infraestructuras críticas, educación, empleo y servicios públicos, estarán sujetos a evaluaciones de conformidad obligatorias.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Esta regulación establece un precedente global para el desarrollo responsable de la IA", comentó el comisario europeo de Mercado Interior. "Protegemos a los ciudadanos mientras fomentamos la innovación".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto en la Industria</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Las empresas que desarrollen o utilicen sistemas de IA de alto riesgo deberán implementar medidas de transparencia, auditoría y supervisión humana. Esto incluye la obligación de documentar el proceso de entrenamiento de los modelos y garantizar la explicabilidad de las decisiones automatizadas.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La ley también prohíbe explícitamente ciertas aplicaciones, como el reconocimiento facial en tiempo real en espacios públicos y sistemas de puntuación social, estableciendo multas de hasta el 6% de los ingresos anuales por incumplimiento.
          </p>
        `,
        author: "Luis Martínez",
        readTime: "9 min"
      }
    };
    
    return contents[articleId] || {
      content: `<p class="mb-6 text-slate-300 leading-relaxed">Contenido de la noticia en desarrollo...</p>`,
      author: "Equipo Editorial",
      readTime: "5 min"
    };
  };

  const articleContent = getArticleContent(article.id);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <section className="py-8 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/noticias" 
            className="inline-flex items-center text-zinc-600 dark:text-cyan-400 hover:text-zinc-500 dark:hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a las noticias
          </Link>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-zinc-600 dark:text-cyan-400" /> 
                {article.category}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <span>Por {articleContent.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{articleContent.readTime} de lectura</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-zinc-700 dark:text-slate-300 leading-relaxed mb-8">
              {article.summary}
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-slate-300 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-slate-300 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
                Guardar
              </button>
            </div>
          </div>

          <div className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
            />
          </div>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: articleContent.content }}
          />

          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Fuente: {article.source}</p>
                <p className="text-slate-400 text-sm">Publicado el {article.date}</p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Ver fuente original <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="mt-12 flex justify-center">
            <Link 
              to="/noticias" 
              className="inline-flex items-center bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todas las noticias
            </Link>
          </div>

          {/* Noticias Relacionadas */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Noticias Relacionadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter(item => item.id !== article.id && item.category === article.category)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id} 
                    to={`/noticias/${relatedArticle.id}`}
                    className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-400/10 dark:hover:shadow-cyan-400/10 group"
                  >
                    <img 
                      src={relatedArticle.imageUrl} 
                      alt={relatedArticle.title} 
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-cyan-400 mb-2">
                        <Tag className="w-3 h-3" /> {relatedArticle.category}
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-slate-400">{relatedArticle.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsArticlePage;
