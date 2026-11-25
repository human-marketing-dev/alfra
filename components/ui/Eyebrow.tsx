/* ALFRA Eyebrow — antetítulo en versales con tracking amplio, con una
   regla corta opcional. El tamaño y el color vienen de `.t-eyebrow`
   (app/globals.css); `tone` sólo lo cambia cuando hace falta. */
import React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: "brand" | "muted" | "wood" | "onDark";
  rule?: boolean;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

const COLOR: Record<NonNullable<EyebrowProps["tone"]>, string | undefined> = {
  brand: undefined, // var(--c-brand): verde sobre claro, madera sobre oscuro
  muted: "var(--c-muted)",
  wood: "var(--c-accent)",
  onDark: "var(--wood-300)",
};

export function Eyebrow({ children, tone = "brand", rule = false, as = "div", className = "", style = {} }: EyebrowProps) {
  const Tag: React.ElementType = as;
  return (
    <Tag
      className={`t-eyebrow ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "12px", color: COLOR[tone], ...style }}
    >
      {rule && <span style={{ width: "28px", height: "1px", background: "currentColor", opacity: 0.55, flex: "none" }} />}
      {children}
    </Tag>
  );
}
