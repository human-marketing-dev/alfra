# Sistema de diseño · ALFRA Grupo Inmobiliario

Los tokens y clases están en `app/globals.css`. Ningún componente escribe tamaños de texto a mano.

## Tipografía

| Clase | Uso | Tamaño (móvil → escritorio) | Familia |
| :-- | :-- | :-- | :-- |
| `.t-display` | Titular del home | 44 → 88 px | Montserrat 800 |
| `.t-h1` | Titular de página (unidad, contacto) | 38 → 68 px | Montserrat 800 |
| `.t-h2` | Titular de sección | 30 → 52 px | Montserrat 700 |
| `.t-h3` | Titular de tarjeta / bloque | 20 → 24 px | Montserrat 700 |
| `.t-h4` | Subtítulo menor | 17 → 18 px | Montserrat 600 |
| `.t-lead` | Entrada bajo un titular | 18 → 21 px | Spectral |
| `.t-body` | Texto corrido | 17 px | Spectral |
| `.t-small` | Texto de tarjeta, notas | 15 px | Spectral |
| `.t-eyebrow` | Antetítulo en versales, sin línea decorativa | 12 px, tracking 0.18em | Montserrat 600 |
| `.t-label` | Etiqueta de dato | 11 px, tracking 0.14em | Montserrat 600 |
| `.t-stat` | Cifras | 36 → 56 px | IBM Plex Mono |

El color sale del contexto: dentro de `.is-dark` todo se invierte solo (blancos y azul claro).

## Espaciado

Base de 8 px (`--space-1` … `--space-12`). Saltos fijos:

- Antetítulo → titular: `--gap-eyebrow` (16 px)
- Titular → entrada: `--gap-title` (24 px)
- Encabezado de sección → contenido: `--gap-block` (48 px; 40 en móvil)
- Ritmo de sección: `--section-y` (128 px; 80 en tablet; 64 en móvil)
- Heros: `--hero-top` / `--hero-bottom`
- **Hero de unidad con altura fija** (`.hf-hero-unidad`, `--hero-unidad-h`): las cuatro páginas de unidad miden exactamente lo mismo en cada ancho — 860 px (escritorio), 780 px (≤1080), 790 px (≤860), 920 px (≤560). La altura cabe el texto más largo de las cuatro; si un titular nuevo no cabe, se sube el valor del tramo.

## Componentes base

- `SectionHeading`: antetítulo + titular + entrada. Es el único lugar donde se arma esa terna. `layout="split"` pone la entrada a la derecha del titular en escritorio (encabezado editorial).
- `HeroFoto`: panel oscuro con foto y velo azul marino (heros, pilares, cierre).
- `UnidadCard`: tarjeta de unidad con foto (`completa` / `compacta`).
- `Button` (forma de píldora, sube 2 px en hover), `Eyebrow`, `Stat`, `Icon`.
- `.hf-tile`: tarjeta de contenido sin enlace (servicios) con hover suave.

## Forma y movimiento

- Radios: `--radius-xs` 8 px (iconos, campos), `--radius-sm` 14 px (tarjetas, imágenes, paneles), `--radius-md` 20 px (fotos grandes), `--radius-pill` (botones). En `UnidadCard` la foto va inserta con 8 px de margen.
- Sombras: dobles y difusas en azul marino (`--shadow-xs`…`--shadow-xl`), con borde interior casi invisible; en hover el borde toma azul de marca.
- Aparición al hacer scroll: `data-reveal` en un elemento o `data-reveal-group` en una retícula (los hijos entran en cascada). Lo activa `components/site/Reveal.tsx`; sin JS o con *reduced motion* todo se ve sin animar.
- Heros: `.hf-enter` al cargar la página.

## Color

Paleta solo de azules y blancos; no hay acentos cálidos.

- **Azul de marca `#2563EB`** (`--brand-700`): botones, enlaces, iconos, antetítulos y acentos. Hover `--brand-800` (`#1D4ED8`).
- **Azul claro** (`--brand-300` `#93B4FD`): antetítulos, etiquetas e iconos sobre fondos oscuros; halos del mapa.
- **Azul marino** (`--brand-950` `#0B1634`, `--neutral-900` `#0F1A33`): heros, pilares, cierre, pie y velo sobre fotos.
- **Blancos y grises azulados**: blanco `--neutral-0`, página `--neutral-50` `#F6F8FC`, alterno `--neutral-100` `#EDF1F8`, líneas `--neutral-200`, texto `--neutral-800`.

Contraste: blanco sobre `#2563EB` 5.2:1 y `#2563EB` sobre `#F6F8FC` ≈4.9:1, ambos AA. 

## Mapa de presencia

`components/empresa/MapaPresencia.tsx` usa MapLibre GL con el estilo Positron de OpenFreeMap: libre, sin API key ni costo (datos © OpenStreetMap). Se tiñe con la paleta al cargar. Las ubicaciones se editan en `lib/empresas.ts` → `presencia.ubicaciones` (nombre, zona, `[longitud, latitud]`, detalle). El worker del mapa se copia a `public/vendor/` antes de `dev` y `build`.
