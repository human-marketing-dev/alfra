"use client";

/* F&S — formulario de contacto de su página. En inglés, con los campos
   que fija su brief (§10). La entrega va al buzón propio de F&S. */
import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icon } from "@/components/ui/Icon";
import { FS, TIPOS_PROYECTO } from "@/lib/fs";
import { abrirCorreo } from "@/lib/correo";

const CAMPOS = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["company", "Company"],
  ["country", "Country of origin"],
  ["email", "Email"],
  ["project", "Type of project"],
  ["message", "Project details"],
] as const;

const OPCIONES = [
  { value: "", label: "Select one" },
  ...TIPOS_PROYECTO.map((t) => ({ value: t, label: t })),
];

export function InquiryForm() {
  const [sent, setSent] = React.useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "");

    abrirCorreo(
      FS.correo,
      `New inquiry — ${value("company") || value("firstName") || "website"}`,
      CAMPOS.map(([key, label]) => [label, value(key)] as [string, string]),
    );
    setSent(true);
  }

  const card: React.CSSProperties = {
    background: "var(--surface)",
    boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-md)",
    borderRadius: "var(--radius-sm)",
    padding: "var(--space-7)",
  };

  if (sent) {
    return (
      <div
        style={{
          ...card,
          minHeight: "440px",
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
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "26px",
            letterSpacing: "-0.02em",
            color: "var(--text-strong)",
            margin: 0,
          }}
        >
          Thank you.
        </h3>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
          We opened your email client with the inquiry ready to send. Our team responds within 24 hours with an initial
          assessment and next steps.
        </p>
        <Button variant="secondary" size="md" onClick={() => setSent(false)}>
          Write another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ ...card, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <div className="hf-grid-2" style={{ gap: "var(--space-4)" }}>
        <Input label="First name" name="firstName" placeholder="John" autoComplete="given-name" required />
        <Input label="Last name" name="lastName" placeholder="Smith" autoComplete="family-name" required />
      </div>
      <div className="hf-grid-2" style={{ gap: "var(--space-4)" }}>
        <Input label="Company" name="company" placeholder="Company name" autoComplete="organization" />
        <Input label="Country of origin" name="country" placeholder="USA, Germany, Korea…" />
      </div>
      <Input label="Email" name="email" type="email" placeholder="john@company.com" autoComplete="email" required />
      <Select label="Type of project" name="project" options={OPCIONES} />
      <Input
        label="Tell us about your project"
        name="message"
        as="textarea"
        rows={5}
        placeholder="Size requirements, timeline, location preferences, any specific needs…"
      />
      <Button
        variant="primary"
        size="lg"
        fullWidth
        rightIcon={<Icon name="arrow-right" size={16} />}
        style={{ marginTop: "var(--space-2)" }}
      >
        Send inquiry
      </Button>
    </form>
  );
}
