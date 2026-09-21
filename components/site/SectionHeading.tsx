/* Encabezado de sección — el par antetítulo + titular que usan todos los
   bloques. Centraliza la escala tipográfica para que la jerarquía sea la
   misma en la landing y en las páginas de empresa. */
import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  onDark?: boolean;
  maxWidth?: string;
  style?: React.CSSProperties;
}

export function SectionHeading({ eyebrow, title, lead, onDark = false, maxWidth = "720px", style = {} }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth, ...style }}>
      {eyebrow && (
        <Eyebrow tone={onDark ? "onDark" : "brand"} rule style={{ marginBottom: "var(--space-4)" }}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(30px, 4vw, 52px)",
          lineHeight: 1.06,
          letterSpacing: "-0.02em",
          color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
          margin: lead ? "0 0 var(--space-4)" : 0,
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(17px, 1.5vw, 19px)",
            lineHeight: 1.65,
            color: onDark ? "var(--text-on-dark-muted)" : "var(--text-body)",
            margin: 0,
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
