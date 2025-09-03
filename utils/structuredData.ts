// Structured Data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "4ailabs",
  "alternateName": ["4ai Labs", "4AI Labs"],
  "url": "https://4ailabs.vercel.app",
  "logo": "https://4ailabs.vercel.app/logo.png",
  "description": "Agencia especializada en desarrollo de agentes de IA para empresas. Automatización inteligente con ROI garantizado.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://linkedin.com/company/4ailabs",
    "https://twitter.com/4ailabs",
    "https://github.com/4ailabs"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Desarrollo de Agentes de IA",
      "description": "Creamos agentes inteligentes personalizados para automatizar procesos empresariales"
    },
    {
      "@type": "Service", 
      "name": "IA Médica",
      "description": "Soluciones de inteligencia artificial para el sector salud con experiencia clínica"
    },
    {
      "@type": "Service",
      "name": "Context Engineering",
      "description": "Optimización de prompts y modelos de IA para máximo rendimiento"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "4ailabs",
  "url": "https://4ailabs.vercel.app",
  "description": "Especialistas en IA para desarrollo empresarial. Agentes inteligentes con ROI garantizado.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://4ailabs.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4ailabs",
  "description": "Agencia de inteligencia artificial especializada en desarrollo de agentes empresariales",
  "url": "https://4ailabs.vercel.app",
  "telephone": "+1-234-567-8900",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "serviceArea": {
    "@type": "Place",
    "name": "México"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de IA",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consulta Gratuita de IA",
          "description": "Consulta gratuita de 15 minutos para evaluar necesidades de IA"
        },
        "price": "0",
        "priceCurrency": "USD"
      }
    ]
  }
};