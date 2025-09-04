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
    const responses = [
      "¡Hola! Soy el asistente de 4ailabs. Aunque estoy en modo de demostración, puedo ayudarte con información sobre nuestros servicios de IA. ¿Te interesa saber sobre nuestros **agentes de IA personalizados** o **chatbots inteligentes**?",
      "En 4ailabs desarrollamos **agentes de IA** que pueden automatizar procesos complejos en tu empresa. También ofrecemos **IA Médica** con experiencia clínica real. ¿Qué tipo de automatización necesitas?",
      "Nuestro equipo especializado en **Context Engineering** puede optimizar tus prompts de IA para obtener mejores resultados. ¿Te gustaría agendar una **consulta GRATUITA de 15 minutos** para analizar tus necesidades?",
      "Ofrecemos **educación en IA** para equipos empresariales y **automatización de procesos** con IA práctica. ¿En qué área de tu negocio te gustaría implementar IA?",
      "¡Excelente pregunta! En 4ailabs combinamos **agentes autónomos**, **chatbots inteligentes** y **IA médica** para transformar tu negocio. ¿Te interesa conocer más sobre alguno de estos servicios?"
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