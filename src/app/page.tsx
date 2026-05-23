import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers3,
  LockKeyhole,
  Mail,
  Phone,
  ServerCog,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  contact,
  ctas,
  owner,
  personalImage,
  privateCaseStudies,
  proofPoints,
  publicProjects,
  services,
  techStack,
} from "@/data/portfolio";
import portrait from "@/images/isaac-otagada.png";

const sectionLabel =
  "text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]";
const sectionTitle =
  "mt-3 text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl";
const sectionCopy = "mt-3 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-base";
const cardClass =
  "rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:shadow-md sm:p-6";

const ctaIcons = {
  "Email Me": Mail,
  "View Resume": ArrowUpRight,
  "View LinkedIn": ArrowUpRight,
  "Call Me": Phone,
};

function ContactButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {ctas.map((cta, index) => {
        const Icon = ctaIcons[cta.label as keyof typeof ctaIcons];
        const isPrimary = index === 0;

        return (
          <Button
            key={cta.label}
            asChild
            variant={isPrimary ? "default" : "outline"}
            size="lg"
            className={
              isPrimary
                ? "h-11 bg-[#2563EB] px-5 text-sm text-white hover:bg-[#1D4ED8]"
                : `h-11 px-5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] ${
                    onDark
                      ? "border-white/20 bg-white"
                      : "border-[#CBD5E1] bg-white"
                  }`
            }
          >
            <a
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noreferrer" : undefined}
            >
              <Icon className="size-4" />
              {cta.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}

function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#334155]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeader({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={sectionLabel}>{label}</p>
      <h2 className={sectionTitle}>{title}</h2>
      <p className={sectionCopy}>{copy}</p>
    </div>
  );
}

function ProjectCard({
  project,
  privateStudy = false,
}: {
  project: {
    title: string;
    category: string;
    description: string;
    note?: string;
    availability?: string;
    highlights: string[];
    stack: string[];
    links?: { label: string; href: string }[];
  };
  privateStudy?: boolean;
}) {
  return (
    <article className={`${cardClass} flex h-full flex-col`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0EA5E9]">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">
            {project.title}
          </h3>
        </div>
        {privateStudy ? (
          <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#047857]">
            Case study
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-7 text-[#334155]">{project.description}</p>

      {project.note ? (
        <p className="mt-3 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-xs leading-6 text-[#64748B]">
          {project.note}
        </p>
      ) : null}

      {project.availability ? (
        <p className="mt-3 rounded-md border border-[#A7F3D0] bg-[#ECFDF5] p-3 text-xs font-medium leading-6 text-[#047857]">
          {project.availability}
        </p>
      ) : null}

      <div className="mt-5 border-t border-[#E2E8F0] pt-5">
        <p className="text-sm font-semibold text-[#0F172A]">Build highlights</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#334155]">
          {project.highlights.slice(0, 6).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#10B981]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <BadgeList items={project.stack} />
      </div>

      {project.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="outline"
              size="lg"
              className="h-9 border-[#CBD5E1] bg-white px-3 text-[#0F172A] hover:bg-[#F8FAFC]"
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#334155]">
      <section className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto grid min-h-[min(760px,100vh)] w-full max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div>
            <p className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              {owner.name} / {owner.brandName}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              {owner.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#334155] sm:text-lg">
              {owner.pitch}
            </p>

            <div className="mt-8">
              <ContactButtons />
            </div>

            <div className="mt-8 grid gap-3 border-l-2 border-[#10B981] pl-4 text-sm leading-6 text-[#64748B] sm:grid-cols-2">
              <span>Based in {owner.location}</span>
              <span>Production-focused web app systems</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mr-0">
            <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-xl shadow-slate-200/70">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white">
                <Image
                  src={portrait}
                  alt={personalImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E2E8F0] bg-[#0F172A] px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
            >
              <span className="mr-2 text-[#10B981]">•</span>
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10" id="work">
        <SectionHeader
          label="Featured public work"
          title="Verifiable systems clients can inspect"
          copy="Public projects are ordered around full-stack complexity: portals, dashboards, application flows, AI knowledge systems, verification, and deployment."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-2">
          {publicProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          label="Private case studies"
          title="Internal systems shown without sensitive exposure"
          copy="These projects are presented as case studies only. Private admin links, credentials, user data, payment data, and sensitive records are not exposed."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
          {privateCaseStudies.map((project) => (
            <ProjectCard key={project.title} project={project} privateStudy />
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          label="Services"
          title="What clients can hire Isaac to complete"
          copy="The focus is real application infrastructure: workflows, authenticated operations, data models, integrations, and production deployment."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const icons = [Layers3, LockKeyhole, ServerCog, CheckCircle2, Database, ArrowUpRight];
            const Icon = icons[index];
            return (
              <article key={service.title} className={cardClass}>
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          label="Tech stack"
          title="Tools used across web app delivery"
          copy="Grouped by the work clients usually need: interfaces, backends, databases, auth, payments, AI knowledge systems, deployment, and documentation."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((group) => (
            <article key={group.group} className={cardClass}>
              <h3 className="text-base font-semibold text-[#0F172A]">{group.group}</h3>
              <div className="mt-4">
                <BadgeList items={group.items} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#0F172A] px-5 py-12 text-center shadow-xl shadow-slate-300/40 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0EA5E9]">
            Start with the production problem
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {contact.cta}
          </h2>
          <div className="mt-8 flex justify-center">
            <ContactButtons onDark />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E2E8F0] bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-[#0F172A]">
            {owner.name} / {owner.brandName}
          </p>
          <p>{owner.title}</p>
          <a className="text-[#2563EB] hover:underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </footer>
    </main>
  );
}
