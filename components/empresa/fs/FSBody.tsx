/* F&S · cuerpo de la página — quiénes somos, servicios, por qué F&S,
   mercados y proceso. Estructura y copy del brief de F&S (§5 a §9),
   resueltos con el design system de HIFRA. */
import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { DIFERENCIADORES, MERCADOS, PROCESO, QUIENES, RESPALDO, SERVICIOS } from "@/lib/fs";

const CUERPO: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "17px",
  lineHeight: 1.7,
  margin: 0,
};

const ETIQUETA: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
};

export function WhoWeAre() {
  return (
    <section id="about" className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
        <div>
          <SectionHeading eyebrow={QUIENES.tag} title={QUIENES.titular} maxWidth="620px" />

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", marginTop: "var(--space-6)" }}>
            {QUIENES.parrafos.map((t) => (
              <p key={t.slice(0, 24)} style={{ ...CUERPO, color: "var(--text-body)" }}>
                {t}
              </p>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "var(--space-6)" }}>
            {QUIENES.etiquetas.map((e) => (
              <Badge key={e} tone="outline">
                {e}
              </Badge>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--surface)",
            boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-sm)",
            borderRadius: "var(--radius-sm)",
            padding: "var(--space-7)",
          }}
        >
          <div style={{ ...ETIQUETA, color: "var(--text-accent)", marginBottom: "var(--space-3)" }}>
            {RESPALDO.etiqueta}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "26px",
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              marginBottom: "var(--space-4)",
            }}
          >
            {RESPALDO.nombre}
          </div>
          <p style={{ ...CUERPO, fontSize: "16px", color: "var(--text-body)" }}>{RESPALDO.descripcion}</p>

          <div
            className="hf-grid-2"
            style={{
              gap: "var(--space-5)",
              marginTop: "var(--space-6)",
              paddingTop: "var(--space-6)",
              borderTop: "1px solid var(--border-hair)",
            }}
          >
            {RESPALDO.datos.map((d) => (
              <div key={d.etiqueta} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: 1,
                    color: "var(--green-700)",
                  }}
                >
                  {d.valor}
                </span>
                <span style={{ ...ETIQUETA, fontSize: "11px", color: "var(--text-muted)" }}>{d.etiqueta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="What we do"
          title="Full-service advisory. Every step of the way."
          lead="From the first site visit to handing over the keys — and everything in between. Our team handles the complexity so your team can focus on the business."
          maxWidth="760px"
        />

        <div className="hf-cells-3" style={{ marginTop: "var(--space-8)" }}>
          {SERVICIOS.map((s) => {
            const oscuro = s.destacado;
            return (
              <div
                key={s.nombre}
                style={{
                  background: oscuro ? "var(--green-700)" : "var(--surface)",
                  padding: "var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "var(--space-5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `inset 0 0 0 1px ${oscuro ? "var(--wood-300)" : "var(--green-200)"}`,
                    borderRadius: "var(--radius-xs)",
                  }}
                >
                  <Icon name={s.icono} size={20} color={oscuro ? "var(--wood-300)" : "var(--green-700)"} stroke={1.5} />
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: oscuro ? "var(--neutral-0)" : "var(--text-strong)",
                    margin: "0 0 10px",
                  }}
                >
                  {s.nombre}
                </h3>
                <p
                  style={{
                    ...CUERPO,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: oscuro ? "var(--text-on-dark-muted)" : "var(--text-body)",
                  }}
                >
                  {s.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyFS() {
  return (
    <section id="why" style={{ position: "relative", background: "var(--green-800)" }}>
      <div className="hf-section hf-container">
        <SectionHeading
          eyebrow="Why F&S"
          title="Real estate. Legal. Financial. One team. One process."
          lead="Finding the right space is only part of the equation. Structuring it legally, financing it efficiently and navigating government requirements are what determine whether your expansion actually succeeds. We handle all of it — as a single, integrated team."
          onDark
          maxWidth="820px"
        />

        <div
          className="hf-cells-2"
          style={{ marginTop: "var(--space-8)", ["--cell-line" as string]: "var(--border-on-dark)" }}
        >
          {DIFERENCIADORES.map((d, i) => (
            <div key={d.titulo} style={{ background: "var(--green-800)", padding: "var(--space-7)" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "32px",
                  lineHeight: 1,
                  color: "var(--wood-300)",
                  opacity: 0.5,
                  marginBottom: "var(--space-5)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  color: "var(--neutral-0)",
                  margin: "0 0 12px",
                }}
              >
                {d.titulo}
              </h3>
              <p style={{ ...CUERPO, fontSize: "16px", lineHeight: 1.65, color: "var(--text-on-dark-muted)" }}>
                {d.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Markets() {
  return (
    <section id="markets" className="hf-section" style={{ background: "var(--bg-page)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="Where we operate"
          title="Nationwide coverage. Where your business needs to be."
          lead="Our primary focus is the Zona Metropolitana de Monterrey — Mexico's industrial capital and the gateway for nearshoring in the north. We operate nationally, with boots on the ground where it matters."
          maxWidth="800px"
        />

        <div className="hf-cells-5" style={{ marginTop: "var(--space-8)" }}>
          {MERCADOS.map((m) => (
            <div key={m.nombre} className="hf-market" style={{ background: "var(--surface)", padding: "var(--space-6) var(--space-5)" }}>
              <div
                className="hf-market-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "-0.01em",
                  color: "var(--text-strong)",
                  marginBottom: "6px",
                  transition: "color var(--dur-base) var(--ease-out)",
                }}
              >
                {m.nombre}
              </div>
              <div
                className="hf-market-sub"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  transition: "color var(--dur-base) var(--ease-out)",
                }}
              >
                {m.detalle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="hf-section" style={{ background: "var(--bg-page-alt)" }}>
      <div className="hf-container">
        <SectionHeading
          eyebrow="How we work"
          title="A proven process. Zero surprises."
          lead="Every engagement follows the same disciplined methodology — adapted to your project, your timeline and your industry."
          maxWidth="740px"
        />

        <div
          className="hf-grid-5-proceso"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 0,
            marginTop: "var(--space-8)",
            borderTop: "2px solid var(--wood-500)",
          }}
        >
          {PROCESO.map((p, i) => (
            <div
              key={p.titulo}
              style={{
                padding: "var(--space-6) var(--space-5) var(--space-6) 0",
                paddingLeft: i > 0 ? "var(--space-5)" : 0,
                borderRight: i < PROCESO.length - 1 ? "1px solid var(--border-hair)" : "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "28px",
                  lineHeight: 1,
                  color: "var(--wood-500)",
                  opacity: 0.6,
                  marginBottom: "var(--space-5)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "19px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  color: "var(--text-strong)",
                  margin: "0 0 10px",
                }}
              >
                {p.titulo}
              </h3>
              <p style={{ ...CUERPO, fontSize: "15px", lineHeight: 1.6, color: "var(--text-body)" }}>{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
