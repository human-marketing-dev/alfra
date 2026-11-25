/* Fondo de los paneles oscuros: azul marino con una retícula de línea
   fina, el mismo motivo de trazo que sostiene el resto del sistema.
   Resuelve el hero sin depender de fotografía, que sigue pendiente. */
import React from "react";

export function DarkBackdrop({ tone = "forest" }: { tone?: "forest" | "charcoal" }) {
  const base = tone === "charcoal" ? "var(--neutral-900)" : "var(--brand-950)";
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: base }} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "radial-gradient(120% 90% at 15% 0%, #000 20%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(120% 90% at 15% 0%, #000 20%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(90% 70% at 78% 12%, rgba(59,118,246,0.28) 0%, transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(37,99,235,0.18) 0%, transparent 70%), linear-gradient(180deg, rgba(11,22,52,0.15) 0%, rgba(11,22,52,0.62) 100%)",
        }}
      />
    </>
  );
}
