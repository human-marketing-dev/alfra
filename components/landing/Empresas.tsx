/* Landing · las unidades de negocio.
   Una tarjeta con fotografía por unidad, con salida a su página. El
   orden es el canónico de `lib/empresas.ts`. */
import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { UnidadCard } from "@/components/site/UnidadCard";
import { EMPRESAS } from "@/lib/empresas";

export function Empresas() {
  return (
    <section id="unidades" className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="Unidades de negocio"
          title="Una unidad especialista | para cada frente."
          layout="split"
          lead="Entra por la unidad que resuelve tu oportunidad de hoy y queda respaldado por todo el grupo."
        />
        <div className="hf-grid-2" data-reveal-group style={{ marginTop: "var(--gap-block)" }}>
          {EMPRESAS.map((e) => (
            <UnidadCard key={e.slug} empresa={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
