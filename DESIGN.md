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

Heros: `--hero-top` = alto del header + `--section-y`; `--hero-bottom` = `--section-y`.

- **Hero de unidad con altura fija** (`.hf-hero-unidad`, `--hero-unidad-h`): las cuatro páginas de unidad miden exactamente lo mismo en cada ancho — 860 px (escritorio), 780 px (≤1080), 790 px (≤860), 920 px (≤560). La altura cabe el texto más largo de las cuatro; si un titular nuevo no cabe, se sube el valor del tramo.

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

Paleta solo de azules y blancos; no hay acentos cálidos.

- **Azul de marca `#2563EB`** (`--brand-700`): botones, enlaces, iconos, antetítulos y acentos. Hover `--brand-800` (`#1D4ED8`).
- **Azul claro** (`--brand-300` `#93B4FD`): antetítulos, etiquetas e iconos sobre fondos oscuros; halos del mapa.
- **Azul marino** (`--brand-950` `#0B1634`, `--neutral-900` `#0F1A33`): heros, pilares, cierre, pie y velo sobre fotos.
- **Blancos y grises azulados**: blanco `--neutral-0`, página `--neutral-50` `#F6F8FC`, alterno `--neutral-100` `#EDF1F8`, líneas `--neutral-200`, texto `--neutral-800`.

Contraste: blanco sobre `#2563EB` 5.2:1 y `#2563EB` sobre `#F6F8FC` ≈4.9:1, ambos AA. 

## Mapa de presencia

`components/empresa/MapaPresencia.tsx` usa MapLibre GL con el estilo Positron de OpenFreeMap: libre, sin API key ni costo (datos © OpenStreetMap). Se tiñe con la paleta al cargar. Las ubicaciones se editan en `lib/empresas.ts` → `presencia.ubicaciones` (nombre, zona, `[longitud, latitud]`, detalle). El worker del mapa se copia a `public/vendor/` antes de `dev` y `build`.
