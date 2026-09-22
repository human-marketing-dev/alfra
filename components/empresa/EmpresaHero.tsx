/* Página de empresa — hero.
   Ubica a la empresa en su frente del sector antes de decir nada más,
   como pide el principio 05 del sistema verbal, y lleva la línea de
   endoso del grupo que fija el brief §4. */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/site/Logo";
import { altoFirma } from "@/lib/logos";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { GRUPO } from "@/lib/grupo";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function EmpresaHero({ empresa }: { empresa: Empresa }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", marginTop: "-84px" }}>
      <DarkBackdrop />

      <div className="hf-container" style={{ position: "relative", paddingTop: "148px", paddingBottom: "var(--space-10)" }}>
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
          Las empresas
        </Link>

        <div style={{ maxWidth: "940px" }}>
          <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-4)" }}>
            {empresa.frente}
          </Eyebrow>

          {/* Con logo entregado manda el logo; si no, el lockup tipográfico.
              Hoy las cuatro marcas tienen archivo, pero el respaldo se
              queda para la empresa que entre sin él. */}
          {empresa.logo ? (
            <Logo
              marca={empresa.logo}
              fondo="oscuro"
              alto={altoFirma(empresa.logo)}
              priority
              style={{ marginBottom: "var(--space-6)" }}
            />
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "var(--space-5)" }}>
              <Icon name={empresa.icono} size={30} color="var(--wood-300)" stroke={1.4} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  letterSpacing: "-0.01em",
                  color: "var(--neutral-0)",
                }}
              >
                {empresa.nombre}
              </span>
            </div>
          )}

          {/* Titular y resumen marcados «confirmar» quedan vacíos: se
              omiten en lugar de dejar un hueco con su margen. */}
          {empresa.titular && (
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(34px, 5.4vw, 68px)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                color: "var(--neutral-0)",
                margin: "0 0 var(--space-5)",
                textWrap: "balance",
              }}
            >
              {empresa.titular}
            </h1>
          )}

          {empresa.resumen && (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(17px, 1.7vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(244,240,232,0.86)",
                maxWidth: "640px",
                margin: "0 0 var(--space-7)",
              }}
            >
              {conCursivas(empresa.resumen)}
            </p>
          )}

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
            <Button variant="inverse" size="lg" href="/contacto" rightIcon={<Icon name="arrow-right" size={16} />}>
              Hablar con el grupo
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#servicios"
              style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)" }}
            >
              Qué resuelve
            </Button>
          </div>

          <div
            style={{
              marginTop: "var(--space-8)",
              paddingTop: "var(--space-5)",
              borderTop: "1px solid var(--border-on-dark)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--wood-300)",
            }}
          >
            {GRUPO.lineaRespaldo}
          </div>
        </div>
      </div>
    </section>
  );
}
