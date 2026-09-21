/* F&S · cierre — copy de contacto, vías directas y formulario de solicitud.
   Estructura y copy del brief de F&S (§10). */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { InquiryForm } from "@/components/empresa/fs/InquiryForm";
import { FS } from "@/lib/fs";

const VIAS: Array<{ icono: string; texto: string; href?: string; externo?: boolean }> = [
  { icono: "map-pin", texto: FS.ubicacion },
  { icono: "briefcase", texto: `Part of ${FS.matriz}`, href: FS.sitio, externo: true },
  { icono: "mail", texto: FS.correo, href: `mailto:${FS.correo}` },
];

export function FSContact() {
  return (
    <section id="inquiry" style={{ position: "relative", overflow: "hidden" }}>
      <DarkBackdrop tone="charcoal" />

      <div className="hf-section" style={{ position: "relative" }}>
        <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
          <div>
            <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-4)" }}>
              Get in touch
            </Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.4vw, 56px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "var(--text-on-dark)",
                margin: "0 0 var(--space-4)",
                textWrap: "balance",
              }}
            >
              Ready to land in <span style={{ color: "var(--wood-300)" }}>Mexico?</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                lineHeight: 1.65,
                color: "var(--text-on-dark-muted)",
                margin: "0 0 var(--space-7)",
                maxWidth: "460px",
              }}
            >
              Tell us about your project. Our team will respond within 24 hours with an initial assessment and next
              steps.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {VIAS.map((v) => {
                const contenido = (
                  <>
                    <Icon name={v.icono} size={17} color="var(--wood-300)" style={{ marginTop: "3px" }} />
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px", lineHeight: 1.4 }}>{v.texto}</span>
                  </>
                );
                const estilo: React.CSSProperties = {
                  display: "flex",
                  gap: "12px",
                  color: "var(--text-on-dark-muted)",
                  textDecoration: "none",
                };
                return v.href ? (
                  <a
                    key={v.texto}
                    href={v.href}
                    style={estilo}
                    {...(v.externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {contenido}
                  </a>
                ) : (
                  <span key={v.texto} style={estilo}>
                    {contenido}
                  </span>
                );
              })}
            </div>

            <Button
              variant="ghost"
              size="md"
              href={FS.sitio}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<Icon name="arrow-up-right" size={15} />}
              style={{
                marginTop: "var(--space-7)",
                color: "var(--neutral-0)",
                boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)",
              }}
            >
              Visit {FS.matriz}
            </Button>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
