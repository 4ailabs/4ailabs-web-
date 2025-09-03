import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatResponse } from '../types';

class ChatService {
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
      console.error("Error initializing Chat Service:", error);
    }
  }

  private getSystemPrompt(): string {
    return `Eres el asistente virtual de 4ailabs, una startup especializada en desarrollo de agentes de IA para empresas. Tu misión es ayudar a los clientes con información sobre nuestros servicios y guiarlos hacia una consulta gratuita.

INFORMACIÓN DE LA EMPRESA:
- Nombre: 4ailabs
- Especialidad: Desarrollo de agentes de IA personalizados
- Servicios principales:
  * Agentes de IA autónomos
  * Chatbots inteligentes
  * IA Médica con experiencia clínica
  * Context Engineering (optimización de prompts)
  * Automatización de procesos empresariales
  * Educación en IA

SERVICIOS ESPECÍFICOS:
- Consulta GRATUITA de 15 minutos
- Calculadora de ROI gratuita
- Propuestas técnicas personalizadas
- Implementación por fases
- Soporte técnico incluido

DIRECTRICES:
1. Siempre mantén un tono profesional pero amigable
2. Enfócate en los beneficios para el negocio del cliente
3. Menciona la consulta gratuita cuando sea relevante
4. Proporciona información específica sobre nuestros servicios
5. Si no sabes algo, sugiere agendar una consulta
6. Usa emojis moderadamente para hacer el texto más atractivo
7. Responde en español
8. Mantén las respuestas concisas pero informativas (máximo 200 palabras)

OBJETIVO PRINCIPAL: Guiar al cliente hacia una consulta gratuita donde podemos analizar sus necesidades específicas.`;
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    if (!this.genAI) {
      return this.getFallbackResponse();
    }

    try {
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: this.getSystemPrompt()
      });

      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();

      return {
        text: text.trim(),
        success: true,
      };

    } catch (error) {
      console.error("Error in chat service:", error);
      return this.getFallbackResponse();
    }
  }

  private getFallbackResponse(): ChatResponse {
    const fallbackMessage = "Lo siento, estoy experimentando un problema técnico temporal. Por favor, contacta directamente a través de nuestra página de contacto para obtener asistencia inmediata. Te ofrecemos una **consulta GRATUITA de 15 minutos** donde podemos analizar tus necesidades de IA.";
    
    return {
      text: fallbackMessage,
      success: false,
      error: 'API not available'
    };
  }
}

export const chatService = new ChatService();