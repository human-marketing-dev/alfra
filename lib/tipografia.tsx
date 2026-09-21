/* Convenciones de escritura del brief §8.3 aplicadas al render.

   Por ahora sólo una: «soft landing» va en cursivas en materiales en
   español. Se resuelve al pintar y no en los datos, para que
   `lib/empresas.ts` siga siendo texto plano editable. */
import React from "react";

const EN_CURSIVAS = /(soft landing)/gi;

export function conCursivas(texto: string): React.ReactNode {
  // Con grupo de captura, split intercala los fragmentos coincidentes en
  // los índices impares.
  const partes = texto.split(EN_CURSIVAS);
  if (partes.length === 1) return texto;

  return partes.map((parte, i) =>
    i % 2 === 1 ? <em key={i}>{parte}</em> : <React.Fragment key={i}>{parte}</React.Fragment>,
  );
}
