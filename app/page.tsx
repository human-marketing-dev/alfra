/* Landing corporativa de ALFRA Grupo Inmobiliario.

   Estructura de la Landing Corporativa v1.0. El bloque 04 · Sinergia
   queda fuera por indicación del propio documento («no incluir»), igual
   que las secciones §5 Fronteras y §6 Sinergia del Brief Maestro. */
import { Hero } from "@/components/landing/Hero";
import { Grupo } from "@/components/landing/Grupo";
import { Empresas } from "@/components/landing/Empresas";
import { Cierre } from "@/components/landing/Cierre";

export default function Page() {
  return (
    <>
      <Hero />
      <Grupo />
      <Empresas />
      <Cierre />
    </>
  );
}
