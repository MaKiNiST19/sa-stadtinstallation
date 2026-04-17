import Image from "next/image";

export default function BrandCarousel() {
  const brands = [
    { name: "Viessmann", src: "/images/brands/viessmann.png" },
    { name: "Vaillant", src: "/images/brands/vaillant.png" },
    { name: "Buderus", src: "/images/brands/buderus.png" },
    { name: "Junkers", src: "/images/brands/junkers.png" },
    { name: "Bosch", src: "/images/brands/bosch.png" },
    { name: "Wolf", src: "/images/brands/wolf.png" },
    { name: "Saunier Duval", src: "/images/brands/saunier-duval.png" },
    { name: "Grohe", src: "/images/brands/grohe.png" },
    { name: "Hansgrohe", src: "/images/brands/hansgrohe.png" },
    { name: "Geberit", src: "/images/brands/geberit.png" },
    { name: "Laufen", src: "/images/brands/laufen.png" },
  ];

  const allBrands = [...brands, ...brands];

  return (
    <section className="brand-carousel-section">
      <div style={{ overflow: "hidden", padding: "32px 0" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "20px",
          }}
        >
          Wir arbeiten mit führenden Marken
        </p>
        <div className="brand-carousel-track">
          {allBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="brand-carousel-item"
              style={{
                position: "relative",
                width: "120px",
                height: "40px",
                margin: "0 20px",
              }}
            >
              <Image
                src={brand.src}
                alt={`${brand.name} Partner Wien Installateur`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
