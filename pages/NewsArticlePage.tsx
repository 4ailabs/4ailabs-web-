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
            Un gigante tecnológico ha anunciado una inversión histórica de $5 mil millones para acelerar el desarrollo de algoritmos de IA que aprovechen la computación cuántica, prometiendo resolver problemas que actualmente son intratables con tecnología convencional.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Esta inversión masiva marca un punto de inflexión en la carrera por combinar dos de las tecnologías más transformadoras de nuestro tiempo: la inteligencia artificial y la computación cuántica.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Aplicaciones Revolucionarias</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los algoritmos cuánticos de IA tendrán aplicaciones inmediatas en finanzas, donde podrán optimizar carteras de inversión en tiempo real considerando miles de variables simultáneamente. En el sector de materiales, acelerarán el descubrimiento de nuevos compuestos para baterías y superconductores.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Estamos entrando en una era donde la IA cuántica resolverá en minutos problemas que tomarían décadas a los supercomputadores actuales", explicó la directora de investigación cuántica de la compañía.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto en la Salud</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En medicina, esta tecnología permitirá simular interacciones moleculares complejas para diseñar medicamentos personalizados. Los investigadores esperan reducir el tiempo de desarrollo de fármacos de 15 años a menos de 5 años.
          </p>
        `,
        author: "Carmen Rodriguez",
        readTime: "6 min"
      },
      'n-005': {
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
      },
      'n-006': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            OpenAI ha reportado que ChatGPT ha alcanzado los 180 millones de usuarios activos mensuales, estableciendo un nuevo récord en la adopción de tecnología de inteligencia artificial y consolidando su posición como la aplicación de IA más utilizada del mundo.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este crecimiento explosivo, que representa un aumento del 20% en solo tres meses, demuestra la creciente integración de la IA en la vida cotidiana y los procesos empresariales a nivel global.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Adopción Empresarial</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El modelo GPT-4 se está integrando rápidamente en miles de aplicaciones empresariales, desde asistentes virtuales hasta herramientas de análisis de datos. Las empresas reportan aumentos de productividad de hasta 40% en tareas que involucran procesamiento de texto y análisis.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Estamos viendo una transformación fundamental en cómo las personas trabajan y aprenden", comentó el CEO de OpenAI. "ChatGPT se ha convertido en el asistente digital universal que imaginamos cuando comenzamos esta empresa".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto Educativo</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En el sector educativo, ChatGPT está siendo utilizado por millones de estudiantes y profesores como herramienta de aprendizaje personalizado. Las universidades están desarrollando nuevos marcos pedagógicos que integran la IA de manera responsable y efectiva.
          </p>
        `,
        author: "Ana García",
        readTime: "5 min"
      },
      'n-006': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Un sistema de inteligencia artificial desarrollado por investigadores médicos ha logrado superar a radiólogos experimentados en la detección temprana de tumores, alcanzando una precisión del 95% en el diagnóstico de diferentes tipos de cáncer.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este avance prometedor podría transformar la medicina preventiva, permitiendo diagnósticos más tempranos y precisos que podrían salvar millones de vidas anualmente.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Metodología Innovadora</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El sistema utiliza deep learning avanzado entrenado con más de 500,000 imágenes médicas de alta resolución. El modelo puede identificar patrones sutiles en mamografías, tomografías y resonancias magnéticas que a menudo pasan desapercibidos para el ojo humano.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Lo más impresionante es que la IA no solo detecta tumores conocidos, sino que identifica anomalías que podrían convertirse en cancerosas años antes de que sean visibles con métodos tradicionales", explicó la Dra. María Fernández, oncóloga principal del estudio.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Implementación Clínica</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Varios hospitales en Europa y Estados Unidos ya están implementando este sistema en sus departamentos de radiología. Los resultados iniciales muestran una reducción del 60% en falsos positivos y un aumento del 30% en la detección temprana de cánceres agresivos.
          </p>
        `,
        author: "Dr. Carlos Mendez",
        readTime: "7 min"
      },
      'n-007': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Microsoft ha anunciado la integración completa de inteligencia artificial en todas sus aplicaciones de Office 365, transformando fundamentalmente la productividad empresarial con asistentes de IA nativos en Word, Excel, PowerPoint y Teams.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Esta actualización masiva, denominada "Copilot for Work", convierte a cada aplicación de Office en un asistente inteligente capaz de automatizar tareas complejas y generar contenido de alta calidad.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Revolución en Word y PowerPoint</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En Word, la IA puede redactar documentos completos basados en simples indicaciones, mientras mantiene el tono y estilo corporativo. PowerPoint ahora genera presentaciones automáticamente, incluyendo diseños profesionales, gráficos y contenido relevante extraído de fuentes corporativas.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Estamos democratizando la creación de contenido profesional", explicó el vicepresidente de productividad de Microsoft. "Ahora cualquier empleado puede crear documentos y presentaciones de nivel ejecutivo".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Excel Inteligente y Teams Mejorado</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Excel incorpora análisis predictivo automático y generación de fórmulas complejas mediante lenguaje natural. Teams incluye resúmenes automáticos de reuniones, transcripciones en tiempo real y sugerencias de seguimiento basadas en el contexto de la conversación.
          </p>
        `,
        author: "Roberto Sanchez",
        readTime: "6 min"
      },
      'n-008': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Google DeepMind ha presentado Gemini Pro 1.5, su modelo de lenguaje más avanzado que supera a GPT-4 en múltiples benchmarks de razonamiento, matemáticas y programación, estableciendo nuevos estándares en la industria.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este modelo representa un salto cuántico en capacidades de IA, demostrando habilidades superiores en tareas que requieren razonamiento lógico complejo y comprensión contextual profunda.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Rendimiento Superior</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            En pruebas estandarizadas de matemáticas avanzadas, Gemini Pro 1.5 alcanzó un 96% de precisión comparado con el 89% de GPT-4. En tareas de programación, generó código funcional en el 94% de los casos, superando significativamente a modelos anteriores.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Hemos logrado que la IA razone más como un humano experto", comentó el director de investigación de Google DeepMind. "Gemini Pro puede mantener coherencia en conversaciones largas y resolver problemas multi-paso con una precisión sin precedentes".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto Científico</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El modelo ya está siendo utilizado por investigadores para acelerar descubrimientos científicos, desde el diseño de nuevos materiales hasta la optimización de algoritmos complejos. Su capacidad para procesar y sintetizar información técnica lo convierte en un asistente invaluable para la comunidad científica.
          </p>
        `,
        author: "Elena Martinez",
        readTime: "8 min"
      },
      'n-009': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Una startup española con sede en Barcelona ha desarrollado un sistema revolucionario que combina computer vision e IoT para monitorear cultivos en tiempo real, logrando reducir el desperdicio alimentario en un 40% mientras optimiza el uso de recursos naturales.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            La tecnología, denominada "AgriSense AI", utiliza una red de sensores inteligentes y cámaras de alta resolución para crear un gemelo digital de las plantaciones, prediciendo problemas antes de que se manifiesten visualmente.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Tecnología Innovadora</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El sistema procesa imágenes satelitales, datos de sensores de humedad y temperatura, y fotografías de drones para crear mapas predictivos de la salud de los cultivos. La IA puede identificar signos tempranos de plagas, enfermedades y deficiencias nutricionales con una precisión del 92%.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Nuestro objetivo es democratizar la agricultura de precisión", explicó la CEO de la startup. "Ahora pequeños productores pueden acceder a tecnología que antes solo tenían las grandes corporaciones agrícolas".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto Medioambiental</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los agricultores que utilizan el sistema reportan una reducción del 35% en el uso de agua y del 50% en pesticidas, mientras mantienen o incrementan sus rendimientos. La tecnología ya está siendo adoptada en más de 200 explotaciones agrícolas en España, Francia e Italia.
          </p>
        `,
        author: "Miguel Torres",
        readTime: "6 min"
      },
      'n-010': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Meta ha lanzado Code Llama 2, un modelo de inteligencia artificial open-source especializado en programación que está optimizado para generar, explicar y debuggear código en más de 20 lenguajes de programación, compitiendo directamente con GitHub Copilot.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este lanzamiento marca un hito importante en la democratización de herramientas de IA para desarrolladores, ofreciendo capacidades de nivel profesional de forma gratuita y open-source.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Capacidades Avanzadas</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Code Llama 2 puede generar código funcional a partir de descripciones en lenguaje natural, refactorizar código existente y explicar algoritmos complejos de manera comprensible. Su entrenamiento incluye millones de repositorios de GitHub y documentación técnica especializada.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Queremos acelerar el desarrollo de software global", comentó el director de IA de Meta. "Code Llama 2 no solo genera código, sino que enseña mejores prácticas y ayuda a los desarrolladores a aprender nuevos lenguajes más rápido".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Adopción e Integración</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Principales IDEs como Visual Studio Code, JetBrains y Sublime Text ya están integrando Code Llama 2 como extensión nativa. Las pruebas beta muestran que los desarrolladores pueden completar tareas de codificación hasta 60% más rápido utilizando el asistente de IA.
          </p>
        `,
        author: "David Rodriguez",
        readTime: "7 min"
      },
      'n-011': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Sistemas avanzados de machine learning están revolucionando la detección de fraudes financieros, procesando transacciones bancarias en microsegundos e identificando patrones fraudulentos con una precisión del 99.7%, ahorrando millones de dólares a instituciones financieras globales.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Esta nueva generación de sistemas anti-fraude utiliza algoritmos de detección de anomalías en tiempo real, análisis de comportamiento y redes neuronales profundas para identificar actividades sospechosas instantáneamente.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Tecnología de Vanguardia</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los sistemas analizan más de 150 variables por transacción, incluyendo patrones de gasto, ubicación geográfica, tiempo de transacción y comportamiento del usuario. La IA puede detectar fraudes sofisticados que involucran múltiples cuentas y transacciones coordinadas.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Hemos logrado reducir los falsos positivos en un 60%, lo que significa menos inconvenientes para los clientes legítimos", explicó el director de seguridad cibernética de un banco internacional. "Simultáneamente, detectamos fraudes que antes pasaban desapercibidos".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Impacto Global</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Los bancos que han implementado estos sistemas reportan ahorros de hasta $50 millones anuales en pérdidas por fraude. La tecnología también está siendo adaptada para detectar lavado de dinero y financiación del terrorismo con resultados prometedores.
          </p>
        `,
        author: "Patricia Silva",
        readTime: "8 min"
      },
      'n-012': {
        content: `
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Anthropic ha lanzado Claude 3.5 Sonnet, su modelo de IA conversacional más avanzado que establece nuevos estándares en seguridad, alineación y capacidades de razonamiento, posicionándose como una alternativa robusta en el competitivo mercado de asistentes de IA.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Este modelo representa años de investigación en AI safety y constitutional AI, combinando capacidades técnicas superiores con un enfoque innovador hacia la alineación de valores y la reducción de sesgos.
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Seguridad y Alineación</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            Claude 3.5 Sonnet utiliza técnicas de "Constitutional AI" para alinear sus respuestas con valores humanos fundamentales. El modelo ha demostrado una reducción del 85% en respuestas potencialmente dañinas comparado con modelos anteriores, mientras mantiene utilidad y precisión.
          </p>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            "Nuestro enfoque prioriza la seguridad sin sacrificar capacidades", comentó el CEO de Anthropic. "Claude 3.5 Sonnet puede manejar tareas complejas mientras mantiene un comportamiento consistentemente ético y transparente".
          </p>
          
          <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-4 mt-8">Capacidades Técnicas</h3>
          
          <p class="mb-6 text-zinc-700 dark:text-slate-300 leading-relaxed">
            El modelo excede en tareas que requieren razonamiento ético complejo, análisis multi-perspectiva y toma de decisiones en situaciones ambiguas. Sus capacidades de programación y análisis de datos rivalizan con los mejores modelos del mercado, pero con mayor confiabilidad y explicabilidad.
          </p>
        `,
        author: "Dr. Andrea Lopez",
        readTime: "6 min"
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
