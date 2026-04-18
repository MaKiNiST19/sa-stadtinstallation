import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import {
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneIcon from "@/components/PhoneIcon";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBand from "@/components/content/CtaBand";
import { GALLERY } from "@/lib/gallery";

export const metadata: Metadata = {
  title: `Galerie – Referenzen | ${FIRMA.name} Wien`,
  description:
    "Einblick in unsere Referenzprojekte: Gas, Wasser, Heizung, Sanitär und Therme – umgesetzt in Wiener Altbauten, Gemeindebauten und Neubau-Wohnungen.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: `Galerie – Referenzen von ${FIRMA.name}`,
    description:
      "Referenzprojekte aus Wien: Installationen, Sanierungen und Notfälle aus unserer täglichen Arbeit.",
    url: `${FIRMA.url}/galerie`,
    type: "website",
  },
};

export default function GaleriePage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Galerie", url: "/galerie" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Referenzen · Wien · {GALLERY.length} Projekte
          </p>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
              fontWeight: 800,
              maxWidth: "840px",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Unsere Arbeit – Referenzprojekte aus Wien
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "18px",
              maxWidth: "680px",
              lineHeight: 1.7,
              marginTop: "20px",
            }}
          >
            Ein Einblick in unsere tägliche Arbeit: Gas-, Wasser-, Heizungs- und
            Sanitärinstallationen in Wiener Altbauten, Gemeindebauten und Neubau-
            Wohnungen. Jedes Projekt wird mit Festpreis, Prüfprotokoll und Garantie
            übergeben.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a
              href={`tel:${FIRMA.telephone}`}
              className="btn-outline btn-outline--white btn-with-icon"
            >
              <PhoneIcon />
              Jetzt anrufen
            </a>
            <a href="/kontakt" className="btn-outline">
              Termin anfragen
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0 80px", background: "var(--bg)" }}>
        <div className="container">
          <GalleryGrid items={GALLERY} />
          <p
            style={{
              textAlign: "center",
              color: "var(--mid)",
              fontSize: "14px",
              marginTop: "32px",
              lineHeight: 1.7,
            }}
          >
            Alle Bilder zeigen reale Kundenprojekte von {FIRMA.name}. Auf Wunsch
            senden wir gern weitere Referenzen per E-Mail – einfach kurz anfragen.
          </p>
        </div>
      </section>

      <CtaBand
        variant="blue"
        title="Ihr Projekt wird das nächste Referenzbild"
        subtitle={`Termin anfragen oder direkt anrufen: ${FIRMA.telephoneDisplay}`}
      />
    </>
  );
}
