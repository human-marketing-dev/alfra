/* Landing · pilares del grupo (Brief Maestro §3).
   Se publican los tres pilares con prueba confirmada; el de sinergia
   espera casos reales («confirmar casos»). */
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HeroFoto } from "@/components/site/HeroFoto";
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
    <HeroFoto foto={foto} velo="pleno">
      <div className="hf-container hf-section">
        <SectionHeading eyebrow="Cómo trabajamos" title="Cobertura, especialización y capacidad de ejecución." />
        <div className="hf-grid-3" style={{ marginTop: "var(--gap-block)", gap: "var(--space-7)" }}>
          {PILARES.map((p, i) => (
            <div key={p.titulo} style={{ paddingTop: "var(--space-6)", borderTop: "1px solid var(--c-line)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "var(--space-6)",
                }}
              >
                <Icon name={p.icono} size={30} color="var(--brand-300)" stroke={1.3} />
                <span className="t-label">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="t-h3" style={{ marginBottom: "var(--space-3)" }}>
                {p.titulo}
              </h3>
              <p className="t-small">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </HeroFoto>
  );
}
