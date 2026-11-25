/* Tarjeta de unidad de negocio con fotografía.

   «completa» (landing): foto, frente, nombre, texto de tarjeta y salida.
   «compacta» (cierre de páginas): foto más baja, frente y nombre.
   Sin foto cae en un bloque verde con el icono de la unidad. */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function UnidadCard({ empresa, variante = "completa" }: { empresa: Empresa; variante?: "completa" | "compacta" }) {
  const compacta = variante === "compacta";
  const foto = empresa.heroImagen;

  return (
    <Link href={`/unidades/${empresa.slug}`} className="hf-card hf-zoom">
      <div
        style={{
          position: "relative",
          aspectRatio: compacta ? "16 / 9" : "16 / 8",
          overflow: "hidden",
          background: "var(--green-700)",
        }}
      >
        {foto ? (
          <Image
            src={foto.src}
            alt=""
            fill
            sizes={compacta ? "(max-width: 720px) 100vw, 33vw" : "(max-width: 860px) 100vw, 50vw"}
            style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <Icon name={empresa.icono} size={40} color="var(--wood-300)" stroke={1.2} />
          </div>
        )}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(16,32,24,0) 45%, rgba(16,32,24,0.55) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "var(--space-5)",
            bottom: "var(--space-4)",
            width: 44,
            height: 44,
            display: "grid",
            placeItems: "center",
            background: "var(--neutral-0)",
            borderRadius: "var(--radius-xs)",
          }}
        >
          <Icon name={empresa.icono} size={22} color="var(--green-700)" stroke={1.5} />
        </span>
      </div>

      <div
        style={{
          padding: compacta ? "var(--space-5)" : "var(--space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          flex: 1,
        }}
      >
        <span className="t-label t-accent">{empresa.frente}</span>
        <h3 className="t-h3">{empresa.nombre}</h3>
        {!compacta && (
          <p className="t-small" style={{ flex: 1 }}>
            {conCursivas(empresa.tarjeta)}
          </p>
        )}
        <span
          className="t-label"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginTop: compacta ? "var(--space-2)" : "var(--space-4)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--border-hair)",
            color: "var(--text-brand)",
          }}
        >
          Conocer la unidad
          <Icon name="arrow-right" size={15} />
        </span>
      </div>
    </Link>
  );
}
