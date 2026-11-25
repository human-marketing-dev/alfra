/* Landing · bloque 01 — Hero.
   Titular con la idea rectora a la izquierda y, a la derecha, un mosaico
   con la fotografía de las cuatro unidades: el pilar 01 (cobertura
   integral) se ve antes de leerse. En pantallas angostas el mosaico pasa
   abajo del texto. */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EMPRESAS, enLetras } from "@/lib/empresas";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { HeroFoto } from "@/components/site/HeroFoto";

const BOTON_CONTORNO: React.CSSProperties = {
  color: "var(--neutral-0)",
  boxShadow: "inset 0 0 0 1px rgba(244,240,232,0.4)",
};

export function Hero() {
  return (
    <HeroFoto bajoHeader id="top">
      <div
        className="hf-container hf-hero-home"
        style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--hero-bottom)" }}
      >
        <div>
          <Eyebrow style={{ marginBottom: "var(--gap-eyebrow)" }}>
            Grupo inmobiliario integral · Monterrey
          </Eyebrow>
          <h1 className="t-display">Convertimos oportunidades inmobiliarias en negocio.</h1>
          <p className="t-lead measure-sm" style={{ marginTop: "var(--gap-title)" }}>
            ALFRA Grupo Inmobiliario opera {enLetras(EMPRESAS.length)} unidades de negocio especializadas: asesoría
            inmobiliaria, desarrollo industrial, desarrollo residencial e inversión. Cada oportunidad tiene adentro una
            unidad que la ejecuta.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-7)" }}>
            <Button variant="inverse" size="lg" href="/#unidades" rightIcon={<Icon name="arrow-down" size={16} />}>
              Ver las unidades
            </Button>
            <Button variant="ghost" size="lg" href="/contacto" style={BOTON_CONTORNO}>
              Solicita información
            </Button>
          </div>
        </div>

        <div className="hf-mosaico" aria-label="Unidades de negocio">
          {EMPRESAS.map((e, i) => (
            <Link
              key={e.slug}
              href={`/unidades/${e.slug}`}
              className="hf-zoom hf-mosaico-tile"
              data-i={i}
              style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-sm)", display: "block" }}
            >
              {e.heroImagen && (
                <Image
                  src={e.heroImagen.src}
                  alt={e.heroImagen.alt}
                  fill
                  priority
                  sizes="(max-width: 1080px) 50vw, 22vw"
                  style={{ objectFit: "cover", objectPosition: e.heroImagen.posicion ?? "60% 50%" }}
                />
              )}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(11,22,52,0.05) 30%, rgba(11,22,52,0.85) 100%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "var(--space-4)",
                  right: "var(--space-4)",
                  bottom: "var(--space-4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span className="t-label t-accent hf-mosaico-frente">{e.frente}</span>
                <span className="t-h4">{e.nombre.replace(/^ALFRA /, "")}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </HeroFoto>
  );
}
