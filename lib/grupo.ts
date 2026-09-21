/* Contenido institucional de ALFRA Grupo Inmobiliario.
   Fuente: Brief Maestro de Comunicación v2.1 y Landing Corporativa v1.0.

   ─────────────────────────────────────────────────────────────
   PENDIENTES POR CONFIRMAR  (Brief Maestro §11 · Landing bloque 06)
   Todo lo que falta por validar con ALFRA vive en este archivo y
   en `lib/empresas.ts`. Ningún componente inventa datos: lo que
   está vacío no se renderiza.

   · CONTACTO.correo, CONTACTO.telefono, CONTACTO.whatsapp
   · GRUPO.anioFundacion, GRUPO.proyectosAcumulados
   · BOILERPLATE.medio
   · EMPRESAS[].sitio — URL del sitio propio de cada empresa
   ───────────────────────────────────────────────────────────── */

import { EMPRESAS, enLetras } from "@/lib/empresas";

export const GRUPO = {
  nombre: "ALFRA Grupo Inmobiliario",
  nombreCorto: "ALFRA",
  descriptor: "Grupo inmobiliario integral · Noreste de México",
  ideaRectora: "Convertimos oportunidades inmobiliarias en negocio.",
  sede: "Monterrey, Nuevo León",
  /** Se deriva del arreglo de empresas; nunca se escribe a mano. */
  numeroEmpresas: EMPRESAS.length,

  /** «confirmar» — Brief Maestro §1, Datos institucionales. */
  anioFundacion: "",
  /** «confirmar» — Brief Maestro §1, Datos institucionales. */
  proyectosAcumulados: "",

  /** Línea de endoso para materiales de empresa (Brief Maestro §4). */
  lineaRespaldo: "Empresa de ALFRA Grupo Inmobiliario",
} as const;

/** Boilerplates oficiales (Brief Maestro §9). */
export const BOILERPLATE = {
  corto: `ALFRA Grupo Inmobiliario agrupa ${enLetras(EMPRESAS.length)} empresas especializadas del sector inmobiliario, con sede en Monterrey, Nuevo León.`,
  /**
   * «confirmar» — el boilerplate medio enumera cada empresa con su
   * frente, y dos de las cuatro siguen sin contenido confirmado.
   * Vacío mientras tanto; no se publica en ningún lado.
   */
  medio: "",
} as const;

interface Contacto {
  correo: string;
  telefono: string;
  /** Sólo dígitos, con lada país. */
  whatsapp: string;
  ciudad: string;
}

export const CONTACTO: Contacto = {
  /** «confirmar» — p. ej. "contacto@alfra.mx" */
  correo: "",
  /** «confirmar» — formato de lectura, p. ej. "+52 81 1234 5678" */
  telefono: "",
  /** «confirmar» — sólo dígitos con lada país, p. ej. "528112345678" */
  whatsapp: "",
  ciudad: "Monterrey, N.L.",
};

export function correoHref(): string | null {
  return CONTACTO.correo ? `mailto:${CONTACTO.correo}` : null;
}

export function telefonoHref(): string | null {
  return CONTACTO.telefono ? `tel:${CONTACTO.telefono.replace(/[^\d+]/g, "")}` : null;
}

export function whatsappHref(): string | null {
  return CONTACTO.whatsapp ? `https://wa.me/${CONTACTO.whatsapp}` : null;
}
