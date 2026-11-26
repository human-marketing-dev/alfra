# Sistema de diseño · ALFRA Grupo Inmobiliario

Los tokens y clases están en `app/globals.css`. Ningún componente escribe tamaños de texto a mano.

## Tipografía

Una sola familia: **Object Sans** (archivos locales en `app/fonts/`, cargados con `next/font/local` en `app/layout.tsx`). Sólo hay dos pesos, Regular y Heavy, con sus itálicas: un `font-weight` de 100–650 usa Regular y de 651–900 usa Heavy. Los alias `--font-display/sans/serif/mono` apuntan todos a ella.

| Clase | Uso | Tamaño (móvil → escritorio) | Familia |
| :-- | :-- | :-- | :-- |
| `.t-display` | Titular del home | 44 → 88 px | Object Sans Heavy |
| `.t-h1` | Titular de página (unidad, contacto) | 38 → 68 px | Object Sans Heavy |
| `.t-h2` | Titular de sección | 30 → 52 px | Object Sans Heavy |
| `.t-h3` | Titular de tarjeta / bloque | 20 → 24 px | Object Sans Heavy |
| `.t-h4` | Subtítulo menor | 17 → 18 px | Object Sans Regular |
| `.t-lead` | Entrada bajo un titular | 18 → 21 px | Object Sans Regular |
| `.t-body` | Texto corrido | 17 px | Object Sans Regular |
| `.t-small` | Texto de tarjeta, notas | 15 px | Object Sans Regular |
| `.t-eyebrow` | Antetítulo en versales, sin línea decorativa | 12 px, tracking 0.18em | Object Sans Regular |
| `.t-label` | Etiqueta de dato | 11 px, tracking 0.14em | Object Sans Regular |
| `.t-stat` | Cifras | 36 → 56 px | Object Sans Heavy, cifras tabulares |

El color sale del contexto: dentro de `.is-dark` todo se invierte solo (blancos y azul claro).

## Espaciado (ritmo vertical)

Base de 8 px (`--space-1` … `--space-12`), pero **los componentes no usan `--space-*` sueltos para separar piezas**: todo sale de estos tokens, definidos en `app/globals.css`, y se ajustan solos por tramo.

| Token | Uso | Escritorio | ≤860 | ≤560 |
|---|---|---|---|---|
| `--section-y` | arriba y abajo de **toda** sección (`.hf-section`), incluido el cierre | 112 | 80 | 64 |
| `--gap-block` | encabezado de sección → contenido | 64 | 48 | 40 |
| `--gap-columns` | entre columnas de un layout a dos (`.hf-grid-2`) | 64 | 48 | 40 |
| `--gap-actions` | texto → botones | 40 | 40 | 40 |
| `--gap-grid` | entre tarjetas (`.hf-grid-3/4`, presencia) | 24 | 24 | 24 |
| `--gap-stack` | entre bloques hermanos de texto | 24 | 24 | 24 |
| `--gap-title` | titular → entrada | 24 | 24 | 24 |
| `--gap-eyebrow` | antetítulo → titular | 16 | 16 | 16 |
| `--gap-item` | dentro de una tarjeta (etiqueta, título, texto) | 12 | 12 | 12 |
| `--pad-card` | relleno de tarjetas, paneles y formulario | 32 | 32 | 24 |

Heros: `--hero-top` = alto del header + 48 px (32 en móvil); `--hero-bottom` = 64 px (40 en móvil).

- **Heros a la altura de la pantalla** (`.hf-hero-pantalla`, inicio y las cuatro unidades): miden el alto visible, `clamp(--hero-min, 100svh, --hero-max)`, con el header transparente encima, así que el hero completo con sus botones cabe en pantalla. Tope de 960 px. El mínimo por tramo (600 px escritorio, 620 ≤1080, 640 ≤860, 760 ≤560, 800 ≤400, 830 ≤340) cabe el texto más largo de las cuatro unidades, por eso en una misma pantalla los cuatro heros miden lo mismo. Si un titular nuevo no cabe, se ajusta el relleno o se sube `--hero-min` del tramo, nunca la tipografía. Probado en 1920×1080, 1440×900, 1440×800, 1366×768, 1280×720 y móviles.
- El header no lleva `border`: su línea inferior es `box-shadow`, porque un borde suma 1 px al alto y deja una franja blanca sobre el hero.

## Logotipo y SEO

