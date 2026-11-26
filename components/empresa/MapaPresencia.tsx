"use client";

/* Mapa interactivo de presencia.

   MapLibre GL con el estilo «Positron» de OpenFreeMap: mapa vectorial
   libre, sin API key ni cuota de pago (datos © OpenStreetMap). Al
   cargar, el estilo se tiñe con la paleta blanca/azul del sistema.
   Los marcadores son elementos propios (`.hf-pin`) y la lista de al
   lado controla el mapa: al elegir una ubicación, el mapa vuela a ella.

   Si el mapa no puede cargar (sin WebGL o sin red), queda el panel de
   respaldo y la lista sigue sirviendo. */
import React from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Map as MapaLibre, Marker } from "maplibre-gl";
import type { Ubicacion } from "@/lib/empresas";
import { Icon } from "@/components/ui/Icon";

const ESTILO = "https://tiles.openfreemap.org/styles/positron";

/* Capas de Positron que se tiñen con la paleta. Si el estilo cambia de
   nombres, simplemente no se tiñen: nada se rompe. */
const TINTES: Array<[string, string, string]> = [
  ["background", "background-color", "#F6F8FC"],
  ["water", "fill-color", "#C9D8F2"],
  ["landcover_wood", "fill-color", "#E8EEF6"],
  ["park", "fill-color", "#E8EEF6"],
  ["landuse_residential", "fill-color", "#EEF2F8"],
];

export function MapaPresencia({ ubicaciones }: { ubicaciones: Ubicacion[] }) {
  const contenedor = React.useRef<HTMLDivElement>(null);
  const mapa = React.useRef<MapaLibre | null>(null);
  const pines = React.useRef<Marker[]>([]);
  const [activa, setActiva] = React.useState(0);
  const [estado, setEstado] = React.useState<"cargando" | "listo" | "error">("cargando");

  React.useEffect(() => {
    let vivo = true;
    let observador: ResizeObserver | null = null;
    (async () => {
      try {
        const { Map, Marker, NavigationControl, LngLatBounds, setWorkerUrl } = await import("maplibre-gl");
        // El worker se sirve desde public/ (scripts/copiar-worker-mapa.mjs).
        setWorkerUrl("/vendor/maplibre-gl-worker.mjs");
        if (!vivo || !contenedor.current) return;

        const m = new Map({
          container: contenedor.current,
          style: ESTILO,
          center: ubicaciones[0].coords,
          zoom: ubicaciones.length > 1 ? 9 : 10.5,
          cooperativeGestures: true,
          attributionControl: { compact: true },
        });
        mapa.current = m;
        // El contenedor cambia de tamaño con la retícula: el lienzo lo sigue.
        observador = new ResizeObserver(() => m.resize());
        observador.observe(contenedor.current);
        m.addControl(new NavigationControl({ showCompass: false }), "top-right");

        m.on("load", () => {
          for (const [capa, prop, color] of TINTES) {
            try {
              if (m.getLayer(capa)) m.setPaintProperty(capa, prop as Parameters<MapaLibre["setPaintProperty"]>[1], color);
            } catch {
              /* capa con otro tipo: se deja como viene */
            }
          }
          if (ubicaciones.length > 1) {
            const caja = new LngLatBounds();
            ubicaciones.forEach((u) => caja.extend(u.coords));
            m.fitBounds(caja, { padding: 80, maxZoom: 11, duration: 0 });
          }
          if (vivo) setEstado("listo");
        });
        m.on("error", () => {
          if (vivo && !m.isStyleLoaded()) setEstado("error");
        });

        pines.current = ubicaciones.map((u, i) => {
          const el = document.createElement("button");
          el.type = "button";
          el.className = "hf-pin";
          el.setAttribute("aria-label", `${u.nombre}, ${u.zona}`);
          el.innerHTML = `<span class="hf-pin-punto"></span><span class="hf-pin-nombre">${u.nombre}</span>`;
          el.addEventListener("click", () => setActiva(i));
          return new Marker({ element: el, anchor: "left", offset: [-9, 0] }).setLngLat(u.coords).addTo(m);
        });
      } catch {
        if (vivo) setEstado("error");
      }
    })();

    return () => {
      vivo = false;
      observador?.disconnect();
      pines.current.forEach((p) => p.remove());
      mapa.current?.remove();
      mapa.current = null;
    };
  }, [ubicaciones]);

  // La ubicación activa: marcador resaltado y vuelo del mapa.
  React.useEffect(() => {
    pines.current.forEach((p, i) => p.getElement().classList.toggle("is-activa", i === activa));
    const m = mapa.current;
    if (m && estado === "listo" && ubicaciones.length > 1) {
      m.flyTo({ center: ubicaciones[activa].coords, zoom: 10.5, speed: 0.9, essential: true });
    }
  }, [activa, estado, ubicaciones]);

  return (
    <div className="hf-presencia">
      <ol className="hf-presencia-lista">
        {ubicaciones.map((u, i) => (
          <li key={`${u.nombre}-${i}`}>
            <button
              type="button"
              className={`hf-presencia-item${i === activa ? " is-activa" : ""}`}
              onClick={() => setActiva(i)}
              aria-pressed={i === activa}
            >
              <span className="t-label t-accent">{String(i + 1).padStart(2, "0")}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, textAlign: "left" }}>
                <span className="t-h4">{u.nombre}</span>
                <span className="t-small t-muted">
                  {u.zona}
                  {u.detalle ? ` · ${u.detalle}` : ""}
                </span>
              </span>
              <Icon name="map-pin" size={18} color="var(--brand-700)" />
            </button>
          </li>
        ))}
      </ol>

      <div className="hf-presencia-mapa">
        <div ref={contenedor} style={{ position: "absolute", inset: 0 }} />
        {estado !== "listo" && (
          <div
            className="is-dark"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              background: "var(--brand-950)",
              opacity: estado === "cargando" ? 0.92 : 1,
              pointerEvents: estado === "error" ? "auto" : "none",
              transition: "opacity var(--dur-slow) var(--ease-out)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }} className="t-label">
              <Icon name="map-pin" size={18} color="var(--verde)" />
              {estado === "cargando" ? "Cargando mapa" : ubicaciones.map((u) => u.nombre).join(" · ")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
