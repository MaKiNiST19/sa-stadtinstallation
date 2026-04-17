import { type ReactNode } from "react";
import { cx } from "@/utils/cx";

interface HighlightBoxProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
  variant?: "blue" | "red" | "green" | "yellow";
  className?: string;
}

/**
 * Hervorgehobener Informationsblock - alle 2-3 H2 einsetzen.
 * Variante "red" für Warnungen/Notfälle, "blue" als Standard.
 */
export default function HighlightBox({
  children,
  title,
  icon,
  variant = "blue",
  className,
}: HighlightBoxProps) {
  return (
    <aside
      className={cx(
        "highlight-box",
        variant === "red" && "highlight-box--red",
        variant === "green" && "highlight-box--green",
        variant === "yellow" && "highlight-box--yellow",
        className
      )}
    >
      {(title || icon) && (
        <div className="highlight-box__header">
          {icon && <span className="highlight-box__icon">{icon}</span>}
          {title && <h3 className="highlight-box__title">{title}</h3>}
        </div>
      )}
      <div className="highlight-box__body">{children}</div>
    </aside>
  );
}
