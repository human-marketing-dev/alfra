/* Logotipo a la altura que se le pida.

   `fondo` dice sobre qué va —claro u oscuro— y el registro resuelve qué
   archivo corresponde. El ancho sale del ratio del archivo, así que
   nunca hay deformación ni salto de layout. */
import React from "react";
import Image from "next/image";
import { LOGOS, type MarcaLogo } from "@/lib/logos";
import { GRUPO } from "@/lib/grupo";

export interface LogoProps {
  marca: MarcaLogo;
  /** Fondo sobre el que se pinta el logo. */
  fondo?: "claro" | "oscuro";
  /** Altura en px; el ancho se calcula. */
  alto?: number;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function Logo({ marca, fondo = "claro", alto = 28, priority = false, style = {} }: LogoProps) {
  const logo = LOGOS[marca];

  return (
    <Image
      src={fondo === "oscuro" ? logo.sobreOscuro : logo.sobreClaro}
      alt={logo.alt}
      width={Math.round(alto * logo.ratio)}
      height={alto}
      priority={priority}
      style={{ display: "block", ...style }}
    />
  );
}

export interface LogoGrupoProps {
  fondo?: "claro" | "oscuro";
  /** Altura de la caja en px; la letra se dimensiona a partir de ella. */
  alto?: number;
  style?: React.CSSProperties;
}

/**
 * Firma del grupo para el header y el pie.
 *
 * TODO: logo pendiente — ALFRA todavía no entrega el logotipo del grupo.
 * Mientras no exista archivo, la firma es el nombre corto compuesto en la
 * tipografía display del sistema y ocupando la misma caja que ocuparía el
 * archivo, para que nada se mueva cuando llegue. Sustituir por `Logo` con
 * su entrada en `lib/logos.ts` en cuanto haya arte.
 */
export function LogoGrupo({ fondo = "claro", alto = 28, style = {} }: LogoGrupoProps) {
  return (
    <span
      aria-label={GRUPO.nombre}
      style={{
        display: "block",
        height: `${alto}px`,
        lineHeight: `${alto}px`,
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: `${Math.round(alto * 0.72)}px`,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        color: fondo === "oscuro" ? "var(--neutral-0)" : "var(--text-strong)",
        ...style,
      }}
    >
      {GRUPO.nombreCorto}
    </span>
  );
}
