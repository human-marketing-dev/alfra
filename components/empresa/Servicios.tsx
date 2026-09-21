/* Página de empresa — qué resuelve.
   Los cuatro frentes de trabajo de la empresa, numerados, con el mismo
   tratamiento de retícula del sistema. Sin servicios confirmados en
   `lib/empresas.ts`, la sección no se pinta. */
import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Servicios({ empresa }: { empresa: Empresa }) {
  if (empresa.servicios.length === 0) return null;

  return (
    <section id="servicios" className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container">
        <SectionHeading eyebrow="Qué resuelve" title={`El frente de ${empresa.nombreCorto}, en cuatro capacidades.`} />

        <div className="hf-grid-4" style={{ marginTop: "var(--space-8)", gap: 0, borderTop: "1px solid var(--border-hair)" }}>
          {empresa.servicios.map((s, i) => (
            <div
              key={s.titulo}
              style={{
                padding: "var(--space-6) var(--space-5) var(--space-6) 0",
                paddingLeft: i > 0 ? "var(--space-5)" : 0,
                borderRight: i < empresa.servicios.length - 1 ? "1px solid var(--border-hair)" : "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text-accent)",
                  marginBottom: "var(--space-5)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "20px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  color: "var(--text-strong)",
                  margin: "0 0 10px",
                }}
              >
                {conCursivas(s.titulo)}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                {conCursivas(s.descripcion)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
