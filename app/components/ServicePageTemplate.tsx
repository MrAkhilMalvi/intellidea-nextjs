"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ServiceData, services } from "../data/services";

interface ServicePageTemplateProps {
  service: ServiceData;
}

const CALENDLY_URL = "https://calendly.com/hello-intellidea/new-meeting";
const WHATSAPP_URL = "https://wa.me/919082378708";

/** Distance of the sticky section nav from the top.
 *  Match your site header height (e.g. "top-16", "top-20"), or use "top-0" if the header is not fixed. */
const STICKY_TOP = "top-16 lg:top-20";

const SECTION_LINKS = [
  { href: "#details", label: "Overview" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#services", label: "Other services" },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-3 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
    {children}
  </span>
);

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const paddedNumber = String(service.number).padStart(2, "0");
  const capabilityCount = service.categories.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const previousService =
    currentIndex > 0
      ? services[currentIndex - 1]
      : services[services.length - 1];
  const nextService =
    currentIndex < services.length - 1
      ? services[currentIndex + 1]
      : services[0];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return service.categories;

    return service.categories
      .map((category) => ({
        ...category,
        items: category.name.toLowerCase().includes(query)
          ? category.items
          : category.items.filter((item) => item.toLowerCase().includes(query)),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery, service.categories]);

  const matchCount = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[22px_22px] opacity-10" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#F9C100]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Text */}
            <div className="space-y-6 lg:col-span-6">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <i className="fas fa-chevron-right text-[8px]" aria-hidden="true" />
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
                <i className="fas fa-chevron-right text-[8px]" aria-hidden="true" />
                <span className="text-[#F9C100]">{service.shortTitle}</span>
              </nav>



              <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                {service.title}
              </h1>

              <p className="text-lg font-medium text-[#F9C100] sm:text-xl">
                {service.tagline}
              </p>

              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {service.intro}
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl"
                >
                  <span>Explore capabilities</span>
                  <i className="fas fa-arrow-down text-xs" aria-hidden="true" />
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  Book an appointment
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-xl lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-[#F9C100]/40 to-transparent opacity-60 blur-xl" />
                {/* Decorative offset frame */}
                <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl border-2 border-[#F9C100]/60 sm:block" />

                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/20 bg-[#1C2C45] shadow-2xl lg:aspect-5/4">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/70 via-transparent to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:right-auto">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2C466D] text-[#F9C100]">
                      <i className="fas fa-layer-group text-sm" aria-hidden="true" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-lg font-extrabold text-[#2C466D]">
                        {capabilityCount}+ capabilities
                      </div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        {service.categories.length} practice areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className="group px-6 py-7 text-center transition-colors hover:bg-slate-50/80 lg:py-9"
              >
                <div className="mb-1 text-3xl font-extrabold text-[#2C466D] transition-colors group-hover:text-[#d9a800] lg:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY SECTION NAV ================= */}
      <div
        className={`sticky ${STICKY_TOP} z-30 border-b border-slate-200 bg-white/90 backdrop-blur`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <nav
            aria-label="Page sections"
            className="flex items-center gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SECTION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-[#2C466D]/5 hover:text-[#2C466D] sm:text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto hidden whitespace-nowrap rounded-full bg-[#2C466D] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#1C2C45] sm:inline-flex"
            >
              Book a call
            </a>
          </nav>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <section
        id="details"
        className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image first on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-2xl bg-[#F9C100]/20 sm:block" />
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl">
                <img
                  src={service.secondaryImage}
                  alt={`${service.title} advisory`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="order-1 space-y-6 lg:order-2 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2C466D]/5 px-3 py-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F9C100]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                How we help
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
              {service.tagline}
            </h2>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {service.intro}
            </p>

            {service.callout && (
              <blockquote className="rounded-r-xl border-l-4 border-[#F9C100] bg-[#E6F4F1] px-5 py-4 text-base font-semibold leading-snug text-[#2C466D]">
                {service.callout}
              </blockquote>
            )}

            {service.engagementModel.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  Engagement models
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.engagementModel.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#2C466D]/15 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2C466D] shadow-sm"
                    >
                      <i
                        className="fas fa-check-circle text-[#F9C100]"
                        aria-hidden="true"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md bg-[#2C466D] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1C2C45] hover:shadow-lg"
              >
                <span>Schedule executive advisory</span>
                <i
                  className="fas fa-arrow-right text-xs text-[#F9C100]"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section
        id="outcomes"
        className="scroll-mt-32 border-y border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <Eyebrow>What clients get</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight text-[#2C466D] sm:text-4xl">
              Outcomes this practice is built for
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome, idx) => (
              <div
                key={outcome.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F9C100] hover:bg-white hover:shadow-xl sm:p-8"
              >


                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2C466D] font-mono text-base font-bold text-[#F9C100] shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-[#2C466D] sm:text-2xl">
                    {outcome.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section
        id="capabilities"
        className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Specialized practice areas</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight text-[#2C466D] sm:text-4xl">
              Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {searchQuery.trim()
                ? `${matchCount} ${matchCount === 1 ? "match" : "matches"} found`
                : `${capabilityCount} capabilities across ${service.categories.length} practice areas`}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <label htmlFor="service-capability-search" className="sr-only">
              Search capability or topic
            </label>
            <input
              id="service-capability-search"
              type="text"
              placeholder="Search capability or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-10 text-sm text-slate-800 shadow-sm transition-all focus:border-[#2C466D] focus:outline-none focus:ring-2 focus:ring-[#2C466D]/20"
            />
            <i
              className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              aria-hidden="true"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="space-y-6 lg:space-y-8">
            {filteredCategories.map((category) => (
              <div
                key={category.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 border-b border-slate-100 bg-linear-to-r from-[#2C466D]/5 to-transparent px-5 py-4 sm:px-8 sm:py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2C466D] text-[#F9C100] shadow-sm">
                    <i className={`fas ${category.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="flex-1 text-lg font-bold text-[#2C466D] sm:text-xl">
                    {category.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#F9C100]/20 px-3 py-1 text-xs font-bold text-[#2C466D]">
                    {category.items.length}{" "}
                    {category.items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2C466D] hover:bg-[#2C466D] hover:shadow-md"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-[#d9a800] shadow-sm transition-colors group-hover:bg-[#F9C100] group-hover:text-[#2C466D]">
                        <i className="fas fa-check text-[10px]" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <i
              className="fas fa-search mb-3 block text-3xl text-slate-300"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-slate-600">
              No capability matching &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-bold text-[#2C466D] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {service.note && (
          <div className="mt-10 flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <i
              className="fas fa-info-circle mt-0.5 text-[#F9C100]"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-slate-500">
              {service.note}
            </p>
          </div>
        )}
      </section>

      {/* ================= OTHER SERVICES ================= */}
      <section
        id="services"
        className="scroll-mt-32 border-t border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Eight practices, one partner</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C466D] sm:text-4xl">
                Explore our other services
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/services/${previousService.slug}`}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#2C466D] transition-colors hover:border-[#2C466D] hover:bg-[#F8FAFC]"
              >
                <i className="fas fa-arrow-left text-xs" aria-hidden="true" />
                {previousService.shortTitle}
              </Link>
              <Link
                href={`/services/${nextService.slug}`}
                className="inline-flex items-center gap-2 rounded-md bg-[#2C466D] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1C2C45]"
              >
                {nextService.shortTitle}
                <i
                  className="fas fa-arrow-right text-xs text-[#F9C100]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F9C100] hover:bg-white hover:shadow-xl"
              >
                <span className="mb-4 font-mono text-xs font-bold text-[#d9a800]">
                  {String(other.number).padStart(2, "0")}
                </span>
                <span className="mb-2 text-base font-bold leading-snug text-[#2C466D]">
                  {other.shortTitle}
                </span>
                <span className="mt-auto flex items-center pt-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors group-hover:text-[#2C466D]">
                  View practice
                  <i
                    className="fas fa-arrow-right ml-2 text-[10px] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-4 my-12 sm:mx-6 lg:mx-auto lg:w-full lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#2C466D] to-[#1C2C45] px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to talk through your {service.shortTitle} needs?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Partner with Intellidea advisors for a tailored approach —
                strategy, delivery, or a managed function.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-center text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
              >
                Book an appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <i className="fab fa-whatsapp text-base" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;