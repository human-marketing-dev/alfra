"use client";

/* Header pegajoso: transparente sobre el hero oscuro, se vuelve barra
   crema al hacer scroll. El contenido va dentro de .hf-container, así que
   se alinea al mismo eje de 1450px que el resto del sitio.

   «Empresas» abre un panel con todas: se despliega al pasar el cursor
   y también con teclado (clic o Enter sobre el disparador, Escape para
   cerrar). Debajo de 900px todo se pliega en el menú, donde «Empresas»
   se abre como acordeón. */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoGrupo } from "@/components/site/Logo";
import { EMPRESAS, enLetras, type Empresa } from "@/lib/empresas";
import { GRUPO } from "@/lib/grupo";

const ENLACE: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  transition: "color var(--dur-base) var(--ease-out)",
};

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [empresas, setEmpresas] = React.useState(false);
  const [empresasMovil, setEmpresasMovil] = React.useState(false);
  const cierre = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setEmpresas(false);
      setMenu(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cerrarTodo = () => {
    if (cierre.current) clearTimeout(cierre.current);
    setMenu(false);
    setEmpresas(false);
    setEmpresasMovil(false);
  };

  const abrirEmpresas = () => {
    if (cierre.current) clearTimeout(cierre.current);
    setEmpresas(true);
  };

  // Pequeña demora para poder cruzar el hueco entre disparador y panel.
  const cerrarEmpresas = () => {
    if (cierre.current) clearTimeout(cierre.current);
    cierre.current = setTimeout(() => setEmpresas(false), 120);
  };

  const onDark = !scrolled && !menu;
  const color = onDark ? "rgba(244,240,232,0.92)" : "var(--text-body)";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled || menu ? "rgba(251,249,244,0.88)" : "transparent",
        backdropFilter: scrolled || menu ? "saturate(120%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled || menu ? "saturate(120%) blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled || menu ? "var(--border-hair)" : "transparent"}`,
        transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        className="hf-container"
        style={{
          height: scrolled ? "68px" : "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-5)",
          transition: "height var(--dur-base) var(--ease-out)",
        }}
      >
        <Link
          href="/"
          aria-label={GRUPO.nombre}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          {/* TODO: logo pendiente — sin archivo del grupo, la firma es
              tipográfica y el paso a barra crema se cruza por color. */}
          <LogoGrupo
            alto={30}
            style={{
              color: onDark ? "var(--neutral-0)" : "var(--text-strong)",
              transition: "color var(--dur-base) var(--ease-out)",
            }}
          />
        </Link>

        <nav className="hf-nav-desktop" style={{ display: "flex", alignItems: "center", gap: "var(--space-7)" }}>
          <Link href="/#grupo" onClick={cerrarTodo} style={{ ...ENLACE, color }}>
            El grupo
          </Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={abrirEmpresas}
            onMouseLeave={cerrarEmpresas}
            onFocus={abrirEmpresas}
            onBlur={cerrarEmpresas}
          >
            <button
              type="button"
              aria-expanded={empresas}
              aria-controls="menu-empresas"
              onClick={() => setEmpresas((v) => !v)}
              style={{ ...ENLACE, color, display: "inline-flex", alignItems: "center", gap: "7px" }}
            >
              Empresas
              <Icon
                name="chevron-down"
                size={14}
                style={{
                  transform: empresas ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform var(--dur-base) var(--ease-out)",
                }}
              />
            </button>

            {empresas && (
              <div id="menu-empresas" style={{ position: "absolute", top: "100%", right: 0, paddingTop: "14px" }}>
                <div
                  style={{
                    width: "min(92vw, 620px)",
                    background: "var(--surface)",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "inset 0 0 0 1px var(--border-hair), var(--shadow-lg)",
                    padding: "var(--space-4)",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "2px",
                  }}
                >
                  {EMPRESAS.map((e) => (
                    <EnlaceEmpresa key={e.slug} empresa={e} onNavigate={cerrarTodo} />
                  ))}

                  <Link
                    href="/#empresas"
                    onClick={cerrarTodo}
                    style={{
                      gridColumn: "1 / -1",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "var(--space-2)",
                      padding: "var(--space-4) var(--space-3) var(--space-2)",
                      borderTop: "1px solid var(--border-hair)",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-brand)",
                      textDecoration: "none",
                    }}
                  >
                    Ver las {enLetras(EMPRESAS.length)} empresas
                    <Icon name="arrow-right" size={15} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contacto" onClick={cerrarTodo} style={{ ...ENLACE, color }}>
            Contacto
          </Link>

          <Button
            size="sm"
            variant={onDark ? "inverse" : "primary"}
            href="/contacto"
            onClick={cerrarTodo}
            rightIcon={<Icon name="arrow-right" size={14} />}
          >
            Hablar con el grupo
          </Button>
        </nav>

        <button
          className="hf-nav-mobile"
          type="button"
          onClick={() => setMenu((v) => !v)}
          aria-expanded={menu}
          aria-label={menu ? "Cerrar menú" : "Abrir menú"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            marginRight: "-10px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: onDark ? "var(--neutral-0)" : "var(--text-strong)",
          }}
        >
          <Icon name={menu ? "x" : "menu"} size={22} />
        </button>
      </div>

      {menu && (
        <div
          className="hf-nav-mobile"
          style={{ background: "var(--neutral-0)", borderTop: "1px solid var(--border-hair)", boxShadow: "var(--shadow-md)" }}
        >
          <div
            className="hf-container"
            style={{ paddingBlock: "var(--space-5) var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
          >
            <Link href="/#grupo" onClick={cerrarTodo} style={{ ...ENLACE, color: "var(--text-body)" }}>
              El grupo
            </Link>

            <button
              type="button"
              aria-expanded={empresasMovil}
              onClick={() => setEmpresasMovil((v) => !v)}
              style={{
                ...ENLACE,
                color: "var(--text-body)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              Empresas
              <Icon
                name="chevron-down"
                size={16}
                style={{
                  transform: empresasMovil ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform var(--dur-base) var(--ease-out)",
                }}
              />
            </button>

            {empresasMovil && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  paddingLeft: "var(--space-4)",
                  borderLeft: "1px solid var(--border-hair)",
                }}
              >
                {EMPRESAS.map((e) => (
                  <EnlaceEmpresa key={e.slug} empresa={e} onNavigate={cerrarTodo} />
                ))}
              </div>
            )}

            <Link href="/contacto" onClick={cerrarTodo} style={{ ...ENLACE, color: "var(--text-body)" }}>
              Contacto
            </Link>

            <Button size="sm" variant="primary" href="/contacto" onClick={cerrarTodo} rightIcon={<Icon name="arrow-right" size={14} />}>
              Hablar con el grupo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function EnlaceEmpresa({ empresa, onNavigate }: { empresa: Empresa; onNavigate: () => void }) {
  const [hover, setHover] = React.useState(false);

  return (
    <Link
      href={`/empresas/${empresa.slug}`}
      onClick={onNavigate}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "var(--space-3)",
        borderRadius: "var(--radius-xs)",
        background: hover ? "var(--neutral-50)" : "transparent",
        textDecoration: "none",
        transition: "background var(--dur-fast) var(--ease-out)",
      }}
    >
      <Icon name={empresa.icono} size={19} color="var(--green-700)" stroke={1.4} />
      <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "-0.005em",
            color: "var(--text-strong)",
            lineHeight: 1.25,
          }}
        >
          {empresa.nombre}
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-accent)",
            lineHeight: 1.2,
          }}
        >
          {empresa.frente}
        </span>
      </span>
    </Link>
  );
}
