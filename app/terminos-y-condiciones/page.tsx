import type { Metadata } from "next";
import { PaginaLegal } from "@/components/legal/PaginaLegal";
import { TERMINOS_Y_CONDICIONES } from "@/lib/legal";

export const metadata: Metadata = {
  title: TERMINOS_Y_CONDICIONES.titulo,
  description: TERMINOS_Y_CONDICIONES.descripcion,
};

export default function Page() {
  return <PaginaLegal documento={TERMINOS_Y_CONDICIONES} />;
}
