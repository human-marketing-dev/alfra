"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Aparición suave al hacer scroll. Añade `is-visible` a cada elemento con
 * `data-reveal` cuando entra al viewport. Sin JS, o con reduced-motion,
 * todo se ve desde el inicio (ver `.js-reveal` en globals.css).
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js-reveal");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible), [data-reveal-group]:not(.is-visible)"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
