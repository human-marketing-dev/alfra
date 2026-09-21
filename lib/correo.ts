/* Entrega de formularios por correo.

   Mientras no haya backend, una solicitud se convierte en un correo
   prellenado al buzón que corresponda. Es el único camino que no pierde
   un prospecto: nada se guarda en el servidor y nada se descarta en
   silencio. Sustituir el cuerpo de esta función por un `fetch` a un
   endpoint cambia el comportamiento de todos los formularios del sitio. */

export function abrirCorreo(destino: string, asunto: string, campos: Array<[string, string]>) {
  const cuerpo = campos.map(([etiqueta, valor]) => `${etiqueta}: ${valor.trim() || "—"}`).join("\n");
  window.location.href = `mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
