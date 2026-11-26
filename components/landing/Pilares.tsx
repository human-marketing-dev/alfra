/* Landing · pilares del grupo (Brief Maestro §3).
   Se publican los tres pilares con prueba confirmada; el de sinergia
   espera casos reales («confirmar casos»). La foto va limpia, sin velo,
   al lado de los pilares sobre azul marino sólido. */
import React from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { empresaPorSlug } from "@/lib/empresas";

const PILARES = [
  {
    icono: "layers",
    titulo: "Cobertura integral",
    texto:
      "Comprar, vender, rentar, desarrollar, construir e invertir: cualquier oportunidad inmobiliaria tiene quién la ejecute dentro del grupo.",
  },
  {
    icono: "target",
    titulo: "Especialización por unidad",
    texto: "Cada frente lo atiende una unidad dedicada, con su propio equipo, su propio método y un público definido.",
  },
  {
    icono: "hard-hat",
    titulo: "Capacidad de ejecución",
    texto:
      "Equipo técnico y maquinaria propios, control de cada etapa de la obra y el proceso completo del cliente, del terreno a la entrega.",
  },
];

export function Pilares() {
  const foto = empresaPorSlug("alfra-desarrollo-industrial")?.heroImagen;
  return (
    <section className="is-dark hf-section" style={{ background: "var(--brand-950)" }}>
      <div className="hf-container">
        <SectionHeading eyebrow="Cómo trabajamos" title="Cobertura, especialización | y capacidad de ejecución." />
        <div className="hf-pilares" style={{ marginTop: "var(--gap-block)" }}>
          {foto && (
            <div className="hf-pilares-foto" data-reveal>
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                quality={90}
                sizes="(max-width: 860px) 100vw, 60vw"
                style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
              />
            </div>
          )}
          <div data-reveal-group style={{ display: "flex", flexDirection: "column" }}>
            {PILARES.map((p, i) => (
              <div
                key={p.titulo}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "var(--gap-stack)",
                  padding: "var(--pad-card) 0",
                  borderTop: "1px solid var(--c-line)",
                  borderBottom: i === PILARES.length - 1 ? "1px solid var(--c-line)" : undefined,
                }}
              >
                <Icon name={p.icono} size={30} color="var(--brand-300)" stroke={1.3} />
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--gap-item)" }}>
                    <h3 className="t-h3" style={{ marginBottom: "var(--gap-item)" }}>
                      {p.titulo}
                    </h3>
                    <span className="t-label">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="t-small">{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
