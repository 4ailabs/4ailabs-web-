import { GoogleGenerativeAI } from "@google/generative-ai";

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
  timeline: string;
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
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'your_gemini_api_key_here') {
        this.genAI = new GoogleGenerativeAI(apiKey);
      } else {
        console.warn("GEMINI_API_KEY not configured, using fallback responses");
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
        systemInstruction: `Eres un consultor experto en IA empresarial que genera propuestas técnicas detalladas. Tu trabajo es crear propuestas profesionales, realistas y atractivas basadas en las necesidades del cliente. Incluye especificaciones técnicas, timeline, precios y entregables. Responde en español.`
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

Genera una propuesta estructurada en el siguiente formato JSON:

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
    "basePrice": 15000,
    "additionalServices": [
      {"name": "Servicio adicional 1", "price": 5000},
      {"name": "Servicio adicional 2", "price": 3000}
    ],
    "totalPrice": 23000
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
    const serviceType = formData.service.toLowerCase();
    let basePrice = 15000;
    let duration = "6-8 semanas";
    let technicalSpecs: string[] = [];
    let deliverables: string[] = [];

    // Personalizar según el tipo de servicio
    if (serviceType.includes('agente') || serviceType.includes('chatbot')) {
      basePrice = 20000;
      duration = "8-10 semanas";
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
    } else if (serviceType.includes('medica') || serviceType.includes('healthcare')) {
      basePrice = 35000;
      duration = "12-16 semanas";
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
    } else if (serviceType.includes('context') || serviceType.includes('engineering')) {
      basePrice = 12000;
      duration = "4-6 semanas";
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
    } else {
      // Servicio general
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
    }

    const additionalServices = [
      { name: "Soporte extendido (6 meses)", price: basePrice * 0.3 },
      { name: "Capacitación adicional", price: 3000 },
      { name: "Integración con sistemas legacy", price: 5000 }
    ];

    return {
      companyName: formData.name.split(' ')[0] + " Company", // Inferir nombre de empresa
      contactPerson: formData.name,
      email: formData.email,
      serviceType: formData.service,
      requirements: formData.message || "Implementación de soluciones de IA para optimizar procesos empresariales y mejorar la eficiencia operativa.",
      budget: `$${basePrice.toLocaleString()} - $${(basePrice * 1.5).toLocaleString()}`,
      technicalSpecs,
      deliverables,
      pricing: {
        basePrice,
        additionalServices,
        totalPrice: basePrice + additionalServices.reduce((sum, service) => sum + service.price, 0)
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
