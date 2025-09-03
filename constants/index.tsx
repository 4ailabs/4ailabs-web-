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
  { name: 'Investigación', path: '/investigacion' },
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
  { value: 'Expertos', label: 'Equipo especializado' },
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
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
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
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
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
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
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
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
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
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
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
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
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
      title: 'Attention Is All You Need',
      authors: ['A. Vaswani', 'N. Shazeer', 'N. Parmar', 'J. Uszkoreit', 'L. Jones', 'A. N. Gomez', 'L. Kaiser', 'I. Polosukhin'],
      date: '2017-06-12',
      category: 'Machine Learning y Deep Learning',
      summary: 'Introducimos el Transformer, una nueva arquitectura de red basada únicamente en mecanismos de atención, prescindiendo de recurrencia y convoluciones, logrando el estado del arte en traducción automática.',
      pdfUrl: 'https://arxiv.org/abs/1706.03762',
      keywords: ['Transformer', 'Attention', 'NLP', 'Neural Networks']
    },
    {
      id: 'r-002',
      title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
      authors: ['J. Devlin', 'M. Chang', 'K. Lee', 'K. Toutanova'],
      date: '2018-10-11',
      category: 'Procesamiento de Lenguaje Natural (NLP)',
      summary: 'Introducimos BERT (Bidirectional Encoder Representations from Transformers), diseñado para pre-entrenar representaciones bidireccionales profundas mediante el condicionamiento conjunto del contexto izquierdo y derecho en todas las capas.',
      pdfUrl: 'https://arxiv.org/abs/1810.04805',
      keywords: ['BERT', 'Transformer', 'Pre-training', 'Bidirectional', 'NLP']
    },
    {
      id: 'r-003',
      title: 'Generative Adversarial Networks',
      authors: ['I. Goodfellow', 'J. Pouget-Abadie', 'M. Mirza', 'B. Xu', 'D. Warde-Farley', 'S. Ozair', 'A. Courville', 'Y. Bengio'],
      date: '2014-06-10',
      category: 'Machine Learning y Deep Learning',
      summary: 'Proponemos un nuevo framework para estimar modelos generativos mediante un proceso adversarial, donde entrenamos simultáneamente dos modelos: un generador G que captura la distribución de datos y un discriminador D que estima la probabilidad de que una muestra provenga de los datos de entrenamiento.',
      pdfUrl: 'https://arxiv.org/abs/1406.2661',
      keywords: ['GAN', 'Generative Models', 'Adversarial Training', 'Deep Learning']
    },
    {
      id: 'r-004',
      title: 'Deep Residual Learning for Image Recognition',
      authors: ['K. He', 'X. Zhang', 'S. Ren', 'J. Sun'],
      date: '2015-12-10',
      category: 'Visión por Computadora',
      summary: 'Presentamos una arquitectura de red residual que es sustancialmente más profunda que las utilizadas anteriormente. Proporcionamos evidencia exhaustiva de que estas redes residuales son más fáciles de optimizar y pueden obtener precisión de redes sustancialmente más profundas.',
      pdfUrl: 'https://arxiv.org/abs/1512.03385',
      keywords: ['ResNet', 'Deep Learning', 'Computer Vision', 'CNN', 'Residual Networks']
    },
    {
      id: 'r-005',
      title: 'Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments',
      authors: ['R. Lowe', 'Y. Wu', 'A. Tamar', 'J. Harb', 'P. Abbeel', 'I. Mordatch'],
      date: '2017-06-07',
      category: 'Agentes Inteligentes',
      summary: 'Proponemos una extensión multi-agente de actor-critic que considera la información de acción de otros agentes y no requiere un modelo diferenciable del entorno. Demostramos que los agentes aprenden a cooperar y competir en entornos mixtos.',
      pdfUrl: 'https://arxiv.org/abs/1706.02275',
      keywords: ['Multi-Agent', 'Actor-Critic', 'Reinforcement Learning', 'MADDPG']
    },
    {
      id: 'r-006',
      title: 'CheXNet: Radiologist-Level Pneumonia Detection on Chest X-Rays with Deep Learning',
      authors: ['P. Rajpurkar', 'J. Irvin', 'K. Zhu', 'B. Yang', 'H. Mehta', 'T. Duan', 'D. Ding', 'A. Bagul', 'C. Langlotz', 'K. Shpanskaya', 'M. P. Lungren', 'A. Y. Ng'],
      date: '2017-11-14',
      category: 'IA Médica y Bioinformática',
      summary: 'Desarrollamos un algoritmo que puede detectar neumonía en radiografías de tórax a nivel de radiólogo. CheXNet es una red neuronal convolucional de 121 capas entrenada en ChestX-ray14, con más de 100,000 imágenes de rayos X frontales.',
      pdfUrl: 'https://arxiv.org/abs/1711.05225',
      keywords: ['Medical AI', 'Computer Vision', 'Pneumonia Detection', 'X-Ray', 'Deep Learning']
    },
    {
      id: 'r-007',
      title: 'Language Models are Few-Shot Learners',
      authors: ['T. Brown', 'B. Mann', 'N. Ryder', 'M. Subbiah', 'J. D. Kaplan', 'P. Dhariwal', 'A. Neelakantan', 'et al.'],
      date: '2020-05-28',
      category: 'Procesamiento de Lenguaje Natural (NLP)',
      summary: 'Entrenamos GPT-3, un modelo de lenguaje autoregresivo con 175 mil millones de parámetros, y evaluamos su rendimiento en más de dos docenas de tareas de NLP, demostrando capacidades de few-shot learning sin fine-tuning.',
      pdfUrl: 'https://arxiv.org/abs/2005.14165',
      keywords: ['GPT-3', 'Large Language Models', 'Few-Shot Learning', 'Autoregressive', 'NLP']
    },
    {
      id: 'r-008',
      title: 'CLIP: Learning Transferable Visual Representations from Natural Language Supervision',
      authors: ['A. Radford', 'J. W. Kim', 'C. Hallacy', 'A. Ramesh', 'G. Goh', 'S. Agarwal', 'G. Sastry', 'A. Askell', 'P. Mishkin', 'J. Clark', 'G. Krueger', 'I. Sutskever'],
      date: '2021-02-26',
      category: 'Visión por Computadora',
      summary: 'Pre-entrenamos CLIP en una variedad de pares (imagen, texto) disponibles públicamente en Internet. Después del pre-entrenamiento, se usa lenguaje natural para referenciar conceptos visuales aprendidos, permitiendo transferencia zero-shot del modelo a tareas downstream.',
      pdfUrl: 'https://arxiv.org/abs/2103.00020',
      keywords: ['CLIP', 'Vision-Language', 'Zero-Shot Learning', 'Multimodal', 'Transfer Learning']
    },
    {
      id: 'r-009',
      title: 'Training language models to follow instructions with human feedback',
      authors: ['L. Ouyang', 'J. Wu', 'X. Jiang', 'D. Almeida', 'C. Wainwright', 'P. Mishkin', 'C. Zhang', 'S. Agarwal', 'K. Slama', 'A. Ray', 'et al.'],
      date: '2022-03-04',
      category: 'Machine Learning y Deep Learning',
      summary: 'Presentamos InstructGPT, que hace que los modelos de lenguaje sean más útiles y menos dañinos mediante fine-tuning con retroalimentación humana. Utilizamos aprendizaje por refuerzo desde retroalimentación humana (RLHF) para entrenar modelos que siguen mejor las instrucciones.',
      pdfUrl: 'https://arxiv.org/abs/2203.02155',
      keywords: ['InstructGPT', 'RLHF', 'Human Feedback', 'Instruction Following', 'Alignment']
    },
    {
      id: 'r-010',
      title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      authors: ['P. Lewis', 'E. Perez', 'A. Piktus', 'F. Petroni', 'V. Karpukhin', 'N. Goyal', 'H. Küttler', 'M. Lewis', 'W. Yih', 'T. Rocktäschel', 'S. Riedel', 'D. Kiela'],
      date: '2020-09-22',
      category: 'Procesamiento de Lenguaje Natural (NLP)',
      summary: 'Introducimos RAG, modelos que combinan recuperación paramétrica y no-paramétrica para tareas de NLP intensivas en conocimiento. Para tareas intensivas en conocimiento, demostramos que RAG logra estado del arte en tres benchmarks de Open-domain QA.',
      pdfUrl: 'https://arxiv.org/abs/2005.11401',
      keywords: ['RAG', 'Retrieval', 'Knowledge', 'Question Answering', 'Information Retrieval']
    },
    {
      id: 'r-011',
      title: 'Constitutional AI: Harmlessness from AI Feedback',
      authors: ['Y. Bai', 'A. Jones', 'K. Ndousse', 'A. Askell', 'A. Chen', 'N. DasSarma', 'D. Drain', 'et al.'],
      date: '2022-12-15',
      category: 'Machine Learning y Deep Learning',
      summary: 'Proponemos Constitutional AI (CAI), un método para entrenar un asistente de IA inofensivo usando solo retroalimentación de IA, sin etiquetas humanas que identifiquen contenido dañino. El método utiliza un conjunto de principios o "constitución" para hacer juicios sobre las salidas.',
      pdfUrl: 'https://arxiv.org/abs/2212.08073',
      keywords: ['Constitutional AI', 'AI Safety', 'Harmlessness', 'Self-Supervision', 'AI Alignment']
    },
    {
      id: 'r-012',
      title: 'Deep learning for healthcare: review, opportunities and challenges',
      authors: ['B. Miotto', 'F. Wang', 'S. Wang', 'X. Jiang', 'J. T. Dudley'],
      date: '2018-05-09',
      category: 'IA Médica y Bioinformática',
      summary: 'Proporcionamos una revisión completa de aplicaciones de deep learning en healthcare, incluyendo análisis de imágenes médicas, genomía, drug discovery y registros médicos electrónicos. Discutimos oportunidades y desafíos para la implementación clínica.',
      pdfUrl: 'https://arxiv.org/abs/1806.05695',
      keywords: ['Healthcare AI', 'Deep Learning', 'Medical Imaging', 'Genomics', 'Clinical Applications']
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
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-002',
      title: 'Gigante tecnológico anuncia inversión de $5 mil millones en computación cuántica para IA',
      date: '2024-07-25',
      category: 'Industria y Negocios',
      source: 'Reuters',
      summary: 'La inversión busca acelerar el desarrollo de algoritmos de IA que puedan resolver problemas actualmente intratables, con aplicaciones en finanzas, materiales y salud.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-003',
      title: 'Nuevos algoritmos de IA superan a los humanos en tareas de razonamiento complejo',
      date: '2024-07-22',
      category: 'Avances Tecnológicos',
      source: 'MIT Technology Review',
      summary: 'Un reciente paper demuestra cómo los nuevos modelos de "árbol de pensamiento" permiten a la IA explorar múltiples líneas de razonamiento antes de llegar a una conclusión, mejorando drásticamente su rendimiento.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'n-004',
      title: 'La Unión Europea finaliza el borrador de la Ley de Inteligencia Artificial',
      date: '2024-07-20',
      category: 'Regulación y Ética',
      source: 'The Guardian',
      summary: 'El marco regulatorio, pionero a nivel mundial, clasifica las aplicaciones de IA por nivel de riesgo y establece normas estrictas para sistemas considerados de "alto riesgo", como los utilizados en infraestructuras críticas.',
      imageUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop'
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
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop'
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
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d9?q=80&w=2072&auto=format&fit=crop'
    },
    {
      id: 'n-009',
      title: 'Startup española desarrolla IA para optimizar cultivos y reducir desperdicio alimentario',
      date: '2024-08-05',
      category: 'Aplicaciones Emergentes',
      source: 'El País Tecnología',
      summary: 'Una empresa de Barcelona utiliza computer vision e IoT para monitorear cultivos en tiempo real, prediciendo enfermedades y optimizando el riego, reduciendo el desperdicio en un 40%.',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop'
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
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
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