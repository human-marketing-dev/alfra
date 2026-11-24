/* Las unidades de negocio de ALFRA Grupo Inmobiliario.
   Fuente: Brief Maestro de Comunicación v1.0 (nov 2026), §4
   (nomenclatura) y §5 (las cuatro unidades).

   Aquí viven las unidades, no el grupo: ALFRA Grupo Inmobiliario es la
   matriz y vive en `lib/grupo.ts`. Ningún texto del sitio escribe a mano
   cuántas son: el número sale de `EMPRESAS.length` (ver `enLetras`).
   El tipo se sigue llamando `Empresa` por historia del código; en el
   copy siempre se dice «unidad de negocio».

   ─────────────────────────────────────────────────────────────
   REGLAS DEL BRIEF QUE ESTE ARCHIVO RESPETA
   · Los aliados de las unidades de desarrollo no se nombran nunca.
     Toda la capacidad se comunica como capacidad de ALFRA.
   · El ahorro residencial se explica por el modelo (un solo proveedor,
     precio de constructor) y nunca se cuantifica.
   · Lo marcado «confirmar» en el brief no se publica.

   PENDIENTES POR CONFIRMAR (brief §10)
   · Desarrollo Industrial: si la renta de maquinaria pesada se ofrece
     bajo ALFRA. Fuera de `servicios` mientras tanto.
   · Desarrollo Residencial: nombre propio del modelo (se describe sin
     nombre), plazo de financiamiento bajo ALFRA (no se publica «20
     años»), cifra de casas construidas.
   · Capital: esquemas, ticket, horizontes y el argumento de acceso a
     oportunidades antes del mercado abierto (fuera mientras tanto).
   · Asesores: si atiende el segmento corporativo e industrial; cifras de
     inventario y de desarrolladores.
   · Ninguna unidad tiene todavía logotipo con su nombre nuevo: el hero
     usa el respaldo tipográfico (icono + nombre).
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
  /**
   * Argumento central de la unidad, cuando lo tiene (brief §5.3). Se
   * pinta como bloque propio entre el hero y los servicios.
   */
  argumentoCentral?: { titulo: string; parrafos: string[] };
  /**
   * Fotografía de fondo del hero (ruta en `public/`). Sin ella, el hero
   * usa el fondo verde con retícula.
   */
  heroImagen?: { src: string; alt: string; /** object-position; por defecto "60% 50%". */ posicion?: string };
  /**
   * La empresa tiene su propia ruta en `app/empresas/<slug>/`, con brief y
   * estructura propios, en lugar de la plantilla compartida de `[slug]`.
   */
  paginaPropia?: boolean;
}

