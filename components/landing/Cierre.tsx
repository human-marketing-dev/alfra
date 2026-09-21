/* Bloque de cierre — ruta de contacto para quien llega sin destino
   definido. Se usa al final de la landing y de cada página de empresa.

   «Agendar una conversación» lleva a /contacto. El botón de WhatsApp
   sólo aparece cuando el número esté confirmado en lib/grupo.ts. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { whatsappHref } from "@/lib/grupo";

export function Cierre() {
  const whatsapp = whatsappHref();

  return (
    <section id="contacto" style={{ position: "relative", overflow: "hidden" }}>
      <DarkBackdrop tone="charcoal" />

      <div className="hf-section" style={{ position: "relative" }}>
        <div className="hf-container">
          <SectionHeading
            eyebrow="Contacto"
            title="Empieza por una conversación."
            lead="Cuéntanos qué proyecto tienes en mente y te conectamos con la empresa del grupo que lo resuelve."
            onDark
            maxWidth="740px"
          />

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-8)" }}>
            <Button variant="inverse" size="lg" href="/contacto" rightIcon={<Icon name="arrow-right" size={16} />}>
              Agendar una conversación
            </Button>
            {whatsapp && (
              <Button
                variant="ghost"
                size="lg"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<Icon name="message-circle" size={16} />}
                style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)" }}
              >
                Escribir por WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
