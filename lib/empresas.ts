/* Las empresas de ALFRA Grupo Inmobiliario.
   Fuente: Brief Maestro §4 (nomenclatura) y §5 (frentes), Landing §03.

   El orden del arreglo es el orden canónico: abre el grupo y siguen las
   empresas operativas. Ningún texto del sitio escribe a mano cuántas
   son: el número sale de `EMPRESAS.length` (ver `numeroEmpresas` y
   `enLetras`), para que agregar o quitar una empresa no deje cifras
   viejas por el camino.

   ─────────────────────────────────────────────────────────────
   PENDIENTES POR CONFIRMAR
   Las cuatro marcas ya tienen logotipo. Lo que sigue pendiente es el
   texto de ALFRA Grupo Inmobiliario y ALFRA Agencia Inmobiliaria:
   fuera de lo que se deriva de su propio nombre, titular, resumen,
   tarjeta, modelo de referencia, servicios y audiencia quedan marcados
   «confirmar» y no se renderizan mientras sigan vacíos.
   ───────────────────────────────────────────────────────────── */

import type { IconName } from "@/components/ui/Icon";
import type { MarcaLogo } from "@/lib/logos";

export interface Servicio {
  titulo: string;
  descripcion: string;
}

export interface Empresa {
  slug: string;
  /** Nombre completo — primera mención (Brief Maestro §4). */
  nombre: string;
  /** Menciones subsecuentes dentro de un mismo texto. */
  nombreCorto: string;
  /** Frente del sector que atiende. */
  frente: string;
  /** Titular de la página de empresa. */
  titular: string;
  /** Qué resuelve, en la formulación del brief §5. */
  resumen: string;
  /** Texto de la tarjeta en la landing (Landing §03). */
  tarjeta: string;
  /** Modelo de referencia reconocible en el mercado (Brief Maestro §5). */
  modeloReferencia: string;
  servicios: Servicio[];
  /** Audiencia del brief §7 a la que sirve esta empresa. */
  audiencia: { quien: string; busca: string; promesa: string };
  /** Pruebas publicables. Vacío mientras no haya cifras confirmadas. */
  pruebas: string[];
  icono: IconName;
  /**
   * Clave en `lib/logos.ts`. Sin logo entregado, la página cae en el
   * tratamiento tipográfico de respaldo (icono + nombre).
   */
  logo?: MarcaLogo;
  /** URL del sitio propio. Vacío = la empresa aún no tiene sitio. */
  sitio: string;
  /**
   * La empresa tiene su propia ruta en `app/empresas/<slug>/`, con brief y
   * estructura propios, en lugar de la plantilla compartida de `[slug]`.
   */
  paginaPropia?: boolean;
  /**
   * Esta entrada es el grupo mismo, no una de sus empresas. Conserva su
   * página, pero no lleva la línea de endoso: el grupo no se respalda a
   * sí mismo. Sólo la marca ALFRA Grupo Inmobiliario.
   */
  esElGrupo?: boolean;
}

