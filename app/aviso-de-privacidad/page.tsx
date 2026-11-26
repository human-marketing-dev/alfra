import type { Metadata } from "next";
import { PaginaLegal } from "@/components/legal/PaginaLegal";
import { AVISO_DE_PRIVACIDAD } from "@/lib/legal";

export const metadata: Metadata = {
  title: AVISO_DE_PRIVACIDAD.titulo,
  alternates: { canonical: "/aviso-de-privacidad" },
  description: AVISO_DE_PRIVACIDAD.descripcion,
};

export default function Page() {
  return <PaginaLegal documento={AVISO_DE_PRIVACIDAD} />;
}
