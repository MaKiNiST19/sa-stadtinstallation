import Image from "next/image";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FIRMA } from "@/lib/company";
import { LEISTUNGEN } from "@/lib/leistungen";
import { BEZIRKE } from "@/lib/bezirke";
import { generateOrganizationSchema } from "@/lib/schema";
import FooterBadge from "@/components/FooterBadge";
import MobileNav from "@/components/MobileNav";
import PhoneIcon from "@/components/PhoneIcon";
import MobileStickyBar from "@/components/MobileStickyBar";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import TrustBadges from "@/components/TrustBadges";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B4F9C",
};

export const metadata: Metadata = {
  title: {
    default: `${FIRMA.name} | Installateur Wien – 24h Notdienst in allen Bezirken`,
    template: `%s | ${FIRMA.name} Wien`,
  },
  description:
    "Ihr Installateur in Wien – 24h Notdienst für Gas, Wasser, Heizung, Sanitär und Therme. Meisterbetrieb mit WKÖ-Konzession, Google Käuferschutz verifiziert. Alle 23 Bezirke.",
  metadataBase: new URL(FIRMA.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: FIRMA.url,
    siteName: FIRMA.name,
    title: `${FIRMA.name} | Installateur Wien – 24h Notdienst`,
    description:
      "Gas, Wasser, Heizung, Sanitär, Therme, Rohrreinigung, Notfall. Meisterbetrieb mit WKÖ-Konzession, 24h Notdienst in allen 23 Wiener Bezirken.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${FIRMA.name} – Ihr Installateur in Wien`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FIRMA.name} | Installateur Wien`,
    description:
      "Meisterbetrieb für Gas, Wasser, Heizung & Sanitär. 24h Notdienst in allen 23 Wiener Bezirken.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const footerBezirke = BEZIRKE.slice(0, 6);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="de-AT">
      <body className={montserrat.className}>
        <SchemaJsonLd schema={orgSchema} />

        <header className="navbar-wrap">
          <div className="navbar">
            <div className="navbar__inner">
              <a href="/" className="navbar__logo" aria-label={`${FIRMA.name} Startseite`}>
                <Image
                  src="/images/sa-logo.png"
                  alt={FIRMA.name}
                  width={180}
                  height={40}
                  style={{
                    height: "40px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                  priority
                />
              </a>

              <div className="navbar__links">
                <a href="/" className="navbar__link">
                  Startseite
                </a>
                <div className="navbar__item-drop">
                  <a href="/leistungen" className="navbar__link navbar__link--drop">
                    Leistungen
                  </a>
                  <div className="navbar__dropdown">
                    {LEISTUNGEN.map((l) => (
                      <a key={l.slug} href={`/leistungen/${l.slug}`}>
                        {l.shortTitle}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="/bezirke" className="navbar__link">
                  Bezirke
                </a>
                <a href="/preise" className="navbar__link">
                  Preise
                </a>
                <a href="/ueber-uns" className="navbar__link">
                  Über uns
                </a>
                <a href="/galerie" className="navbar__link">
                  Galerie
                </a>
                <a href="/kontakt" className="navbar__link">
                  Kontakt
                </a>
              </div>

              <div className="navbar__right">
                <MobileNav />
                <a href={`tel:${FIRMA.telephone}`} className="btn-sparkle desktop-only">
                  <span
                    className="text_button btn-with-icon"
                    style={{ padding: "10px 20px", fontSize: "14px", fontWeight: 800 }}
                  >
                    <PhoneIcon size={15} />
                    24h Notdienst
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {children}

        <MobileStickyBar />

        <TrustBadges />

        <footer
          className="footer"
          style={{ background: "var(--dark)", color: "white", padding: "80px 0" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
                gap: "60px",
                marginBottom: "60px",
              }}
              className="footer-grid"
            >
              {/* Brand */}
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <Image
                    src="/images/sa-logo.png"
                    alt={FIRMA.name}
                    width={180}
                    height={40}
                    style={{
                      height: "40px",
                      width: "auto",
                      objectFit: "contain",
                      display: "block",
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Ihr konzessionierter Meisterbetrieb für Gas-, Wasser- und Heizungsinstallation
                  in Wien. 24h Notdienst in allen 23 Bezirken.
                </p>
                <div style={{ marginTop: "20px" }}>
                  <FooterBadge />
                </div>
              </div>

              {/* Leistungen */}
              <div>
                <h4
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Leistungen
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {LEISTUNGEN.map((l) => (
                    <li key={l.slug}>
                      <a
                        href={`/leistungen/${l.slug}`}
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        {l.menuLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bezirke */}
              <div>
                <h4
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Top-Bezirke
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {footerBezirke.map((b) => (
                    <li key={b.slug}>
                      <a
                        href={`/bezirke/${b.slug}`}
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        {b.plz} {b.shortName}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/bezirke"
                      style={{
                        color: "var(--accent)",
                        fontSize: "13px",
                        textDecoration: "none",
                        fontWeight: 700,
                      }}
                    >
                      → Alle 23 Bezirke
                    </a>
                  </li>
                </ul>
              </div>

              {/* Unternehmen */}
              <div>
                <h4
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Unternehmen
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    { label: "Über uns", href: "/ueber-uns" },
                    { label: "Preise", href: "/preise" },
                    { label: "Galerie", href: "/galerie" },
                    { label: "Kontakt", href: "/kontakt" },
                    { label: "WKÖ Profil", href: "https://firmen.wko.at/sa-stadtinstallation" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.label === "WKÖ Profil" ? "_blank" : undefined}
                        rel={item.label === "WKÖ Profil" ? "noopener noreferrer" : undefined}
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rechtliches */}
              <div>
                <h4
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Rechtliches
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    { label: "Impressum", href: "/impressum" },
                    { label: "Datenschutz", href: "/datenschutz" },
                    { label: "AGB", href: "/agb" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kontakt-Leiste */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "32px",
                marginBottom: "32px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "var(--accent)",
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    margin: "0 0 6px",
                  }}
                >
                  Notdienst 24h
                </p>
                <a
                  href={`tel:${FIRMA.telephone}`}
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  {FIRMA.telephoneDisplay}
                </a>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    margin: "0 0 6px",
                  }}
                >
                  E-Mail
                </p>
                <a
                  href={`mailto:${FIRMA.email}`}
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {FIRMA.email}
                </a>
              </div>
              <div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    margin: "0 0 6px",
                  }}
                >
                  Adresse
                </p>
                <p style={{ color: "white", fontSize: "14px", margin: 0, lineHeight: 1.5 }}>
                  {FIRMA.address.street}
                  <br />
                  {FIRMA.address.postalCode} {FIRMA.address.city}
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>
                © {new Date().getFullYear()} {FIRMA.legalName}. Alle Rechte vorbehalten.
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>
                Meisterbetrieb · WKÖ-konzessioniert · Google Käuferschutz
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
