import Image from "next/image";

/**
 * Absolute positioniertes Hintergrundbild für die Leistung/Bezirk-Hero-Section.
 * Ersetzt das frühere CSS-`background: url(...)`, damit Next.js das Bild
 * automatisch als WebP/AVIF in responsive Varianten ausliefert und damit
 * der LCP-Wert (Largest Contentful Paint) auf Mobilgeräten deutlich fällt.
 *
 * Der dunkle Gradient-Overlay bleibt in globals.css (::before) unverändert,
 * sodass das optische Ergebnis identisch ist.
 */
export default function HeroBackground({
  src = "/images/installateur-notdienst-wien.jpg",
  alt = "",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      fetchPriority="high"
      sizes="100vw"
      quality={72}
      style={{
        objectFit: "cover",
        objectPosition: "center",
        zIndex: 0,
      }}
      aria-hidden={alt === "" ? true : undefined}
    />
  );
}
