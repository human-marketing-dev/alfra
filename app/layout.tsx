import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { EMPRESAS, enLetras } from "@/lib/empresas";
import { CONTACTO, GRUPO } from "@/lib/grupo";
import { OG_BASE, SITE_URL } from "@/lib/sitio";

/* Object Sans es la única familia del sitio. Sólo hay dos pesos
   (Regular y Heavy, con sus itálicas), así que cada archivo cubre un
   rango: 100–650 usa Regular y 651–900 usa Heavy. Así un `font-weight`
   de 500/600 no hace que el navegador simule negritas. `app/globals.css`
   la mapea a --font-display / --font-sans / --font-serif / --font-mono. */
const objectSans = localFont({
  variable: "--font-object-sans",
  display: "swap",
  src: [
    { path: "./fonts/ObjectSans-Regular.woff2", weight: "100 650", style: "normal" },
    { path: "./fonts/ObjectSans-Slanted.woff2", weight: "100 650", style: "italic" },
    { path: "./fonts/ObjectSans-Heavy.woff2", weight: "651 900", style: "normal" },
    { path: "./fonts/ObjectSans-HeavySlanted.woff2", weight: "651 900", style: "italic" },
  ],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const DESCRIPCION = `ALFRA Grupo Inmobiliario opera ${enLetras(EMPRESAS.length)} unidades de negocio especializadas: asesoría inmobiliaria, desarrollo industrial, desarrollo residencial e inversión. Monterrey, Nuevo León.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: GRUPO.nombre,
  alternates: { canonical: "/" },
  openGraph: { ...OG_BASE, url: "/", title: "ALFRA Grupo Inmobiliario", description: DESCRIPCION },
  twitter: { card: "summary_large_image", title: "ALFRA Grupo Inmobiliario", description: DESCRIPCION },
  title: {
    default: `ALFRA Grupo Inmobiliario | Grupo inmobiliario integral en Monterrey`,
    template: "%s | ALFRA Grupo Inmobiliario",
  },
  description: DESCRIPCION,
};

/* Datos estructurados (schema.org) de la organización. */
const ORGANIZACION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: GRUPO.nombre,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: DESCRIPCION,
  address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressRegion: "Nuevo León", addressCountry: "MX" },
  ...(CONTACTO.correo ? { email: CONTACTO.correo } : {}),
  ...(CONTACTO.telefono ? { telephone: CONTACTO.telefono } : {}),
  subOrganization: EMPRESAS.map((e) => ({ "@type": "Organization", name: e.nombre, url: `${SITE_URL}/unidades/${e.slug}` })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={objectSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZACION).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
