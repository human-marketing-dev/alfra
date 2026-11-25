/* Landing · bloque 02 — Conoce nuestro grupo.
   Justifica la estructura de especialistas y la sostiene con cifras.
   Sólo datos confirmados del brief §1 —el número de unidades sale del
   arreglo—; año de fundación y proyectos acumulados siguen «confirmar». */
import React from "react";
import { Stat } from "@/components/ui/Stat";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EMPRESAS } from "@/lib/empresas";

export function Grupo() {
  return (
    <section id="grupo" className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "end" }}>
        <div>
          <SectionHeading eyebrow="Conoce nuestro grupo" title="Cada oportunidad pide un especialista." />
          <p className="t-body measure" style={{ marginTop: "var(--gap-title)" }}>
            El sector inmobiliario abarca frentes muy distintos entre sí. Comprar o rentar una propiedad, construir una
            operación industrial, construir una casa e invertir en un portafolio requieren equipos, métodos y experiencia
            diferentes. Cada frente lo atiende una unidad dedicada y, cuando la oportunidad crece, activa a las demás.
          </p>
        </div>

        <div className="hf-cells-3" data-reveal style={{ background: "var(--border-hair)", borderRadius: "var(--radius-sm)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
          {[
            { value: String(EMPRESAS.length).padStart(2, "0"), label: "Unidades de negocio", sub: "especializadas del sector" },
            { value: "01", label: "Interlocutor", sub: "para todo tu proyecto" },
            { value: "MTY", label: "Sede", sub: "Monterrey, Nuevo León" },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--surface)", padding: "var(--space-6) var(--space-5)" }}>
              <Stat value={s.value} label={s.label} sublabel={s.sub} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
