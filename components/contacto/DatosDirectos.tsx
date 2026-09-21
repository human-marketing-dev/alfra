/* Vías directas de contacto. Cada dato se pinta sólo si está confirmado
   en lib/grupo.ts; los que siguen marcados «confirmar» no se publican. */
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { CONTACTO, correoHref, telefonoHref, whatsappHref } from "@/lib/grupo";

export function DatosDirectos() {
  const vias: Array<{ icono: string; etiqueta: string; valor: string; href: string | null; externo?: boolean }> = [
    { icono: "mail", etiqueta: "Correo", valor: CONTACTO.correo, href: correoHref() },
    { icono: "phone", etiqueta: "Teléfono", valor: CONTACTO.telefono, href: telefonoHref() },
    { icono: "message-circle", etiqueta: "WhatsApp", valor: CONTACTO.telefono, href: whatsappHref(), externo: true },
    { icono: "map-pin", etiqueta: "Sede", valor: CONTACTO.ciudad, href: null },
  ].filter((v) => v.valor && (v.href !== null || v.etiqueta === "Sede"));

  const etiqueta: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "3px",
  };

  const valor: React.CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontSize: "17px",
    lineHeight: 1.4,
    color: "var(--text-strong)",
    textDecoration: "none",
  };

  return (
    <div style={{ borderTop: "1px solid var(--border-hair)" }}>
      {vias.map((v) => {
        const contenido = (
          <>
            <Icon name={v.icono} size={19} color="var(--green-700)" stroke={1.5} style={{ marginTop: "5px" }} />
            <span style={{ display: "flex", flexDirection: "column" }}>
              <span style={etiqueta}>{v.etiqueta}</span>
              <span style={valor}>{v.valor}</span>
            </span>
          </>
        );

        const estilo: React.CSSProperties = {
          display: "flex",
          gap: "14px",
          padding: "var(--space-4) 0",
          borderBottom: "1px solid var(--border-hair)",
          color: "inherit",
          textDecoration: "none",
        };

        return v.href ? (
          <a
            key={v.etiqueta}
            href={v.href}
            style={estilo}
            {...(v.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {contenido}
          </a>
        ) : (
          <div key={v.etiqueta} style={estilo}>
            {contenido}
          </div>
        );
      })}
    </div>
  );
}
