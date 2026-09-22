/* Logotipo a la altura que se le pida.

   `fondo` dice sobre qué va —claro u oscuro— y el registro resuelve qué
   archivo corresponde. El ancho sale del ratio del archivo, así que
   nunca hay deformación ni salto de layout. */
import React from "react";
import Image from "next/image";
import { LOGOS, type MarcaLogo } from "@/lib/logos";

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
