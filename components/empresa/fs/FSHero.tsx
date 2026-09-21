/* F&S · Hero — titular, promesa y la franja de cuatro cifras.
   Estructura y copy del brief de F&S (§4); el diseño es el de HIFRA. */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { Logo } from "@/components/site/Logo";
import { CIFRAS_HERO, HERO } from "@/lib/fs";

export function FSHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", marginTop: "-84px" }}>
      <DarkBackdrop />

      <div className="hf-container" style={{ position: "relative", paddingTop: "148px", paddingBottom: "var(--space-9)" }}>
        <Link
          href="/#empresas"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "var(--space-7)",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(244,240,232,0.7)",
            textDecoration: "none",
          }}
        >
          <Icon name="arrow-left" size={15} />
          HIFRA · The companies
        </Link>

        <div style={{ maxWidth: "980px" }}>
          <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-4)" }}>
            {HERO.eyebrow}
          </Eyebrow>

          <Logo marca="fs" fondo="oscuro" alto={40} priority style={{ marginBottom: "var(--space-6)" }} />

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(38px, 6vw, 78px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "var(--neutral-0)",
              margin: "0 0 var(--space-5)",
              textWrap: "balance",
            }}
          >
            {HERO.titular}
            <br />
            <span style={{ color: "var(--wood-300)" }}>{HERO.titularAcento}</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(17px, 1.7vw, 20px)",
              lineHeight: 1.6,
              color: "rgba(244,240,232,0.86)",
              maxWidth: "620px",
              margin: "0 0 var(--space-7)",
            }}
          >
            {HERO.subtitular}
          </p>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Button variant="inverse" size="lg" href="#inquiry" rightIcon={<Icon name="arrow-right" size={16} />}>
              Start your expansion
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#services"
              style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)" }}
            >
              Explore our services
            </Button>
          </div>
        </div>

        <div
          className="hf-grid-4"
          style={{
            marginTop: "var(--space-10)",
            paddingTop: "var(--space-7)",
            borderTop: "1px solid var(--border-on-dark)",
            gap: "var(--space-6)",
          }}
        >
          {CIFRAS_HERO.map((c) => (
            <div key={c.etiqueta} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 500,
                  fontSize: "clamp(30px, 3.4vw, 46px)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  color: "var(--neutral-0)",
                }}
              >
                {c.valor}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--wood-300)",
                  }}
                >
                  {c.etiqueta}
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "var(--text-on-dark-muted)" }}>
                  {c.detalle}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
