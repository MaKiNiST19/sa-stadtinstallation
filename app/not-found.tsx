import { FIRMA } from "@/lib/company";
import { LEISTUNGEN } from "@/lib/leistungen";

export default function NotFound() {
  return (
    <>
      <section className="leistung-hero">
        <div className="container">
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Fehler 404
          </p>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
              fontWeight: 800,
              maxWidth: "820px",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Diese Seite haben wir leider nicht gefunden
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
            Die aufgerufene Seite existiert nicht (mehr). Vielleicht wurde sie
            umbenannt oder verschoben. Hier finden Sie weiter:
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a href="/" className="btn-outline">Zur Startseite</a>
            <a href={`tel:${FIRMA.telephone}`} className="btn-sparkle">
              <span
                className="text_button"
                style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 800 }}
              >
                📞 {FIRMA.telephoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2>Vielleicht suchen Sie eine unserer Leistungen?</h2>
          <div className="services-grid" style={{ marginTop: "32px" }}>
            {LEISTUNGEN.map((l) => (
              <a key={l.slug} href={`/leistungen/${l.slug}`} className="service-magic-card">
                <div className="service-magic-card__icon" aria-hidden="true">
                  <span style={{ fontSize: "32px" }}>{l.icon}</span>
                </div>
                <h3 className="service-magic-card__title">{l.shortTitle}</h3>
                <p className="service-magic-card__text">{l.description}</p>
                <span className="service-magic-card__link">Ansehen →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/bezirke" className="btn-outline">Alle 23 Bezirke</a>
            <a href="/preise" className="btn-outline">Preise</a>
            <a href="/ueber-uns" className="btn-outline">Über uns</a>
            <a href="/kontakt" className="btn-outline">Kontakt</a>
          </div>
        </div>
      </section>
    </>
  );
}
