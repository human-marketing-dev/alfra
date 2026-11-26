/* Panel oscuro con fotografía opcional.

   Una sola pieza para todo panel oscuro del sitio. En los heros
   («dividida») la foto nunca lleva velo ni degradado: el texto vive en
   un bloque azul marino sólido y la foto va limpia al lado, a sangre
   hacia el borde derecho y bajo el header. Sólo la banda del último CTA
   («fondo») pone la foto detrás del texto con velo. Envuelve el
   contenido en `.is-dark`, así que la tipografía de adentro se invierte
   sola. */
import React from "react";
import Image from "next/image";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { VideoFondo } from "@/components/site/VideoFondo";

export interface FotoFondo {
  src: string;
  alt: string;
  /** object-position de la foto. */
  posicion?: string;
}

export interface HeroFotoProps {
  foto?: FotoFondo;
  /** Ruta de un video (mp4). Va en el mismo lugar que la foto, que queda
      como respaldo mientras carga o si el archivo no existe. */
  video?: string;
  /** "dividida": texto sobre azul marino sólido a la izquierda y la foto
      limpia, sin velo, a la derecha (abajo en móvil). Es la de los heros.
      "fondo": la foto ocupa todo el fondo con un velo azul marino; sólo
      para la banda del último CTA. */
  disposicion?: "dividida" | "fondo";
  tone?: "forest" | "charcoal";
  /** El hero de página se mete bajo el header transparente. */
  bajoHeader?: boolean;
  priority?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const VELO = "linear-gradient(180deg, rgba(11,22,52,0.78) 0%, rgba(11,22,52,0.84) 100%)";

export function HeroFoto({
  foto,
  video,
  disposicion = "dividida",
  tone = "forest",
  bajoHeader = false,
  priority = false,
  id,
  className = "",
  children,
  style = {},
}: HeroFotoProps) {
  const hayMedia = Boolean(foto || video);
  const media = (
    <>
      {foto && (
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          priority={priority}
          sizes={disposicion === "dividida" ? "(max-width: 860px) 100vw, 45vw" : "100vw"}
          style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
        />
      )}
      {video && <VideoFondo src={video} />}
    </>
  );

  if (disposicion === "dividida") {
    return (
      <section
        id={id}
        className={`is-dark hf-hero-dividido ${hayMedia ? "con-media" : ""} ${className}`}
        style={{ position: "relative", overflow: "hidden", marginTop: bajoHeader ? "-84px" : undefined, ...style }}
      >
        <DarkBackdrop tone={tone} />
        <div style={{ position: "relative" }}>{children}</div>
        {hayMedia && <div className="hf-hero-media">{media}</div>}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`is-dark ${className}`}
      style={{ position: "relative", overflow: "hidden", marginTop: bajoHeader ? "-84px" : undefined, ...style }}
    >
      <DarkBackdrop tone={tone} />
      {media}
      {hayMedia && <div aria-hidden style={{ position: "absolute", inset: 0, background: VELO }} />}
      <div style={{ position: "relative" }}>{children}</div>
    </section>
  );
}
