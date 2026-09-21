/* F&S Real Estate Solutions.

   Es la única empresa con página propia: tiene su propio brief, su propia
   estructura y su propio idioma. El contenido va en inglés («English
   first; Spanish adaptation to follow», brief de F&S), por eso el bloque
   entero se marca lang="en" — el chrome de HIFRA sigue en español.

   El diseño es el de HIFRA: del prototipo de F&S se toman estructura y
   copy, no la paleta ni la tipografía. */
import type { Metadata } from "next";
import { FSHero } from "@/components/empresa/fs/FSHero";
import { WhoWeAre, Services, WhyFS, Markets, Process } from "@/components/empresa/fs/FSBody";
import { FSContact } from "@/components/empresa/fs/FSContact";

export const metadata: Metadata = {
  title: "F&S Real Estate Solutions · Corporate Real Estate Advisors",
  description:
    "Full-service corporate real estate advisory for multinational companies expanding into Mexico. Site selection, negotiation, built-to-suit and financing, backed by Flores Serna Group.",
};

export default function Page() {
  return (
    <div lang="en">
      <FSHero />
      <WhoWeAre />
      <Services />
      <WhyFS />
      <Markets />
      <Process />
      <FSContact />
    </div>
  );
}
