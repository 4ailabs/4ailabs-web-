import { GoogleGenerativeAI } from "@google/generative-ai";

interface DocumentAnalysisResult {
  summary: string;
  keyInsights: string[];
  technicalRequirements: string[];
  businessImpact: {
    opportunities: string[];
    risks: string[];
    estimatedROI: string;
  };
  recommendedServices: {
    service: string;
    relevance: number;
    reasoning: string;
  }[];
  actionableRecommendations: string[];
  implementationComplexity: 'Low' | 'Medium' | 'High';
  timelineEstimate: string;
}

interface DocumentInput {
  content: string;
  type: 'requirement' | 'business_plan' | 'technical_spec' | 'other';
  context?: string;
}

class DocumentAnalysisService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      console.log("Document Analysis API Key status:", apiKey ? "Found" : "Not found");
      
      if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.length > 10) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        console.log("Document Analysis AI initialized successfully");
      } else {
        console.warn("GEMINI_API_KEY not configured, using fallback responses");
      }
    } catch (error) {
      console.error("Error initializing Document Analysis Service:", error);
    }
  }

  async analyzeDocument(document: DocumentInput): Promise<DocumentAnalysisResult> {
    if (!this.genAI) {
      return this.getMockAnalysis(document);
    }

    try {
      const prompt = this.buildAnalysisPrompt(document);
      
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Eres un consultor senior especializado en análisis de documentos para proyectos de IA empresarial. 

        Tu expertise incluye:
        - Identificación de oportunidades de automatización e IA
        - Análisis de requerimientos técnicos y de negocio
        - Evaluación de complejidad de implementación
        - Recomendaciones estratégicas personalizadas
        - Estimación de ROI y timeline de proyectos

        Proporciona análisis profundos, específicos y accionables. Identifica oportunidades que el cliente podría no haber considerado. Responde en español con enfoque técnico y estratégico.`
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return this.parseAnalysisResponse(text, document);
    } catch (error) {
      console.error("Error analyzing document:", error);
      return this.getMockAnalysis(document);
    }
  }

  private buildAnalysisPrompt(document: DocumentInput): string {
    return `
Analiza el siguiente documento para identificar oportunidades de IA y automatización:

TIPO DE DOCUMENTO: ${document.type}
CONTEXTO ADICIONAL: ${document.context || 'No especificado'}

CONTENIDO DEL DOCUMENTO:
${document.content}

Proporciona un análisis estructurado en el siguiente formato JSON:

{
  "summary": "Resumen ejecutivo del documento y oportunidades identificadas (2-3 oraciones)",
  "keyInsights": [
    "Insight clave 1 sobre el negocio o proceso",
    "Insight clave 2 sobre oportunidades de mejora",
    "Insight clave 3 sobre tecnología o innovación"
  ],
  "technicalRequirements": [
    "Requerimiento técnico 1 identificado",
    "Requerimiento técnico 2 identificado",
    "Requerimiento técnico 3 identificado"
  ],
  "businessImpact": {
    "opportunities": [
      "Oportunidad de negocio 1",
      "Oportunidad de negocio 2"
    ],
    "risks": [
      "Riesgo identificado 1",
      "Riesgo identificado 2"
    ],
    "estimatedROI": "Estimación de ROI esperado con descripción"
  },
  "recommendedServices": [
    {
      "service": "Agentes de IA",
      "relevance": 85,
      "reasoning": "Razón por la cual este servicio es relevante"
    },
    {
      "service": "IA Médica",
      "relevance": 60,
      "reasoning": "Razón por la cual este servicio podría ser útil"
    }
  ],
  "actionableRecommendations": [
    "Recomendación accionable 1 con pasos específicos",
    "Recomendación accionable 2 con métricas",
    "Recomendación accionable 3 con timeline"
  ],
  "implementationComplexity": "Medium",
  "timelineEstimate": "6-8 semanas para implementación inicial"
}

Responde SOLO con el JSON, sin texto adicional.
    `;
  }

  private parseAnalysisResponse(text: string, document: DocumentInput): DocumentAnalysisResult {
    try {
      // Limpiar el texto y extraer JSON
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const jsonStr = jsonMatch[0];
        const parsed = JSON.parse(jsonStr);
        
        // Validar que tiene la estructura correcta
        if (parsed.summary && parsed.keyInsights && parsed.businessImpact) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Error parsing document analysis response:", error);
    }

    // Fallback si no se puede parsear
    return this.getMockAnalysis(document);
  }

  private getMockAnalysis(document: DocumentInput): DocumentAnalysisResult {
    const complexity = this.estimateComplexity(document.content);
    
    return {
      summary: "El documento presenta oportunidades significativas para automatización e implementación de IA. Se identificaron múltiples procesos que pueden optimizarse mediante agentes inteligentes.",
      
      keyInsights: [
        "Procesos manuales repetitivos que consumen recursos significativos",
        "Oportunidades de mejora en la toma de decisiones mediante análisis de datos",
        "Potencial para reducir errores humanos mediante automatización inteligente"
      ],
      
      technicalRequirements: [
        "Integración con sistemas existentes",
        "Procesamiento de datos en tiempo real",
        "Interface de usuario intuitiva para los equipos",
        "Sistema de monitoreo y analytics"
      ],
      
      businessImpact: {
        opportunities: [
          "Reducción del 40-60% en tiempo de procesamiento manual",
          "Mejora en precisión de datos y análisis",
          "Escalabilidad mejorada para crecimiento futuro"
        ],
        risks: [
          "Resistencia inicial al cambio por parte de usuarios",
          "Necesidad de capacitación técnica del equipo"
        ],
        estimatedROI: "150-300% en los primeros 12 meses, considerando ahorro en horas de trabajo y reducción de errores"
      },
      
      recommendedServices: this.getRecommendedServices(document),
      
      actionableRecommendations: [
        "Realizar audit técnico detallado de sistemas actuales en las próximas 2 semanas",
        "Implementar proyecto piloto en área de mayor impacto identificada",
        "Establecer métricas baseline antes de la implementación",
        "Planificar programa de capacitación para equipos clave"
      ],
      
      implementationComplexity: complexity,
      timelineEstimate: complexity === 'Low' ? '4-6 semanas' : complexity === 'Medium' ? '6-10 semanas' : '10-16 semanas'
    };
  }

  private estimateComplexity(content: string): 'Low' | 'Medium' | 'High' {
    const complexKeywords = [
      'integración', 'legacy', 'múltiples sistemas', 'compliance', 'regulatorio',
      'tiempo real', 'big data', 'machine learning', 'deep learning'
    ];
    
    const mediumKeywords = [
      'automatización', 'proceso', 'workflow', 'datos', 'reportes', 'análisis'
    ];
    
    const lowerContent = content.toLowerCase();
    const complexCount = complexKeywords.filter(keyword => lowerContent.includes(keyword)).length;
    const mediumCount = mediumKeywords.filter(keyword => lowerContent.includes(keyword)).length;
    
    if (complexCount >= 2) return 'High';
    if (complexCount >= 1 || mediumCount >= 3) return 'Medium';
    return 'Low';
  }

  private getRecommendedServices(document: DocumentInput): { service: string; relevance: number; reasoning: string }[] {
    const content = document.content.toLowerCase();
    const services = [];

    // Análisis de contenido para recomendar servicios
    if (content.includes('chatbot') || content.includes('atención al cliente') || content.includes('soporte')) {
      services.push({
        service: "Chatbots Inteligentes",
        relevance: 90,
        reasoning: "El documento indica necesidad de automatización de atención al cliente o soporte"
      });
    }

    if (content.includes('automatización') || content.includes('proceso') || content.includes('workflow')) {
      services.push({
        service: "Agentes de IA",
        relevance: 85,
        reasoning: "Se identificaron múltiples procesos que pueden automatizarse con agentes inteligentes"
      });
    }

    if (content.includes('médic') || content.includes('hospital') || content.includes('salud') || content.includes('diagnóstico')) {
      services.push({
        service: "IA Médica",
        relevance: 95,
        reasoning: "El contexto médico requiere soluciones especializadas en healthcare"
      });
    }

    if (content.includes('datos') || content.includes('análisis') || content.includes('reportes')) {
      services.push({
        service: "Context Engineering",
        relevance: 75,
        reasoning: "Se requiere optimización de modelos de IA para análisis de datos efectivo"
      });
    }

    if (content.includes('capacitación') || content.includes('entrenamiento') || content.includes('educación')) {
      services.push({
        service: "Educación en IA",
        relevance: 70,
        reasoning: "Se identifica necesidad de capacitación especializada en IA"
      });
    }

    // Si no se encuentran servicios específicos, agregar servicios generales
    if (services.length === 0) {
      services.push({
        service: "Agentes de IA",
        relevance: 60,
        reasoning: "Oportunidades generales de automatización identificadas en el documento"
      });
    }

    return services.slice(0, 3); // Máximo 3 recomendaciones
  }
}

export const documentAnalysisService = new DocumentAnalysisService();
export type { DocumentAnalysisResult, DocumentInput };