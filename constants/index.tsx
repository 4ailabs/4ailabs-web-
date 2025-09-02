import { 
    Briefcase, Code, HeartPulse, MessageSquare, BookOpen, University, 
    Bot, User, Cpu, BrainCircuit, UserCheck, Zap,
    Twitter, Linkedin, Github
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { name: 'Servicios', path: '/servicios' },
  { name: 'Educación', path: '/educacion' },
  { name: 'Investigación', path: '/investigacion' },
  { name: 'Noticias IA', path: '/noticias' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export const socialLinks = [
    { name: 'Twitter', icon: Twitter },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'GitHub', icon: Github }
];

export const serviceCards: { title: string; description: string; icon: LucideIcon; color: string; }[] = [
  { title: 'Asesoría Empresarial IA', description: 'Estrategias de IA para optimizar procesos y generar valor.', icon: Briefcase, color: '#38bdf8' },
  { title: 'Desarrollo de Sistemas IA', description: 'Soluciones a medida, desde chatbots hasta análisis predictivo.', icon: Code, color: '#4ade80' },
  { title: 'IA Médica y Healthcare', description: 'Innovación en diagnóstico, gestión y tratamiento médico.', icon: HeartPulse, color: '#f87171' },
  { title: 'Agentes de IA Inteligentes', description: 'Automatización avanzada con agentes que aprenden y colaboran.', icon: MessageSquare, color: '#c084fc' },
  { title: 'Educación y Capacitación', description: 'Programas para equipos y líderes sobre el poder de la IA.', icon: BookOpen, color: '#facc15' },
  { title: 'Colaboración Académica', description: 'Puentes entre la industria y la academia para investigación de punta.', icon: University, color: '#fb923c' },
];

export const stats = [
  { value: '50+', label: 'Empresas asesoradas' },
  { value: '120+', label: 'Proyectos completados' },
  { value: '1.5k+', label: 'Estudiantes capacitados' },
  { value: '15+', label: 'Instituciones colaboradoras' },
];

export const testimonials = [
  {
    quote: "La implementación de agentes de IA de 4ailabs revolucionó nuestro servicio al cliente. La eficiencia aumentó un 40%.",
    name: "Ana García",
    role: "CEO de Innovatech"
  },
  {
    quote: "Su asesoría fue clave para nuestra transformación digital. Nos guiaron en cada paso con un profundo conocimiento técnico y de negocio.",
    name: "Carlos Rodriguez",
    role: "Director de Operaciones en LogiCore"
  },
  {
    quote: "El sistema de diagnóstico médico que desarrollaron para nosotros ha mejorado la precisión y reducido los tiempos de espera drásticamente.",
    name: "Dra. Elena Torres",
    role: "Jefa de Radiología, Hospital Central"
  }
];

export const partners = [
    { name: 'TechCorp', logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23FFFFFF'%3ETechCorp%3C/text%3E%3C/svg%3E" },
    { name: 'Innovate Solutions', logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23FFFFFF'%3EInnovate%3C/text%3E%3C/svg%3E" },
    { name: 'DataDriven Co.', logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23FFFFFF'%3EDataDriven%3C/text%3E%3C/svg%3E" },
    { name: 'NextGen AI', logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23FFFFFF'%3ENextGen AI%3C/text%3E%3C/svg%3E" },
    { name: 'HealthForward', logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23FFFFFF'%3EHealthForward%3C/text%3E%3C/svg%3E" },
];

export const allServices = [
    {
        icon: Briefcase,
        title: "Asesoría Empresarial en IA",
        description: "Guiamos tu transformación digital, identificando oportunidades y diseñando una hoja de ruta de IA alineada con tus objetivos de negocio.",
        points: [
            "Diagnóstico empresarial y de madurez en IA.",
            "Diseño de estrategia de implementación de IA.",
            "Análisis de ROI y definición de casos de uso.",
            "Roadmap de transformación digital e IA.",
            "Consultoría en automatización de procesos.",
        ],
        ctaText: "Agenda tu diagnóstico",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
    },
    {
        icon: HeartPulse,
        title: "IA Médica y Healthcare",
        description: "Desarrollamos soluciones de vanguardia que apoyan al personal médico, mejoran la gestión hospitalaria y aceleran la investigación.",
        points: [
            "Diagnóstico asistido por IA (análisis de imágenes).",
            "Gestión hospitalaria inteligente y predicción de demanda.",
            "Drug discovery y análisis de ensayos clínicos.",
            "Telemedicina inteligente con chatbots y monitoreo remoto.",
        ],
        ctaText: "Consulta especializada",
        ctaLink: "/ia-medica",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: Bot,
        title: "Agentes de IA Inteligentes",
        description: "Creamos agentes autónomos que automatizan tareas complejas, interactúan con clientes y colaboran en equipos de trabajo.",
        points: [
            "Agentes conversacionales avanzados (multimodales).",
            "Agentes autónomos para ventas, marketing y soporte.",
            "Sistemas multi-agente para tareas colaborativas.",
            "Agentes especializados (financieros, investigación, creativos).",
        ],
        ctaText: "Desarrolla tu agente",
        ctaLink: "/agentes-ia",
        imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975846a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        icon: Code,
        title: "Desarrollo de Sistemas IA",
        description: "Construimos aplicaciones y software a medida, integrando la inteligencia artificial en el núcleo de tus operaciones.",
        points: [
            "Aplicaciones inteligentes (chatbots, sistemas de recomendación).",
            "Software personalizado con integración a sistemas existentes.",
            "Desarrollo de APIs de IA y dashboards analíticos.",
            "Bases de datos inteligentes y procesamiento de big data.",
        ],
        ctaText: "Solicita una cotización",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: BookOpen,
        title: "Educación y Capacitación",
        description: "Empoderamos a tu equipo con el conocimiento y las habilidades necesarias para liderar en la era de la inteligencia artificial.",
        points: [
            "Cursos empresariales para directivos y equipos técnicos.",
            "Programas académicos y certificaciones en IA.",
            "Workshops técnicos y bootcamps intensivos.",
            "Talleres de implementación práctica de IA.",
        ],
        ctaText: "Ver programas",
        ctaLink: "/educacion",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
    },
];

export const teamMembers = [
    { name: "Juan Pérez", role: "Director de IA", imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
    { name: "María González", role: "Líder de Ciencia de Datos", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" },
    { name: "Luis Martínez", role: "Arquitecto de Software IA", imageUrl: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop" },
    { name: "Sofía Hernández", role: "Especialista en NLP", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
];

export const researchCategories = [
  "Todos",
  "Machine Learning y Deep Learning",
  "IA Médica y Bioinformática",
  "Procesamiento de Lenguaje Natural (NLP)",
  "Visión por Computadora",
  "Agentes Inteligentes"
];

export const researchArticles = [
    {
      id: 'r-001',
      title: 'Modelos de Lenguaje para Diagnóstico Médico Asistido',
      authors: ['Dra. Elena Torres', 'Juan Pérez'],
      date: '2024-05-20',
      category: 'IA Médica y Bioinformática',
      summary: 'Este trabajo explora el uso de modelos de lenguaje a gran escala (LLMs) para analizar historiales clínicos no estructurados y sugerir posibles diagnósticos, mostrando una mejora del 15% en la precisión.',
      pdfUrl: '#',
      keywords: ['LLM', 'Diagnóstico Asistido', 'IA en Salud']
    },
    {
      id: 'r-002',
      title: 'Atención es Todo lo que Necesitas (Attention Is All You Need)',
      authors: ['A. Vaswani', 'N. Shazeer', 'et al.'],
      date: '2017-06-12',
      category: 'Machine Learning y Deep Learning',
      summary: 'Introducimos el Transformer, una nueva arquitectura de red basada únicamente en mecanismos de atención, prescindiendo de recurrencia y convoluciones, logrando el estado del arte en traducción automática.',
      pdfUrl: '#',
      keywords: ['Transformer', 'Attention', 'NLP']
    },
    {
      id: 'r-003',
      title: 'Sistemas Multi-Agente para la Optimización de Cadenas de Suministro',
      authors: ['Luis Martínez', 'Carlos Rodríguez'],
      date: '2023-11-05',
      category: 'Agentes Inteligentes',
      summary: 'Presentamos un sistema de agentes colaborativos que negocian y toman decisiones de forma autónoma para optimizar la logística y reducir costos en cadenas de suministro complejas.',
      pdfUrl: '#',
      keywords: ['Multi-Agent Systems', 'Logística', 'Optimización']
    },
    {
      id: 'r-004',
      title: 'Generative Adversarial Networks (GANs) para la Detección de Anomalías en Imágenes Médicas',
      authors: ['Sofía Hernández', 'María González'],
      date: '2024-02-18',
      category: 'Visión por Computadora',
      summary: 'Aplicamos GANs para generar datos sintéticos de imágenes médicas, mejorando el entrenamiento de modelos para la detección de patologías raras con datos limitados.',
      pdfUrl: '#',
      keywords: ['GANs', 'Computer Vision', 'IA Médica']
    }
];


export const newsCategories = [
    "Todos",
    "Avances Tecnológicos",
    "Industria y Negocios",
    "Aplicaciones Emergentes",
    "Regulación y Ética"
];

export const newsItems = [
    {
      id: 'n-001',
      featured: true,
      title: 'La IA generativa alcanza un nuevo hito en la creación de fármacos',
      date: '2024-07-26',
      category: 'Aplicaciones Emergentes',
      source: 'Science Daily',
      summary: 'Investigadores han utilizado un modelo de IA para diseñar una nueva molécula candidata a fármaco en un tiempo récord, reduciendo potencialmente años del ciclo de descubrimiento de medicamentos.',
      imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-002',
      title: 'Gigante tecnológico anuncia inversión de $5 mil millones en computación cuántica para IA',
      date: '2024-07-25',
      category: 'Industria y Negocios',
      source: 'Reuters',
      summary: 'La inversión busca acelerar el desarrollo de algoritmos de IA que puedan resolver problemas actualmente intratables, con aplicaciones en finanzas, materiales y salud.',
      imageUrl: 'https://images.unsplash.com/photo-1635070049281-7b0aa7a27b9c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-003',
      title: 'Nuevos algoritmos de IA superan a los humanos en tareas de razonamiento complejo',
      date: '2024-07-22',
      category: 'Avances Tecnológicos',
      source: 'MIT Technology Review',
      summary: 'Un reciente paper demuestra cómo los nuevos modelos de "árbol de pensamiento" permiten a la IA explorar múltiples líneas de razonamiento antes de llegar a una conclusión, mejorando drásticamente su rendimiento.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-004',
      title: 'La Unión Europea finaliza el borrador de la Ley de Inteligencia Artificial',
      date: '2024-07-20',
      category: 'Regulación y Ética',
      source: 'The Guardian',
      summary: 'El marco regulatorio, pionero a nivel mundial, clasifica las aplicaciones de IA por nivel de riesgo y establece normas estrictas para sistemas considerados de "alto riesgo", como los utilizados en infraestructuras críticas.',
      imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop'
    }
];