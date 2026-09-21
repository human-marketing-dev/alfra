import type { Metadata } from "next";
import { Montserrat, Spectral, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

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

export const metadata: Metadata = {
  title: {
    default: "HIFRA Grupo Inmobiliario | Seis empresas del sector inmobiliario en Monterrey",
    template: "%s | HIFRA Grupo Inmobiliario",
  },
  description:
    "HIFRA agrupa seis empresas especializadas del sector inmobiliario en Monterrey: comercialización, expansión corporativa, estructuración comercial, inversión, desarrollo y construcción.",
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
