import React from "react";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

interface OrbitItemProps {
  children: React.ReactNode;
  radius: number;
  duration: number;
  delay?: number;
  reverse?: boolean;
  size?: number;
}

const OrbitItem = ({
  children,
  radius,
  duration,
  delay = 0,
  reverse = false,
  size = 48,
}: OrbitItemProps) => {
  const wrapDir = reverse ? "reverse" : "normal";
  const innerDir = reverse ? "normal" : "reverse";

  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
      <div
        style={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          top: `-${radius + size / 2}px`,
          left: `-${size / 2}px`,
          animation: `orbit-spin ${duration}s linear ${delay}s infinite ${wrapDir}`,
          transformOrigin: `${size / 2}px ${radius + size / 2}px`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: `orbit-spin ${duration}s linear ${delay}s infinite ${innerDir}`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Marken, die wir tatsächlich verbauen und servicieren.
// Liest alle Bilder aus public/images/orbit beim Build ein.
function loadOrbitBrands(): { src: string; alt: string }[] {
  const dir = path.join(process.cwd(), "public", "images", "orbit");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  return files
    .filter((f) => /\.(png|jpe?g|svg|webp|avif)$/i.test(f))
    .map((f) => {
      const base = f.replace(/\.[^.]+$/, "");
      const alt = base
        .replace(/-?logo$/i, "")
        .replace(/-e\d{10,}/i, "")
        .replace(/-\d+x\d+$/i, "")
        .replace(/[-_]+/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { src: `/images/orbit/${f}`, alt };
    });
}

const brands = loadOrbitBrands();

export default function OrbitBrands() {
  return (
    <section
      className="orbit-section"
      style={{ background: "white", padding: "140px 0 100px", overflow: "hidden" }}
    >
      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          width: "calc(100% - 48px)",
          position: "relative",
        }}
      >
        <div
          className="orbit-layout"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <div
            className="orbit-text"
            style={{ flex: "1.3", minWidth: "320px", maxWidth: "680px", zIndex: 5 }}
          >
            <p
              style={{
                color: "var(--primary)",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Markenqualität für Wien
            </p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--dark)",
                lineHeight: 1.1,
                marginBottom: "28px",
              }}
            >
              Hausverwaltungen, Unternehmen und Privatkunden vertrauen SA Stadtinstallation
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "var(--mid)",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Wir arbeiten herstellerunabhängig mit allen führenden Marken für Heiz- und
              Sanitärtechnik. Ob Brennwerttherme, Wärmepumpe, Fernwärmeübergabe oder
              Bad-Armatur – wir installieren und warten das, was zu Ihrem Objekt passt.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "Herstellerzertifizierter Service für Viessmann, Vaillant, Junkers & Co.",
                "Original-Ersatzteile direkt vom Großhandel",
                "Dokumentierte Wartung nach ÖNORM B 8131",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "var(--dark)",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/leistungen" className="btn-sparkle" style={{ display: "inline-flex" }}>
              <span
                className="text_button"
                style={{ padding: "16px 40px", fontSize: "16px", fontWeight: 800 }}
              >
                Leistungen ansehen
              </span>
            </a>
          </div>

          <div
            className="orbit-visual"
            style={{ flex: "1", display: "flex", justifyContent: "center", position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "540px",
                height: "auto",
                aspectRatio: "1/1",
                flexShrink: 0,
              }}
            >
              <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                viewBox="0 0 540 540"
              >
                <circle
                  cx="270"
                  cy="270"
                  r="130"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
                <circle
                  cx="270"
                  cy="270"
                  r="230"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                />
              </svg>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  background: "white",
                  border: "2px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 36px rgba(11, 79, 156, 0.12)",
                  zIndex: 10,
                  padding: "10px",
                }}
              >
                <Image
                  src="/images/sa-logo.png"
                  alt="SA Stadtinstallation"
                  fill
                  sizes="96px"
                  style={{ objectFit: "contain", padding: "10px" }}
                />
              </div>

              {(() => {
                const inner = brands.slice(0, 4);
                return inner.map((b, i) => (
                  <OrbitItem
                    key={b.alt}
                    radius={130}
                    duration={25}
                    delay={-(i * 25) / inner.length}
                    reverse
                    size={80}
                  >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "white",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                      padding: "7px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={b.src} alt={b.alt} fill sizes="80px" style={{ objectFit: "contain", padding: "7px" }} />
                  </div>
                </OrbitItem>
                ));
              })()}

              {(() => {
                const outer = brands.slice(4);
                return outer.map((b, i) => (
                  <OrbitItem
                    key={b.alt}
                    radius={230}
                    duration={45}
                    delay={-(i * 45) / outer.length}
                    size={92}
                  >
                  <div
                    style={{
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      background: "white",
                      border: "1.5px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                      padding: "12px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image src={b.src} alt={b.alt} fill sizes="92px" style={{ objectFit: "contain", padding: "12px" }} />
                  </div>
                </OrbitItem>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
