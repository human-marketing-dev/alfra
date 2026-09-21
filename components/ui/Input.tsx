"use client";

/* ALFRA Input — a hairline-bordered field with an uppercase label. Square
   edges; focus brings a wood-tone ring. Pass `as="textarea"` for multiline. */
import React from "react";

export interface InputProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  as?: "input" | "textarea";
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  rows?: number;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export function Input({
  label = null,
  hint = null,
  error = null,
  as = "input",
  id,
  style = {},
  containerStyle = {},
  ...rest
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const Tag: React.ElementType = as;
  const fieldId = id || (label ? `fld-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const ring = error ? "var(--critical)" : focus ? "var(--focus-ring)" : "var(--border-line)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", ...containerStyle }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </label>
      )}
      <Tag
        id={fieldId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={as === "textarea" ? 4 : undefined}
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "16px",
          color: "var(--text-strong)",
          background: "var(--surface)",
          border: "none",
          boxShadow: `inset 0 0 0 1px ${ring}`,
          borderRadius: "var(--radius-xs)",
          padding: as === "textarea" ? "12px 14px" : "0 14px",
          height: as === "textarea" ? "auto" : "48px",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          resize: as === "textarea" ? "vertical" : undefined,
          transition: "box-shadow var(--dur-fast) var(--ease-out)",
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: error ? "var(--critical)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
