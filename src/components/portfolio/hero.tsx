"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { ctas, owner } from "@/data/portfolio";

export function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const nextScrollY = window.scrollY;
      setScrollY(nextScrollY);
      setIsScrolled(nextScrollY > 24);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const parallaxY = Math.min(scrollY * 0.14, 54);
  const emailHref = `mailto:${owner.email}?subject=Web%20app%20project%20inquiry`;

  return (
    <section className="overflow-clip bg-[#E0F0F2] text-[#0F172A]">
      <header className="fixed inset-x-0 top-0 z-50 pt-7 text-center transition-transform duration-300 md:pt-14">
        <div className="mx-auto flex max-w-[1650px] justify-center px-5 sm:px-8 lg:px-[7.5vw]">
          <button
            className={`relative rounded-md text-base font-bold leading-none transition active:scale-[0.984] ${
              isScrolled
                ? "px-4 py-3 shadow-[0_18px_70px_rgba(15,23,42,0.14),inset_0_1px_10px_rgba(255,255,255,0.4)] backdrop-blur-xl"
                : ""
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              backgroundColor: isScrolled ? "rgba(224, 240, 242, 0.74)" : "transparent",
            }}
            type="button"
          >
            Isaac Otagada
          </button>
        </div>
      </header>

      <div className="min-h-svh border-b border-[#0F172A]/20 py-[7.5rem] sm:py-32 md:flex md:items-center md:py-40">
        <div className="mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-[7.5vw]">
          <div
            className="max-w-3xl transition-transform duration-75 ease-linear will-change-transform md:max-w-none"
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          >
            <h1 className="max-w-[10ch] text-[clamp(2.65rem,15vw,4.7rem)] font-bold leading-[1.05] text-balance md:max-w-none md:text-[clamp(4.5rem,9.2vw,9.8rem)] md:leading-[0.97] md:tracking-[-0.025em]">
              I build, connect, secure, and deploy full-stack web applications.
            </h1>
            <p className="mt-8 max-w-full text-[clamp(1.1rem,5vw,1.55rem)] font-bold leading-tight md:max-w-2xl md:text-[clamp(1.35rem,2.2vw,2.25rem)] xl:ml-[calc(50%-4.3rem)]">
              {owner.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#334155] text-pretty md:max-w-4xl md:text-[clamp(1.05rem,1.4vw,1.35rem)] md:leading-8 xl:ml-[calc(50%-4.3rem)]">
              {owner.pitch}
            </p>

            <div
              aria-label="Contact links"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-[clamp(1.05rem,5vw,1.5rem)] font-semibold leading-tight sm:text-2xl xl:ml-[calc(50%-4.3rem)]"
            >
              {ctas
                .filter((cta) => cta.label !== "Call Me")
                .map((cta) => {
                return (
                  <a
                    className="group relative inline-flex items-center gap-2 rounded-md px-0 py-1 text-[#0F172A] transition active:scale-[0.984]"
                    href={cta.label === "Email Me" ? emailHref : cta.href}
                    key={cta.label}
                    onClick={
                      cta.label === "Email Me"
                        ? (event) => {
                            event.preventDefault();
                            window.location.href = emailHref;
                          }
                        : undefined
                    }
                    rel={cta.external ? "noreferrer" : undefined}
                    target={cta.external ? "_blank" : undefined}
                  >
                    <span className="relative">
                      {cta.label}
                      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-current transition-transform duration-200 ease-out group-hover:origin-right group-hover:scale-x-0" />
                    </span>
                    {cta.external ? (
                      <ArrowUpRight className="mt-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-5" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
