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
    <section className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
        <SectionHeading eyebrow="Por qué ahorras" title={argumento.titulo} maxWidth="560px" />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", paddingTop: "var(--space-2)" }}>
          {argumento.parrafos.map((p, i) => (
            <p key={p} className={i === 0 ? "t-lead" : "t-body"}>
              {conCursivas(p)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
