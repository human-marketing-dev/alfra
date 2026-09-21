/* Logotipos de HIFRA y de las empresas del grupo.

   ── Sobre los archivos ────────────────────────────────────────────
   Los que entrega la marca vienen en lienzo cuadrado con el wordmark
   centrado: ocupa entre el 18% y el 37% del alto y el resto es aire.
   Servidos así, un logo con altura de 30px se vería a 6px. Por eso
   `public/logos/recortado/` guarda cada uno recortado a su caja real y
   es de ahí de donde lee el sitio. Los originales siguen intactos en
   `public/logos/`.

   ── Por qué «sobreClaro» y «sobreOscuro» ──────────────────────────
   Cada variante se nombra por el fondo al que va, no por su color de
   tinta. La mayoría son negro y blanco, pero Grupo FAC no tiene versión
   monocroma oscura: para fondo claro usa su logo a color. Nombrar el
   fondo evita que un llamado pida «negro» y se quede sin archivo.

   ── Por qué «forma» ───────────────────────────────────────────────
   Casi todos son wordmarks horizontales; Grupo FAC es un lockup
   apilado (grúa sobre el nombre sobre el descriptor). A la misma
   altura, un apilado se ve mucho más chico y su descriptor deja de
   leerse, así que `altoFirma` le da más aire.

   ── Versiones derivadas ───────────────────────────────────────────
   Lead Pro llegó sólo en blanco. Su arte es monocromo puro —un único
   valor RGB con toda la forma y el antialias en el canal alfa—, así que
   la versión en negro se derivó cambiando la tinta y conservando el
   alfa intacto: exacta, sin umbrales ni artefactos, con los contornos
   huecos de «México» enteros. El entregable de tamaño completo quedó en
   `public/logos/Logo-Lead-Pro-Negro.png`.

   Ya están las seis empresas. */

export interface Logo {
  /** Versión para fondos claros —crema, superficie. */
  sobreClaro: string;
  /** Versión para fondos oscuros —hero, paneles verdes, pie. */
  sobreOscuro: string;
  /** ancho ÷ alto del archivo recortado */
  ratio: number;
  forma: "horizontal" | "apilado";
  alt: string;
}

const dir = "/logos/recortado";

export const LOGOS = {
  hifra: {
    sobreClaro: `${dir}/logo-hifra-negro.png`,
    sobreOscuro: `${dir}/logo-hifra-blanco.png`,
    ratio: 2.595,
    forma: "horizontal",
    alt: "HIFRA Grupo Inmobiliario",
  },
  epika: {
    sobreClaro: `${dir}/logo-epika-negro.png`,
    sobreOscuro: `${dir}/logo-epika-blanco.png`,
    ratio: 3.652,
    forma: "horizontal",
    alt: "Epika",
  },
  fs: {
    sobreClaro: `${dir}/logo-FS-negro.png`,
    sobreOscuro: `${dir}/logo-FS-blanco.png`,
    ratio: 5.084,
    forma: "horizontal",
    alt: "F&S Real Estate Solutions",
  },
  "alfra-inversiones": {
    sobreClaro: `${dir}/logo-alfra-inversiones-negro.png`,
    sobreOscuro: `${dir}/logo-alfra-inversiones-blanco.png`,
    ratio: 3.099,
    forma: "horizontal",
    alt: "ALFRA Inversiones",
  },
  "alfra-desarrollos": {
    sobreClaro: `${dir}/logo-alfra-desarrollos-negro.png`,
    sobreOscuro: `${dir}/logo-alfra-desarrollos-blanco.png`,
    ratio: 3.27,
    forma: "horizontal",
    alt: "ALFRA Desarrollos",
  },
  "lead-pro": {
    // Versión en negro derivada del blanco (ver nota de arriba).
    sobreClaro: `${dir}/logo-lead-pro-negro.png`,
    sobreOscuro: `${dir}/logo-lead-pro-blanco.png`,
    ratio: 8.217,
    forma: "horizontal",
    alt: "Lead Pro México",
  },
  "grupo-fac": {
    // Sin versión monocroma oscura: para fondo claro va el logo a color.
    // El archivo llegó nombrado «cimentaciones-profundas», pero no es una
    // submarca: es la versión a color del mismo logotipo.
    sobreClaro: `${dir}/logo-grupo-fac-cimentaciones-profundas-logo.png`,
    sobreOscuro: `${dir}/logo-grupo-fac-blanco.png`,
    ratio: 1.335,
    forma: "apilado",
    alt: "Grupo FAC · Construcciones y Edificaciones",
  },
} as const satisfies Record<string, Logo>;

export type MarcaLogo = keyof typeof LOGOS;

/**
 * Altura a la que el logo funciona como firma de marca en un hero.
 * Un lockup apilado necesita casi el doble que un wordmark horizontal
 * para pesar lo mismo y para que su descriptor siga leyéndose.
 */
export function altoFirma(marca: MarcaLogo): number {
  return LOGOS[marca].forma === "apilado" ? 92 : 46;
}
