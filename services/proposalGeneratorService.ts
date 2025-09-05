import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServicePricing, calculateTotalPrice, PRICING_FLEXIBILITY_MESSAGE } from '../constants/pricing';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface ProposalData {
  companyName: string;
  contactPerson: string;
  email: string;
  serviceType: string;
  requirements: string;
  budget: string;
  technicalSpecs: string[];
  deliverables: string[];
  pricing: {
    basePrice: number;
    additionalServices: { name: string; price: number }[];
    totalPrice: number;
  };
  timeline: {
    phases: { name: string; duration: string; description: string }[];
    totalDuration: string;
  };
}

class ProposalGeneratorService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    try {
      // Intentar múltiples fuentes de API key
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      console.log("Proposal Generator API Key status:", apiKey ? "Found" : "Not found");
      
      if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.length > 10) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        console.log("Proposal Generator AI initialized successfully");
      } else {
        console.warn("GEMINI_API_KEY not configured, using enhanced fallback responses");
      }
    } catch (error) {
      console.error("Error initializing Proposal Generator Service:", error);
    }
  }

  async generateProposal(formData: ContactFormData): Promise<ProposalData> {
    if (!this.genAI) {
      return this.getMockProposal(formData);
    }

    try {
      const prompt = this.buildProposalPrompt(formData);
      
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Eres un consultor experto en IA empresarial que genera propuestas técnicas detalladas. Tu trabajo es crear propuestas profesionales, realistas y atractivas basadas en las necesidades del cliente. 

PRECIOS REALISTAS (USD):
- Chatbots Inteligentes: $200 - $625
- Agentes de IA: $500 - $1,250  
- IA Médica: $750 - $2,000
- Context Engineering: $200 - $500
- Automatización: $375 - $875
- Educación IA: $125 - $375

IMPORTANTE: 
- Los precios son FLEXIBLES y nos ajustamos al presupuesto del cliente
- Ofrecemos opciones de pago escalonado (50% inicio, 50% entrega)
- Incluimos descuentos por proyectos a largo plazo
- Siempre menciona que "Nos adaptamos a tu presupuesto"

Incluye especificaciones técnicas, timeline, precios en USD y entregables. Responde en español.`
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return this.parseProposalResponse(text, formData);
    } catch (error) {
      console.error("Error generating proposal:", error);
      return this.getMockProposal(formData);
    }
  }

  private buildProposalPrompt(formData: ContactFormData): string {
    return `
Genera una propuesta técnica detallada basada en la siguiente información del cliente:

DATOS DEL CLIENTE:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Servicio solicitado: ${formData.service}
- Mensaje/Requerimientos: ${formData.message}

Genera una propuesta estructurada en el siguiente formato JSON (SIN INCLUIR PRECIOS):

{
  "companyName": "Nombre de la empresa (inferir del contexto)",
  "contactPerson": "${formData.name}",
  "email": "${formData.email}",
  "serviceType": "${formData.service}",
  "requirements": "Resumen de 2-3 oraciones de los requerimientos identificados",
  "timeline": "Duración estimada del proyecto",
  "budget": "Rango de presupuesto estimado",
  "technicalSpecs": [
    "Especificación técnica 1",
    "Especificación técnica 2",
    "Especificación técnica 3"
  ],
  "deliverables": [
    "Entregable 1",
    "Entregable 2",
    "Entregable 3"
  ],
  "pricing": {
    "basePrice": 0,
    "additionalServices": [],
    "totalPrice": 0
  },
  "timeline": {
    "phases": [
      {"name": "Fase 1", "duration": "2 semanas", "description": "Análisis y planificación"},
      {"name": "Fase 2", "duration": "4 semanas", "description": "Desarrollo e implementación"},
      {"name": "Fase 3", "duration": "2 semanas", "description": "Testing y entrega"}
    ],
    "totalDuration": "8 semanas"
  }
}

IMPORTANTE: NO incluyas precios específicos en la propuesta. Los precios se discutirán en una consulta personalizada.

Responde SOLO con el JSON, sin texto adicional.
    `;
  }

  private parseProposalResponse(text: string, formData: ContactFormData): ProposalData {
    try {
      // Limpiar el texto y extraer JSON
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const jsonStr = jsonMatch[0];
        return JSON.parse(jsonStr);
      }
    } catch (error) {
      console.error("Error parsing proposal response:", error);
    }

    // Fallback si no se puede parsear
    return this.getMockProposal(formData);
  }

  private getMockProposal(formData: ContactFormData): ProposalData {
    // Mapear tipos de servicio a tipos de pricing
    const serviceTypeMap: Record<string, string> = {
      'agente': 'agent',
      'chatbot': 'chatbot',
      'medica': 'medical',
      'healthcare': 'medical',
      'context': 'context-engineering',
      'engineering': 'context-engineering',
      'automatizacion': 'automation',
      'educacion': 'education',
      'roi': 'roi-analysis'
    };

    // Determinar el tipo de servicio
    const serviceType = formData.service.toLowerCase();
    let mappedType = 'general';
    
    for (const [key, value] of Object.entries(serviceTypeMap)) {
      if (serviceType.includes(key)) {
        mappedType = value;
        break;
      }
    }

    // Obtener precios centralizados
    const pricing = getServicePricing(mappedType);
    const totalPrice = calculateTotalPrice(mappedType, true);

    // Definir especificaciones técnicas y entregables según el tipo
    let technicalSpecs: string[] = [];
    let deliverables: string[] = [];
    let duration = "4-6 semanas";

    switch (mappedType) {
      case 'agent':
      case 'chatbot':
        technicalSpecs = [
          "Integración con APIs de IA (OpenAI, Gemini, Claude)",
          "Sistema de entrenamiento y fine-tuning",
          "Interfaz de administración personalizada",
          "Analytics y métricas de rendimiento"
        ];
        deliverables = [
          "Agente de IA completamente funcional",
          "Documentación técnica completa",
          "Panel de administración",
          "Capacitación del equipo (4 horas)",
          "Soporte técnico por 3 meses"
        ];
        duration = "4-6 semanas";
        break;
      
      case 'medical':
        technicalSpecs = [
          "Cumplimiento con regulaciones médicas",
          "Integración con sistemas hospitalarios",
          "Algoritmos de diagnóstico asistido",
          "Sistema de auditoría y trazabilidad"
        ];
        deliverables = [
          "Sistema de IA médica certificado",
          "Documentación de cumplimiento",
          "Integración con sistemas existentes",
          "Capacitación médica especializada",
          "Certificación y validación clínica"
        ];
        duration = "6-8 semanas";
        break;
      
      case 'context-engineering':
        technicalSpecs = [
          "Optimización de prompts y contextos",
          "Fine-tuning de modelos de IA",
          "Sistema de evaluación de rendimiento",
          "Documentación de mejores prácticas"
        ];
        deliverables = [
          "Modelos optimizados",
          "Guía de mejores prácticas",
          "Herramientas de evaluación",
          "Capacitación técnica (8 horas)",
          "Soporte por 2 meses"
        ];
        duration = "2-3 semanas";
        break;
      
      default:
        technicalSpecs = [
          "Análisis de procesos empresariales",
          "Diseño de arquitectura de IA",
          "Implementación de soluciones",
          "Integración con sistemas existentes"
        ];
        deliverables = [
          "Solución de IA personalizada",
          "Documentación técnica",
          "Capacitación del equipo",
          "Soporte técnico inicial",
          "Plan de mantenimiento"
        ];
        duration = "4-5 semanas";
    }

    return {
      companyName: formData.name.split(' ')[0] + " Company",
      contactPerson: formData.name,
      email: formData.email,
      serviceType: formData.service,
      requirements: formData.message || "Implementación de soluciones de IA para optimizar procesos empresariales y mejorar la eficiencia operativa.",
      budget: "Presupuesto personalizado",
      technicalSpecs,
      deliverables,
      pricing: {
        basePrice: 0,
        additionalServices: [],
        totalPrice: 0
      },
      timeline: {
        phases: [
          { name: "Análisis y Planificación", duration: "1-2 semanas", description: "Evaluación de requerimientos y diseño de arquitectura" },
          { name: "Desarrollo", duration: duration.includes('12') ? "8-10 semanas" : "4-6 semanas", description: "Implementación de la solución de IA" },
          { name: "Testing y Entrega", duration: "1-2 semanas", description: "Pruebas, capacitación y entrega final" }
        ],
        totalDuration: duration
      }
    };
  }
}

export const proposalGeneratorService = new ProposalGeneratorService();
export type { ContactFormData, ProposalData };
