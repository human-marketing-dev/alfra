// Copia el worker de MapLibre a public/ para que el navegador lo cargue
// desde el mismo origen. El bundler no lo empaqueta por su cuenta.
// Corre solo antes de `dev` y `build` (scripts predev / prebuild).
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("public/vendor", { recursive: true });
copyFileSync("node_modules/maplibre-gl/dist/maplibre-gl-worker.mjs", "public/vendor/maplibre-gl-worker.mjs");
