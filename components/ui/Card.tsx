"use client";

/* ALFRA Card — a hairline-bordered surface with optional media. The default
   has a tight radius and a soft warm shadow; `interactive` adds a hover lift.
   Compose project tiles by passing a `media` image and children. */
import React from "react";
import Link from "next/link";

export interface CardProps {
  children?: React.ReactNode;
  media?: string | null;
  mediaAlt?: string;
  mediaHeight?: number;
  interactive?: boolean;
  bordered?: boolean;
  padding?: string;
  tone?: "surface" | "forest" | "charcoal" | "cream";
  href?: string | null;
  style?: React.CSSProperties;
}

export function Card({
  children,
  media = null,
  mediaAlt = "",
  mediaHeight = 220,
  interactive = false,
  bordered = true,
  padding = "var(--space-6)",
  tone = "surface",
  href = null,
  style = {},
}: CardProps) {
  const bg =
    tone === "forest"
      ? "var(--green-700)"
      : tone === "charcoal"
        ? "var(--neutral-900)"
        : tone === "cream"
          ? "var(--neutral-50)"
          : "var(--surface)";

  const [hover, setHover] = React.useState(false);

  const base: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: bg,
    borderRadius: "var(--radius-sm)",
    boxShadow: bordered
      ? `inset 0 0 0 1px var(--border-hair), ${interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)"}`
      : interactive && hover
        ? "var(--shadow-lg)"
        : "var(--shadow-sm)",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    transform: interactive && hover ? "translateY(-4px)" : "translateY(0)",
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    cursor: interactive && href ? "pointer" : "default",
    ...style,
  };

  const Tag: React.ElementType = href ? (href.startsWith("/") ? Link : "a") : "div";

  return (
    <Tag
      href={href || undefined}
      style={base}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
    >
      {media && (
        <div style={{ height: mediaHeight, overflow: "hidden", flex: "none", background: "var(--neutral-200)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media}
            alt={mediaAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: interactive && hover ? "scale(1.04)" : "scale(1)",
              transition: "transform var(--dur-slow) var(--ease-out)",
            }}
          />
        </div>
      )}
      <div style={{ padding, display: "flex", flexDirection: "column", flex: 1 }}>{children}</div>
    </Tag>
  );
}
