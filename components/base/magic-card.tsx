"use client";

import React, { useRef, useState } from "react";
import { cx } from "@/utils/cx";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className,
  gradientSize = 400,
  gradientColor = "rgba(11, 79, 156, 0.15)", // SA primary blue
  gradientOpacity = 1,
}: MagicCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(gradientOpacity)}
      onMouseLeave={() => setOpacity(0)}
      className={cx("magic-card-outer", className)}
    >
      <div
        style={{
          opacity,
          background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
          position: "absolute",
          inset: "-1px",
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />
      <div className="magic-card-inner">{children}</div>
    </div>
  );
}
