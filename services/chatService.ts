import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatResponse } from '../types';

// Contexto de conversación para memoria
interface ConversationContext {
  userIntent: string;
  previousMessages: string[];
  userProfile: {
    industry?: string;
    companySize?: string;
    interests?: string[];
    stage?: 'discovery' | 'consideration' | 'decision';
  };
}

class ChatService {
  private genAI: GoogleGenerativeAI | null = null;
  private conversationContext: ConversationContext = {
    userIntent: '',
    previousMessages: [],
    userProfile: {
      stage: 'discovery'
    }
  };

  constructor() {
    try {
      // En Vercel, las variables de entorno se acceden con import.meta.env
      const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      console.log("API Key status:", apiKey ? "Found" : "Not found");
      
      if (apiKey && apiKey !== 'your_gemini_api_key_here' && apiKey.length > 10) {
        this.genAI = new GoogleGenerativeAI(apiKey);
        console.log("Gemini AI initialized successfully");
      } else {
        console.warn("GEMINI_API_KEY not configured properly, using fallback responses");
        console.log("API Key value:", apiKey ? "Present but invalid" : "Missing");
      }
    } catch (error) {
      console.error("Error initializing Chat Service:", error);
    }
  }

  private getSystemPrompt(): string {
    return `Eres el asistente virtual de 4ailabs. Responde de forma natural y conversacional, adaptándote a cada pregunta específica.

INFORMACIÓN CLAVE:
- 4ailabs es una agencia especializada en agentes de IA autónomos y desarrollo de aplicaciones con IA
- Tenemos experiencia real en IA médica y Context Engineering
- Desarrollamos aplicaciones completas: web, móviles, APIs y microservicios con IA integrada
- Ofrecemos implementaciones técnicas, no solo consultoría
- WhatsApp: +52 5534403571 para consultas

INSTRUCCIONES:
1. Responde directamente a la pregunta del usuario
2. Explica términos técnicos de forma simple y comprensible
3. Evita repetir la misma información en cada respuesta
4. Usa un tono conversacional y profesional
5. Cuando uses términos técnicos, explícalos brevemente
6. No fuerces el contacto en cada respuesta
7. Varía tus respuestas según el contexto
8. Usa ejemplos prácticos cuando sea posible

CONCEPTOS A EXPLICAR SIMPLEMENTE:
- ROI = Retorno de Inversión (cuánto dinero ahorras/ganas)
- Context Engineering = Optimización de IA para mejores resultados
- Agentes de IA = Sistemas que toman decisiones automáticamente
- Chatbot = Asistente virtual que responde preguntas
- IA Médica = Inteligencia artificial especializada en salud
- App con IA = Aplicación que usa inteligencia artificial para funcionar mejor
- API de IA = Servicio que permite a otras apps usar IA
- Microservicio = Pequeña aplicación que hace una tarea específica
- App web inteligente = Sitio web que usa IA para personalizar la experiencia
- App móvil con IA = Aplicación para celular que incluye funciones de IA

MÁXIMO 100 palabras por respuesta.`;
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    // Actualizar contexto de conversación
    this.updateConversationContext(message);

    if (!this.genAI) {
      return this.getEnhancedFallbackResponse(message);
    }

    try {
      const enhancedPrompt = this.buildEnhancedPrompt(message);
      
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: this.getSystemPrompt()
      });

      const result = await model.generateContent(enhancedPrompt);
      const response = await result.response;
      const text = response.text();

      // Almacenar respuesta en contexto
      this.conversationContext.previousMessages.push(`Usuario: ${message}`);
      this.conversationContext.previousMessages.push(`Asistente: ${text}`);
      
      // Mantener solo las últimas 6 interacciones
      if (this.conversationContext.previousMessages.length > 6) {
        this.conversationContext.previousMessages = this.conversationContext.previousMessages.slice(-6);
      }

