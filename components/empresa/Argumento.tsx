/* Página de unidad — argumento central.
   Sólo para la unidad que lo tiene en el brief (§5.3, Desarrollo
   Residencial): explica de dónde sale la ventaja antes de listar los
   servicios. Sin `argumentoCentral` en `lib/empresas.ts`, no se pinta. */
import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Argumento({ empresa }: { empresa: Empresa }) {
  const argumento = empresa.argumentoCentral;
  if (!argumento) return null;

  return (
    <section className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
        <SectionHeading eyebrow="Por qué ahorras" title={argumento.titulo} maxWidth="520px" />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {argumento.parrafos.map((p) => (
            <p
              key={p}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(17px, 1.6vw, 19px)",
                lineHeight: 1.7,
                color: "var(--text-body)",
                margin: 0,
              }}
            >
              {conCursivas(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
