"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/schema";

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function FaqSection({
  title = "Häufige Fragen",
  subtitle,
  items,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <details
              key={i}
              className="faq-item"
              open={openIndex === i}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) setOpenIndex(i);
              }}
            >
              <summary className="faq-question">{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
