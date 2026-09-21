/* Landing · bloque 03 — Las empresas.
   Una tarjeta por empresa, con salida a su página. El orden es el
   canónico de `lib/empresas.ts`, y cuántas son sale del arreglo. */
import React from "react";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EMPRESAS, enLetrasCapital } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Empresas() {
  return (
    <section id="empresas" className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="Las empresas"
          title={`${enLetrasCapital(EMPRESAS.length)} especialistas. Todo el sector.`}
          maxWidth="820px"
        />

        <div className="hf-grid-3" style={{ marginTop: "var(--space-8)" }}>
          {EMPRESAS.map((e) => (
            <Card key={e.slug} interactive href={`/empresas/${e.slug}`} padding="var(--space-6)">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "var(--space-5)" }}>
                <Icon name={e.icono} size={24} color="var(--green-700)" stroke={1.4} />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-accent)",
                  }}
                >
                  {e.frente}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "23px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "var(--text-strong)",
                  margin: "0 0 var(--space-3)",
                }}
              >
                {e.nombre}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {conCursivas(e.tarjeta)}
              </p>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "var(--space-6)",
                  paddingTop: "var(--space-4)",
                  borderTop: "1px solid var(--border-hair)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-brand)",
                }}
              >
                Ir a {e.nombre}
                <Icon name="arrow-right" size={15} />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
