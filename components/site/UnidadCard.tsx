/* Tarjeta de unidad de negocio con fotografía.

   «completa» (landing): foto, frente, nombre, texto de tarjeta y salida.
   «compacta» (cierre de páginas): foto más baja, frente y nombre.
   Sin foto cae en un bloque azul con el icono de la unidad. */
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
          background: "var(--brand-700)",
        }}
      >
        {foto ? (
          <Image
            src={foto.src}
            alt=""
            fill
            quality={90}
            sizes={compacta ? "(max-width: 720px) 100vw, 33vw" : "(max-width: 860px) 100vw, 50vw"}
            style={{ objectFit: "cover", objectPosition: foto.posicion ?? "60% 50%" }}
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <Icon name={empresa.icono} size={40} color="var(--brand-300)" stroke={1.2} />
          </div>
        )}
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
          <Icon name={empresa.icono} size={22} color="var(--brand-700)" stroke={1.5} />
        </span>
      </div>

      <div
        style={{
          padding: "var(--pad-card)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--gap-item)",
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
            color: "var(--text-brand)",
          }}
        >
          Conocer la unidad
          <span className="hf-flecha" style={{ display: "inline-flex" }}>
            <Icon name="arrow-right" size={15} />
          </span>
        </span>
      </div>
    </Link>
  );
}
