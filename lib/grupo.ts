/* Contenido institucional de ALFRA Grupo Inmobiliario.
   Fuente: Brief Maestro de Comunicación v1.0 (noviembre 2026).

   ─────────────────────────────────────────────────────────────
   PENDIENTES POR CONFIRMAR  (Brief Maestro §1 y §10)
   Todo lo que falta por validar con ALFRA vive en este archivo y
   en `lib/empresas.ts`. Ningún componente inventa datos: lo que
   está vacío no se renderiza.

   · CONTACTO.correo, CONTACTO.telefono, CONTACTO.whatsapp
   · GRUPO.anioFundacion, GRUPO.proyectosAcumulados
   · GRUPO.sede — el brief v1.0 la marca «confirmar»; se mantiene
     Monterrey porque los boilerplates del propio brief la usan
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
  lineaRespaldo: "Unidad de negocio de ALFRA Grupo Inmobiliario",
} as const;

/** Boilerplates oficiales (Brief Maestro §8.3 y §8.4). */
/* Hero del inicio. Para cambiar el video basta con subir el archivo a
   `public/video/` con este nombre (mp4, H.264, sin audio, idealmente
   menos de 8 MB). Mientras no exista se ve la foto de respaldo. */
export const HERO_INICIO = {
  video: "/video/hero-inicio.mp4",
  foto: {
    src: "/fotos/hero-asesores-inmobiliarios.webp",
    alt: "",
    posicion: "70% 50%",
  },
};

export const BOILERPLATE = {
  corto: `ALFRA Grupo Inmobiliario opera ${enLetras(EMPRESAS.length)} unidades de negocio especializadas: asesoría inmobiliaria, desarrollo industrial, desarrollo residencial e inversión. Convierte oportunidades inmobiliarias en negocio desde Monterrey.`,
  medio:
    "ALFRA Grupo Inmobiliario opera cuatro unidades especializadas en el noreste de México: ALFRA Asesores Inmobiliarios en compra, venta y renta; ALFRA Desarrollo Industrial en construcción industrial llave en mano; ALFRA Desarrollo Residencial en terreno y construcción con un solo proveedor; y ALFRA Capital en portafolios de inversión inmobiliaria. Un cliente entra por la unidad que ejecuta su oportunidad y queda respaldado por todo el grupo.",
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
