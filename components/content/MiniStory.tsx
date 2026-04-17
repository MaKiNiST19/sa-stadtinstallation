import { type ReactNode } from "react";

interface MiniStoryProps {
  title: string;        // z.B. "Frau M., 1020 Leopoldstadt"
  context?: string;     // z.B. "Altbauwohnung, Jänner 2026"
  children: ReactNode;  // Kundenzitat / Fallstudie
  outcome?: string;     // Ergebnis in einem Satz
}

/**
 * E-E-A-T Mini-Story: echter Kundenfall mit konkretem Kontext (Adresse, Zeit)
 * und konkretem Ergebnis. Stärkt Experience-Signal stark.
 */
export default function MiniStory({ title, context, children, outcome }: MiniStoryProps) {
  return (
    <blockquote className="mini-story">
      <div className="mini-story__header">
        <strong className="mini-story__title">{title}</strong>
        {context && <span className="mini-story__context"> · {context}</span>}
      </div>
      <div className="mini-story__body">{children}</div>
      {outcome && (
        <div className="mini-story__outcome">
          <span className="mini-story__outcome-label">Ergebnis:</span> {outcome}
        </div>
      )}
    </blockquote>
  );
}
