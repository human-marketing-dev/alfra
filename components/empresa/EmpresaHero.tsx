/* Página de unidad — hero.
   Breve a propósito: regreso a las unidades, nombre, titular, entrada y
   llamadas a la acción. El frente del sector ya lo dicen la tarjeta y el
   menú; la foto de la unidad va de fondo. */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroFoto } from "@/components/site/HeroFoto";
import type { Empresa } from "@/lib/empresas";
import { conCursivas } from "@/lib/tipografia";

export function EmpresaHero({ empresa }: { empresa: Empresa }) {
  return (
    <HeroFoto foto={empresa.heroImagen} bajoHeader priority className="hf-hero-unidad">
      <div className="hf-container" style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--hero-bottom)" }}>
        <Link
          href="/#unidades"
          className="t-label"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "var(--space-8)",
            textDecoration: "none",
          }}
        >
          <Icon name="arrow-left" size={15} />
          Las unidades
        </Link>

        <div style={{ maxWidth: "940px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "var(--space-6)" }}>
            <span
              style={{
                width: 44,
                height: 44,
                display: "grid",
                placeItems: "center",
                borderRadius: "var(--radius-xs)",
                boxShadow: "inset 0 0 0 1px var(--c-line)",
              }}
            >
              <Icon name={empresa.icono} size={22} color="var(--brand-300)" stroke={1.4} />
            </span>
            <span className="t-h3">{empresa.nombre}</span>
          </div>

          {empresa.titular && <h1 className="t-h1">{empresa.titular}</h1>}

          {empresa.resumen && (
            <p className="t-lead measure" style={{ marginTop: "var(--gap-title)" }}>
              {conCursivas(empresa.resumen)}
            </p>
          )}

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-7)" }}>
            <Button variant="inverse" size="lg" href="/contacto" rightIcon={<Icon name="arrow-right" size={16} />}>
              Solicita información
            </Button>
            {empresa.servicios.length > 0 && (
              <Button
                variant="ghost"
                size="lg"
                href="#servicios"
                style={{ color: "var(--neutral-0)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }}
              >
                Qué resuelve
              </Button>
            )}
          </div>
        </div>
      </div>
    </HeroFoto>
  );
}
