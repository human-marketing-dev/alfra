/* ALFRA Stat — cifra en mono con su etiqueta. Tamaños y color desde
   `.t-stat` / `.t-label`; dentro de `.is-dark` se invierte solo. */
import React from "react";

export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  sublabel?: React.ReactNode;
  align?: "left" | "center";
  style?: React.CSSProperties;
}

export function Stat({ value, label, sublabel = null, align = "left", style = {} }: StatProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        textAlign: align,
        alignItems: align === "center" ? "center" : "flex-start",
        ...style,
      }}
    >
      <div className="t-stat">{value}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <div className="t-label t-accent">{label}</div>
        {sublabel && <div className="t-small t-muted">{sublabel}</div>}
      </div>
    </div>
  );
}
