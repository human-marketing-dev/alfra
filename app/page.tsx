/* Landing corporativa de ALFRA Grupo Inmobiliario.
   Orden (Brief Maestro §9): cobertura integral arriba, las unidades
   como rutas, pilares de capacidad y cierre de contacto. */
import { Hero } from "@/components/landing/Hero";
import { Grupo } from "@/components/landing/Grupo";
import { Empresas } from "@/components/landing/Empresas";
import { Pilares } from "@/components/landing/Pilares";
import { Cierre } from "@/components/landing/Cierre";
import { empresaPorSlug } from "@/lib/empresas";

export default function Page() {
  return (
    <>
      <Hero />
      <Grupo />
      <Pilares />
      <Empresas />
      <Cierre foto={empresaPorSlug("alfra-capital")?.heroImagen} />
    </>
  );
}
