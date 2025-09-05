import { GoogleGenerativeAI } from "@google/generative-ai";

interface UserProfile {
  industry?: string;
  companySize?: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  currentTech?: string[];
  challenges?: string[];
  goals?: string[];
  budget?: 'low' | 'medium' | 'high';
  timeline?: 'urgent' | 'normal' | 'flexible';
  experience?: 'beginner' | 'intermediate' | 'advanced';
}

interface ServiceRecommendation {
  serviceName: string;
  relevanceScore: number;
  reasoning: string;
  benefits: string[];
  estimatedCost: {
    min: number;
    max: number;
    currency: string;
  };
  implementation: {
    complexity: 'Low' | 'Medium' | 'High';
    timeline: string;
    prerequisites: string[];
  };
  successStories?: string[];
  nextSteps: string[];
}

interface PersonalizedRecommendations {
  primaryRecommendation: ServiceRecommendation;
  secondaryRecommendations: ServiceRecommendation[];
  strategicInsights: string[];
  implementationRoadmap: {
    phase: string;
    timeframe: string;
    services: string[];
    expectedOutcome: string;
  }[];
  totalInvestmentRange: {
    min: number;
    max: number;
    timeframe: string;
  };
}

class PersonalizedRecommendationService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      console.log("Personalized Recommendations API Key status:", apiKey ? "Found" : "Not found");
      
      if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.length > 10) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        console.log("Personalized Recommendations AI initialized successfully");
      } else {
        console.warn("GEMINI_API_KEY not configured, using intelligent fallback");
      }
    } catch (error) {
      console.error("Error initializing Personalized Recommendation Service:", error);
    }
  }

  async getPersonalizedRecommendations(userProfile: UserProfile): Promise<PersonalizedRecommendations> {
    if (!this.genAI) {
      return this.getIntelligentFallbackRecommendations(userProfile);
    }

    try {
      const prompt = this.buildRecommendationPrompt(userProfile);
      
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Eres un consultor estratégico senior especializado en IA empresarial con 10+ años de experiencia.

        Tu especialidad es crear roadmaps personalizados de transformación digital mediante IA, considerando:
        - Perfil específico de la empresa (industria, tamaño, madurez tecnológica)
        - Presupuesto y timeline realistas
        - Maximización de ROI por fase de implementación
        - Gestión de riesgo y complejidad técnica
        - Casos de éxito en industrias similares

        SERVICIOS DISPONIBLES DE 4AILABS:
        1. Chatbots Inteligentes ($3,000-5,000) - Automatización de atención al cliente
        2. Agentes de IA ($8,000-12,000) - Automatización de procesos complejos
        3. IA Médica ($15,000-25,000) - Soluciones especializadas en salud
        4. Context Engineering ($3,000-5,000) - Optimización de prompts y modelos
        5. Automatización Empresarial ($4,000-8,000) - Workflows inteligentes
        6. Educación en IA ($2,000-4,000) - Capacitación técnica

        Proporciona recomendaciones específicas, accionables y justificadas. Responde en español.`
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return this.parseRecommendationResponse(text, userProfile);
    } catch (error) {
      console.error("Error getting personalized recommendations:", error);
      return this.getIntelligentFallbackRecommendations(userProfile);
    }
  }

  private buildRecommendationPrompt(userProfile: UserProfile): string {
    return `
Analiza el siguiente perfil de cliente y proporciona recomendaciones personalizadas de servicios de IA:

PERFIL DEL CLIENTE:
- Industria: ${userProfile.industry || 'No especificada'}
- Tamaño de empresa: ${userProfile.companySize || 'No especificado'}
- Tecnologías actuales: ${userProfile.currentTech?.join(', ') || 'No especificadas'}
- Principales desafíos: ${userProfile.challenges?.join(', ') || 'No especificados'}
- Objetivos de negocio: ${userProfile.goals?.join(', ') || 'No especificados'}
- Presupuesto aproximado: ${userProfile.budget || 'No especificado'}
- Timeline deseado: ${userProfile.timeline || 'No especificado'}
- Experiencia con IA: ${userProfile.experience || 'No especificada'}

Proporciona recomendaciones estructuradas en el siguiente formato JSON:

{
  "primaryRecommendation": {
    "serviceName": "Nombre del servicio principal recomendado",
    "relevanceScore": 95,
    "reasoning": "Justificación detallada de por qué es la mejor opción",
    "benefits": [
      "Beneficio específico 1 para este cliente",
      "Beneficio específico 2 cuantificado",
      "Beneficio específico 3 medible"
    ],
    "estimatedCost": {
      "min": 5000,
      "max": 8000,
      "currency": "USD"
    },
    "implementation": {
      "complexity": "Medium",
      "timeline": "6-8 semanas",
      "prerequisites": ["Prerequisito 1", "Prerequisito 2"]
    },
    "successStories": [
      "Caso de éxito relevante en industria similar"
    ],
    "nextSteps": [
      "Paso inmediato 1",
      "Paso inmediato 2"
    ]
  },
  "secondaryRecommendations": [
    {
      "serviceName": "Servicio complementario 1",
      "relevanceScore": 80,
      "reasoning": "Por qué complementa la solución principal",
      "benefits": ["Beneficio 1", "Beneficio 2"],
      "estimatedCost": {
        "min": 3000,
        "max": 5000,
        "currency": "USD"
      },
      "implementation": {
        "complexity": "Low",
        "timeline": "3-4 semanas",
        "prerequisites": ["Prerequisito"]
      },
      "nextSteps": ["Paso 1", "Paso 2"]
    }
  ],
  "strategicInsights": [
    "Insight estratégico 1 sobre el mercado o industria",
    "Insight estratégico 2 sobre oportunidades únicas",
    "Insight estratégico 3 sobre ventajas competitivas"
  ],
  "implementationRoadmap": [
    {
      "phase": "Fase 1: Fundación",
      "timeframe": "0-3 meses",
      "services": ["Servicio A", "Servicio B"],
      "expectedOutcome": "Resultado esperado de esta fase"
    },
    {
      "phase": "Fase 2: Expansión",
      "timeframe": "3-6 meses",
      "services": ["Servicio C"],
      "expectedOutcome": "Resultado esperado de esta fase"
    }
  ],
  "totalInvestmentRange": {
    "min": 8000,
    "max": 15000,
    "timeframe": "6-12 meses"
  }
}

Responde SOLO con el JSON, sin texto adicional.
    `;
  }

  private parseRecommendationResponse(text: string, userProfile: UserProfile): PersonalizedRecommendations {
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const jsonStr = jsonMatch[0];
        const parsed = JSON.parse(jsonStr);
        
        if (parsed.primaryRecommendation && parsed.strategicInsights) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Error parsing recommendation response:", error);
    }

    return this.getIntelligentFallbackRecommendations(userProfile);
  }

  private getIntelligentFallbackRecommendations(userProfile: UserProfile): PersonalizedRecommendations {
    // Algoritmo inteligente para recomendaciones basado en el perfil
    const recommendations = this.analyzeUserProfile(userProfile);
    
    return {
      primaryRecommendation: recommendations.primary,
      secondaryRecommendations: recommendations.secondary,
      strategicInsights: this.generateStrategicInsights(userProfile),
      implementationRoadmap: this.generateImplementationRoadmap(userProfile, recommendations),
      totalInvestmentRange: this.calculateInvestmentRange(recommendations)
    };
  }

  private analyzeUserProfile(userProfile: UserProfile): {
    primary: ServiceRecommendation;
    secondary: ServiceRecommendation[];
  } {
    let primary: ServiceRecommendation;
    let secondary: ServiceRecommendation[] = [];

    // Lógica de recomendación basada en industria
    if (userProfile.industry?.toLowerCase().includes('salud') || 
        userProfile.industry?.toLowerCase().includes('medic') ||
        userProfile.industry?.toLowerCase().includes('hospital')) {
      
      primary = {
        serviceName: "IA Médica",
        relevanceScore: 95,
        reasoning: "Su industria de salud requiere soluciones especializadas que cumplan con regulaciones médicas y optimicen procesos clínicos.",
        benefits: [
          "Diagnóstico asistido con 95% de precisión",
          "Reducción de 40% en tiempo de análisis médico",
          "Cumplimiento automático de regulaciones sanitarias"
        ],
        estimatedCost: { min: 15000, max: 25000, currency: "USD" },
        implementation: {
          complexity: "High",
          timeline: "10-16 semanas",
          prerequisites: ["Certificación médica", "Integración con sistemas hospitalarios"]
        },
        successStories: ["Hospital Regional aumentó eficiencia diagnóstica en 45%"],
        nextSteps: [
          "Auditoría de procesos médicos actuales",
          "Definición de casos de uso prioritarios"
        ]
      };

      secondary.push({
        serviceName: "Educación en IA",
        relevanceScore: 80,
        reasoning: "El personal médico necesita capacitación especializada en IA aplicada a salud.",
        benefits: ["Personal capacitado", "Adopción exitosa de IA"],
        estimatedCost: { min: 3000, max: 5000, currency: "USD" },
        implementation: {
          complexity: "Low",
          timeline: "2-3 semanas",
          prerequisites: ["Identificación de personal clave"]
        },
        nextSteps: ["Evaluar nivel actual del equipo", "Diseñar programa personalizado"]
      });

    } else if (userProfile.companySize === 'startup' || userProfile.companySize === 'small') {
      
      primary = {
        serviceName: "Chatbots Inteligentes",
        relevanceScore: 90,
        reasoning: "Para empresas pequeñas, los chatbots ofrecen el mejor ROI inmediato automatizando atención al cliente 24/7.",
        benefits: [
          "Disponibilidad 24/7 sin costos adicionales",
          "Reducción de 60% en consultas básicas",
          "ROI del 200% en primeros 6 meses"
        ],
        estimatedCost: { min: 3000, max: 5000, currency: "USD" },
        implementation: {
          complexity: "Low",
          timeline: "3-5 semanas",
          prerequisites: ["Definición de FAQs", "Integración con sitio web"]
        },
        successStories: ["Startup tecnológica redujo carga de soporte en 70%"],
        nextSteps: [
          "Mapeo de consultas más frecuentes",
          "Diseño de flujos de conversación"
        ]
      };

    } else {
      
      primary = {
        serviceName: "Agentes de IA",
        relevanceScore: 85,
        reasoning: "Los agentes autónomos pueden automatizar procesos complejos y tomar decisiones inteligentes en su operación.",
        benefits: [
          "Automatización de procesos complejos end-to-end",
          "Toma de decisiones 24/7 basada en datos",
          "Escalabilidad sin incremento proporcional de costos"
        ],
        estimatedCost: { min: 8000, max: 12000, currency: "USD" },
        implementation: {
          complexity: "Medium",
          timeline: "6-10 semanas",
          prerequisites: ["Mapeo de procesos", "Definición de reglas de negocio"]
        },
        successStories: ["Empresa mediana automatizó 80% de procesos administrativos"],
        nextSteps: [
          "Identificación de procesos más impactantes",
          "Análisis de integración con sistemas actuales"
        ]
      };
    }

    // Agregar recomendaciones secundarias comunes
    if (!secondary.length) {
      secondary.push({
        serviceName: "Context Engineering",
        relevanceScore: 75,
        reasoning: "Optimización de modelos para obtener el máximo rendimiento de su inversión en IA.",
        benefits: ["Mejora del 40% en precisión", "Reducción de costos operativos"],
        estimatedCost: { min: 3000, max: 5000, currency: "USD" },
        implementation: {
          complexity: "Medium",
          timeline: "4-6 semanas",
          prerequisites: ["Datos históricos", "Definición de métricas"]
        },
        nextSteps: ["Auditoría de modelos actuales", "Definición de objetivos de optimización"]
      });
    }

    return { primary, secondary };
  }

  private generateStrategicInsights(userProfile: UserProfile): string[] {
    const insights = [];

    if (userProfile.industry?.toLowerCase().includes('salud')) {
      insights.push("El sector salud está experimentando una adopción acelerada de IA post-pandemia, con enfoque en telemedicina y diagnóstico automatizado.");
    }

    if (userProfile.companySize === 'startup' || userProfile.companySize === 'small') {
      insights.push("Las empresas pequeñas que implementan IA temprano obtienen ventajas competitivas significativas frente a competidores más grandes pero menos ágiles.");
    }

    insights.push("La implementación por fases de IA reduce riesgos y permite demostrar ROI incremental, facilitando inversiones adicionales.");
    insights.push("El mercado está madurando: las empresas que no adopten IA en los próximos 2 años quedarán en desventaja competitiva significativa.");

    return insights;
  }

  private generateImplementationRoadmap(userProfile: UserProfile, recommendations: any): any[] {
    const roadmap = [];

    // Fase 1: Siempre empezar con fundación
    roadmap.push({
      phase: "Fase 1: Fundación y Prueba de Concepto",
      timeframe: "0-3 meses",
      services: [recommendations.primary.serviceName],
      expectedOutcome: `Implementación exitosa de ${recommendations.primary.serviceName} con métricas baseline establecidas`
    });

    // Fase 2: Expansión basada en el perfil
    if (userProfile.companySize !== 'startup') {
      roadmap.push({
        phase: "Fase 2: Expansión y Optimización",
        timeframe: "3-6 meses",
        services: ["Context Engineering", "Automatización adicional"],
        expectedOutcome: "Optimización de procesos existentes y expansión a nuevas áreas operativas"
      });
    }

    // Fase 3: Escala para empresas más grandes
    if (userProfile.companySize === 'large' || userProfile.companySize === 'enterprise') {
      roadmap.push({
        phase: "Fase 3: Transformación Digital Completa",
        timeframe: "6-12 meses",
        services: ["Agentes de IA", "Integración empresarial"],
        expectedOutcome: "Transformación digital completa con IA integrada en procesos core del negocio"
      });
    }

    return roadmap;
  }

  private calculateInvestmentRange(recommendations: any): { min: number; max: number; timeframe: string } {
    let min = recommendations.primary.estimatedCost.min;
    let max = recommendations.primary.estimatedCost.max;

    recommendations.secondary.forEach((rec: any) => {
      min += rec.estimatedCost.min;
      max += rec.estimatedCost.max;
    });

    return {
      min,
      max,
      timeframe: "6-12 meses"
    };
  }
}

export const personalizedRecommendationService = new PersonalizedRecommendationService();
export type { UserProfile, ServiceRecommendation, PersonalizedRecommendations };