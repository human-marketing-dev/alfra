import type { NextConfig } from "next";

/* Las páginas de empresa pasaron a ser páginas de unidad de negocio
   (Brief Maestro v1.0, nov 2026). Las rutas viejas redirigen a la unidad
   que hoy cubre ese frente para no romper enlaces ya compartidos. */
const REDIRECCIONES: [string, string][] = [
  ["/empresas/alfra-agencia-inmobiliaria", "/unidades/alfra-asesores-inmobiliarios"],
  ["/empresas/grupo-fac", "/unidades/alfra-desarrollo-industrial"],
  ["/empresas/alfra-inversiones", "/unidades/alfra-capital"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...REDIRECCIONES.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/empresas/:slug*", destination: "/#unidades", permanent: true },
    ];
  },
};

export default nextConfig;
