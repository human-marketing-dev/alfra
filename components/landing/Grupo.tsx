/* Landing · bloque 02 — Conoce nuestro grupo.
   Justifica la estructura de seis especialistas. La franja de cifras usa
   sólo datos confirmados del brief §1; el año de fundación y los
   proyectos acumulados siguen marcados «confirmar» y no se publican. */
import React from "react";
import { Stat } from "@/components/ui/Stat";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Grupo() {
  return (
    <section id="grupo" className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="Conoce nuestro grupo"
          title="Cada oportunidad pide un especialista."
          maxWidth="820px"
        />

        <div className="hf-grid-2" style={{ marginTop: "var(--space-7)", alignItems: "start" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(17px, 1.6vw, 20px)",
              lineHeight: 1.7,
              color: "var(--text-body)",
              margin: 0,
            }}
          >
            El sector inmobiliario abarca frentes muy distintos entre sí. Vender una propiedad, aterrizar una empresa
            extranjera, estructurar un área comercial, colocar capital, desarrollar un proyecto y construirlo requieren
            equipos, métodos y experiencia diferentes.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
              paddingLeft: "var(--space-6)",
              borderLeft: "1px solid var(--border-hair)",
            }}
          >
            <Stat value="06" label="Empresas" sublabel="especializadas del sector" size="sm" />
            <Stat value="01" label="Interlocutor" sublabel="para todo tu proyecto" size="sm" />
            <Stat value="MTY" label="Sede" sublabel="Monterrey, Nuevo León" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
