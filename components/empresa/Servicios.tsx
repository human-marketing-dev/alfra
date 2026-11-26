/* Página de unidad — qué resuelve.
   Las capacidades de la unidad como tarjetas numeradas. La retícula se
   ajusta a cuántas son (3 o 4). Sin servicios confirmados, no se pinta. */
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { enLetras, type Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Servicios({ empresa }: { empresa: Empresa }) {
  const n = empresa.servicios.length;
  if (n === 0) return null;

  return (
    <section
      id="servicios"
      className="hf-section"
      style={{ background: empresa.argumentoCentral ? "var(--bg-page-alt)" : "var(--bg-page)" }}
    >
      <div className="hf-container">
        <SectionHeading eyebrow="Qué resuelve" title={`El frente de ${empresa.nombreCorto}, | en ${enLetras(n)} capacidades.`} />

        <div className={n === 3 ? "hf-grid-3" : "hf-grid-4"} data-reveal-group style={{ marginTop: "var(--gap-block)" }}>
          {empresa.servicios.map((s, i) => (
            <div
              key={s.titulo}
              className="hf-tile"
              style={{
                background: "var(--surface)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--pad-card)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--gap-item)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "var(--gap-item)",
                }}
              >
                <span className="t-stat" style={{ fontSize: "var(--fs-h3)", color: "var(--text-accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    width: 36,
                    height: 36,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "var(--radius-xs)",
                    background: "var(--brand-50)",
                  }}
                >
                  <Icon name="check" size={16} color="var(--brand-700)" />
                </span>
              </div>
              <h3 className="t-h4">{conCursivas(s.titulo)}</h3>
              <p className="t-small">{conCursivas(s.descripcion)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
