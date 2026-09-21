/* Página de contacto.

   Es la ruta única para quien llega sin destino definido: recoge la
   solicitud, la clasifica por frente del sector y de ahí sale la
   conexión con la empresa que la ejecuta. El bloque de cierre de la
   landing y el header apuntan aquí. */
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DarkBackdrop } from "@/components/site/DarkBackdrop";
import { Formulario } from "@/components/contacto/Formulario";
import { DatosDirectos } from "@/components/contacto/DatosDirectos";
import { OtrasEmpresas } from "@/components/empresa/OtrasEmpresas";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué proyecto tienes en mente y te conectamos con la empresa de HIFRA Grupo Inmobiliario que lo resuelve. Monterrey, Nuevo León.",
};

export default function Page() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", marginTop: "-84px" }}>
        <DarkBackdrop />

        <div
          className="hf-container"
          style={{ position: "relative", paddingTop: "160px", paddingBottom: "var(--space-9)" }}
        >
          <div style={{ maxWidth: "820px" }}>
            <Eyebrow tone="onDark" rule style={{ marginBottom: "var(--space-5)" }}>
              Contacto
            </Eyebrow>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px, 5.6vw, 72px)",
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                color: "var(--neutral-0)",
                margin: "0 0 var(--space-5)",
                textWrap: "balance",
              }}
            >
              Empieza por una conversación.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(17px, 1.7vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(244,240,232,0.86)",
                maxWidth: "640px",
                margin: 0,
              }}
            >
              Cuéntanos qué proyecto tienes en mente y te conectamos con la empresa del grupo que lo resuelve. Si
              todavía no sabes por dónde entrar, escríbenos igual: para eso está el grupo completo.
            </p>
          </div>
        </div>
      </section>

      <section className="hf-section" style={{ background: "var(--bg-page)" }}>
        <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(26px, 2.6vw, 34px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-strong)",
                margin: "0 0 var(--space-4)",
              }}
            >
              Cuéntanos qué tienes en mente.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--text-body)",
                margin: "0 0 var(--space-7)",
                maxWidth: "460px",
              }}
            >
              Marca el frente que más se parece a tu proyecto y la solicitud llega a la empresa que lo atiende. Si no
              es claro cuál, deja la opción abierta y lo resolvemos en la primera conversación.
            </p>

            <DatosDirectos />
          </div>

          <Formulario />
        </div>
      </section>

      <OtrasEmpresas
        eyebrow="Ir directo"
        title="O escribe a la empresa que resuelve tu frente."
        fondo="var(--bg-page-alt)"
      />
    </>
  );
}
