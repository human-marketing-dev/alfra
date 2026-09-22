/* Listado-índice de empresas.
   Cierra una página devolviendo al visitante a las empresas del grupo:
   la misma función de distribución que cumple la landing. Con `excluir`
   omite una —la que ya se está viendo—; sin él, las lista todas.

   El titular por defecto dice cuántas quedan, y ese número sale de la
   lista que se está pintando, no del copy. */
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { EMPRESAS, enLetras, otrasEmpresas } from "@/lib/empresas";
import { GRUPO } from "@/lib/grupo";

export interface OtrasEmpresasProps {
  /** Slug de la empresa que se está viendo, para dejarla fuera del listado. */
  excluir?: string;
  eyebrow?: string;
  title?: string;
  fondo?: string;
}

/**
 * «confirmar» — antetítulo del listado. Vacío mientras no haya copy
 * validado: el encabezado se pinta sin antetítulo y no se inventa nada.
 * El anterior («El resto del grupo») volvió a ser exacto al salir la
 * matriz del arreglo, por si se quiere recuperar.
 */
const ANTETITULO = "";

export function OtrasEmpresas({
  excluir,
  eyebrow = ANTETITULO,
  title,
  fondo = "var(--bg-page)",
}: OtrasEmpresasProps) {
  const otras = excluir ? otrasEmpresas(excluir) : EMPRESAS;
  const titular =
    title ??
    (excluir
      ? `Las otras ${enLetras(otras.length)} empresas de ${GRUPO.nombreCorto}.`
      : `Las ${enLetras(otras.length)} empresas de ${GRUPO.nombreCorto}.`);

  return (
    <section className="hf-section" style={{ background: fondo }}>
      <div className="hf-container">
        <SectionHeading eyebrow={eyebrow} title={titular} maxWidth="760px" />

        <div style={{ marginTop: "var(--space-7)", borderTop: "1px solid var(--border-hair)" }}>
          {otras.map((e) => (
            <Link
              key={e.slug}
              href={`/empresas/${e.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-5)",
                padding: "var(--space-5) 0",
                borderBottom: "1px solid var(--border-hair)",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Icon name={e.icono} size={22} color="var(--green-700)" stroke={1.4} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "19px",
                  letterSpacing: "-0.01em",
                  color: "var(--text-strong)",
                  flex: "0 0 auto",
                  minWidth: "min(100%, 260px)",
                }}
              >
                {e.nombre}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-accent)",
                  flex: 1,
                }}
              >
                {e.frente}
              </span>
              <Icon name="arrow-right" size={18} color="var(--text-muted)" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
