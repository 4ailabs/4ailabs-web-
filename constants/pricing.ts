// Precios centralizados para toda la aplicación
// Última actualización: Diciembre 2024

export interface PricingTier {
  min: number;
  max: number;
  range: string;
  description: string;
}

export interface ServicePricing {
  base: number;
  range: string;
  additionalServices: {
    name: string;
    price: number;
  }[];
}

// Precios base para cada tipo de servicio (en USD)
export const SERVICE_PRICING: Record<string, ServicePricing> = {
  // Servicios básicos
  'chatbot': {
    base: 550,
    range: '$375 - $750',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 110 },
      { name: 'Capacitación del equipo', price: 83 },
      { name: 'Documentación técnica', price: 55 }
    ]
  },
  
  'agent': {
    base: 875,
    range: '$625 - $1,250',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 175 },
      { name: 'Capacitación del equipo', price: 131 },
      { name: 'Documentación técnica', price: 88 }
    ]
  },
  
  'medical': {
    base: 1250,
    range: '$875 - $1,500',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 250 },
      { name: 'Capacitación del equipo', price: 188 },
      { name: 'Documentación técnica', price: 125 }
    ]
  },
  
  'context-engineering': {
    base: 300,
    range: '$200 - $500',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 60 },
      { name: 'Capacitación del equipo', price: 45 },
      { name: 'Documentación técnica', price: 30 }
    ]
  },
  
  'automation': {
    base: 700,
    range: '$500 - $1,000',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 140 },
      { name: 'Capacitación del equipo', price: 105 },
      { name: 'Documentación técnica', price: 70 }
    ]
  },
  
  'education': {
    base: 300,
    range: '$200 - $500',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 60 },
      { name: 'Capacitación del equipo', price: 45 },
      { name: 'Documentación técnica', price: 30 }
    ]
  },
  
  'roi-analysis': {
    base: 375,
    range: '$250 - $500',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 75 },
      { name: 'Capacitación del equipo', price: 56 },
      { name: 'Documentación técnica', price: 38 }
    ]
  },
  
  'general': {
    base: 300,
    range: '$200 - $500',
    additionalServices: [
      { name: 'Soporte técnico 30 días', price: 60 },
      { name: 'Capacitación del equipo', price: 45 },
      { name: 'Documentación técnica', price: 30 }
    ]
  }
};

// Rangos de presupuesto para formularios
export const BUDGET_RANGES = [
  { value: '300-500', label: '$300 - $500', min: 300, max: 500 },
  { value: '500-1000', label: '$500 - $1,000', min: 500, max: 1000 },
  { value: '1000-1500', label: '$1,000 - $1,500', min: 1000, max: 1500 },
  { value: '1500-2500', label: '$1,500 - $2,500', min: 1500, max: 2500 },
  { value: '2500+', label: '$2,500+', min: 2500, max: 10000 }
];

// Mensaje de flexibilidad de precios
export const PRICING_FLEXIBILITY_MESSAGE = {
  title: "Precios Flexibles",
  description: "Nos ajustamos a tu presupuesto. Ofrecemos opciones de pago escalonado y descuentos por proyectos a largo plazo.",
  features: [
    "Pago escalonado (50% inicio, 50% entrega)",
    "Descuentos por proyectos a largo plazo",
    "Opciones de financiamiento",
    "Garantía de satisfacción"
  ]
};

// Función helper para obtener precios de un servicio
export const getServicePricing = (serviceType: string): ServicePricing => {
  const normalizedType = serviceType.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  return SERVICE_PRICING[normalizedType] || SERVICE_PRICING['general'];
};

// Función helper para calcular precio total
export const calculateTotalPrice = (serviceType: string, includeAdditional: boolean = true): number => {
  const pricing = getServicePricing(serviceType);
  let total = pricing.base;
  
  if (includeAdditional) {
    total += pricing.additionalServices.reduce((sum, service) => sum + service.price, 0);
  }
  
  return total;
};

// Función helper para generar propuesta de precios
export const generatePricingProposal = (serviceType: string) => {
  const pricing = getServicePricing(serviceType);
  const total = calculateTotalPrice(serviceType);
  
  return {
    basePrice: pricing.base,
    range: pricing.range,
    additionalServices: pricing.additionalServices,
    totalPrice: total,
    flexibility: PRICING_FLEXIBILITY_MESSAGE
  };
};
