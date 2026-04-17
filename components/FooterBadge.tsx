"use client";

import { RatingBadge } from "@/components/foundations/rating-badge";

export default function FooterBadge() {
  return (
    <div style={{ color: "white" }}>
      <RatingBadge
        title="WKÖ Meisterbetrieb"
        subtitle="Google Käuferschutz verifiziert"
        rating={5}
        theme="light"
      />
    </div>
  );
}
