"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { publicProjects } from "@/data/portfolio";

export function FeaturedPublicWork() {
  const [showDetails, setShowDetails] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-[#E0F0F2] px-5 py-20 text-[#334155] sm:px-8 lg:px-10" id="work">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
            Featured public work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            Verifiable systems clients can inspect
          </h2>
          <p className="mt-6 w-full text-base leading-7 text-[#334155] sm:text-lg">
            Public projects are ordered around full-stack complexity: portals,
            dashboards, application flows, AI knowledge systems, verification,
            and deployment.
          </p>
        </div>

        <label className="mx-auto mt-10 flex w-fit cursor-pointer items-center gap-4 text-sm font-semibold text-[#0F172A]">
          <span className={showDetails ? "text-[#64748B]" : "text-[#0F172A]"}>
            Simple
          </span>
          <span className="relative inline-flex h-7 w-14 items-center rounded-full border border-[#0F172A]/20 bg-[#E0F0F2] shadow-[inset_0_1px_8px_rgba(15,23,42,0.12),0_1px_0_rgba(255,255,255,0.7)]">
            <input
              checked={showDetails}
              className="sr-only"
              onChange={(event) => setShowDetails(event.target.checked)}
              type="checkbox"
            />
            <span
              className={`ml-1 size-5 rounded-full bg-[#0F172A] transition-transform duration-200 ${
                showDetails ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </span>
          <span className={showDetails ? "text-[#0F172A]" : "text-[#64748B]"}>
            Detailed
          </span>
        </label>

        <ol className="mx-auto mt-12 max-w-6xl">
          {publicProjects.map((project, index) => {
            const isFadedPreview = index === 3;
            const isHiddenUntilExpanded = index > 3;
            const shouldCollapse = isHiddenUntilExpanded && !showAll;
            const shouldFade = isFadedPreview && !showAll;

            return (
              <li
                className={`grid transition-[grid-template-rows] duration-300 ${
                  shouldCollapse ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                }`}
                key={project.title}
              >
                <article className="overflow-hidden">
                  <div
                    className={`relative grid gap-5 pb-12 transition-colors duration-300 md:grid-cols-[6rem_2rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[7rem_2rem_minmax(0,1fr)] ${
                      shouldFade ? "text-[#64748B]" : "text-[#334155]"
                    }`}
                  >
                    <div className="hidden pt-1 text-right text-sm font-semibold text-[#64748B] md:block">
                      0{index + 1}
                    </div>

                    <div className="absolute bottom-0 left-0 top-1 md:relative md:left-auto md:top-auto">
                      <span className="absolute left-0 top-1 z-10 size-3.5 rounded-full border-2 border-[#0F172A] bg-[#E0F0F2] md:left-1/2 md:-translate-x-1/2" />
                      {index < publicProjects.length - 1 ? (
                        <span className="absolute bottom-0 left-[0.375rem] top-6 w-px bg-[#0F172A]/30 md:left-1/2" />
                      ) : null}
                    </div>

                    <div className="pl-7 md:pl-0">
                      <p className="text-sm font-semibold text-[#64748B]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#0F172A] sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-4xl text-base leading-7 text-[#334155]">
                        {project.description}
                      </p>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          showDetails ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {project.note ? (
                            <p className="mt-4 max-w-3xl rounded-lg border border-[#0F172A]/15 bg-white/35 p-4 text-sm leading-6 text-[#64748B]">
                              {project.note}
                            </p>
                          ) : null}

                          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
                            <div>
                              <p className="text-sm font-semibold text-[#0F172A]">
                                Build highlights
                              </p>
                              <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#334155] sm:grid-cols-2">
                                {project.highlights.map((highlight) => (
                                  <li className="flex gap-2" key={highlight}>
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0F172A]" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-[#0F172A]">
                                Stack
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                  <span
                                    className="rounded-full border border-[#0F172A]/15 bg-white/45 px-3 py-1 text-xs font-medium text-[#334155]"
                                    key={item}
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {project.links?.length ? (
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-[#0F172A]">
                          {project.links.map((link) => (
                            <a
                              className="group inline-flex items-center gap-1.5"
                              href={link.href}
                              key={link.href}
                              rel="noreferrer"
                              target="_blank"
                            >
                              <span className="relative">
                                {link.label}
                                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-current transition-transform duration-200 ease-out group-hover:origin-right group-hover:scale-x-0" />
                              </span>
                              <ArrowUpRight className="mt-0.5 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {shouldFade ? (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#E0F0F2]/35 to-[#E0F0F2]" />
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="flex justify-center">
          <button
            className="group relative inline-flex items-center gap-2 rounded-md px-4 py-3 text-base font-bold text-[#0F172A] transition active:scale-[0.984]"
            onClick={() => setShowAll((current) => !current)}
            type="button"
          >
            <span className="absolute inset-0 -z-10 rounded-md bg-[#E0F0F2]/70 shadow-[0_18px_70px_rgba(15,23,42,0.14),inset_0_1px_10px_rgba(255,255,255,0.4)] backdrop-blur-xl transition group-hover:bg-white/35" />
            <ArrowDown
              className={`size-4 transition-transform duration-200 ${
                showAll ? "rotate-180" : ""
              }`}
            />
            <span>{showAll ? "Less, Please" : "More Public Work"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
