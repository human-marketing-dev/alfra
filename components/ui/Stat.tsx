/* HIFRA Stat — a headline figure paired with a label, used in investor
   materials and project spec strips. Numerals are set in the mono face. */
import React from "react";

export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "brand" | "inverse";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export function Stat({ value, label, sublabel = null, align = "left", tone = "default", size = "md", style = {} }: StatProps) {
  const valueColor =
    tone === "inverse" ? "var(--neutral-0)" : tone === "brand" ? "var(--green-700)" : "var(--text-strong)";
  const labelColor = tone === "inverse" ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  const valueSize = size === "lg" ? "var(--text-4xl)" : size === "sm" ? "var(--text-2xl)" : "var(--text-3xl)";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        textAlign: align,
        alignItems: align === "center" ? "center" : "flex-start",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          fontSize: valueSize,
          lineHeight: 1,
          letterSpacing: "-0.01em",
          color: valueColor,
        }}
      >
        {value}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: labelColor,
          }}
        >
          {label}
        </div>
        {sublabel && (
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              color: tone === "inverse" ? "var(--text-on-dark-muted)" : "var(--text-muted)",
            }}
          >
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
