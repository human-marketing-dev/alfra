/* Bloque de cierre — ruta de contacto. Se usa al final de la landing y
   de cada página de unidad. Con `foto`, es una banda fotográfica.
   El botón de WhatsApp sólo aparece con el número confirmado. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { HeroFoto, type FotoFondo } from "@/components/site/HeroFoto";
import { whatsappHref } from "@/lib/grupo";

export function Cierre({ foto }: { foto?: FotoFondo }) {
  const whatsapp = whatsappHref();

  return (
    <HeroFoto id="contacto" foto={foto} velo="pleno" tone="charcoal">
      <div className="hf-container hf-section">
        <SectionHeading
          eyebrow="Contacto"
          title="Traes una oportunidad. La ejecuta todo el grupo."
          lead="Cuéntanos qué proyecto tienes en mente y te conectamos con la unidad del grupo que lo resuelve."
          maxWidth="820px"
        />
        <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--gap-actions)" }}>
          <Button variant="accent" size="lg" href="/contacto" rightIcon={<Icon name="arrow-right" size={16} />}>
            Solicita información
          </Button>
          {whatsapp && (
            <Button
              variant="ghost"
              size="lg"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<Icon name="message-circle" size={16} />}
              style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
            >
              Escribir por WhatsApp
            </Button>
          )}
        </div>
      </div>
    </HeroFoto>
  );
}
