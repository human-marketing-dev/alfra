/* Landing · bloque 01 — Hero.
   Antetítulo, titular, subtitular y dos botones, tal como los fija la
   Landing Corporativa v1.0. El titular es la idea rectora del brief. */
import React from "react";
import { EMPRESAS, enLetras } from "@/lib/empresas";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        minHeight: "clamp(560px, 88vh, 900px)",
        overflow: "hidden",
        marginTop: "-84px",
      }}
    >
      <DarkBackdrop />

      <div
        className="hf-container"
        style={{ position: "relative", paddingTop: "168px", paddingBottom: "var(--space-10)" }}
      >
        <div style={{ maxWidth: "980px" }}>
          <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-5)" }}>
            Grupo Inmobiliario en Monterrey
          </Eyebrow>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(40px, 6.4vw, 84px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--neutral-0)",
              margin: "0 0 var(--space-5)",
              textWrap: "balance",
            }}
          >
            Convertimos oportunidades inmobiliarias en negocio.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(17px, 1.8vw, 21px)",
              lineHeight: 1.6,
              color: "rgba(244,240,232,0.86)",
              maxWidth: "660px",
              margin: "0 0 var(--space-7)",
            }}
          >
            ALFRA Grupo Inmobiliario agrupa {enLetras(EMPRESAS.length)} empresas especializadas del sector
            inmobiliario. Construir, desarrollar, invertir o comercializar: cada oportunidad tiene adentro una empresa
            que la ejecuta.
          </p>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="inverse" size="lg" href="/#empresas" rightIcon={<Icon name="arrow-down" size={16} />}>
              Ver las empresas
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/#contacto"
              style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)" }}
            >
              Hablar con el grupo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
