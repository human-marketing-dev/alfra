/* Las seis empresas de HIFRA Grupo Inmobiliario.
   Fuente: Brief Maestro §4 (nomenclatura) y §5 (frentes), Landing §03.

   El orden del arreglo es el orden canónico del brief: es el mismo de
   la tabla §5, el del boilerplate §9.3 y el que pide la nota de
   contenido de la landing —Epika, F&S y Lead Pro juntos, para que la
   diferencia entre las tres se lea de corrido.

   `sitio` es la salida al sitio propio de cada empresa. Mientras esté
   vacío, la ficha no muestra el botón de salida. */

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
}

export const EMPRESAS: Empresa[] = [
  {
    slug: "epika",
    nombre: "Epika",
    nombreCorto: "Epika",
    frente: "Agencia Inmobiliaria",
    titular: "La transacción inmobiliaria, resuelta de principio a fin.",
    resumen:
      "Compra, venta y renta de bienes inmuebles. Asesora al cliente en la transacción y opera el inventario del mercado.",
    tarjeta: "Compra, venta y renta de bienes inmuebles, con asesoría en cada etapa de la transacción.",
    modeloReferencia: "Agencia inmobiliaria de red",
    servicios: [
      {
        titulo: "Compra",
        descripcion:
          "Ubicamos la propiedad que corresponde al objetivo del cliente y acompañamos la operación hasta el cierre.",
      },
      {
        titulo: "Venta",
        descripcion:
          "Colocamos la propiedad en el mercado con estrategia de precio, exposición y seguimiento de prospectos.",
      },
      {
        titulo: "Renta",
        descripcion: "Operamos el arrendamiento residencial y comercial, del prospecto al contrato firmado.",
      },
      {
        titulo: "Asesoría en la transacción",
        descripcion: "Cada etapa con un asesor responsable y criterio de mercado sobre el inventario disponible.",
      },
    ],
    audiencia: {
      quien: "Familia, profesional o inversionista que compra, vende o renta propiedad.",
      busca: "Elegir con criterio y con respaldo institucional.",
      promesa:
        "Compras, vendes o rentas con una agencia que forma parte de un grupo que también invierte, desarrolla y construye.",
    },
    pruebas: [],
    icono: "home",
    logo: "epika",
    // Sitio propio de Epika: pendiente.
    sitio: "",
  },
  {
    slug: "fs-real-estate-solutions",
    nombre: "F&S Real Estate Solutions",
    nombreCorto: "F&S",
    frente: "Expansión corporativa",
    titular: "Ubicamos, gestionamos y ponemos a operar tu espacio en México.",
    resumen:
      "Soft landing y expansión de empresas extranjeras: búsqueda y gestión de espacios de oficina, comerciales e industriales.",
    tarjeta:
      "Soft landing y expansión de empresas extranjeras: búsqueda y gestión de espacios de oficina, comerciales e industriales.",
    modeloReferencia: "Firma internacional de servicios inmobiliarios corporativos",
    servicios: [
      {
        titulo: "Soft landing",
        descripcion:
          "Acompañamos el aterrizaje de la empresa extranjera, de la búsqueda del espacio al arranque de la operación.",
      },
      {
        titulo: "Búsqueda de espacio",
        descripcion: "Oficina, comercio e industria, con criterio de ubicación, especificación técnica y plazo.",
      },
      {
        titulo: "Gestión de la ocupación",
        descripcion: "Negociación, contratación y seguimiento del espacio durante toda la ocupación.",
      },
      {
        titulo: "Expansión",
        descripcion: "Nuevas sedes y reubicaciones para empresas que ya operan en el noreste de México.",
      },
    ],
    audiencia: {
      quien: "Empresa nacional o extranjera que abre operación, se reubica o crece en el noreste de México.",
      busca: "Un interlocutor que resuelva espacio, adecuación y operación con un solo punto de contacto.",
      promesa:
        "Ubicamos, adecuamos y construimos tu operación en México, con acompañamiento desde la búsqueda hasta el arranque.",
    },
    pruebas: [],
    icono: "globe",
    logo: "fs",
    // F&S se presenta como la división inmobiliaria de Flores Serna Group.
    sitio: "https://www.floresserna.com",
    paginaPropia: true,
  },
  {
    slug: "lead-pro",
    nombre: "Lead Pro",
    nombreCorto: "Lead Pro",
    frente: "Estructuración comercial",
    titular: "Estructuramos y operamos tu departamento comercial.",
    resumen:
      "Impulsa y estructura el departamento comercial de una empresa: generación de demanda, procesamiento de leads, dirección de ventas y cierre.",
    tarjeta:
      "Estructura y opera el departamento comercial de una empresa, de la generación de demanda al cierre de la venta.",
    modeloReferencia: "Equipo comercial externalizado",
    servicios: [
      {
        titulo: "Generación de demanda",
        descripcion: "Construimos el flujo de prospectos que sostiene el ritmo de colocación del cliente.",
      },
      {
        titulo: "Procesamiento de leads",
        descripcion: "Calificamos, damos seguimiento y ordenamos cada prospecto dentro de un proceso medible.",
      },
      {
        titulo: "Dirección de ventas",
        descripcion: "Dirigimos al equipo comercial con método, metas y control sobre el avance.",
      },
      {
        titulo: "Cierre",
        descripcion: "Llevamos la operación hasta la venta cerrada y devolvemos lectura de lo que funcionó.",
      },
    ],
    audiencia: {
      quien: "Empresa que necesita vender más y sostener el ritmo de colocación de su producto.",
      busca: "Capacidad de ejecución y estructura comercial que sostenga el ritmo de colocación.",
      promesa: "Estructuramos el equipo comercial que coloca tu producto y lo operamos hasta el cierre.",
    },
    pruebas: [],
    icono: "target",
    logo: "lead-pro",
    // Sitio propio de Lead Pro: pendiente.
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
        "Estructuramos tu estrategia y la ejecutamos con las empresas del grupo: desarrollo, construcción y comercialización bajo el mismo techo.",
    },
    pruebas: [],
    icono: "trending-up",
    logo: "alfra-inversiones",
    sitio: "",
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
    slug: "grupo-fac",
    nombre: "Grupo FAC",
    nombreCorto: "Grupo FAC",
    frente: "Construcción",
    titular: "Construimos llave en mano, con maquinaria y equipo técnico propios.",
    resumen:
      "Construcción llave en mano con especialización industrial: construcción industrial integral, cimentaciones profundas, terracerías y pavimentos, y renta de maquinaria pesada.",
    tarjeta:
      "Construcción llave en mano con especialización industrial, más de una década de experiencia y maquinaria propia.",
    modeloReferencia: "Constructora industrial con capacidad propia",
    servicios: [
      {
        titulo: "Construcción industrial integral",
        descripcion: "Nave, planta y adecuación industrial bajo esquema llave en mano.",
      },
      {
        titulo: "Cimentaciones profundas",
        descripcion: "Solución de cimentación para suelos y cargas que la obra convencional no resuelve.",
      },
      {
        titulo: "Terracerías y pavimentos",
        descripcion: "Preparación de sitio, movimiento de tierras y pavimentación con equipo propio.",
      },
      {
        titulo: "Renta de maquinaria pesada",
        descripcion: "Flota propia disponible para obra de terceros, con operación y mantenimiento.",
      },
    ],
    audiencia: {
      quien: "Empresa industrial, desarrollador o inversionista que necesita construir su operación o su proyecto.",
      busca: "Plazos, especificación y capacidad demostrable.",
      promesa: "Construimos tu operación llave en mano, con control de obra y capacidad instalada propia.",
    },
    pruebas: [
      "Más de una década de experiencia en construcción industrial",
      "Flota propia de maquinaria pesada",
      "Proyectos llave en mano entregados",
    ],
    icono: "hard-hat",
    logo: "grupo-fac",
    sitio: "https://grupofac.com/",
  },
];

export function empresaPorSlug(slug: string): Empresa | undefined {
  return EMPRESAS.find((e) => e.slug === slug);
}

export function otrasEmpresas(slug: string): Empresa[] {
  return EMPRESAS.filter((e) => e.slug !== slug);
}
