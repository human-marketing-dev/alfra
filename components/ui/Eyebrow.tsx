/* ALFRA Eyebrow — antetítulo en versales con tracking amplio, sin
   regla decorativa. El tamaño y el color vienen de `.t-eyebrow`
   (app/globals.css); `tone` sólo lo cambia cuando hace falta. */
import React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: "brand" | "muted" | "wood" | "onDark";
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

const COLOR: Record<NonNullable<EyebrowProps["tone"]>, string | undefined> = {
  brand: undefined, // var(--c-brand): azul sobre claro, madera sobre oscuro
  muted: "var(--c-muted)",
  wood: "var(--c-accent)",
  onDark: "var(--wood-300)",
};

export function Eyebrow({ children, tone = "brand", as = "div", className = "", style = {} }: EyebrowProps) {
  const Tag: React.ElementType = as;
  return (
    <Tag
      className={`t-eyebrow ${className}`}
      style={{ display: "block", color: COLOR[tone], ...style }}
    >
      {children}
    </Tag>
  );
}
