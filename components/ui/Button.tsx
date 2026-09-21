"use client";

/* HIFRA Button — geometric, uppercase, wide-tracked. Square-edged by default
   to echo the architectural mark. */
import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "warm";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { padding: string; fontSize: string; height: string; tracking: string }> = {
  sm: { padding: "8px 16px", fontSize: "12px", height: "36px", tracking: "0.1em" },
  md: { padding: "12px 24px", fontSize: "13px", height: "46px", tracking: "0.1em" },
  lg: { padding: "16px 34px", fontSize: "14px", height: "56px", tracking: "0.12em" },
};

function variantStyle(variant: Variant): React.CSSProperties {
  switch (variant) {
    case "secondary":
      return { background: "transparent", color: "var(--text-strong)", boxShadow: "inset 0 0 0 1px var(--border-strong)" };
    case "ghost":
      return { background: "transparent", color: "var(--text-strong)", boxShadow: "none" };
    case "inverse":
      return { background: "var(--neutral-0)", color: "var(--neutral-900)", boxShadow: "none" };
    case "warm":
      return { background: "var(--wood-500)", color: "var(--neutral-0)", boxShadow: "none" };
    case "primary":
    default:
      return { background: "var(--green-700)", color: "var(--neutral-0)", boxShadow: "none" };
  }
}

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string | null;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  href = null,
  onClick,
  style = {},
  ...rest
}: ButtonProps) {
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant);
  const base: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: s.padding,
    minHeight: s.height,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "var(--radius-xs)",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...v,
    ...style,
  };

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (variant === "primary") e.currentTarget.style.background = "var(--green-800)";
    else if (variant === "warm") e.currentTarget.style.background = "var(--wood-600)";
    else e.currentTarget.style.background = "var(--neutral-100)";
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    e.currentTarget.style.background = (v.background as string) ?? "transparent";
  };

  const content = (
    <>
      {leftIcon && <span style={{ display: "inline-flex", marginLeft: "-2px" }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display: "inline-flex", marginRight: "-2px" }}>{rightIcon}</span>}
    </>
  );

  // Las rutas internas navegan con <Link> para conservar el prefetch;
  // los sitios de las empresas salen como <a> normal.
  const Tag: React.ElementType = href ? (href.startsWith("/") ? Link : "a") : "button";
  return (
    <Tag
      href={href || undefined}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {content}
    </Tag>
  );
}