export const EMPRESAS: Empresa[] = [
  {
    slug: "alfra-asesores-inmobiliarios",
    nombre: "ALFRA Asesores Inmobiliarios",
    nombreCorto: "ALFRA Asesores Inmobiliarios",
    frente: "Asesoría y comercialización",
    titular: "La solución ideal para tu necesidad, con todo el mercado a la vista.",
    resumen:
      "Compra, venta y renta de inmuebles con inteligencia de mercado y un inventario amplio gracias a nuestro trabajo directo con desarrolladores.",
    tarjeta:
      "Compra, venta y renta de inmuebles con inteligencia de mercado y un inventario amplio gracias al trabajo directo con desarrolladores.",
    modeloReferencia: "Asesoría inmobiliaria con inventario de desarrolladores",
    servicios: [
      {
        titulo: "Inteligencia de mercado",
        descripcion:
          "Lectura real de qué se está moviendo, a qué precio y a qué velocidad. Decides con datos, no con intuición.",
      },
      {
        titulo: "Inventario amplio",
        descripcion:
          "Trabajamos directamente con desarrolladores, lo que nos da acceso a más opciones que una agencia tradicional.",
      },
      {
        titulo: "Asesoría a la medida",
        descripcion:
          "Partimos de tu necesidad, ya sea uso propio o inversión, y filtramos el inventario hasta la opción que te conviene.",
      },
      {
        titulo: "Respaldo de grupo",
        descripcion: "La asesoría forma parte de un grupo que también desarrolla e invierte.",
      },
    ],
    audiencia: {
      // «confirmar» si también atiende el segmento corporativo e industrial.
      quien: "Familias, profesionales e inversionistas que compran, venden o rentan propiedad.",
      busca: "Elegir con criterio, con opciones suficientes y con respaldo institucional.",
      promesa: "Te ayudamos a encontrar la solución ideal para tu necesidad.",
    },
    // «confirmar» — tamaño de inventario, desarrolladores, operaciones cerradas.
    pruebas: [],
    icono: "key",
    heroImagen: {
      src: "/fotos/hero-asesores-inmobiliarios.webp",
      alt: "Edificio residencial blanco con balcones, visto desde abajo",
      posicion: "70% 50%",
    },
  },
  {
    slug: "alfra-desarrollo-industrial",
    nombre: "ALFRA Desarrollo Industrial",
    nombreCorto: "ALFRA Desarrollo Industrial",
    frente: "Desarrollo y construcción industrial",
    titular: "Tu operación industrial, construida llave en mano.",
    resumen:
      "Ejecutamos proyectos industriales de principio a fin, de la ingeniería a la entrega lista para operar: naves, centros de distribución y complejos logísticos.",
    tarjeta:
      "Construcción industrial integral llave en mano, con más de una década de experiencia y maquinaria propia.",
    modeloReferencia: "Construcción industrial integral llave en mano",
    servicios: [
      {
        titulo: "Construcción Industrial Integral",
        descripcion:
          "Planeación e ingeniería, naves industriales y CEDIS, obra civil e infraestructura, instalaciones especializadas, y gestión y supervisión de obra.",
      },
      {
        titulo: "Cimentaciones Profundas",
        descripcion:
          "Pilotes perforados, micropilotes, pilotes colados en sitio, anclajes y contención, pruebas de carga, y estudios y diseño de cimentación.",
      },
      {
        titulo: "Terracerías y Pavimentos",
        descripcion:
          "Corte y relleno, nivelación y compactación, plataformas para naves industriales, pavimentos asfálticos y de concreto, y rehabilitación de vialidades.",
      },
      // «confirmar» — Renta de Maquinaria Pesada, si se ofrece bajo ALFRA.
    ],
    audiencia: {
      quien:
        "Empresas nacionales y extranjeras que construyen, amplían o reubican su operación industrial o logística, y desarrolladores industriales.",
      busca: "Un interlocutor que resuelva el proyecto completo, de la ingeniería a la entrega, con plazos y control.",
      promesa: "Construimos tu operación industrial llave en mano, con control total de la obra.",
    },
    pruebas: [
      "Más de una década de experiencia en construcción industrial",
      "Equipo técnico especializado",
      "Flota propia de maquinaria pesada",
      "Control total de la obra",
    ],
    icono: "hard-hat",
    // Retocada: se borraron las rotulaciones del aliado en grúa y pilotera.
    heroImagen: {
      src: "/fotos/hero-desarrollo-industrial.webp",
      alt: "Obra de cimentación profunda con grúa y piloteadora en Monterrey",
    },
  },
  {
    slug: "alfra-desarrollo-residencial",
    nombre: "ALFRA Desarrollo Residencial",
    nombreCorto: "ALFRA Desarrollo Residencial",
    frente: "Desarrollo y construcción residencial",
    titular: "Tu terreno y tu casa en una sola compra. Así ahorras.",
    resumen:
      "Vendemos terreno y construcción como una sola compra, con un solo proveedor y financiamiento bancario. Ahorras los márgenes que suma la compra tradicional.",
    tarjeta:
      "Terreno y casa en una sola compra, con un solo proveedor y financiamiento bancario. Ahorras los márgenes que suma la compra tradicional.",
    // «confirmar» — nombre propio del modelo. Se describe sin nombre.
    modeloReferencia: "Terreno, construcción y financiamiento con un solo proveedor",
    argumentoCentral: {
      titulo: "Quitamos intermediarios, no calidad.",
      parrafos: [
        "En la compra tradicional compras un terreno, contratas a un arquitecto y después a una constructora, y cada uno suma su margen. Además, el proyecto suele subestimar el costo real de los materiales y termina rediseñándose.",
        "Con ALFRA Desarrollo Residencial todo el proceso queda con un solo proveedor, que construye para ti al mismo precio que le cobraría a una inmobiliaria. De ahí sale el ahorro.",
      ],
    },
    servicios: [
      {
        titulo: "Casa base con precio definido",
        descripcion: "No empiezas de cero: partes de un diseño probado y sabes desde el inicio cuánto vas a pagar.",
      },
      {
        titulo: "A tu estilo, dentro del presupuesto",
        descripcion:
          "Eliges sin costo fachada, puertas, muebles de baño, accesorios eléctricos, iluminación y colores. Cualquier otro cambio se cobra solo por la diferencia.",
      },
      {
        titulo: "Se decide desde el inicio",
        descripcion:
          "En una preventa tradicional, cambiar algo después del contrato se paga completo. Aquí lo decides antes de construir y pagas solo la diferencia.",
      },
      {
        titulo: "Un solo proceso",
        descripcion:
          "Tramitamos tu crédito con el banco que más te convenga, gestionamos la licencia y escrituramos a tu nombre. Pagas mensualidades mientras se construye tu casa.",
      },
    ],
    audiencia: {
      quien:
        "Familias establecidas y parejas jóvenes que quieren una casa propia para vivir, con un presupuesto definido y, por lo general, con crédito bancario.",
      busca: "Certeza de precio, un proceso sencillo y una casa a su estilo sin salirse del presupuesto.",
      promesa: "Tu terreno y tu casa en una sola compra, con un solo proveedor y financiamiento bancario.",
    },
    // «confirmar» — casas construidas que ALFRA pueda comunicar como propias.
    pruebas: [],
    icono: "home",
    heroImagen: {
      src: "/fotos/hero-desarrollo-residencial.webp",
      alt: "Casa residencial contemporánea de dos niveles con fachada blanca y piedra gris",
      // Foto cuadrada con mucho cielo: se ancla abajo para que la casa
      // quede en cuadro.
      posicion: "70% 100%",
    },
  },
  {
    slug: "alfra-capital",
    nombre: "ALFRA Capital",
    nombreCorto: "ALFRA Capital",
    frente: "Inversión",
    titular: "Tu portafolio inmobiliario, con todo el grupo detrás.",
    resumen:
      "Estructuramos y gestionamos portafolios inmobiliarios para family offices y patrimonios familiares, con evaluación de oportunidades y acompañamiento de cada operación.",
    tarjeta:
      "Estructura y gestiona portafolios inmobiliarios para family offices, con evaluación de oportunidades y acompañamiento de cada operación.",
    modeloReferencia: "Gestión de portafolio inmobiliario para family offices",
    servicios: [
      {
        titulo: "Visión de portafolio",
        descripcion:
          "La inversión se plantea como portafolio, no como operación aislada: selección de activos, diversificación por segmento y horizonte definido.",
      },
      {
        titulo: "Ejecución bajo el mismo techo",
        descripcion: "Lo que el portafolio decide, el grupo lo desarrolla, lo construye y lo comercializa.",
      },
      {
        titulo: "Acompañamiento de la operación",
        descripcion: "Evaluación, estructuración y seguimiento de cada activo durante todo el horizonte.",
      },
      // «confirmar» — Acceso a oportunidades antes del mercado abierto.
    ],
    audiencia: {
      quien: "Family offices y patrimonios familiares que buscan construir o diversificar un portafolio inmobiliario.",
      busca: "Rendimiento con respaldo, visibilidad de cada activo y claridad sobre el horizonte.",
      promesa:
        "Construimos tu portafolio inmobiliario con la lectura de mercado y la capacidad de ejecución de todo el grupo.",
    },
    // «confirmar» — esquemas, ticket de entrada, horizontes de referencia.
    pruebas: [],
    icono: "trending-up",
    heroImagen: {
      src: "/fotos/hero-capital.webp",
      alt: "Torre residencial vista desde abajo, entre árboles",
      posicion: "65% 40%",
    },
  },
];

/** Cuántas unidades son. Todo texto que diga el número lo toma de aquí. */
export const numeroEmpresas = EMPRESAS.length;

const CARDINALES = ["cero", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

/**
 * El número escrito con letra, en femenino —«cuatro unidades»—, para que
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
