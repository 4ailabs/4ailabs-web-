import { 
    Briefcase, Code, HeartPulse, MessageSquare, BookOpen, University, 
    Bot, User, Cpu, BrainCircuit, UserCheck, Zap,
    Twitter, Linkedin, Github
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { name: 'Servicios', path: '/servicios' },
  { name: 'ROI', path: '/calculadora-roi' },
  { name: 'Contacto', path: '/contacto' },
];

export const secondaryNavLinks = [
  { name: 'Tecnologías', path: '/tecnologias' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Noticias', path: '/noticias' },
];

export const servicesSubmenu = [
  { name: 'Agentes de IA', path: '/agentes-ia' },
  { name: 'IA Médica', path: '/ia-medica' },
  { name: 'Context Engineering', path: '/context-engineering' },
  { name: 'Educación IA', path: '/educacion' },
  { name: 'Ver todos', path: '/servicios' },
];

export const socialLinks = [
    { name: 'Twitter', icon: Twitter },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'GitHub', icon: Github }
];

export const serviceCards: { title: string; description: string; icon: LucideIcon; color: string; }[] = [
  { title: 'Chatbots Inteligentes', description: 'Chatbots personalizados para atención al cliente y automatización de respuestas.', icon: MessageSquare, color: '#c084fc' },
  { title: 'Agentes de IA', description: 'Agentes inteligentes que ejecutan tareas complejas y toman decisiones autónomas.', icon: Bot, color: '#8b5cf6' },
  { title: 'IA Médica', description: 'Soluciones de inteligencia artificial aplicadas al sector salud con experiencia clínica real.', icon: HeartPulse, color: '#ef4444' },
  { title: 'Context Engineering', description: 'Optimizamos prompts y contexto para maximizar el rendimiento de modelos de IA.', icon: BrainCircuit, color: '#38bdf8' },
  { title: 'Automatización de Procesos', description: 'Automatizamos tareas repetitivas de tu negocio con IA práctica y efectiva.', icon: Zap, color: '#10b981' },
  { title: 'Educación en IA', description: 'Cursos y capacitación especializada en inteligencia artificial para equipos y empresas.', icon: BookOpen, color: '#f59e0b' },
];

export const stats = [
  { value: '3', label: 'Empresas transformadas' },
  { value: '100%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Soporte disponible' },
  { value: '15 min', label: 'Primera consulta gratis' },
];

