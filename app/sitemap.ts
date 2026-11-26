import type { MetadataRoute } from "next";
import { EMPRESAS } from "@/lib/empresas";
import { SITE_URL } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas: { ruta: string; prioridad: number }[] = [
    { ruta: "", prioridad: 1 },
    ...EMPRESAS.map((e) => ({ ruta: `/unidades/${e.slug}`, prioridad: 0.8 })),
    { ruta: "/contacto", prioridad: 0.7 },
    { ruta: "/aviso-de-privacidad", prioridad: 0.2 },
    { ruta: "/terminos-y-condiciones", prioridad: 0.2 },
  ];
  return rutas.map(({ ruta, prioridad }) => ({
    url: `${SITE_URL}${ruta}`,
    changeFrequency: "monthly",
    priority: prioridad,
  }));
}
