/* Fondo de los paneles oscuros: verde bosque con una retícula de línea
   fina, el mismo motivo de trazo que sostiene el resto del sistema.
   Resuelve el hero sin depender de fotografía, que sigue pendiente. */
import React from "react";

export function DarkBackdrop({ tone = "forest" }: { tone?: "forest" | "charcoal" }) {
  const base = tone === "charcoal" ? "var(--neutral-900)" : "var(--green-800)";
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: base }} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(244,240,232,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,0.055) 1px, transparent 1px)",
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
            "radial-gradient(90% 70% at 78% 12%, rgba(151,116,74,0.22) 0%, transparent 60%), linear-gradient(180deg, rgba(16,32,24,0.15) 0%, rgba(16,32,24,0.62) 100%)",
        }}
      />
    </>
  );
}
