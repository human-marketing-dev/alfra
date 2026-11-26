/* Pie de página — bloque 06 de la landing: boilerplate, accesos directos
   a las unidades de negocio y contacto. Los datos de contacto que siguen
   por confirmar (lib/grupo.ts) simplemente no se renderizan. */
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/site/Logo";
import { EMPRESAS } from "@/lib/empresas";
import { BOILERPLATE, CONTACTO, GRUPO, correoHref, telefonoHref } from "@/lib/grupo";

export function SiteFooter() {
  const correo = correoHref();
  const telefono = telefonoHref();

  const heading: React.CSSProperties = { marginBottom: "var(--space-4)" };
  const item: React.CSSProperties = { textDecoration: "none", color: "var(--c-muted)" };

  return (
    <footer
      className="is-dark"
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
            <Logo marca="alfra" fondo="oscuro" alto={40} style={{ marginBottom: "var(--space-5)" }} />
            <p className="t-small t-muted" style={{ maxWidth: "480px" }}>
              {BOILERPLATE.corto}
            </p>
          </div>

          <div className="hf-grid-2" style={{ gap: "var(--space-6)" }}>
            <div>
              <div className="t-label" style={heading}>Unidades de negocio</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {EMPRESAS.map((e) => (
                  <Link key={e.slug} href={`/unidades/${e.slug}`} className="t-small" style={item}>
                    {e.nombre}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="t-label" style={heading}>Contacto</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {correo && (
                  <a href={correo} className="t-small" style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <Icon name="mail" size={16} color="var(--brand-300)" />
                    {CONTACTO.correo}
                  </a>
                )}
                {telefono && (
                  <a href={telefono} className="t-small" style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <Icon name="phone" size={16} color="var(--brand-300)" />
                    {CONTACTO.telefono}
                  </a>
                )}
                <span className="t-small" style={{ ...item, display: "inline-flex", alignItems: "center", gap: "10px" }}>
                  <Icon name="map-pin" size={16} color="var(--brand-300)" />
                  {CONTACTO.ciudad}
                </span>
                <Link href="/contacto" className="t-small" style={{ ...item, color: "var(--brand-300)" }}>
                  Solicita información
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
          <span className="t-label" style={{ letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} {GRUPO.nombre}
          </span>
          <nav aria-label="Legal" style={{ display: "flex", gap: "var(--gap-stack)", flexWrap: "wrap" }}>
            <Link href="/aviso-de-privacidad" className="t-small" style={item}>
              Aviso de privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="t-small" style={item}>
              Términos y condiciones
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
