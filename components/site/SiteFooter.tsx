/* Pie de página — bloque 06 de la landing: boilerplate, accesos directos
   a las empresas del grupo y contacto. Los datos de contacto que siguen
   por confirmar (lib/grupo.ts) simplemente no se renderizan. */
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { LogoGrupo } from "@/components/site/Logo";
import { EMPRESAS } from "@/lib/empresas";
import { BOILERPLATE, CONTACTO, GRUPO, correoHref, telefonoHref } from "@/lib/grupo";

export function SiteFooter() {
  const correo = correoHref();
  const telefono = telefonoHref();

  const heading: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(244,240,232,0.5)",
    marginBottom: "var(--space-4)",
  };

  const item: React.CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontSize: "15px",
    color: "var(--text-on-dark-muted)",
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        background: "var(--neutral-900)",
        color: "var(--text-on-dark)",
        paddingBlock: "var(--space-10) var(--space-6)",
      }}
    >
      <div className="hf-container">
        <div
          className="hf-grid-2"
          style={{ paddingBottom: "var(--space-9)", borderBottom: "1px solid var(--border-on-dark)", alignItems: "start" }}
        >
          <div>
            {/* TODO: logo pendiente — firma tipográfica del grupo. */}
            <LogoGrupo fondo="oscuro" alto={46} style={{ marginBottom: "var(--space-5)" }} />
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--text-on-dark-muted)",
                margin: 0,
                maxWidth: "480px",
              }}
            >
              {BOILERPLATE.corto}
            </p>
          </div>

          <div className="hf-grid-2" style={{ gap: "var(--space-6)" }}>
            <div>
              <div style={heading}>Las empresas</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {EMPRESAS.map((e) => (
                  <Link key={e.slug} href={`/empresas/${e.slug}`} style={item}>
                    {e.nombre}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={heading}>Contacto</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {correo && (
                  <a href={correo} style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <Icon name="mail" size={16} color="var(--wood-300)" />
                    {CONTACTO.correo}
                  </a>
                )}
                {telefono && (
                  <a href={telefono} style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <Icon name="phone" size={16} color="var(--wood-300)" />
                    {CONTACTO.telefono}
                  </a>
                )}
                <span style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                  <Icon name="map-pin" size={16} color="var(--wood-300)" />
                  {CONTACTO.ciudad}
                </span>
                <Link href="/contacto" style={{ ...item, color: "var(--wood-300)" }}>
                  Empieza por una conversación
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "var(--space-5)",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,240,232,0.45)" }}>
            © {new Date().getFullYear()} {GRUPO.nombre}
          </span>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <a href="#" aria-label="LinkedIn" style={{ color: "var(--text-on-dark-muted)" }}>
              <Icon name="linkedin" size={18} />
            </a>
            <a href="#" aria-label="Instagram" style={{ color: "var(--text-on-dark-muted)" }}>
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
