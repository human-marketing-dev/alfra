/* Encabezado de sección — antetítulo + titular + entrada opcional.
   Es el único lugar donde se arma esa terna: la jerarquía y los saltos
   (--gap-eyebrow, --gap-title) salen del sistema de app/globals.css. El
   color se adapta solo dentro de un contenedor `.is-dark`. */
import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  maxWidth?: string;
  /** Nivel del titular. h2 por defecto; h1 sólo en heros. */
  as?: "h1" | "h2";
  /** "split": titular a la izquierda y entrada a la derecha (escritorio). */
  layout?: "stack" | "split";
  style?: React.CSSProperties;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  maxWidth = "760px",
  as = "h2",
  layout = "stack",
  style = {},
}: SectionHeadingProps) {
  const Titulo = as;
  if (layout === "split" && lead && align === "left") {
    return (
      <div className="hf-heading-split" data-reveal style={style}>
        <div style={{ maxWidth }}>
          {eyebrow && <Eyebrow style={{ marginBottom: "var(--gap-eyebrow)" }}>{eyebrow}</Eyebrow>}
          <Titulo className="t-h2">{title}</Titulo>
        </div>
        <p className="t-lead" style={{ maxWidth: "460px" }}>{lead}</p>
      </div>
    );
  }
  return (
    <div
      data-reveal
      style={{
        maxWidth,
        marginInline: align === "center" ? "auto" : undefined,
        textAlign: align,
        ...style,
      }}
    >
      {eyebrow && (
        <Eyebrow style={{ marginBottom: "var(--gap-eyebrow)" }}>
          {eyebrow}
        </Eyebrow>
      )}
      <Titulo className="t-h2">{title}</Titulo>
      {lead && (
        <p className="t-lead" style={{ marginTop: "var(--gap-title)" }}>
          {lead}
        </p>
      )}
    </div>
  );
}
