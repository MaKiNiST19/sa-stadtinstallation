import { FIRMA } from "@/lib/company";

type Item = {
  icon: string;
  value: string;
  sub: string;
};

/**
 * Kompakte Vertrauens-Leiste direkt unter dem Hero auf Leistungs- und
 * Bezirksseiten. Nutzt FIRMA als Single Source of Truth.
 */
export default function HeroBadgeRow() {
  const items: Item[] = [
    {
      icon: "⭐",
      value: `${FIRMA.trust.rating.toFixed(1)} Bewertung`,
      sub: `${FIRMA.trust.reviewCount} Google-Reviews`,
    },
    {
      icon: "⏱",
      value: "24h erreichbar",
      sub: "Notdienst 7/7",
    },
    {
      icon: "📍",
      value: `${FIRMA.stats.districtsServed} Bezirke`,
      sub: "Ganz Wien",
    },
    {
      icon: "🛠",
      value: `${FIRMA.stats.yearsExperience} Jahre Erfahrung`,
      sub: `Seit ${FIRMA.foundingDate}`,
    },
  ];

  return (
    <div className="hero-badge-row" role="list" aria-label="Vertrauensmerkmale">
      {items.map((it) => (
        <div className="hero-badge-row__item" role="listitem" key={it.value}>
          <span className="hero-badge-row__icon" aria-hidden="true">
            {it.icon}
          </span>
          <div className="hero-badge-row__text">
            <span className="hero-badge-row__value">{it.value}</span>
            <span className="hero-badge-row__sub">{it.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
