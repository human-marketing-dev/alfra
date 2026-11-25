"use client";

/* Video de fondo para heros. Silenciado, en bucle y sin controles.
   Si el archivo no existe o falla, el elemento se oculta y queda visible
   la foto de respaldo que HeroFoto pinta debajo. Con «reducir
   movimiento» activado no se reproduce: se queda en la foto. */
import React, { useEffect, useRef } from "react";

export function VideoFondo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // El error pudo ocurrir antes de hidratar.
    if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      v.hidden = true;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      v.hidden = true;
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      onError={(e) => { e.currentTarget.hidden = true; }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
