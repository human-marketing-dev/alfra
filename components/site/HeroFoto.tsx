/* Fondo oscuro de sección con fotografía opcional.

   Una sola pieza para todo panel oscuro del sitio —heros de página y
   bandas de cierre—: el verde con retícula de `DarkBackdrop` y, si hay
   foto, la imagen encima con un velo del mismo verde que se carga hacia
   el lado del texto. Envuelve el contenido en `.is-dark`, así que toda
   la tipografía de adentro se invierte sola. */
import React from "react";
import Image from "next/image";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";

export interface FotoFondo {
  src: string;
  alt: string;
  /** object-position de la foto. */
  posicion?: string;
}

export interface HeroFotoProps {
  foto?: FotoFondo;
  /** "lado": velo cargado a la izquierda (texto a la izquierda).
      "pleno": velo parejo, para texto centrado o bandas. */
  velo?: "lado" | "pleno";
  tone?: "forest" | "charcoal";
  /** El hero de página se mete bajo el header transparente. */
  bajoHeader?: boolean;
  priority?: boolean;
  id?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const VELOS = {
  lado:
    "linear-gradient(90deg, rgba(16,32,24,0.94) 0%, rgba(16,32,24,0.82) 42%, rgba(16,32,24,0.5) 100%), linear-gradient(180deg, rgba(16,32,24,0.4) 0%, rgba(16,32,24,0.1) 40%, rgba(16,32,24,0.72) 100%)",
  pleno: "linear-gradient(180deg, rgba(16,32,24,0.78) 0%, rgba(16,32,24,0.84) 100%)",
};

export function HeroFoto({
  foto,
  velo = "lado",
  tone = "forest",
  bajoHeader = false,
  priority = false,
  id,
  children,
  style = {},
}: HeroFotoProps) {
  return (
    <section
      id={id}
      className="is-dark"
      style={{ position: "relative", overflow: "hidden", marginTop: bajoHeader ? "-84px" : undefined, ...style }}
    >
      <DarkBackdrop tone={tone} />
      {foto && (
        <>
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            priority={priority}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
          />
          <div aria-hidden style={{ position: "absolute", inset: 0, background: VELOS[velo] }} />
        </>
      )}
      <div style={{ position: "relative" }}>{children}</div>
    </section>
  );
}
