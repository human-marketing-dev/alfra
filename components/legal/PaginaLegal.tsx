/* Plantilla de página legal: hero sencillo con título y fecha de
   actualización, índice lateral fijo y el cuerpo del documento.
   Todo sale de un `DocumentoLegal` (lib/legal.tsx). */
import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroFoto } from "@/components/site/HeroFoto";
import type { DocumentoLegal } from "@/lib/legal";

function fechaLarga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(a, m - 1, d)),
  );
}

export function PaginaLegal({ documento }: { documento: DocumentoLegal }) {
  const { titulo, actualizado, secciones } = documento;

  return (
    <>
      <HeroFoto bajoHeader>
        <div className="hf-container" style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--hero-bottom)" }}>
          <div className="hf-enter" style={{ maxWidth: "820px" }}>
            <Eyebrow style={{ marginBottom: "var(--gap-eyebrow)" }}>Legal</Eyebrow>
            <h1 className="t-h1">{titulo}</h1>
            {actualizado && (
              <p className="t-label" style={{ marginTop: "var(--gap-title)" }}>
                Última actualización: <time dateTime={actualizado}>{fechaLarga(actualizado)}</time>
              </p>
            )}
          </div>
        </div>
      </HeroFoto>

      <section className="hf-section" style={{ background: "var(--bg-page)" }}>
        <div className="hf-container hf-legal-layout">
          <nav className="hf-legal-indice" aria-label="Índice">
            {secciones.length > 0 && (
              <>
                <p className="t-label" style={{ marginBottom: "var(--gap-eyebrow)" }}>
                  Contenido
                </p>
                <ol>
                  {secciones.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`}>{s.titulo}</a>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>

          <article className="hf-legal">
            {secciones.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.titulo}</h2>
                {s.contenido}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
