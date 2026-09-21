/* Página de empresa — a quién sirve.
   Toma el público del brief §7 que corresponde a esta empresa: quién es,
   qué busca y qué le dice ALFRA. El panel lateral lleva el modelo de
   referencia y, cuando existen, las pruebas publicables.

   Con la audiencia todavía marcada «confirmar» en `lib/empresas.ts`, la
   sección entera no se pinta: nada se inventa ni queda en hueco. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Audiencia({ empresa }: { empresa: Empresa }) {
  const { promesa, quien, busca } = empresa.audiencia;
  if (!promesa && !quien && !busca && !empresa.modeloReferencia) return null;

  const label: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "var(--space-2)",
  };

  const body: React.CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontSize: "17px",
    lineHeight: 1.65,
    color: "var(--text-body)",
    margin: 0,
  };

  return (
    <section className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
        <div>
          <SectionHeading eyebrow="A quién sirve" title={conCursivas(promesa)} maxWidth="620px" />

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", marginTop: "var(--space-7)" }}>
            {quien && (
              <div>
                <div style={label}>Quién es</div>
                <p style={body}>{conCursivas(quien)}</p>
              </div>
            )}
            {busca && (
              <div>
                <div style={label}>Qué busca</div>
                <p style={body}>{conCursivas(busca)}</p>
              </div>
            )}

            {empresa.sitio && (
              <Button
                variant="primary"
                size="lg"
                href={empresa.sitio}
                target="_blank"
                rel="noopener noreferrer"
                rightIcon={<Icon name="arrow-up-right" size={16} />}
                style={{ alignSelf: "flex-start" }}
              >
                Ir al sitio de {empresa.nombreCorto}
              </Button>
            )}
          </div>
        </div>

        <div
          style={{
            background: "var(--surface)",
            boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-sm)",
            borderRadius: "var(--radius-sm)",
            padding: "var(--space-7)",
          }}
        >
          {empresa.modeloReferencia && (
            <>
              <div style={label}>Modelo de referencia</div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "var(--text-strong)",
                  margin: 0,
                }}
              >
                {empresa.modeloReferencia}
              </p>
            </>
          )}

          {empresa.pruebas.length > 0 && (
            <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-6)", borderTop: "1px solid var(--border-hair)" }}>
              <div style={label}>Capacidad instalada</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {empresa.pruebas.map((p) => (
                  <li key={p} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <Icon name="check" size={17} color="var(--green-700)" style={{ marginTop: "4px" }} />
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px", lineHeight: 1.55, color: "var(--text-body)" }}>
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
