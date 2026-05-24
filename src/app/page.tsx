import {
  ArrowUpRight,
} from "lucide-react";

import { BackToTop } from "@/components/portfolio/back-to-top";
import { FeaturedPublicWork } from "@/components/portfolio/featured-public-work";
import { PortfolioHero } from "@/components/portfolio/hero";
import { PrivateCaseStudies } from "@/components/portfolio/private-case-studies";
import { ServicesBuild } from "@/components/portfolio/services-build";
import { ServicesLaunch } from "@/components/portfolio/services-launch";
import { ServicesSupport } from "@/components/portfolio/services-support";
import { TechStack } from "@/components/portfolio/tech-stack";
import {
  contact,
  owner,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#334155]">
      <BackToTop />
      <PortfolioHero />

      <FeaturedPublicWork />

      <PrivateCaseStudies />

      <ServicesBuild />

      <ServicesLaunch />

      <ServicesSupport />

      <TechStack />

      <section className="bg-[#E0F0F2] px-5 py-20 text-[#334155] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
            Start with the production problem
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl">
            {contact.cta}
          </h2>
         
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 text-lg font-semibold text-[#0F172A]">
            {[
              { label: "Email Me", href: `mailto:${contact.email}` },
              { label: "View Resume", href: contact.resume, external: true },
              { label: "View LinkedIn", href: contact.linkedIn, external: true },
              { label: `Call ${contact.phone}`, href: contact.phoneHref },
            ].map((link) => (
              <a
                className="group inline-flex items-center gap-2"
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-current transition-transform duration-200 ease-out group-hover:origin-right group-hover:scale-x-0" />
                </span>
                {link.external ? (
                  <ArrowUpRight className="mt-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#0F172A]/15 bg-[#E0F0F2] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-[#0F172A]">{owner.name}</p>
          <p className="max-w-xl leading-6">{owner.title}</p>
          <a
            className="group inline-flex w-fit font-semibold text-[#0F172A]"
            href={`mailto:${contact.email}`}
          >
            <span className="relative">
              {contact.email}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-current transition-transform duration-200 ease-out group-hover:origin-right group-hover:scale-x-0" />
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
