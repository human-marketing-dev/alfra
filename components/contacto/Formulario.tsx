"use client";

/* Formulario de la página de contacto.

   La entrega la resuelve `abrirCorreo` (lib/correo.ts). Mientras
   `CONTACTO.correo` siga marcado «confirmar» en lib/grupo.ts, el
   formulario no tiene destino y el envío queda deshabilitado. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icon } from "@/components/ui/Icon";
import { EMPRESAS } from "@/lib/empresas";
import { CONTACTO } from "@/lib/grupo";
import { abrirCorreo } from "@/lib/correo";

/** «confirmar dominio» — el dominio del sitio, para el asunto del correo. */
const DOMINIO = "confirmar dominio";

const CAMPOS = [
  ["nombre", "Nombre"],
  ["correo", "Correo"],
  ["telefono", "Teléfono"],
  ["empresa", "Empresa"],
  ["interes", "Qué necesita"],
  ["mensaje", "Mensaje"],
] as const;

const OPCIONES = [
  { value: "", label: "Aún no lo sé — oriéntenme" },
  ...EMPRESAS.map((e) => ({ value: e.slug, label: `${e.frente} — ${e.nombre}` })),
];

export function Formulario() {
  const [enviado, setEnviado] = React.useState(false);
  const destino = CONTACTO.correo;

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!destino) return;

    const datos = new FormData(e.currentTarget);
    const linea = (clave: string) => {
      const slug = String(datos.get(clave) ?? "").trim();
      if (clave !== "interes") return slug;
      return OPCIONES.find((o) => o.value === slug)?.label ?? "";
    };

    abrirCorreo(
      destino,
      `Nueva solicitud desde ${DOMINIO} — ${linea("nombre") || "sin nombre"}`,
      CAMPOS.map(([clave, etiqueta]) => [etiqueta, linea(clave)] as [string, string]),
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div
        style={{
          background: "var(--surface)",
          boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-md)",
          borderRadius: "var(--radius-sm)",
          padding: "var(--space-7)",
          minHeight: "420px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "var(--space-4)",
        }}
      >
        <span
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "999px",
            background: "var(--green-50)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="check" size={22} color="var(--green-700)" />
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "26px",
            letterSpacing: "-0.02em",
            color: "var(--text-strong)",
            margin: 0,
          }}
        >
          Gracias.
        </h2>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
          Abrimos tu programa de correo con la solicitud lista. Envíala y te conectamos con la empresa del grupo que
          resuelve tu proyecto.
        </p>
        <Button variant="secondary" size="md" onClick={() => setEnviado(false)}>
          Escribir otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={enviar}
      style={{
        background: "var(--surface)",
        boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-md)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-7)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
      }}
    >
      <Input label="Nombre" name="nombre" placeholder="Tu nombre completo" autoComplete="name" required />
      <Input label="Correo" name="correo" type="email" placeholder="tu@correo.com" autoComplete="email" required />
      <div className="hf-grid-2" style={{ gap: "var(--space-4)" }}>
        <Input label="Teléfono" name="telefono" type="tel" placeholder="Opcional" autoComplete="tel" />
        <Input label="Empresa" name="empresa" placeholder="Opcional" autoComplete="organization" />
      </div>
      <Select label="Qué necesitas" name="interes" options={OPCIONES} />
      <Input label="Mensaje" name="mensaje" as="textarea" rows={5} placeholder="Cuéntanos qué proyecto tienes en mente…" />

      <Button
        variant="primary"
        size="lg"
        fullWidth
        disabled={!destino}
        rightIcon={<Icon name="arrow-right" size={16} />}
        style={{ marginTop: "var(--space-2)" }}
      >
        Enviar solicitud
      </Button>

      {!destino && (
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "var(--text-muted)" }}>
          El buzón de contacto del grupo está por confirmar. En cuanto se defina, el envío queda activo.
        </span>
      )}
    </form>
  );
}
