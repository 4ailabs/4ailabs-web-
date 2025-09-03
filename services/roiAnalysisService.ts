import { GoogleGenerativeAI } from "@google/generative-ai";

interface ROIData {
  sector: string;
  companySize: number;
  repetitiveHours: number;
  hourlyCost: number;
  currentErrors: number;
  errorCost: number;
  responseTime: number;
  lostOpportunities: number;
  implementationMonths: number;
  maintenanceCost: number;
}

interface ROIResults {
  monthlySavings: number;
  annualSavings: number;
  roiPercentage: number;
  paybackMonths: number;
  threeYearBenefit: number;
  productivityGain: number;
  errorReduction: number;
  responseImprovement: number;
}

interface ROIAnalysis {
  summary: string;
  recommendations: string[];
  riskFactors: string[];
  nextSteps: string[];
  priorityActions: string[];
  marketInsights: string;
}

class ROIAnalysisService {
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
      console.error("Error initializing ROI Analysis Service:", error);
    }
  }

  async analyzeROI(roiData: ROIData, roiResults: ROIResults): Promise<ROIAnalysis> {
    if (!this.genAI) {
      return this.getMockAnalysis(roiData, roiResults);
    }

    try {
      const prompt = this.buildAnalysisPrompt(roiData, roiResults);
      
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `Eres un consultor experto en IA empresarial y análisis de ROI. Tu trabajo es analizar los datos de ROI de un cliente y proporcionar recomendaciones estratégicas, identificando riesgos y oportunidades de optimización. Responde en español, siendo específico y accionable.`
      });

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return this.parseAnalysisResponse(text);
    } catch (error) {
      console.error("Error in ROI analysis:", error);
      return this.getMockAnalysis(roiData, roiResults);
    }
  }

  private buildAnalysisPrompt(roiData: ROIData, roiResults: ROIResults): string {
    return `
Analiza los siguientes datos de ROI de una empresa que está considerando implementar IA:

DATOS DE LA EMPRESA:
- Sector: ${roiData.sector}
- Tamaño: ${roiData.companySize} empleados
- Horas repetitivas/semana: ${roiData.repetitiveHours}
- Costo por hora: $${roiData.hourlyCost}
- Errores actuales: ${roiData.currentErrors}%
- Costo por error: $${roiData.errorCost}
- Tiempo de respuesta: ${roiData.responseTime} horas
- Oportunidades perdidas: ${roiData.lostOpportunities}%
- Tiempo de implementación: ${roiData.implementationMonths} meses
- Costo de mantenimiento: $${roiData.maintenanceCost}/mes

RESULTADOS DEL ROI:
- Ahorros mensuales: $${roiResults.monthlySavings}
- Ahorros anuales: $${roiResults.annualSavings}
- ROI: ${roiResults.roiPercentage}%
- Recuperación: ${roiResults.paybackMonths} meses
- Beneficio 3 años: $${roiResults.threeYearBenefit}
- Mejora productividad: ${roiResults.productivityGain}%
- Reducción errores: ${roiResults.errorReduction}%
- Mejora respuesta: ${roiResults.responseImprovement}%

Proporciona un análisis estructurado en el siguiente formato JSON:

{
  "summary": "Resumen ejecutivo de 2-3 oraciones sobre el potencial de ROI",
  "recommendations": [
    "Recomendación específica 1",
    "Recomendación específica 2",
    "Recomendación específica 3"
  ],
  "riskFactors": [
    "Factor de riesgo 1",
    "Factor de riesgo 2"
  ],
  "nextSteps": [
    "Paso siguiente 1",
    "Paso siguiente 2",
    "Paso siguiente 3"
  ],
  "priorityActions": [
    "Acción prioritaria 1",
    "Acción prioritaria 2"
  ],
  "marketInsights": "Insight sobre el mercado y tendencias en el sector"
}

Responde SOLO con el JSON, sin texto adicional.
    `;
  }

  private parseAnalysisResponse(text: string): ROIAnalysis {
    try {
      // Limpiar el texto y extraer JSON
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const jsonStr = jsonMatch[0];
        return JSON.parse(jsonStr);
      }
    } catch (error) {
      console.error("Error parsing analysis response:", error);
    }

    // Fallback si no se puede parsear
    return {
      summary: "Análisis de ROI generado exitosamente. Los datos muestran un potencial significativo de ahorro.",
      recommendations: [
        "Implementar IA en fases para minimizar riesgos",
        "Capacitar al equipo antes de la implementación",
        "Establecer métricas de seguimiento claras"
      ],
      riskFactors: [
        "Resistencia al cambio del personal",
        "Complejidad de integración con sistemas existentes"
      ],
      nextSteps: [
        "Agendar consulta técnica detallada",
        "Definir roadmap de implementación",
        "Preparar plan de capacitación"
      ],
      priorityActions: [
        "Iniciar con un proyecto piloto",
        "Identificar procesos críticos para automatizar"
      ],
      marketInsights: "El sector muestra alta adopción de IA con resultados positivos en empresas similares."
    };
  }

  private getMockAnalysis(roiData: ROIData, roiResults: ROIResults): ROIAnalysis {
    const isHighROI = roiResults.roiPercentage > 200;
    const isQuickPayback = roiResults.paybackMonths < 12;
    
    return {
      summary: isHighROI 
        ? `Excelente potencial de ROI del ${roiResults.roiPercentage}%. La implementación de IA generará ahorros significativos de $${roiResults.annualSavings} anuales.`
        : `ROI moderado del ${roiResults.roiPercentage}%. La implementación requiere análisis cuidadoso pero puede generar valor a largo plazo.`,
      
      recommendations: [
        isQuickPayback 
          ? "Implementar rápidamente debido al corto período de recuperación"
          : "Considerar implementación por fases para gestionar la inversión inicial",
        "Priorizar automatización de procesos con mayor impacto en productividad",
        "Establecer KPIs específicos para medir el éxito de la implementación"
      ],
      
      riskFactors: [
        "Curva de aprendizaje del personal",
        "Integración con sistemas legacy existentes",
        "Cambios en procesos operativos"
      ],
      
      nextSteps: [
        "Agendar consulta técnica para análisis detallado",
        "Definir roadmap de implementación por fases",
        "Preparar plan de capacitación del equipo"
      ],
      
      priorityActions: [
        "Identificar procesos críticos para automatización prioritaria",
        "Evaluar infraestructura técnica actual"
      ],
      
      marketInsights: `El sector ${roiData.sector} muestra una adopción creciente de IA, con empresas similares reportando mejoras promedio del 25-40% en eficiencia operativa.`
    };
  }
}

export const roiAnalysisService = new ROIAnalysisService();
export type { ROIData, ROIResults, ROIAnalysis };
