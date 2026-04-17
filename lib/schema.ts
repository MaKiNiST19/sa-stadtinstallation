// Zentrale Schema.org / JSON-LD Generatoren
// Werden von jeder Seite konsumiert und als <script type="application/ld+json">
// in den <head> gerendert.

import { FIRMA } from "./company";
import type { Leistung } from "./leistungen";
import type { Bezirk } from "./bezirke";

const address = {
  "@type": "PostalAddress",
  streetAddress: FIRMA.address.street,
  postalCode: FIRMA.address.postalCode,
  addressLocality: FIRMA.address.city,
  addressRegion: FIRMA.address.region,
  addressCountry: FIRMA.address.country,
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: FIRMA.geo.lat,
  longitude: FIRMA.geo.lng,
};

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: FIRMA.openingHours.office.opens,
    closes: FIRMA.openingHours.office.closes,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
    description: "24h Notdienst",
  },
];

const knowsAbout = [
  "Gas-Installation",
  "Wasserinstallation",
  "Heizungstechnik",
  "Sanitärtechnik",
  "Thermenwartung",
  "Rohrreinigung",
  "Notfall-Installation",
  "Brennwerttechnik",
  "Wärmepumpe",
  "Badsanierung",
];

// -----------------------------------------------------------
// 1. Organization / Plumber – für jede Seite im <head>
// -----------------------------------------------------------
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
    "@id": `${FIRMA.url}/#organization`,
    name: FIRMA.name,
    legalName: FIRMA.legalName,
    url: FIRMA.url,
    logo: FIRMA.logo,
    image: FIRMA.logo,
    telephone: FIRMA.telephone,
    email: FIRMA.email,
    priceRange: FIRMA.priceRange,
    foundingDate: FIRMA.foundingDate,
    address,
    geo,
    openingHoursSpecification,
    areaServed: {
      "@type": "City",
      name: "Wien",
      sameAs: "https://de.wikipedia.org/wiki/Wien",
    },
    knowsAbout,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Meisterbetrieb",
        recognizedBy: {
          "@type": "Organization",
          name: "Wirtschaftskammer Österreich (WKÖ)",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Konzession Gas- und Sanitärtechnik",
        recognizedBy: {
          "@type": "Organization",
          name: "Landesinnung Wien der Sanitär-, Heizungs- und Lüftungstechniker",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: FIRMA.trust.rating,
      reviewCount: FIRMA.trust.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: FIRMA.sameAs,
  };
}

// -----------------------------------------------------------
// 2. Service – pro Leistungsseite
// -----------------------------------------------------------
export function generateServiceSchema(leistung: Leistung) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${FIRMA.url}/leistungen/${leistung.slug}/#service`,
    name: leistung.title,
    description: leistung.description,
    serviceType: leistung.shortTitle,
    provider: { "@id": `${FIRMA.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Wien",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: FIRMA.telephone,
      serviceUrl: `${FIRMA.url}/leistungen/${leistung.slug}`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };
}

// -----------------------------------------------------------
// 3. Bezirk / Place – pro Bezirksseite
// -----------------------------------------------------------
export function generateBezirkSchema(bezirk: Bezirk) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${FIRMA.url}/bezirke/${bezirk.slug}/#place`,
    name: `${bezirk.name} (${bezirk.plz})`,
    description: bezirk.description,
    address: {
      "@type": "PostalAddress",
      postalCode: bezirk.plz,
      addressLocality: "Wien",
      addressRegion: "Wien",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: bezirk.lat,
      longitude: bezirk.lng,
    },
    containedInPlace: {
      "@type": "City",
      name: "Wien",
    },
  };
}

// -----------------------------------------------------------
// 4. Bezirk × Leistung – Cluster-Seite: Service mit areaServed=Bezirk
// -----------------------------------------------------------
export function generateBezirkLeistungSchema(bezirk: Bezirk, leistung: Leistung) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${FIRMA.url}/bezirke/${bezirk.slug}/${leistung.slug}/#service`,
    name: `${leistung.shortTitle} in ${bezirk.shortName} (${bezirk.plz})`,
    description: `${leistung.shortTitle} von SA Stadtinstallation – Ihr Installateur in ${bezirk.name}. ${leistung.description}`,
    serviceType: leistung.shortTitle,
    provider: { "@id": `${FIRMA.url}/#organization` },
    areaServed: {
      "@type": "Place",
      name: `${bezirk.shortName}, Wien`,
      address: {
        "@type": "PostalAddress",
        postalCode: bezirk.plz,
        addressLocality: "Wien",
        addressCountry: "AT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: bezirk.lat,
        longitude: bezirk.lng,
      },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: FIRMA.telephone,
      serviceUrl: `${FIRMA.url}/bezirke/${bezirk.slug}/${leistung.slug}`,
    },
  };
}

// -----------------------------------------------------------
// 5. FAQ-Seite
// -----------------------------------------------------------
export interface FaqItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// -----------------------------------------------------------
// 6. BreadcrumbList
// -----------------------------------------------------------
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${FIRMA.url}${item.url}`,
    })),
  };
}

// -----------------------------------------------------------
// 7. Review (für Testimonials)
// -----------------------------------------------------------
export interface ReviewInput {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export function generateReviewSchema(reviews: ReviewInput[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: r.text,
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": `${FIRMA.url}/#organization` },
  }));
}

// -----------------------------------------------------------
// Helper: Mehrere Schemas in ein @graph bündeln
// -----------------------------------------------------------
export function combineSchemas(...schemas: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
