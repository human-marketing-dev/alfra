/* Convenciones de escritura del brief §8.3 aplicadas al render.

   «family office» (brief §7.3) y «soft landing» van en cursivas en materiales en
   español. Se resuelve al pintar y no en los datos, para que
   `lib/empresas.ts` siga siendo texto plano editable. */
import React from "react";

const EN_CURSIVAS = /(family offices?|soft landing)/gi;

export function conCursivas(texto: string): React.ReactNode {
  // Con grupo de captura, split intercala los fragmentos coincidentes en
  // los índices impares.
  const partes = texto.split(EN_CURSIVAS);
  if (partes.length === 1) return texto;

  return partes.map((parte, i) =>
    i % 2 === 1 ? <em key={i}>{parte}</em> : <React.Fragment key={i}>{parte}</React.Fragment>,
  );
}

/* Titulares a dos pesos: «primera parte | segunda parte».
   Lo que va antes de « | » se pinta en Regular; lo que va después, en
   Heavy, en una línea propia y en el color destacado (verde sobre
   fondos oscuros, azul sobre claros). Sin « | » el titular sale entero
   en Heavy, como siempre. Ver `.t-dos-pesos` en globals.css. */
const SEPARADOR = /\s*\|\s*/;

export function tieneDosPesos(texto: string): boolean {
  return SEPARADOR.test(texto);
}

export function dosPesos(texto: string): React.ReactNode {
  const [fino, ...resto] = texto.split(SEPARADOR);
  if (resto.length === 0) return conCursivas(texto);
  return (
    <>
      {conCursivas(fino)} <strong>{conCursivas(resto.join(" "))}</strong>
    </>
  );
}

/** El titular sin la marca « | », para metadatos y textos planos. */
export function textoPlano(texto: string): string {
  return texto.split(SEPARADOR).join(" ");
}
