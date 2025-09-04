import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatResponse } from '../types';

class ChatService {
  private genAI: GoogleGenerativeAI | null = null;

  constructor() {
    try {
      // En Vercel, las variables de entorno se acceden con import.meta.env
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
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
    return `Eres el asistente virtual de 4ailabs, una agencia de IA especializada en desarrollo de agentes inteligentes para empresas. Tu misión es posicionar a 4ailabs como la opción premium para implementaciones de IA empresarial.

IDENTIDAD DE 4AILABS:
- Somos una agencia de IA, no solo una startup
- Especialistas en desarrollo de agentes autónomos
- Expertos en Context Engineering avanzado
- Con experiencia real en IA médica y clínica
- Enfoque en resultados empresariales medibles

DIFERENCIADORES CLAVE:
- "Agencia de IA especializada en agentes" (no solo chatbots)
- "Context Engineering avanzado" (optimización de prompts profesionales)
- "IA médica con experiencia clínica real" (no solo teórica)
- "Implementación por fases con ROI medible"
- "Equipo técnico especializado, no solo consultores"

SERVICIOS PRINCIPALES:
1. **Agentes de IA Autónomos**: Sistemas que toman decisiones y ejecutan tareas complejas
2. **IA Médica**: Diagnóstico, análisis clínico, gestión hospitalaria con experiencia real
3. **Context Engineering**: Optimización profesional de prompts y configuraciones de IA
4. **Chatbots Inteligentes**: Más allá de respuestas automáticas, con razonamiento
5. **Automatización Empresarial**: Procesos complejos automatizados con IA
6. **Educación en IA**: Capacitación especializada para equipos técnicos

CONTACTO DIRECTO:
- WhatsApp: +52 5543417252 (respuesta inmediata)
- Consulta GRATUITA de 15 minutos
- Propuestas técnicas personalizadas

TONO Y ESTILO:
- Profesional pero accesible
- Técnico pero comprensible
- Enfocado en resultados empresariales
- Confiado en nuestra experiencia
- Directo sobre nuestros diferenciadores

RESPUESTAS TÍPICAS:
- "En 4ailabs desarrollamos agentes de IA que van más allá de chatbots simples..."
- "Nuestro Context Engineering optimiza tus modelos de IA para obtener resultados superiores..."
- "Como agencia especializada, ofrecemos implementaciones técnicas reales, no solo consultoría..."
- "Nuestra experiencia en IA médica incluye casos clínicos reales..."

OBJETIVO: Posicionar a 4ailabs como la agencia de IA premium, enfocándote en nuestros diferenciadores técnicos y experiencia real. Siempre guía hacia una consulta gratuita donde podemos demostrar nuestro expertise técnico.

RESPUESTA MÁXIMA: 150 palabras.`;
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
      "¡Hola! Soy el asistente de 4ailabs, agencia especializada en desarrollo de agentes de IA. Aunque estoy en modo de demostración, puedo ayudarte con información sobre nuestros servicios técnicos. ¿Te interesa conocer sobre nuestros **agentes autónomos** o **Context Engineering avanzado**? Para contacto directo: **WhatsApp +52 5543417252**",
      "En 4ailabs desarrollamos **agentes de IA** que van más allá de chatbots simples - sistemas que toman decisiones y ejecutan tareas complejas. También ofrecemos **IA Médica** con experiencia clínica real. ¿Qué tipo de implementación técnica necesitas? Contacto: **+52 5543417252**",
      "Nuestro equipo especializado en **Context Engineering** optimiza tus modelos de IA para obtener resultados superiores. Como agencia técnica, ofrecemos implementaciones reales, no solo consultoría. ¿Te gustaría agendar una **consulta GRATUITA**? **WhatsApp: +52 5543417252**",
      "Ofrecemos **educación especializada en IA** para equipos técnicos y **automatización empresarial** con agentes inteligentes. Nuestra experiencia incluye casos clínicos reales en IA médica. ¿En qué área técnica te gustaría implementar IA? Contacto directo: **+52 5543417252**",
      "¡Excelente pregunta! En 4ailabs combinamos **agentes autónomos**, **Context Engineering avanzado** y **IA médica con experiencia clínica** para transformar tu negocio. Como agencia especializada, ofrecemos implementaciones técnicas reales. ¿Te interesa conocer más? **WhatsApp: +52 5543417252**"
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