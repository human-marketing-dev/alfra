/* Página de unidad — presencia.
   Encabezado del sistema y el mapa interactivo con la lista de
   ubicaciones. Los datos viven en `lib/empresas.ts` (`presencia`); sin
   ubicaciones, la sección no se pinta. */
import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MapaPresencia } from "@/components/empresa/MapaPresencia";
import type { Empresa } from "@/lib/empresas";

export function Presencia({ empresa, fondo }: { empresa: Empresa; fondo: string }) {
  const ubicaciones = empresa.presencia?.ubicaciones ?? [];
  if (ubicaciones.length === 0) return null;

  return (
    <section className="hf-section" style={{ background: fondo }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="Presencia"
          title="Dónde operamos."
          layout="split"
          lead={`Las zonas donde ${empresa.nombreCorto} tiene operación hoy.`}
        />
        <div style={{ marginTop: "var(--gap-block)" }}>
          <MapaPresencia ubicaciones={ubicaciones} />
        </div>
      </div>
    </section>
  );
}
