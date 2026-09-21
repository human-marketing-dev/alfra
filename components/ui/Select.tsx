"use client";

/* ALFRA Select — misma caja de línea fina y etiqueta en versalitas que
   el Input, con la flecha del sistema de iconos. */
import React from "react";
import { Icon } from "@/components/ui/Icon";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  id?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
  options: SelectOption[];
  containerStyle?: React.CSSProperties;
}

export function Select({ label, hint, id, options, containerStyle = {}, ...rest }: SelectProps) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `sel-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);

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

      <div style={{ position: "relative" }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "16px",
            color: "var(--text-strong)",
            background: "var(--surface)",
            border: "none",
            boxShadow: `inset 0 0 0 1px ${focus ? "var(--focus-ring)" : "var(--border-line)"}`,
            borderRadius: "var(--radius-xs)",
            padding: "0 42px 0 14px",
            height: "48px",
            outline: "none",
            width: "100%",
            boxSizing: "border-box",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: "pointer",
            transition: "box-shadow var(--dur-fast) var(--ease-out)",
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          size={17}
          color="var(--text-muted)"
          style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        />
      </div>

      {hint && (
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "var(--text-muted)" }}>{hint}</span>
      )}
    </div>
  );
}