      return {
        text: text.trim(),
        success: true,
      };

    } catch (error) {
      console.error("Error in chat service:", error);
      return this.getEnhancedFallbackResponse(message);
    }
  }

  private updateConversationContext(message: string): void {
    const lowerMessage = message.toLowerCase();
    
    // Detectar intención del usuario
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cotizar')) {
      this.conversationContext.userIntent = 'pricing';
      this.conversationContext.userProfile.stage = 'consideration';
    } else if (lowerMessage.includes('roi') || lowerMessage.includes('retorno')) {
      this.conversationContext.userIntent = 'roi_analysis';
      this.conversationContext.userProfile.stage = 'consideration';
    } else if (lowerMessage.includes('agendar') || lowerMessage.includes('consulta') || lowerMessage.includes('reunión')) {
      this.conversationContext.userIntent = 'schedule_consultation';
      this.conversationContext.userProfile.stage = 'decision';
    } else if (lowerMessage.includes('médica') || lowerMessage.includes('hospital') || lowerMessage.includes('salud')) {
      this.conversationContext.userIntent = 'medical_ai';
      this.conversationContext.userProfile.industry = 'healthcare';
    } else if (lowerMessage.includes('chatbot') || lowerMessage.includes('agente')) {
      this.conversationContext.userIntent = 'ai_agents';
    } else if (lowerMessage.includes('app') || lowerMessage.includes('aplicación') || lowerMessage.includes('móvil') || lowerMessage.includes('web')) {
      this.conversationContext.userIntent = 'app_development';
    } else if (lowerMessage.includes('automati') || lowerMessage.includes('proceso')) {
      this.conversationContext.userIntent = 'automation';
    }
    
    // Detectar tamaño de empresa
    if (lowerMessage.includes('startup') || lowerMessage.includes('pequeña')) {
      this.conversationContext.userProfile.companySize = 'small';
    } else if (lowerMessage.includes('mediana') || lowerMessage.includes('pyme')) {
      this.conversationContext.userProfile.companySize = 'medium';
    } else if (lowerMessage.includes('grande') || lowerMessage.includes('corporativo')) {
      this.conversationContext.userProfile.companySize = 'large';
    }
  }

  private buildEnhancedPrompt(message: string): string {
    let contextInfo = '';
    
    if (this.conversationContext.previousMessages.length > 0) {
      contextInfo += '\nCONTEXTO DE LA CONVERSACIÓN:\n';
      contextInfo += this.conversationContext.previousMessages.slice(-4).join('\n');
    }
    
    if (this.conversationContext.userIntent) {
      contextInfo += `\nINTENCIÓN DETECTADA: ${this.conversationContext.userIntent}`;
    }
    
    if (this.conversationContext.userProfile.industry) {
      contextInfo += `\nINDUSTRIA: ${this.conversationContext.userProfile.industry}`;
    }
    
    if (this.conversationContext.userProfile.companySize) {
      contextInfo += `\nTAMAÑO DE EMPRESA: ${this.conversationContext.userProfile.companySize}`;
    }
    
    contextInfo += `\nETAPA DEL CLIENTE: ${this.conversationContext.userProfile.stage}`;
    
    return `${contextInfo}\n\nMENSAJE ACTUAL: ${message}`;
  }

  private getEnhancedFallbackResponse(message: string): ChatResponse {
    const intent = this.conversationContext.userIntent;
    const lowerMessage = message.toLowerCase();
    
    // Respuestas específicas por intención
    if (intent === 'pricing' || lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
      return {
        text: "Ofrecemos precios personalizados que se ajustan a tu presupuesto y necesidades específicas. Tenemos opciones flexibles de pago escalonado, descuentos por proyectos a largo plazo y opciones de financiamiento. ¿Qué tipo de proyecto tienes en mente? Te puedo ayudar a generar una propuesta técnica personalizada.",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (intent === 'roi_analysis' || lowerMessage.includes('roi') || lowerMessage.includes('retorno') || lowerMessage.includes('inversión') || lowerMessage.includes('ahorro') || lowerMessage.includes('beneficio')) {
      return {
        text: "ROI significa 'Retorno de Inversión' - básicamente cuánto dinero ahorras o ganas con la IA. Tenemos una calculadora que te muestra cuánto puedes ahorrar en tiempo, errores y costos. ¿Te gustaría que te ayude a calcular cuánto podrías ahorrar con tu proyecto?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (intent === 'medical_ai' || lowerMessage.includes('médic') || lowerMessage.includes('hospital')) {
      return {
        text: "Nuestros chatbots médicos van más allá de respuestas automáticas. Incluyen análisis de síntomas, integración con sistemas hospitalarios, cumplimiento de regulaciones médicas y pueden asistir en diagnósticos. ¿Qué tipo de funcionalidad médica necesitas?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (lowerMessage.includes('chatbot') && lowerMessage.includes('médic')) {
      return {
        text: "Un chatbot médico es como un asistente virtual especializado en salud. Puede responder preguntas médicas, analizar síntomas, y ayudar con diagnósticos básicos. Nuestros chatbots se integran con sistemas hospitalarios y cumplen todas las regulaciones de salud. ¿Qué tipo de ayuda médica necesitas automatizar?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (lowerMessage.includes('como') && lowerMessage.includes('chatbot')) {
      return {
        text: "Un chatbot es como un asistente virtual que responde preguntas automáticamente. Los nuestros están entrenados específicamente para tu industria, se conectan con tus sistemas actuales, y aprenden de cada conversación para mejorar. ¿En qué sector planeas usarlo?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (lowerMessage.includes('que es') && lowerMessage.includes('ia')) {
      return {
        text: "IA (Inteligencia Artificial) es como tener un asistente súper inteligente que puede aprender, tomar decisiones y automatizar tareas. En 4ailabs, creamos sistemas de IA que pueden responder preguntas, analizar datos, y hasta ayudar con diagnósticos médicos. ¿Qué tipo de tareas te gustaría automatizar?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (lowerMessage.includes('agente') || lowerMessage.includes('automatiz')) {
      return {
        text: "Un agente de IA es como un empleado virtual que puede tomar decisiones y ejecutar tareas complejas automáticamente. Por ejemplo, puede procesar documentos, responder emails, o incluso hacer diagnósticos médicos. ¿Qué procesos te gustaría automatizar?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    if (lowerMessage.includes('app') || lowerMessage.includes('aplicación') || lowerMessage.includes('móvil') || lowerMessage.includes('web')) {
      return {
        text: "Desarrollamos aplicaciones completas con IA integrada: apps web, móviles, APIs y microservicios. Cada app se personaliza para tu negocio y puede incluir chatbots, análisis de datos, o automatización. ¿Qué tipo de aplicación necesitas?",
        success: true,
        error: 'API not available - using enhanced fallback'
      };
    }
    
    return this.getFallbackResponse();
  }

  private getFallbackResponse(): ChatResponse {
    const responses = [
      "Hola! ¿En qué puedo ayudarte hoy? Puedo explicarte sobre nuestros servicios de IA, ayudarte con precios, o responder cualquier pregunta que tengas.",
      "¡Hola! Soy el asistente de 4ailabs. ¿Tienes alguna pregunta sobre automatización, precios, o necesitas información sobre nuestros servicios?",
      "Hola! ¿Qué te interesa saber? Puedo ayudarte con información sobre chatbots, sistemas automáticos, o cualquier consulta que tengas.",
      "¡Hola! ¿En qué proyecto estás trabajando? Puedo orientarte sobre la mejor solución para tus necesidades.",
      "Hola! ¿Necesitas información sobre algún servicio en particular o tienes alguna pregunta específica?"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      text: randomResponse,
      success: true,
      error: 'API not available - using fallback'
    };
  }
}

export const chatService = new ChatService();