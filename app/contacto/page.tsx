/* Página de contacto.

   Es la ruta única para quien llega sin destino definido: recoge la
   solicitud, la clasifica por frente del sector y de ahí sale la
   conexión con la unidad que la ejecuta. */
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroFoto } from "@/components/site/HeroFoto";
import { Formulario } from "@/components/contacto/Formulario";
import { DatosDirectos } from "@/components/contacto/DatosDirectos";
import { OtrasEmpresas } from "@/components/empresa/OtrasEmpresas";
import { empresaPorSlug } from "@/lib/empresas";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué proyecto tienes en mente y te conectamos con la unidad de ALFRA Grupo Inmobiliario que lo resuelve. Monterrey, Nuevo León.",
};

export default function Page() {
  return (
    <>
      <HeroFoto foto={empresaPorSlug("alfra-asesores-inmobiliarios")?.heroImagen} bajoHeader priority>
        <div className="hf-container" style={{ paddingTop: "var(--hero-top)", paddingBottom: "var(--hero-bottom)" }}>
          <div style={{ maxWidth: "820px" }}>
            <Eyebrow rule style={{ marginBottom: "var(--gap-eyebrow)" }}>
              Contacto
            </Eyebrow>
            <h1 className="t-h1">Solicita información.</h1>
            <p className="t-lead measure" style={{ marginTop: "var(--gap-title)" }}>
              Cuéntanos qué proyecto tienes en mente y te conectamos con la unidad del grupo que lo resuelve. Si todavía
              no sabes por dónde entrar, escríbenos igual: para eso está el grupo completo.
            </p>
          </div>
        </div>
      </HeroFoto>

      <section className="hf-section" style={{ background: "var(--bg-page)" }}>
        <div className="hf-container hf-grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2 className="t-h2">Cuéntanos qué tienes en mente.</h2>
            <p className="t-body measure-sm" style={{ marginTop: "var(--gap-title)", marginBottom: "var(--space-7)" }}>
              Marca el frente que más se parece a tu proyecto y la solicitud llega a la unidad que lo atiende. Si no es
              claro cuál, deja la opción abierta y lo resolvemos en la primera conversación.
            </p>
            <DatosDirectos />
          </div>
          <Formulario />
        </div>
      </section>

      <OtrasEmpresas
        eyebrow="Ir directo"
        title="O ve directo a la unidad que resuelve tu frente."
        fondo="var(--bg-page-alt)"
      />
    </>
  );
}
