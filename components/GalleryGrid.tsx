"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }, [items.length]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="gallery-grid__item"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild ${i + 1} vergrößern`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <span className="gallery-grid__zoom" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {current && openIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Bild ${openIndex + 1} von ${items.length}`}
          onClick={close}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={close}
            aria-label="Schließen"
          >
            ×
          </button>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>
          <div
            className="gallery-lightbox__stage"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1200}
              sizes="92vw"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "92vw",
                maxHeight: "86vh",
                objectFit: "contain",
                display: "block",
                borderRadius: "8px",
              }}
              priority
            />
            <p className="gallery-lightbox__caption">
              {openIndex + 1} / {items.length}
            </p>
          </div>
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Nächstes Bild"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
