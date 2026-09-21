/* ALFRA Eyebrow — the wide-tracked uppercase overline derived from the
   "DESARROLLOS" treatment. Optionally prefixed with a short rule. */
import React from "react";

export interface EyebrowProps {
  children?: React.ReactNode;
  tone?: "brand" | "muted" | "wood" | "onDark";
  rule?: boolean;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export function Eyebrow({ children, tone = "brand", rule = false, as = "div", style = {} }: EyebrowProps) {
  const color =
    tone === "muted"
      ? "var(--text-muted)"
      : tone === "wood"
        ? "var(--text-accent)"
        : tone === "onDark"
          ? "var(--wood-300)"
          : "var(--text-brand)";
  const Tag: React.ElementType = as;
  return (
    <Tag
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {rule && <span style={{ width: "28px", height: "1px", background: "currentColor", opacity: 0.55, flex: "none" }} />}
      {children}
    </Tag>
  );
}
