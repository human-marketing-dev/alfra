/* Landing · bloque 01 — Hero.
   Titular con la idea rectora sobre un video de fondo a pantalla
   completa (ruta en `HERO_INICIO`, lib/grupo.ts). Mientras el video no
   exista, se ve la foto de respaldo con el mismo velo azul marino. */
import React from "react";
import { EMPRESAS, enLetras } from "@/lib/empresas";
import { HERO_INICIO } from "@/lib/grupo";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { HeroFoto } from "@/components/site/HeroFoto";

const BOTON_CONTORNO: React.CSSProperties = {
  color: "var(--neutral-0)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)",
};

export function Hero() {
  return (
    <HeroFoto bajoHeader priority id="top" foto={HERO_INICIO.foto} video={HERO_INICIO.video}>
      <div
        className="hf-container hf-hero-inicio"
        style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--hero-bottom)" }}
      >
        <div className="hf-enter" style={{ maxWidth: "880px" }}>
          <Eyebrow style={{ marginBottom: "var(--gap-eyebrow)" }}>
            Grupo inmobiliario integral · Monterrey
          </Eyebrow>
          <h1 className="t-display">Convertimos oportunidades inmobiliarias en negocio.</h1>
          <p className="t-lead measure" style={{ marginTop: "var(--gap-title)" }}>
            ALFRA Grupo Inmobiliario opera {enLetras(EMPRESAS.length)} unidades de negocio especializadas: asesoría
            inmobiliaria, desarrollo industrial, desarrollo residencial e inversión. Cada oportunidad tiene adentro una
            unidad que la ejecuta.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--gap-actions)" }}>
            <Button variant="inverse" size="lg" href="/#unidades" rightIcon={<Icon name="arrow-down" size={16} />}>
              Ver las unidades
            </Button>
            <Button variant="ghost" size="lg" href="/contacto" style={BOTON_CONTORNO}>
              Solicita información
            </Button>
          </div>
        </div>
      </div>
    </HeroFoto>
  );
}
