/* URL pública del sitio, para metadatos, sitemap y robots.
   Se toma de NEXT_PUBLIC_SITE_URL (p. ej. https://alfra.mx). En Vercel,
   si no está definida, se usa el dominio de producción del proyecto. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

/** Base de Open Graph compartida; cada página la extiende. */
export const OG_BASE = {
  siteName: "ALFRA Grupo Inmobiliario",
  locale: "es_MX",
  type: "website",
} as const;