- Logotipo vigente: `ALFRA` con la escuadra verde, en `public/logos/alfra/` (webp sin fondo). El sitio usa `alfra-marca-*` (sin la línea «Agencia Inmobiliaria»); `alfra-logo-*` es el archivo completo. Registro en `lib/logos.ts`.
- Favicon e iconos: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`. Imagen para compartir: `app/opengraph-image.png` (y `twitter-image.png`).
- Metadatos: `metadataBase`, canónicas, Open Graph y Twitter por página; datos estructurados `Organization` en el layout; `app/sitemap.ts` y `app/robots.ts`. La URL pública sale de `NEXT_PUBLIC_SITE_URL` (`lib/sitio.ts`); hay que definirla en producción.

## Componentes base

- `SectionHeading`: antetítulo + titular + entrada. Es el único lugar donde se arma esa terna. `layout="split"` pone la entrada a la derecha del titular en escritorio (encabezado editorial).
- `HeroFoto`: panel oscuro con foto y/o video (`video`) y velo azul marino (heros, pilares, cierre). El video (`VideoFondo`) va silenciado y en bucle; si no existe o el usuario pide reducir movimiento, queda la foto.
- **Hero del inicio**: video de fondo en `public/video/hero-inicio.mp4` (ruta en `HERO_INICIO`, `lib/grupo.ts`). Para cambiarlo basta con subir el archivo con ese nombre.
- `UnidadCard`: tarjeta de unidad con foto (`completa` / `compacta`).
- `Button` (sube 2 px en hover), `Eyebrow`, `Stat`, `Icon`.
- `.hf-tile`: tarjeta de contenido sin enlace (servicios) con hover suave.

## Forma y movimiento

- **Esquinas rectas** en todo el sitio: todos los `--radius-*` valen 0 (botones, tarjetas, fotos, paneles, campos). Sólo los marcadores del mapa son redondos.
- Sombras: dobles y difusas en azul marino (`--shadow-xs`…`--shadow-xl`), con borde interior casi invisible; en hover el borde toma azul de marca.
- Aparición al hacer scroll: `data-reveal` en un elemento o `data-reveal-group` en una retícula (los hijos entran en cascada). Lo activa `components/site/Reveal.tsx`; sin JS o con *reduced motion* todo se ve sin animar.
- Heros: `.hf-enter` al cargar la página.

## Color

Azules y blancos, más un acento verde.

- **Verde de marca `#AFE517`** (`--verde`, hover `--verde-600`, texto encima `--verde-ink`): la escuadra del logotipo. Se usa con moderación y sólo sobre fondos oscuros: la segunda línea de los titulares a dos pesos sobre azul marino, el logotipo y la selección de texto. Los botones van en azul. Nunca como texto sobre fondo claro (contraste 1.4:1 sobre blanco); ahí el destacado de los titulares va en azul.
- **Titulares a dos pesos**: «parte fina | parte destacada» en los textos (ver `dosPesos` en `lib/tipografia.tsx` y `.t-dos-pesos`). La primera parte va en Object Sans Regular y la segunda en Heavy, en su propia línea y en el color destacado (`--c-destacado`: verde sobre oscuro, azul sobre claro).

- **Azul de marca `#2563EB`** (`--brand-700`): botones (también sobre fondos oscuros), enlaces, iconos, antetítulos y acentos. Hover `--brand-800` (`#1D4ED8`).
- **Azul claro** (`--brand-300` `#93B4FD`): antetítulos, etiquetas e iconos sobre fondos oscuros; halos del mapa.
- **Azul marino** (`--brand-950` `#0B1634`, `--neutral-900` `#0F1A33`): heros, pilares, cierre, pie y velo sobre fotos.
- **Blancos y grises azulados**: blanco `--neutral-0`, página `--neutral-50` `#F6F8FC`, alterno `--neutral-100` `#EDF1F8`, líneas `--neutral-200`, texto `--neutral-800`.

Contraste: blanco sobre `#2563EB` 5.2:1 y `#2563EB` sobre `#F6F8FC` ≈4.9:1, ambos AA. 

## Mapa de presencia

`components/empresa/MapaPresencia.tsx` usa MapLibre GL con el estilo Positron de OpenFreeMap: libre, sin API key ni costo (datos © OpenStreetMap). Se tiñe con la paleta al cargar. Las ubicaciones se editan en `lib/empresas.ts` → `presencia.ubicaciones` (nombre, zona, `[longitud, latitud]`, detalle). El worker del mapa se copia a `public/vendor/` antes de `dev` y `build`.
