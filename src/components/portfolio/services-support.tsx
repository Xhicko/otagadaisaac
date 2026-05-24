"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

import { services } from "@/data/portfolio";

const supportServiceIndexes = [10, 11];

export function ServicesSupport() {
  const [showDetails, setShowDetails] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const supportServices = supportServiceIndexes.map((index) => services[index]);

  return (
    <section className="bg-[#E0F0F2] px-5 pb-20 pt-6 text-[#334155] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
          Service - Support
        </p>

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
          {supportServices.map((service, index) => {
            const isFadedPreview = index === 1;
            const shouldCollapse = index > 1 && !showAll;
            const shouldFade = isFadedPreview && !showAll;

            return (
              <li
                className={`grid transition-[grid-template-rows] duration-300 ${
                  shouldCollapse ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
                }`}
                key={service.title}
              >
                <article className="overflow-hidden">
                  <div
                    className={`relative grid gap-5 pb-10 transition-colors duration-300 md:grid-cols-[6rem_2rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[7rem_2rem_minmax(0,1fr)] ${
                      shouldFade ? "text-[#64748B]" : "text-[#334155]"
                    }`}
                  >
                    <div className="hidden pt-1 text-right text-sm font-semibold text-[#64748B] md:block">
                      0{index + 1}
                    </div>

                    <div className="absolute bottom-0 left-0 top-1 md:relative md:left-auto md:top-auto">
                      <span
                        className={`absolute left-0 top-1 z-10 size-3.5 rounded-full border-2 bg-[#E0F0F2] transition-colors duration-300 md:left-1/2 md:-translate-x-1/2 ${
                          shouldFade ? "border-[#64748B]" : "border-[#0F172A]"
                        }`}
                      />
                      {index < supportServices.length - 1 ? (
                        <span
                          className={`absolute bottom-0 left-[0.375rem] top-6 w-px transition-colors duration-300 md:left-1/2 ${
                            shouldFade ? "bg-[#64748B]/25" : "bg-[#0F172A]/30"
                          }`}
                        />
                      ) : null}
                    </div>

                    <div className="pl-7 md:pl-0">
                      <h3
                        className={`text-2xl font-semibold leading-tight transition-colors duration-300 sm:text-3xl ${
                          shouldFade ? "text-[#64748B]" : "text-[#0F172A]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          showDetails ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`mt-4 max-w-4xl text-base leading-7 transition-colors duration-300 ${
                              shouldFade ? "text-[#64748B]" : "text-[#334155]"
                            }`}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {shouldFade ? (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-14 bg-gradient-to-b from-transparent via-[#E0F0F2]/20 to-[#E0F0F2]" />
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
            <span>{showAll ? "Less, Please" : "More Support Services"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
