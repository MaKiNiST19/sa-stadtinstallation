import Image from "next/image";

const BADGES = [
  {
    src: "/images/wko-wien.png",
    alt: "WKO Wien – Wirtschaftskammer Wien",
    width: 320,
    height: 100,
  },
  {
    src: "/images/notdienst-24-wien-sa.png",
    alt: "24h Notdienst – Service rund um die Uhr",
    width: 120,
    height: 120,
  },
  {
    src: "/images/gas-und-sanitartechnic-wien-sak.png",
    alt: "Gas- und Sanitärtechnik – staatlich geprüft",
    width: 120,
    height: 120,
  },
  {
    src: "/images/meister-betrieb-wien.png",
    alt: "Meisterbetrieb Wien",
    width: 120,
    height: 120,
  },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container">
        <div className="trust-badges__row">
          {BADGES.map((b) => (
            <div key={b.src} className="trust-badges__item">
              <Image
                src={b.src}
                alt={b.alt}
                width={b.width}
                height={b.height}
                sizes="(max-width: 640px) 40vw, 180px"
                style={{
                  width: "auto",
                  height: "100%",
                  maxHeight: "90px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
