/* HIFRA Badge — a small status / category label. Wide-tracked uppercase,
   minimal radius. Use `dot` for a status indicator. */
import React from "react";

type Tone = "neutral" | "brand" | "forest" | "wood" | "charcoal" | "outline";

const TONES: Record<Tone, { bg: string; fg: string; line: string }> = {
  neutral: { bg: "var(--neutral-100)", fg: "var(--neutral-700)", line: "var(--border-line)" },
  brand: { bg: "var(--green-50)", fg: "var(--green-700)", line: "var(--green-200)" },
  forest: { bg: "var(--green-700)", fg: "var(--neutral-0)", line: "transparent" },
  wood: { bg: "var(--wood-100)", fg: "var(--wood-700)", line: "var(--wood-200)" },
  charcoal: { bg: "var(--neutral-900)", fg: "var(--neutral-50)", line: "transparent" },
  outline: { bg: "transparent", fg: "var(--text-strong)", line: "var(--border-strong)" },
};

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: Tone;
  size?: "sm" | "md";
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge({ children, tone = "neutral", size = "md", dot = false, style = {} }: BadgeProps) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === "sm" ? "3px 8px" : "5px 11px";
  const fs = size === "sm" ? "10px" : "11px";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: pad,
        background: t.bg,
        color: t.fg,
        boxShadow: t.line === "transparent" ? "none" : `inset 0 0 0 1px ${t.line}`,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: fs,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        borderRadius: "var(--radius-xs)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && (
        <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "currentColor", opacity: 0.85 }} />
      )}
      {children}
    </span>
  );
}
