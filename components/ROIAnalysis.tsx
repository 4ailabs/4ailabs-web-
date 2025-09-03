import React, { useState } from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Download, Share2 } from 'lucide-react';
import { ROIAnalysis as ROIAnalysisType } from '../services/roiAnalysisService';

interface ROIAnalysisProps {
  analysis: ROIAnalysisType;
  onClose: () => void;
}

const ROIAnalysis: React.FC<ROIAnalysisProps> = ({ analysis, onClose }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'recommendations' | 'risks' | 'next'>('summary');

  const downloadReport = () => {
    const reportContent = `
ANÁLISIS DE ROI INTELIGENTE - 4AILABS
=====================================

RESUMEN EJECUTIVO:
${analysis.summary}

RECOMENDACIONES:
${analysis.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

FACTORES DE RIESGO:
${analysis.riskFactors.map((risk, i) => `${i + 1}. ${risk}`).join('\n')}

PRÓXIMOS PASOS:
${analysis.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

ACCIONES PRIORITARIAS:
${analysis.priorityActions.map((action, i) => `${i + 1}. ${action}`).join('\n')}

INSIGHTS DE MERCADO:
${analysis.marketInsights}

---
Generado por 4ailabs - Especialistas en IA
Fecha: ${new Date().toLocaleDateString('es-MX')}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analisis-roi-4ailabs-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareAnalysis = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Análisis de ROI - 4ailabs',
        text: analysis.summary,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(`${analysis.summary}\n\nVer análisis completo: ${window.location.href}`);
      alert('Análisis copiado al portapapeles');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Análisis de ROI Inteligente</h2>
                <p className="text-blue-100">Generado por IA - 4ailabs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadReport}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Descargar reporte"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                onClick={shareAnalysis}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                title="Compartir análisis"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex">
            {[
              { id: 'summary', label: 'Resumen', icon: TrendingUp },
              { id: 'recommendations', label: 'Recomendaciones', icon: CheckCircle },
              { id: 'risks', label: 'Riesgos', icon: AlertTriangle },
              { id: 'next', label: 'Próximos Pasos', icon: ArrowRight }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'summary' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Resumen Ejecutivo
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {analysis.summary}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Insights de Mercado
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {analysis.marketInsights}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                Recomendaciones Estratégicas
              </h3>
              {analysis.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{recommendation}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'risks' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                Factores de Riesgo
              </h3>
              {analysis.riskFactors.map((risk, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ⚠
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">{risk}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'next' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Próximos Pasos
                </h3>
                {analysis.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300">{step}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Acciones Prioritarias
                </h3>
                {analysis.priorityActions.map((action, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300">{action}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 p-6 bg-zinc-50 dark:bg-zinc-800">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Análisis generado por IA • 4ailabs • {new Date().toLocaleDateString('es-MX')}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIAnalysis;
