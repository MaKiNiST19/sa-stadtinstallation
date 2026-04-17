import { type ReactNode } from "react";

interface EntityCardProps {
  label: string;       // "Wer", "Wann", "Wie", "Warum wir"
  title: string;       // Hauptaussage
  children: ReactNode; // Beschreibung
  icon?: ReactNode;
}

/**
 * Entity-SEO Block: jede Seite bekommt 4-6 davon, z.B.:
 *   WAS? | WER? | WANN? | WIE LANGE? | WIE VIEL? | WARUM WIR?
 * Hilft Google + AI Overviews, die Entität klar zu extrahieren.
 */
export default function EntityCard({ label, title, children, icon }: EntityCardProps) {
  return (
    <div className="entity-card">
      <div className="entity-card__header">
        {icon && <span className="entity-card__icon">{icon}</span>}
        <span className="entity-card__label">{label}</span>
      </div>
      <h3 className="entity-card__title">{title}</h3>
      <div className="entity-card__body">{children}</div>
    </div>
  );
}
