/* Logotipos de las empresas de ALFRA Grupo Inmobiliario.

   ── Sobre los archivos ────────────────────────────────────────────
   Los que entrega la marca vienen en lienzo cuadrado con el wordmark
   centrado: ocupa entre el 18% y el 37% del alto y el resto es aire.
   Servidos así, un logo con altura de 30px se vería a 6px. Por eso
   `public/logos/recortado/` guarda cada uno recortado a su caja real y
   es de ahí de donde lee el sitio. Los originales siguen intactos en
   `public/logos/`.

   ── Por qué «sobreClaro» y «sobreOscuro» ──────────────────────────
   Cada variante se nombra por el fondo al que va, no por su color de
   tinta. Nombrar el fondo evita que un llamado pida «negro» y se quede
   sin archivo cuando una marca no tenga versión monocroma oscura.

   ── Por qué «forma» ───────────────────────────────────────────────
   Un wordmark horizontal y un lockup apilado no pesan lo mismo a la
   misma altura: el apilado se ve mucho más chico y su descriptor deja
   de leerse, así que `altoFirma` le da más aire.

   ── TODO: logos pendientes ────────────────────────────────────────
   Sólo hay archivo de ALFRA Desarrollos y ALFRA Inversiones. Faltan:

   · El logotipo del grupo, para el header y el pie. Mientras no llegue,
     `LogoGrupo` (components/site/Logo.tsx) firma con el nombre en la
     tipografía display del sistema.
   · ALFRA Grupo Inmobiliario y ALFRA Agencia Inmobiliaria como
     empresas. Sin `logo` en `lib/empresas.ts`, su página cae en el
     lockup tipográfico de respaldo del hero. */

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

const REGISTRO = {
  "alfra-desarrollos": {
    sobreClaro: `${dir}/logo-alfra-desarrollos-negro.png`,
    sobreOscuro: `${dir}/logo-alfra-desarrollos-blanco.png`,
    ratio: 3.27,
    forma: "horizontal",
    alt: "ALFRA Desarrollos",
  },
  "alfra-inversiones": {
    sobreClaro: `${dir}/logo-alfra-inversiones-negro.png`,
    sobreOscuro: `${dir}/logo-alfra-inversiones-blanco.png`,
    ratio: 3.099,
    forma: "horizontal",
    alt: "ALFRA Inversiones",
  },
} satisfies Record<string, Logo>;

export type MarcaLogo = keyof typeof REGISTRO;

/* El registro se reexpone tipado como `Logo` y no por sus literales: hoy
   los dos logos entregados son horizontales, y sin esto el compilador
   daría por muerta la rama de `altoFirma` que atiende a un lockup
   apilado —una regla del sistema que sigue vigente para el que entre. */
export const LOGOS: Record<MarcaLogo, Logo> = REGISTRO;

/**
 * Altura a la que el logo funciona como firma de marca en un hero.
 * Un lockup apilado necesita casi el doble que un wordmark horizontal
 * para pesar lo mismo y para que su descriptor siga leyéndose.
 */
export function altoFirma(marca: MarcaLogo): number {
  return LOGOS[marca].forma === "apilado" ? 92 : 46;
}
