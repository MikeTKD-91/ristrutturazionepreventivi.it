// lib/schema.ts
// Costruttori JSON-LD riutilizzabili per le pagine servizio×comune
// Usati da tutti e 7 i file in app/comune/[slug]/[servizio]/page.tsx

const BASE_URL = "https://ristrutturazionepreventivi.it";

const PROVIDER = {
  "@type": "HomeAndConstructionBusiness",
  name: "Russo FE Costruzione SRL",
  url: BASE_URL,
  telephone: "+393339809319",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale della Libertà 3",
    addressLocality: "Lusciano",
    addressRegion: "CE",
    postalCode: "81030",
    addressCountry: "IT",
  },
};

export function buildBreadcrumb(
  comuneNome: string,
  comuneSlug: string,
  servizioLabel: string,
  servizioSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Zone Servite", item: `${BASE_URL}/zone-servite/` },
      { "@type": "ListItem", position: 3, name: comuneNome, item: `${BASE_URL}/comune/${comuneSlug}/` },
      { "@type": "ListItem", position: 4, name: servizioLabel, item: `${BASE_URL}/comune/${comuneSlug}/${servizioSlug}/` },
    ],
  };
}

export function buildLocalBusiness(comuneNome: string, descrizione: string) {
  return {
    "@context": "https://schema.org",
    ...PROVIDER,
    areaServed: { "@type": "City", name: comuneNome },
    description: descrizione,
  };
}

export function buildServiceSchema({
  serviceType,
  serviceName,
  descrizione,
  comuneNome,
  comuneSlug,
  servizioSlug,
  prezzoMin,
  prezzoMax,
}: {
  serviceType: string;
  serviceName: string;
  descrizione: string;
  comuneNome: string;
  comuneSlug: string;
  servizioSlug: string;
  prezzoMin: string;
  prezzoMax: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceName,
    description: descrizione,
    url: `${BASE_URL}/comune/${comuneSlug}/${servizioSlug}/`,
    provider: PROVIDER,
    areaServed: { "@type": "City", name: comuneNome },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: prezzoMin,
        maxPrice: prezzoMax,
        priceCurrency: "EUR",
        description: "Costo orientativo basato su Prezzario Regionale Campania. Non vincolante senza sopralluogo.",
      },
    },
  };
}

export function buildHowToSchema(servizioLabel: string, comuneNome: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Come ottenere un preventivo per ${servizioLabel} a ${comuneNome}`,
    description: `Tre passaggi per ricevere un preventivo affidabile per ${servizioLabel.toLowerCase()} a ${comuneNome}, senza sorprese di cantiere.`,
    totalTime: "P7D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Stima gratuita orientativa",
        text: "Usa il calcolatore online o scrivi su WhatsApp. Ricevi subito una forbice di costo indicativa basata sul Prezzario Regionale Campania. Nessun impegno, nessun dato obbligatorio.",
        url: `${BASE_URL}/comune/${comuneNome.toLowerCase()}/`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Sopralluogo tecnico",
        text: "Il nostro tecnico visita l'immobile, verifica lo stato degli impianti, rileva le criticità locali e misura gli spazi. Solo dopo il sopralluogo il preventivo è affidabile.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Preventivo scritto dettagliato",
        text: "Ricevi un documento con prezzi unitari, materiali specificati, tempistiche e garanzia decennale. Tutto nero su bianco prima di iniziare. Valido 30 giorni.",
      },
    ],
  };
}

export function buildFaqSchema(faq: Array<{ domanda: string; risposta: string }>) {
  if (!faq || faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.domanda,
      acceptedAnswer: { "@type": "Answer", text: f.risposta },
    })),
  };
}