export const EMPRESAS: Empresa[] = [
  {
    slug: "alfra-grupo-inmobiliario",
    nombre: "ALFRA Grupo Inmobiliario",
    nombreCorto: "ALFRA",
    /** Tomado de su propio nombre; no hay frente confirmado aparte. */
    frente: "Grupo Inmobiliario",
    /** «confirmar» — titular de la página de empresa. */
    titular: "",
    /** «confirmar» — qué resuelve. */
    resumen: "",
    /** «confirmar» — texto de la tarjeta en la landing. */
    tarjeta: "",
    /** «confirmar» — modelo de referencia. */
    modeloReferencia: "",
    /** «confirmar» — las cuatro capacidades del frente. */
    servicios: [],
    /** «confirmar» — a quién sirve: quién es, qué busca, qué promete. */
    audiencia: { quien: "", busca: "", promesa: "" },
    pruebas: [],
    icono: "building",
    logo: "alfra-grupo",
    sitio: "",
    esElGrupo: true,
  },
  {
    slug: "alfra-desarrollos",
    nombre: "ALFRA Desarrollos",
    nombreCorto: "ALFRA Desarrollos",
    frente: "Desarrollo",
    titular: "Del producto definido a las llaves entregadas.",
    resumen: "Ejecuta desarrollos inmobiliarios de clientes, con gestión integral del proyecto.",
    tarjeta:
      "Ejecuta desarrollos inmobiliarios con gestión integral del proyecto, desde la definición del producto hasta la entrega.",
    modeloReferencia: "Desarrolladora con gestión integral de proyecto",
    servicios: [
      {
        titulo: "Definición del producto",
        descripcion: "Evaluamos la vocación del predio y definimos qué desarrollo corresponde a ese suelo y ese mercado.",
      },
      {
        titulo: "Gestión integral del proyecto",
        descripcion: "Coordinamos proyecto, permisos, presupuesto y calendario bajo un solo responsable.",
      },
      {
        titulo: "Ejecución del desarrollo",
        descripcion: "Llevamos el desarrollo del papel a la obra con control de avance y de costo.",
      },
      {
        titulo: "Entrega",
        descripcion: "Cerramos el proyecto y lo entregamos listo para su colocación u operación.",
      },
    ],
    audiencia: {
      quien: "Dueño de predio o desarrollador que necesita ejecutar un proyecto inmobiliario.",
      busca: "Capacidad de ejecución que sostenga el proyecto de principio a fin.",
      promesa: "Ejecutamos tu desarrollo con gestión integral y lo entregamos listo para colocarse.",
    },
    pruebas: [],
    icono: "layers",
    logo: "alfra-desarrollos",
    sitio: "",
  },
  {
    slug: "alfra-inversiones",
    nombre: "ALFRA Inversiones",
    nombreCorto: "ALFRA Inversiones",
    frente: "Inversiones Inmobiliarias",
    titular: "Maximizamos el rendimiento de tu inversión inmobiliaria.",
    resumen:
      "Estructura y ejecuta la estrategia de inversión inmobiliaria del cliente, con evaluación de oportunidades y acompañamiento de la operación.",
    tarjeta:
      "Estructura y ejecuta la estrategia de inversión inmobiliaria del cliente, de la evaluación de la oportunidad al acompañamiento de la operación.",
    modeloReferencia: "Vehículo de inversión inmobiliaria con acompañamiento directo",
    servicios: [
      {
        titulo: "Estrategia de inversión",
        descripcion: "Definimos dónde y cómo participa el capital del cliente, con horizonte y perfil explícitos.",
      },
      {
        titulo: "Evaluación de oportunidades",
        descripcion: "Analizamos cada operación con criterio de mercado antes de comprometer capital.",
      },
      {
        titulo: "Estructuración de la operación",
        descripcion: "Armamos el esquema de participación que corresponde al proyecto y al inversionista.",
      },
      {
        titulo: "Acompañamiento",
        descripcion: "Damos seguimiento a la operación durante todo el horizonte de la inversión.",
      },
    ],
    audiencia: {
      quien: "Persona, familia o vehículo con capital que busca destino inmobiliario.",
      busca: "Rendimiento con respaldo, visibilidad del proyecto y claridad sobre el horizonte de salida.",
      promesa:
        "Estructuramos tu estrategia y la ejecutamos con las empresas del grupo: desarrollo y comercialización bajo el mismo techo.",
    },
    pruebas: [],
    icono: "trending-up",
    logo: "alfra-inversiones",
    sitio: "",
  },
  {
    slug: "alfra-agencia-inmobiliaria",
    nombre: "ALFRA Agencia Inmobiliaria",
    nombreCorto: "ALFRA Agencia Inmobiliaria",
    /** Tomado de su propio nombre; no hay frente confirmado aparte. */
    frente: "Agencia Inmobiliaria",
    /** «confirmar» — titular de la página de empresa. */
    titular: "",
    /** «confirmar» — qué resuelve. */
    resumen: "",
    /** «confirmar» — texto de la tarjeta en la landing. */
    tarjeta: "",
    /** «confirmar» — modelo de referencia. */
    modeloReferencia: "",
    /** «confirmar» — las cuatro capacidades del frente. */
    servicios: [],
    /** «confirmar» — a quién sirve: quién es, qué busca, qué promete. */
    audiencia: { quien: "", busca: "", promesa: "" },
    pruebas: [],
    icono: "home",
    logo: "alfra-agencia",
    sitio: "",
  },
];

/** Cuántas empresas son. Todo texto que diga el número lo toma de aquí. */
export const numeroEmpresas = EMPRESAS.length;

const CARDINALES = ["cero", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

/**
 * El número escrito con letra, en femenino —«cuatro empresas»—, para que
 * el texto corrido no tenga que llevar la cuenta a mano. Fuera de la
 * tabla cae en el dígito, que siempre es legible.
 */
export function enLetras(n: number): string {
  return CARDINALES[n] ?? String(n);
}

/** Igual que `enLetras`, para cuando el número abre la frase. */
export function enLetrasCapital(n: number): string {
  const palabra = enLetras(n);
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

export function empresaPorSlug(slug: string): Empresa | undefined {
  return EMPRESAS.find((e) => e.slug === slug);
}

export function otrasEmpresas(slug: string): Empresa[] {
  return EMPRESAS.filter((e) => e.slug !== slug);
}
