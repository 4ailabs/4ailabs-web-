import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  Calendar,
  Zap,
  Building2,
  Heart,
  CreditCard,
  Factory,
  Briefcase,
  GraduationCap,
  Home,
  Settings,
  Brain,
  FileText
} from 'lucide-react';
import { roiAnalysisService, ROIAnalysis } from '../services/roiAnalysisService';
import ROIAnalysisComponent from '../components/ROIAnalysis';

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

const ROICalculatorPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [roiData, setRoiData] = useState<ROIData>({
    sector: '',
    companySize: 25,
    repetitiveHours: 8,
    hourlyCost: 35,
    currentErrors: 3,
    errorCost: 250,
    responseTime: 4,
    lostOpportunities: 1,
    implementationMonths: 3,
    maintenanceCost: 15
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [roiAnalysis, setRoiAnalysis] = useState<ROIAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const sectors = [
    { value: 'retail', label: 'Retail/E-commerce', icon: Building2 },
    { value: 'healthcare', label: 'Salud/Healthcare', icon: Heart },
    { value: 'finance', label: 'Finanzas/Banking', icon: CreditCard },
    { value: 'manufacturing', label: 'Manufactura', icon: Factory },
    { value: 'services', label: 'Servicios Profesionales', icon: Briefcase },
    { value: 'education', label: 'Educación', icon: GraduationCap },
    { value: 'realestate', label: 'Bienes Raíces', icon: Home },
    { value: 'other', label: 'Otro', icon: Settings }
  ];

  const calculateROI = (data: ROIData): ROIResults => {
    // Factores de mejora por sector (conservadores y basados en datos reales)
    const sectorMultipliers = {
      retail: { productivity: 0.25, errorReduction: 0.35, responseImprovement: 0.3 },
      healthcare: { productivity: 0.2, errorReduction: 0.4, responseImprovement: 0.25 },
      finance: { productivity: 0.22, errorReduction: 0.38, responseImprovement: 0.35 },
      manufacturing: { productivity: 0.18, errorReduction: 0.3, responseImprovement: 0.2 },
      services: { productivity: 0.28, errorReduction: 0.32, responseImprovement: 0.3 },
      education: { productivity: 0.15, errorReduction: 0.25, responseImprovement: 0.2 },
      realestate: { productivity: 0.2, errorReduction: 0.3, responseImprovement: 0.25 },
      other: { productivity: 0.2, errorReduction: 0.3, responseImprovement: 0.25 }
    };

    const multiplier = sectorMultipliers[data.sector as keyof typeof sectorMultipliers] || sectorMultipliers.other;

    // Cálculos base
    const weeklyRepetitiveCost = data.repetitiveHours * data.hourlyCost;
    const monthlyRepetitiveCost = weeklyRepetitiveCost * 4.33;
    const annualRepetitiveCost = monthlyRepetitiveCost * 12;

    // Ahorros por automatización
    const timeSavings = data.repetitiveHours * multiplier.productivity;
    const monthlyTimeSavings = timeSavings * data.hourlyCost * 4.33;
    const annualTimeSavings = monthlyTimeSavings * 12;

    // Ahorros por reducción de errores
    const errorSavings = (data.currentErrors * data.errorCost * multiplier.errorReduction) * 4.33;
    const annualErrorSavings = errorSavings * 12;

    // Ahorros por mejora en respuesta
    const opportunitySavings = (data.lostOpportunities * 750 * multiplier.responseImprovement) * 4.33;
    const annualOpportunitySavings = opportunitySavings * 12;

    // Costo estimado de implementación (basado en tamaño de empresa) - USD
    const baseImplementationCost = data.companySize < 50 ? 25000 : 
                                  data.companySize < 200 ? 50000 : 
                                  data.companySize < 500 ? 100000 : 200000;
    
    // Costo de mantenimiento anual (porcentaje del costo de implementación)
    const annualMaintenanceCost = baseImplementationCost * (data.maintenanceCost / 100);
    
    // Costo total de implementación incluyendo tiempo de implementación
    const implementationCost = baseImplementationCost + (data.implementationMonths * 2000);

    // Cálculos finales (considerando costos de mantenimiento)
    const monthlySavings = monthlyTimeSavings + errorSavings + opportunitySavings;
    const annualSavings = annualTimeSavings + annualErrorSavings + annualOpportunitySavings - annualMaintenanceCost;
    const roiPercentage = ((annualSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = implementationCost / monthlySavings;
    const threeYearBenefit = (annualSavings * 3) - implementationCost - (annualMaintenanceCost * 2);

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roiPercentage),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      threeYearBenefit: Math.round(threeYearBenefit),
      productivityGain: Math.round(multiplier.productivity * 100),
      errorReduction: Math.round(multiplier.errorReduction * 100),
      responseImprovement: Math.round(multiplier.responseImprovement * 100)
    };
  };

  const handleInputChange = (field: keyof ROIData, value: string | number) => {
    setRoiData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateROIAnalysis = async () => {
    if (!results) return;
    
    setIsAnalyzing(true);
    try {
      const analysis = await roiAnalysisService.analyzeROI(roiData, results);
      setRoiAnalysis(analysis);
      setShowAnalysis(true);
    } catch (error) {
      console.error('Error generating ROI analysis:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // Simular tiempo de cálculo
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const calculatedResults = calculateROI(roiData);
    setResults(calculatedResults);
    setIsCalculating(false);
    setCurrentStep(4);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-zinc-900 dark:to-zinc-800 backdrop-blur-sm border-b border-blue-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="w-8 h-8 text-zinc-600 dark:text-cyan-400" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
                Calculadora de ROI para IA
              </h1>
            </div>
            <p className="text-lg text-zinc-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
              Descubre cuánto puedes ahorrar y el retorno de inversión que obtendrás al implementar soluciones de IA en tu empresa
            </p>
            <div className="max-w-2xl mx-auto">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Dashboard de análisis ROI y métricas empresariales" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                ></div>
              </div>
              
              {/* Step Indicators */}
              {[
                { step: 1, label: 'Empresa', icon: Users },
                { step: 2, label: 'Procesos', icon: Clock },
                { step: 3, label: 'Costos', icon: DollarSign },
                { step: 4, label: 'Resultados', icon: BarChart3 }
              ].map(({ step, label, icon: Icon }) => (
                <div key={step} className="flex flex-col items-center relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg shadow-blue-400/25' 
                      : 'bg-white dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 border-2 border-zinc-200 dark:border-zinc-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-medium mt-2 transition-colors duration-300 ${
                    currentStep >= step 
                      ? 'text-blue-700 dark:text-blue-300' 
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Company Information */}
          {currentStep === 1 && (
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-zinc-600 dark:text-cyan-400" />
                Información de tu Empresa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Sector de tu empresa
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sectors.map((sector, index) => {
                      const sectorColors = [
                        { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', hover: 'hover:border-red-400 dark:hover:border-red-600', selected: 'border-red-400 dark:border-red-400 bg-red-100 dark:bg-red-500/10', icon: 'text-red-600 dark:text-red-400' }, // Retail
                        { bg: 'bg-pink-50 dark:bg-pink-900/20', border: 'border-pink-200 dark:border-pink-800', hover: 'hover:border-pink-400 dark:hover:border-pink-600', selected: 'border-pink-400 dark:border-pink-400 bg-pink-100 dark:bg-pink-500/10', icon: 'text-pink-600 dark:text-pink-400' }, // Healthcare
                        { bg: 'bg-slate-50 dark:bg-slate-900/20', border: 'border-slate-200 dark:border-slate-800', hover: 'hover:border-slate-400 dark:hover:border-slate-600', selected: 'border-slate-400 dark:border-slate-400 bg-slate-100 dark:bg-slate-500/10', icon: 'text-slate-600 dark:text-slate-400' }, // Finance
                        { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', hover: 'hover:border-blue-400 dark:hover:border-blue-600', selected: 'border-blue-400 dark:border-blue-400 bg-blue-100 dark:bg-blue-500/10', icon: 'text-blue-600 dark:text-blue-400' }, // Manufacturing
                        { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', hover: 'hover:border-purple-400 dark:hover:border-purple-600', selected: 'border-purple-400 dark:border-purple-400 bg-purple-100 dark:bg-purple-500/10', icon: 'text-purple-600 dark:text-purple-400' }, // Services
                        { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', hover: 'hover:border-yellow-400 dark:hover:border-yellow-600', selected: 'border-yellow-400 dark:border-yellow-400 bg-yellow-100 dark:bg-yellow-500/10', icon: 'text-yellow-600 dark:text-yellow-400' }, // Education
                        { bg: 'bg-indigo-50 dark:bg-indigo-900/20', border: 'border-indigo-200 dark:border-indigo-800', hover: 'hover:border-indigo-400 dark:hover:border-indigo-600', selected: 'border-indigo-400 dark:border-indigo-400 bg-indigo-100 dark:bg-indigo-500/10', icon: 'text-indigo-600 dark:text-indigo-400' }, // Real Estate
                        { bg: 'bg-gray-50 dark:bg-gray-900/20', border: 'border-gray-200 dark:border-gray-800', hover: 'hover:border-gray-400 dark:hover:border-gray-600', selected: 'border-gray-400 dark:border-gray-400 bg-gray-100 dark:bg-gray-500/10', icon: 'text-gray-600 dark:text-gray-400' }  // Other
                      ];
                      const colors = sectorColors[index];
                      
                      return (
                        <button
                          key={sector.value}
                          onClick={() => handleInputChange('sector', sector.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            roiData.sector === sector.value
                              ? `${colors.selected} text-zinc-900 dark:text-slate-300`
                              : `${colors.bg} ${colors.border} text-zinc-900 dark:text-slate-300 ${colors.hover} hover:bg-opacity-80 dark:hover:bg-zinc-800`
                          }`}
                        >
                          <sector.icon className={`w-6 h-6 mb-2 ${colors.icon}`} />
                          <div className="text-sm font-medium">{sector.label}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Número de empleados: {formatNumber(roiData.companySize)}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="1000"
                    value={roiData.companySize}
                    onChange={(e) => handleInputChange('companySize', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-slate-400 mt-1">
                    <span>5</span>
                    <span>1000+</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!roiData.sector}
                  className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Current Processes */}
          {currentStep === 2 && (
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-zinc-600 dark:text-cyan-400" />
                Procesos Actuales
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Horas por semana dedicadas a tareas repetitivas: {roiData.repetitiveHours}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    value={roiData.repetitiveHours}
                    onChange={(e) => handleInputChange('repetitiveHours', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-slate-400 mt-1">
                    <span>5 horas</span>
                    <span>80+ horas</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Costo promedio por hora de personal: {formatCurrency(roiData.hourlyCost)}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={roiData.hourlyCost}
                    onChange={(e) => handleInputChange('hourlyCost', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-slate-400 mt-1">
                    <span>$10/h</span>
                    <span>$100+/h</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-blue-100 dark:bg-zinc-800 hover:bg-blue-200 dark:hover:bg-zinc-700 text-blue-800 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  Anterior
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Costs and Opportunities */}
          {currentStep === 3 && (
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-zinc-600 dark:text-cyan-400" />
                Costos y Oportunidades
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Errores mensuales por procesos manuales: {roiData.currentErrors}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={roiData.currentErrors}
                    onChange={(e) => handleInputChange('currentErrors', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Costo promedio por error: {formatCurrency(roiData.errorCost)}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={roiData.errorCost}
                    onChange={(e) => handleInputChange('errorCost', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Tiempo de respuesta actual (horas): {roiData.responseTime}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="24"
                    value={roiData.responseTime}
                    onChange={(e) => handleInputChange('responseTime', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-slate-300 mb-3">
                    Oportunidades perdidas por mes: {roiData.lostOpportunities}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={roiData.lostOpportunities}
                    onChange={(e) => handleInputChange('lostOpportunities', parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-blue-100 dark:bg-zinc-800 hover:bg-blue-200 dark:hover:bg-zinc-700 text-blue-800 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  Anterior
                </button>
                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2 inline"></div>
                      Calculando...
                    </>
                  ) : (
                    <>
                      Calcular ROI
                      <TrendingUp className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && results && (
            <div className="space-y-6">
              {/* Main Results */}
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-zinc-600 dark:text-cyan-400" />
                  Resultados de tu ROI
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 p-6 rounded-xl border border-slate-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-zinc-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Ahorro Mensual</h3>
                    </div>
                    <p className="text-2xl font-bold text-zinc-700 dark:text-slate-300">{formatCurrency(results.monthlySavings)}</p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 p-6 rounded-xl border border-slate-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-zinc-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">ROI Anual</h3>
                    </div>
                    <p className="text-2xl font-bold text-zinc-700 dark:text-slate-300">{results.roiPercentage}%</p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 p-6 rounded-xl border border-slate-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-zinc-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Recuperación</h3>
                    </div>
                    <p className="text-2xl font-bold text-zinc-700 dark:text-slate-300">{results.paybackMonths} meses</p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/20 p-6 rounded-xl border border-slate-500/30">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6 text-zinc-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Beneficio 3 años</h3>
                    </div>
                    <p className="text-2xl font-bold text-zinc-700 dark:text-slate-300">{formatCurrency(results.threeYearBenefit)}</p>
                  </div>
                </div>

                {/* Improvement Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-yellow-200 dark:border-zinc-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-yellow-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Mejora en Productividad</h3>
                    </div>
                    <p className="text-3xl font-bold text-yellow-700 dark:text-slate-300">+{results.productivityGain}%</p>
                    <p className="text-sm text-zinc-500 dark:text-slate-400 mt-1">Tiempo ahorrado en tareas repetitivas</p>
                  </div>

                  <div className="bg-slate-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-slate-200 dark:border-zinc-700">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Reducción de Errores</h3>
                    </div>
                    <p className="text-3xl font-bold text-slate-700 dark:text-slate-300">-{results.errorReduction}%</p>
                    <p className="text-sm text-zinc-500 dark:text-slate-400 mt-1">Menos errores en procesos automatizados</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-zinc-800/50 p-6 rounded-xl border border-blue-200 dark:border-zinc-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-slate-300" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">Mejora en Respuesta</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-700 dark:text-slate-300">+{results.responseImprovement}%</p>
                    <p className="text-sm text-zinc-500 dark:text-slate-400 mt-1">Tiempo de respuesta más rápido</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/10 dark:to-slate-800/10 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/30">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Consultas gratuitas disponibles
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                    Basado en tus números: Podrías ahorrar <span className="text-slate-600 dark:text-slate-400">{formatCurrency(results.monthlySavings)}/mes</span>
                  </h3>
                  <p className="text-zinc-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                    <strong>Agenda una consulta de 15 minutos GRATIS</strong> y recibe un roadmap personalizado para implementar estas mejoras en tu empresa específica.
                  </p>
                  
                  {/* Análisis de ROI Inteligente */}
                  <div className="mb-6">
                    <button
                      onClick={generateROIAnalysis}
                      disabled={isAnalyzing}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-blue-400 disabled:to-indigo-400 text-white font-bold py-3 px-6 rounded-full text-base transition-all-smooth transform hover:scale-105 shadow-lg shadow-blue-400/25"
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Generando Análisis...
                        </>
                      ) : (
                        <>
                          <Brain className="w-5 h-5" />
                          Análisis de ROI Inteligente
                        </>
                      )}
                    </button>
                    <p className="text-xs text-zinc-500 dark:text-slate-500 mt-2">
                      Análisis personalizado con IA • Recomendaciones estratégicas • Insights de mercado
                    </p>
                  </div>
                  <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-zinc-700 mb-6">
                    <div className="flex items-center justify-center gap-6 mb-4 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-600 dark:text-slate-400">15 min</div>
                        <div className="text-xs text-zinc-600 dark:text-slate-400">Duración</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-600 dark:text-slate-400">$0</div>
                        <div className="text-xs text-zinc-600 dark:text-slate-400">Costo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-600 dark:text-slate-400">ROI {results.roiPercentage}%</div>
                        <div className="text-xs text-zinc-600 dark:text-slate-400">Tu potencial</div>
                      </div>
                    </div>
                    <Link
                      to="/contacto"
                      className="inline-block bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all-smooth transform hover:scale-105 shadow-xl shadow-slate-400/25 pulse-cta"
                    >
                      Reservar Mi Consulta GRATIS
                    </Link>
                    <p className="text-xs text-zinc-500 dark:text-slate-500 mt-3">
                      Roadmap personalizado • Análisis de tu industria • Plan de implementación
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-slate-500">
                    ¿Quieres ver cómo lo logramos? <Link to="/servicios" className="text-slate-600 dark:text-slate-400 hover:underline">Conoce nuestros servicios →</Link>
                  </p>
                </div>
              </div>

              {/* Restart Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setResults(null);
                    setRoiData({
                      sector: '',
                      companySize: 25,
                      repetitiveHours: 8,
                      hourlyCost: 35,
                      currentErrors: 3,
                      errorCost: 250,
                      responseTime: 4,
                      lostOpportunities: 1,
                      implementationMonths: 3,
                      maintenanceCost: 15
                    });
                  }}
                  className="text-zinc-500 dark:text-slate-400 hover:text-zinc-600 dark:hover:text-slate-300 transition-colors"
                >
                  ← Calcular otro escenario
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Análisis de ROI Modal */}
      {showAnalysis && roiAnalysis && (
        <ROIAnalysisComponent
          analysis={roiAnalysis}
          onClose={() => setShowAnalysis(false)}
        />
      )}
    </div>
  );
};

export default ROICalculatorPage;
