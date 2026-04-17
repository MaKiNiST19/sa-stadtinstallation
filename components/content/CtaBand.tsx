import { FIRMA } from "@/lib/company";
import { cx } from "@/utils/cx";
import PhoneIcon from "@/components/PhoneIcon";

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
  primaryLabel,
  primaryHref = `tel:${FIRMA.telephone}`,
  secondaryLabel = "Termin anfragen",
  secondaryHref = "/kontakt",
}: CtaBandProps) {
  const isPhone = primaryHref.startsWith("tel:");
  const label = primaryLabel ?? FIRMA.telephoneDisplay;
  return (
    <section className={cx("cta-band", variant === "red" && "cta-band--red")}>
      <div className="cta-band__inner">
        <div className="cta-band__text">
          <h2 className="cta-band__title">{title}</h2>
          {subtitle && <p className="cta-band__subtitle">{subtitle}</p>}
        </div>
        <div className="cta-band__actions">
          <a href={primaryHref} className="cta-band__btn cta-band__btn--primary btn-with-icon">
            {isPhone && <PhoneIcon />}
            {label}
          </a>
          <a href={secondaryHref} className="cta-band__btn cta-band__btn--secondary">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
