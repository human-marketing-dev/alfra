/* Página de unidad — a quién sirve.
   Texto a la izquierda (promesa, quién es, qué busca) y, a la derecha,
   la fotografía de la unidad con el modelo de referencia y las pruebas
   publicables montados encima. Lo marcado «confirmar» no se pinta. */
import React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function Audiencia({ empresa }: { empresa: Empresa }) {
  const { promesa, quien, busca } = empresa.audiencia;
  if (!promesa && !quien && !busca && !empresa.modeloReferencia) return null;
  const foto = empresa.heroImagen;
  const fondo = empresa.argumentoCentral ? "var(--bg-page)" : "var(--bg-page-alt)";

  return (
    <section className="hf-section" style={{ background: fondo }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "center" }}>
        <div>
          <SectionHeading eyebrow="A quién sirve" title={conCursivas(promesa)} maxWidth="620px" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-stack)", marginTop: "var(--gap-block)" }}>
            {quien && (
              <div style={{ paddingLeft: "var(--space-5)", borderLeft: "2px solid var(--brand-400)" }}>
                <div className="t-label" style={{ marginBottom: "var(--space-2)" }}>
                  Quién es
                </div>
                <p className="t-body">{conCursivas(quien)}</p>
              </div>
            )}
            {busca && (
              <div style={{ paddingLeft: "var(--space-5)", borderLeft: "2px solid var(--brand-400)" }}>
                <div className="t-label" style={{ marginBottom: "var(--space-2)" }}>
                  Qué busca
                </div>
                <p className="t-body">{conCursivas(busca)}</p>
              </div>
            )}
          </div>
        </div>

        <div className={foto ? "hf-audiencia-media" : undefined} style={{ position: "relative" }}>
          {foto && (
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
              />
            </div>
          )}

          {(empresa.modeloReferencia || empresa.pruebas.length > 0) && (
            <div
              className={foto ? "hf-audiencia-panel" : undefined}
              style={{
                position: foto ? "absolute" : "static",
                left: "var(--space-6)",
                right: "var(--space-6)",
                bottom: 0,
                background: "var(--surface)",
                boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-lg)",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-6)",
              }}
            >
              {empresa.modeloReferencia && (
                <>
                  <div className="t-label" style={{ marginBottom: "var(--space-2)" }}>
                    Modelo
                  </div>
                  <p className="t-h4">{empresa.modeloReferencia}</p>
                </>
              )}
              {empresa.pruebas.length > 0 && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: "var(--space-5) 0 0",
                    padding: "var(--space-5) 0 0",
                    borderTop: "1px solid var(--border-hair)",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "var(--space-3) var(--space-5)",
                  }}
                >
                  {empresa.pruebas.map((p) => (
                    <li key={p} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <Icon name="check" size={16} color="var(--brand-700)" style={{ marginTop: "4px", flex: "none" }} />
                      <span className="t-small">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
