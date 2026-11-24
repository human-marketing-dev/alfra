/* Logotipos de ALFRA Grupo Inmobiliario y de sus empresas.

   ── Sobre los archivos ────────────────────────────────────────────
   Los que entrega la marca traen aire alrededor del wordmark —entre un
   11% del ancho y un 26% del alto, distinto en cada marca—. Servidos
   así, dos logos pedidos a la misma altura no pesarían lo mismo: el que
   trae más aire se vería más chico. Por eso `public/logos/recortado/`
   guarda cada uno recortado a su caja real y es de ahí de donde lee el
   sitio. Los originales siguen intactos en `public/logos/`.

   ── Por qué «sobreClaro» y «sobreOscuro» ──────────────────────────
   Cada variante se nombra por el fondo al que va, no por su color de
   tinta. Nombrar el fondo evita que un llamado pida «negro» y se quede
   sin archivo cuando una marca no tenga versión monocroma oscura.

   ── Por qué «forma» ───────────────────────────────────────────────
   Un wordmark horizontal y un lockup apilado no pesan lo mismo a la
   misma altura: el apilado se ve mucho más chico y su descriptor deja
   de leerse, así que `altoFirma` le da más aire.

   ── Variantes que la entrega trae y el sitio no usa ───────────────
   De cada marca ALFRA llegaron tres tintas —negro, blanco y color— y,
   aparte del logotipo completo, el isotipo suelto; de la matriz llegó
   además el lockup con la casa (`Alfra_Grupo_logo_casa_*`, un apilado
   de ratio 1.60). El sistema es monocromo sobre fondo crema o carbón,
   así que aquí sólo entran negro y blanco del logotipo completo. El
   resto sigue en `public/logos/` para cuando haga falta.

   ── Unidades de negocio ───────────────────────────────────────────
   Con el Brief Maestro v1.0 las unidades cambiaron de nombre (ALFRA
   Asesores Inmobiliarios, Desarrollo Industrial, Desarrollo Residencial,
   Capital) y todavía no hay logotipo con esos nombres. Los archivos de
   ALFRA Desarrollos, Inversiones y Agencia siguen en `public/logos/`,
   pero ya no se registran aquí: son nombres fuera de uso. Cuando
   lleguen los nuevos, se agregan como una entrada más. */

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
  /** La matriz. Firma el header y el pie, no una página de empresa. */
  "alfra-grupo": {
    sobreClaro: `${dir}/alfra-grupo-negro.png`,
    sobreOscuro: `${dir}/alfra-grupo-blanco.png`,
    ratio: 2.473,
    forma: "horizontal",
    alt: "ALFRA Grupo Inmobiliario",
  },
} as const satisfies Record<string, Logo>;

export type MarcaLogo = keyof typeof LOGOS;

/**
 * Altura a la que el logo funciona como firma de marca en un hero.
 * Un lockup apilado necesita casi el doble que un wordmark horizontal
 * para pesar lo mismo y para que su descriptor siga leyéndose.
 */
export function altoFirma(marca: MarcaLogo): number {
  const logo: Logo = LOGOS[marca];
  return logo.forma === "apilado" ? 92 : 46;
}
