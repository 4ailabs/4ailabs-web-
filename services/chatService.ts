import type { ChatResponse } from '../types';

// Mock responses for development - simulates AI responses
const mockResponses: Record<string, string> = {
  'consulta': '¡Perfecto! Puedes agendar tu **consulta GRATUITA de 15 minutos** visitando nuestra página de contacto. En esta consulta analizamos tu empresa y te damos un roadmap personalizado de implementación de IA. ¿Te gustaría que te ayude con algo más específico sobre nuestros servicios?',
  'precio': 'Los precios varían según la complejidad del proyecto y las necesidades específicas de tu empresa. Para obtener una cotización precisa y personalizada, te recomiendo que solicites una **consulta gratuita** a través de nuestra página de contacto. Ahí podremos analizar tu caso y darte un presupuesto exacto. ¿Qué tipo de solución de IA te interesa más?',
  'servicios': 'Nuestros servicios principales son:\n\n🤖 **Agentes de IA** - Nuestra especialidad\n💬 **Chatbots inteligentes** - Para atención al cliente\n🏥 **IA Médica** - Con experiencia clínica real\n⚙️ **Context Engineering** - Optimización de modelos\n🔄 **Automatización** - De procesos empresariales\n📚 **Educación en IA** - Capacitación empresarial\n\n¿Te interesa conocer más detalles sobre alguno?',
  'agentes': '¡Excelente pregunta! Nuestros **Agentes de IA** son sistemas autónomos que pueden:\n\n• Ejecutar tareas complejas de forma independiente\n• Tomar decisiones basadas en datos\n• Integrarse con tus sistemas existentes\n• Aprender y adaptarse a tus procesos\n• Trabajar 24/7 sin supervisión\n\nSon ideales para ventas, análisis de datos, automatización de workflows y más. ¿Qué tipo de tareas te gustaría automatizar?',
  'roi': 'Tenemos una **calculadora de ROI gratuita** que te muestra exactamente cuánto puedes ahorrar implementando IA en tu empresa. Te toma solo 3 minutos completarla y obtienes:\n\n• Ahorros mensuales estimados\n• Proyección a 3 años\n• Análisis personalizado por sector\n\n¡También incluye consulta GRATUITA para revisar los resultados! ¿Te gustaría calcular tu ROI ahora?',
  'default': 'Como asistente de 4ailabs, estoy aquí para ayudarte con cualquier consulta sobre nuestros servicios de IA. Puedo ayudarte con:\n\n• Agendar una **consulta GRATUITA**\n• Información sobre nuestros **agentes de IA**\n• Calcular tu **ROI con IA**\n• Detalles sobre servicios específicos\n\n¿En qué puedo ayudarte específicamente?'
};

class ChatService {
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('consulta') || lowerMessage.includes('gratis') || lowerMessage.includes('contacto')) {
      return mockResponses['consulta'];
    }
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cotizacion')) {
      return mockResponses['precio'];
    }
    if (lowerMessage.includes('servicio') || lowerMessage.includes('que hacen')) {
      return mockResponses['servicios'];
    }
    if (lowerMessage.includes('agente') || lowerMessage.includes('bot')) {
      return mockResponses['agentes'];
    }
    if (lowerMessage.includes('roi') || lowerMessage.includes('calcul') || lowerMessage.includes('retorno')) {
      return mockResponses['roi'];
    }
    
    return mockResponses['default'];
  }

  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      // Simulate API delay for realistic experience
      await this.delay(800 + Math.random() * 1200);
      
      const responseText = this.getResponse(message);
      
      return {
        text: responseText,
        success: true,
      };

    } catch (error) {
      console.error("Error in mock chat service:", error);
      const errorMessage = "Lo siento, estoy experimentando un problema técnico. Por favor, contacta directamente a través de nuestra página de contacto para obtener asistencia inmediata.";
      return {
        text: errorMessage,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const chatService = new ChatService();