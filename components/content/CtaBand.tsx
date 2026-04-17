import { FIRMA } from "@/lib/company";
import { cx } from "@/utils/cx";

interface CtaBandProps {
  title: string;
  subtitle?: string;
  variant?: "blue" | "red";
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  title,
  subtitle,
  variant = "blue",
  primaryLabel = `📞 ${FIRMA.telephoneDisplay}`,
  primaryHref = `tel:${FIRMA.telephone}`,
  secondaryLabel = "Termin anfragen",
  secondaryHref = "/kontakt",
}: CtaBandProps) {
  return (
    <section className={cx("cta-band", variant === "red" && "cta-band--red")}>
      <div className="cta-band__inner">
        <div className="cta-band__text">
          <h2 className="cta-band__title">{title}</h2>
          {subtitle && <p className="cta-band__subtitle">{subtitle}</p>}
        </div>
        <div className="cta-band__actions">
          <a href={primaryHref} className="cta-band__btn cta-band__btn--primary">
            {primaryLabel}
          </a>
          <a href={secondaryHref} className="cta-band__btn cta-band__btn--secondary">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
