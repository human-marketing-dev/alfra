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

El color sale del contexto: dentro de `.is-dark` todo se invierte solo (blanco, crema y madera).

## Espaciado

Base de 8 px (`--space-1` … `--space-12`). Saltos fijos:

- Antetítulo → titular: `--gap-eyebrow` (16 px)
- Titular → entrada: `--gap-title` (24 px)
- Encabezado de sección → contenido: `--gap-block` (48 px; 40 en móvil)
- Ritmo de sección: `--section-y` (96 px; 80 en tablet; 64 en móvil)
- Heros: `--hero-top` / `--hero-bottom`

## Componentes base

- `SectionHeading`: antetítulo + titular + entrada. Es el único lugar donde se arma esa terna.
- `HeroFoto`: panel oscuro con foto y velo verde (heros, pilares, cierre).
- `UnidadCard`: tarjeta de unidad con foto (`completa` / `compacta`).
- `Button`, `Eyebrow`, `Stat`, `Icon`.

## Color

Verde bosque (`--green-700`) como primario, madera (`--wood-*`) como acento, neutros cálidos (crema `--neutral-50`, carbón `--neutral-900`). Radios mínimos (2–4 px), sombras bajas.
