import type { Metadata } from "next";
import { Montserrat, Spectral, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EMPRESAS, enLetras, enLetrasCapital } from "@/lib/empresas";

/* Las tres familias del design system. Se exponen como variables CSS y
   `app/globals.css` las mapea a --font-display / --font-serif / --font-mono. */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Cuántas empresas son sale del arreglo, no del copy: así el título y la
   descripción no se quedan con una cifra vieja al mover una empresa. */
export const metadata: Metadata = {
  title: {
    default: `ALFRA Grupo Inmobiliario | ${enLetrasCapital(EMPRESAS.length)} empresas del sector inmobiliario en Monterrey`,
    template: "%s | ALFRA Grupo Inmobiliario",
  },
  description: `ALFRA agrupa ${enLetras(EMPRESAS.length)} empresas especializadas del sector inmobiliario en Monterrey, Nuevo León.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${montserrat.variable} ${spectral.variable} ${plexMono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
