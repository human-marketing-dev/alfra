/* Listado de unidades con fotografía para cerrar una página.
   Con `excluir` omite la unidad que ya se está viendo. El titular por
   defecto dice cuántas quedan, y ese número sale de la lista. */
import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { UnidadCard } from "@/components/site/UnidadCard";
import { EMPRESAS, enLetras, otrasEmpresas } from "@/lib/empresas";
import { GRUPO } from "@/lib/grupo";

export interface OtrasEmpresasProps {
  /** Slug de la unidad que se está viendo, para dejarla fuera. */
  excluir?: string;
  eyebrow?: string;
  title?: string;
  fondo?: string;
}

export function OtrasEmpresas({ excluir, eyebrow = "El resto del grupo", title, fondo = "var(--bg-page)" }: OtrasEmpresasProps) {
  const otras = excluir ? otrasEmpresas(excluir) : EMPRESAS;
  const titular =
    title ??
    (excluir
      ? `Las otras ${enLetras(otras.length)} unidades de ${GRUPO.nombreCorto}.`
      : `Las ${enLetras(otras.length)} unidades de ${GRUPO.nombreCorto}.`);

  return (
    <section className="hf-section" style={{ background: fondo }}>
      <div className="hf-container">
        <SectionHeading eyebrow={eyebrow} title={titular} />
        <div className={otras.length === 3 ? "hf-grid-3" : "hf-grid-4"} data-reveal-group style={{ marginTop: "var(--gap-block)" }}>
          {otras.map((e) => (
            <UnidadCard key={e.slug} empresa={e} variante="compacta" />
          ))}
        </div>
      </div>
    </section>
  );
}
