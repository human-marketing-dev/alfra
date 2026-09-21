/* Contenido institucional de HIFRA Grupo Inmobiliario.
   Fuente: Brief Maestro de Comunicación v2.1 y Landing Corporativa v1.0.

   ─────────────────────────────────────────────────────────────
   PENDIENTES POR CONFIRMAR  (Brief Maestro §11 · Landing bloque 06)
   Todo lo que falta por validar con HIFRA vive en este archivo y
   en `lib/empresas.ts`. Ningún componente inventa datos: lo que
   está vacío no se renderiza.

   · CONTACTO.correo, CONTACTO.telefono, CONTACTO.whatsapp
   · GRUPO.anioFundacion, GRUPO.proyectosAcumulados
   · EMPRESAS[].sitio — URL del sitio propio de cada empresa
   ───────────────────────────────────────────────────────────── */

export const GRUPO = {
  nombre: "HIFRA Grupo Inmobiliario",
  nombreCorto: "HIFRA",
  descriptor: "Grupo inmobiliario integral · Noreste de México",
  ideaRectora: "Convertimos oportunidades inmobiliarias en negocio.",
  sede: "Monterrey, Nuevo León",
  numeroEmpresas: 6,

  /** «confirmar» — Brief Maestro §1, Datos institucionales. */
  anioFundacion: "",
  /** «confirmar» — Brief Maestro §1, Datos institucionales. */
  proyectosAcumulados: "",

  /** Línea de endoso para materiales de empresa (Brief Maestro §4). */
  lineaRespaldo: "Empresa de HIFRA Grupo Inmobiliario",
} as const;

/** Boilerplates oficiales (Brief Maestro §9). */
export const BOILERPLATE = {
  corto:
    "HIFRA Grupo Inmobiliario agrupa seis empresas especializadas del sector inmobiliario: comercialización, expansión corporativa, estructuración comercial, inversión, desarrollo y construcción, con sede en Monterrey, Nuevo León.",
  medio:
    "HIFRA Grupo Inmobiliario agrupa seis empresas especializadas del sector inmobiliario en el noreste de México: Epika en comercialización, F&S Real Estate Solutions en expansión corporativa, Lead Pro en estructuración comercial, ALFRA Inversiones en inversión, ALFRA Desarrollos en desarrollo y Grupo FAC en construcción. Un cliente entra por la empresa que ejecuta su oportunidad y queda respaldado por todo el grupo.",
} as const;

interface Contacto {
  correo: string;
  telefono: string;
  /** Sólo dígitos, con lada país. */
  whatsapp: string;
  ciudad: string;
}

export const CONTACTO: Contacto = {
  /** «confirmar» — p. ej. "contacto@hifra.mx" */
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
