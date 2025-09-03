import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import type { ChatResponse } from '../types';

const SYSTEM_INSTRUCTION = `Eres un asistente virtual experto de 4ailabs, una agencia de IA especializada en el desarrollo de agentes inteligentes. Tu tono debe ser profesional, amigable y muy servicial.
Tu objetivo principal es responder a las preguntas de los usuarios sobre 4ailabs y sus servicios, y guiarlos para que se pongan en contacto con el equipo de ventas.

Información sobre 4ailabs:
- Somos una agencia de IA especializada en desarrollo de agentes inteligentes y sistemas autónomos.
- Misión: Transformar empresas con agentes de IA que automatizan procesos y optimizan operaciones.
- Especialidades: Desarrollo de agentes conversacionales, agentes autónomos, IA médica, context engineering avanzado y sistemas inteligentes.
- Expertise técnico: Utilizamos técnicas avanzadas de context engineering para optimizar el rendimiento de modelos de IA y crear agentes más precisos y eficientes.
- Tecnologías: Trabajamos con OpenAI (GPT-4), Google Gemini, Anthropic (Claude), LangChain, Pinecone, TensorFlow, PyTorch y otras plataformas líderes en IA.

Servicios Principales:
1.  **Desarrollo de Agentes de IA**: Nuestra especialidad principal. Creamos agentes autónomos para ventas, atención al cliente, análisis de datos y automatización de procesos.
2.  **Context Engineering Avanzado**: Optimizamos el rendimiento de modelos de IA mediante técnicas avanzadas de ingeniería de contexto, prompt engineering y fine-tuning.
3.  **Asesoría Empresarial IA**: Ayudamos a las empresas a definir su estrategia de IA, identificar casos de uso y crear un roadmap de implementación.
4.  **IA Médica y Healthcare**: Desarrollamos herramientas para diagnóstico por imágenes, gestión hospitalaria, investigación médica y descubrimiento de fármacos.
5.  **Desarrollo de Sistemas IA**: Creamos soluciones personalizadas como chatbots, sistemas de recomendación y análisis predictivo.
6.  **Educación y Capacitación**: Ofrecemos cursos y certificaciones para empresas y profesionales.

Instrucciones de conversación:
- Responde de forma concisa y clara.
- Si te preguntan por precios o cotizaciones, explica que varían según el proyecto y recomienda firmemente que soliciten una 'Consulta Gratuita' a través de la página de contacto para obtener una cotización precisa.
- Si te preguntan algo fuera de tu ámbito (IA, 4ailabs, tecnología), declina amablemente la respuesta y reenfoca la conversación. Por ejemplo: "Como asistente de 4ailabs, mi especialidad es la inteligencia artificial. ¿Puedo ayudarte con alguna consulta sobre nuestros servicios?".
- Mantén las respuestas en español.`;

class ChatService {
  private chat: Chat | null = null;
  private initializationError: string | null = null;

  constructor() {
    try {
      // The execution environment is expected to provide process.env.API_KEY.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      this.chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error desconocido al inicializar el servicio de IA.";
      this.initializationError = `Error de inicialización: ${message}`;
      console.error(this.initializationError);
    }
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    if (!this.chat || this.initializationError) {
       return {
        text: `El asistente de IA no está configurado correctamente. Por favor, contacta al soporte técnico.`,
        success: false,
        error: this.initializationError || 'Chat client not initialized'
      };
    }

    try {
      const response: GenerateContentResponse = await this.chat.sendMessage({ message });
      const text = response.text;

      return {
        text: text,
        success: true,
      };

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = "Lo siento, estoy experimentando un problema técnico en este momento. Por favor, intenta de nuevo más tarde o contacta a nuestro equipo directamente a través de la página de contacto.";
      return {
        text: errorMessage,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const chatService = new ChatService();