export const testimonials = [
  {
    quote: "4ailabs nos ayudó a implementar nuestro primer chatbot de IA. Aunque son una startup joven, su conocimiento técnico es impresionante y nos dieron exactamente lo que necesitábamos.",
    metrics: "Primer chatbot • Soporte excepcional • Resultados inmediatos",
    name: "María López",
    role: "Gerente de Operaciones",
    company: "StartupTech",
    photo: "/testimonials/maria-lopez.jpg",
    industry: "Tecnología"
  },
  {
    quote: "Trabajar con 4ailabs fue genial. Son una empresa nueva pero muy profesionales. Nos automatizaron el proceso de respuestas de cliente y nos ahorra mucho tiempo diario.",
    metrics: "Proceso automatizado • Equipo joven • Gran comunicación",
    name: "Roberto Silva", 
    role: "Fundador",
    company: "MiNegocio",
    photo: "/testimonials/roberto-silva.jpg",
    industry: "Servicios"
  },
  {
    quote: "Contraté a 4ailabs para un proyecto de IA personalizado. Aunque están empezando, demostraron ser muy competentes y entregaron exactamente lo prometido.",
    metrics: "Proyecto personalizado • Entrega puntual • Excelente calidad",
    name: "Ana Martínez",
    role: "Directora de Innovación",
    company: "InnovaCorp",
    photo: "/testimonials/ana-martinez.jpg",
    industry: "Consultoría"
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
        icon: MessageSquare,
        title: "Chatbots Inteligentes",
        description: "Desarrollamos chatbots personalizados para automatizar atención al cliente, respuestas frecuentes y procesos de ventas básicos.",
        points: [
            "Chatbots para WhatsApp y redes sociales",
            "Automatización de respuestas frecuentes",
            "Integración con bases de datos de productos/servicios",
            "Escalamiento a agentes humanos cuando sea necesario",
            "Reportes de conversaciones y mejoras continuas"
        ],
        ctaText: "Crear mi chatbot",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1551818255-e6e10975846a?q=80&w=1974&auto=format&fit=crop"
    },
    {
        icon: Bot,
        title: "Agentes de IA Personalizados",
        description: "Desarrollamos agentes inteligentes que pueden ejecutar tareas complejas, tomar decisiones y actuar de forma autónoma en tu negocio.",
        points: [
            "Agentes para automatización de workflows complejos",
            "Sistemas que aprenden y se adaptan a tus procesos",
            "Integración con APIs y bases de datos existentes",
            "Agentes para análisis y generación de reportes",
            "Monitoreo y optimización continua del rendimiento"
        ],
        ctaText: "Crear mi agente",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: HeartPulse,
        title: "IA Médica y Healthcare",
        description: "Aplicaciones especializadas de IA para el sector salud, desarrolladas con experiencia clínica real y conocimiento médico profundo.",
        points: [
            "Análisis de historiales clínicos y datos médicos",
            "Sistemas de apoyo al diagnóstico clínico",
            "Automatización de procesos administrativos hospitalarios",
            "Herramientas de triaje inteligente y priorización",
            "Cumplimiento con regulaciones médicas y privacidad"
        ],
        ctaText: "Consulta médica especializada",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: BrainCircuit,
        title: "Context Engineering",
        description: "Optimizamos prompts, contexto y configuraciones para maximizar el rendimiento de tus modelos de IA y obtener resultados precisos.",
        points: [
            "Diseño y optimización de prompts efectivos",
            "Configuración de contexto para casos de uso específicos",
            "Fine-tuning de modelos para tu dominio",
            "Estrategias RAG (Retrieval-Augmented Generation)",
            "Testing y validación de respuestas de IA"
        ],
        ctaText: "Optimizar mi IA",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: Zap,
        title: "Automatización de Procesos",
        description: "Identificamos y automatizamos tareas repetitivas en tu negocio usando IA práctica que genere resultados inmediatos.",
        points: [
            "Análisis de procesos manuales repetitivos",
            "Automatización de entrada y procesamiento de datos",
            "Generación automática de reportes básicos",
            "Clasificación y organización de información",
            "Implementación paso a paso con capacitación"
        ],
        ctaText: "Automatizar procesos",
        ctaLink: "/contacto",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: BookOpen,
        title: "Educación y Capacitación en IA",
        description: "Programas de formación especializados para equipos y empresas que quieren dominar la inteligencia artificial.",
        points: [
            "Cursos empresariales para directivos y equipos técnicos",
            "Talleres prácticos de implementación de IA",
            "Capacitación en herramientas específicas (ChatGPT, Claude, etc.)",
            "Programas de certificación interna en IA",
            "Asesoría continua post-capacitación"
        ],
        ctaText: "Ver programas de formación",
        ctaLink: "/contacto",
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

export const technologies = [
  {
    name: "OpenAI",
    description: "GPT-4, GPT-4 Turbo, DALL-E, Whisper",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%23000000'%3EOpenAI%3C/text%3E%3C/svg%3E",
    category: "LLM"
  },
  {
    name: "Google Gemini",
    description: "Gemini Pro, Gemini Ultra, PaLM 2",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23000000'%3EGemini API%3C/text%3E%3C/svg%3E",
    category: "LLM"
  },
  {
    name: "Anthropic",
    description: "Claude 3, Claude 3.5 Sonnet",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23000000'%3EAnthropic%3C/text%3E%3C/svg%3E",
    category: "LLM"
  },
  {
    name: "Hugging Face",
    description: "Transformers, Datasets, Spaces",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' font-weight='bold' fill='%23000000'%3EHugging Face%3C/text%3E%3C/svg%3E",
    category: "Platform"
  },
  {
    name: "LangChain",
    description: "Framework para aplicaciones LLM",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23FFFFFF'%3ELangChain%3C/text%3E%3C/svg%3E",
    category: "Framework"
  },
  {
    name: "Pinecone",
    description: "Vector Database para RAG",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23FFFFFF'%3EPinecone%3C/text%3E%3C/svg%3E",
    category: "Database"
  },
  {
    name: "TensorFlow",
    description: "Machine Learning Framework",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' font-weight='bold' fill='%23FFFFFF'%3ETensorFlow%3C/text%3E%3C/svg%3E",
    category: "ML Framework"
  },
  {
    name: "PyTorch",
    description: "Deep Learning Framework",
    logoUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' font-weight='bold' fill='%23FFFFFF'%3EPyTorch%3C/text%3E%3C/svg%3E",
    category: "ML Framework"
  }
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
    },
    {
      id: 'n-005',
      featured: true,
      title: 'ChatGPT alcanza 180 millones de usuarios activos mensuales',
      date: '2024-08-15',
      category: 'Industria y Negocios',
      source: 'TechCrunch',
      summary: 'OpenAI reporta un crecimiento explosivo en el uso de ChatGPT, estableciendo nuevos récords en adopción de tecnología IA. El modelo GPT-4 se está integrando en miles de aplicaciones empresariales.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-006',
      title: 'IA revoluciona el diagnóstico médico: 95% de precisión en detección de cáncer',
      date: '2024-08-12',
      category: 'Aplicaciones Emergentes',
      source: 'Nature Medicine',
      summary: 'Nuevo sistema de IA desarrollado por investigadores médicos logra superar a radiólogos experimentados en la detección temprana de tumores, prometiendo transformar la medicina preventiva.',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-007',
      title: 'Microsoft integra IA en todas sus aplicaciones de Office 365',
      date: '2024-08-10',
      category: 'Industria y Negocios',
      source: 'Microsoft Blog',
      summary: 'La suite Office ahora incluye asistentes de IA nativos en Word, Excel, PowerPoint y Teams, transformando la productividad empresarial con automatización inteligente.',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-008',
      title: 'Google Gemini Pro supera a GPT-4 en benchmarks de razonamiento',
      date: '2024-08-08',
      category: 'Avances Tecnológicos',
      source: 'Google DeepMind',
      summary: 'El nuevo modelo Gemini Pro 1.5 demuestra capacidades superiores en matemáticas, código y razonamiento lógico, estableciendo nuevos estándares en la industria de modelos de lenguaje.',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-009',
      title: 'Startup española desarrolla IA para optimizar cultivos y reducir desperdicio alimentario',
      date: '2024-08-05',
      category: 'Aplicaciones Emergentes',
      source: 'El País Tecnología',
      summary: 'Una empresa de Barcelona utiliza computer vision e IoT para monitorear cultivos en tiempo real, prediciendo enfermedades y optimizando el riego, reduciendo el desperdicio en un 40%.',
      imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-010',
      title: 'Meta lanza Code Llama 2: IA especializada en programación',
      date: '2024-08-03',
      category: 'Avances Tecnológicos',
      source: 'Meta AI',
      summary: 'El nuevo modelo open-source de Meta está optimizado para generar, explicar y debuggear código en más de 20 lenguajes de programación, compitiendo directamente con GitHub Copilot.',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-011',
      title: 'IA detecta fraudes financieros en tiempo real, ahorrando millones a bancos',
      date: '2024-07-30',
      category: 'Aplicaciones Emergentes',
      source: 'Financial Times',
      summary: 'Sistemas de machine learning procesan transacciones bancarias en microsegundos, identificando patrones fraudulentos con 99.7% de precisión y reduciendo falsos positivos en un 60%.',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-012',
      title: 'Anthropic lanza Claude 3.5 Sonnet: nuevo estándar en IA conversacional',
      date: '2024-07-28',
      category: 'Avances Tecnológicos',
      source: 'Anthropic',
      summary: 'El modelo más avanzado de Anthropic combina capacidades de razonamiento superiores con mayor seguridad y alineación, estableciendo nuevos benchmarks en tareas complejas.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
];