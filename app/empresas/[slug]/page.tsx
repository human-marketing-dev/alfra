/* Página de empresa — una por cada una de las seis del grupo.
   Todas comparten estructura: hero con el frente del sector, las cuatro
   capacidades que resuelve, el público al que sirve y la salida al resto
   del grupo. El contenido vive en `lib/empresas.ts`. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EMPRESAS, empresaPorSlug } from "@/lib/empresas";
import { EmpresaHero } from "@/components/empresa/EmpresaHero";
import { Servicios } from "@/components/empresa/Servicios";
import { Audiencia } from "@/components/empresa/Audiencia";
import { OtrasEmpresas } from "@/components/empresa/OtrasEmpresas";
import { Cierre } from "@/components/landing/Cierre";

// Las empresas con página propia tienen su propia ruta estática y no
// pasan por esta plantilla.
export function generateStaticParams() {
  return EMPRESAS.filter((e) => !e.paginaPropia).map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/empresas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const empresa = empresaPorSlug(slug);
  if (!empresa) return {};

  return {
    title: `${empresa.nombre} · ${empresa.frente}`,
    description: empresa.resumen,
  };
}

export default async function Page({ params }: PageProps<"/empresas/[slug]">) {
  const { slug } = await params;
  const empresa = empresaPorSlug(slug);
  if (!empresa) notFound();

  return (
    <>
      <EmpresaHero empresa={empresa} />
      <Servicios empresa={empresa} />
      <Audiencia empresa={empresa} />
      <OtrasEmpresas excluir={empresa.slug} />
      <Cierre />
    </>
  );
}
