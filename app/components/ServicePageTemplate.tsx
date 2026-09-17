"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ServiceData, services } from "../data/services";

interface ServicePageTemplateProps {
  service: ServiceData;
}

const CALENDLY_URL = "https://calendly.com/hello-intellidea/new-meeting";
const WHATSAPP_URL = "https://wa.me/919082378708";

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
        items: category.items.filter(
          (item) =>
            item.toLowerCase().includes(query) ||
            category.name.toLowerCase().includes(query),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery, service.categories]);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>

                <p className="text-lg text-slate-200 sm:text-xl">
                  {service.tagline}
                </p>

                <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {service.intro}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#capabilities"
                    className="inline-flex transform items-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl"
                  >
                    <span>Explore capabilities</span>
                    <i
                      className="fas fa-arrow-down text-xs"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                  >
                    Book an appointment
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-[#F9C100] to-amber-500 opacity-30 blur-lg" />
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl lg:aspect-square">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2C466D] text-lg font-bold text-[#F9C100]">
                          {paddedNumber}
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Practice focus
                          </p>
                          <p className="text-sm font-bold text-[#2C466D]">
                            {service.shortTitle}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-md bg-[#F9C100]/30 px-2.5 py-1 text-xs font-bold text-[#2C466D]">
                        {capabilityCount} capabilities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="relative z-20 border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              {service.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group px-6 py-8 text-center transition-colors hover:bg-slate-50/80"
                >
                  <div className="mb-1 text-3xl font-extrabold text-[#2C466D] transition-colors group-hover:text-[#F9C100] lg:text-4xl">
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

        {/* OVERVIEW */}
        <section
          id="details"
          className="mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2C466D]/5 px-3 py-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F9C100]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                  How we help
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
                {service.tagline}
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                {service.intro}
              </p>

              {service.callout && (
                <blockquote className="border-l-4 border-[#F9C100] bg-[#E6F4F1] px-5 py-4 text-base font-semibold leading-snug text-[#2C466D]">
                  {service.callout}
                </blockquote>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {service.engagementModel.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#2C466D]/15 bg-[#2C466D]/5 px-3.5 py-1.5 text-xs font-bold text-[#2C466D]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-md bg-[#2C466D] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#1C2C45]"
                >
                  <span>Schedule executive advisory</span>
                  <i
                    className="fas fa-arrow-right text-xs text-[#F9C100]"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
                <img
                  src={service.secondaryImage}
                  alt={`${service.title} advisory`}
                  className="h-95 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/40 via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="border-t border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-14 max-w-2xl">
              <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                What clients get
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
                Outcomes this practice is built for
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {service.outcomes.map((outcome, idx) => (
                <div
                  key={outcome.title}
                  className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:border-[#F9C100] hover:bg-white hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2C466D] font-mono text-base font-bold text-[#F9C100] shadow-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C466D]">
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

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-12"
        >
          <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-1 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                Specialized practice areas
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
                Capabilities
              </h2>
            </div>

            <div className="relative w-full md:w-72">
              <label htmlFor="service-capability-search" className="sr-only">
                Search capability or topic
              </label>
              <input
                id="service-capability-search"
                type="text"
                placeholder="Search capability or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 shadow-sm transition-all focus:border-[#2C466D] focus:outline-none focus:ring-1 focus:ring-[#2C466D]"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  <i className="fas fa-times" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#2C466D] text-[#F9C100]">
                      <i
                        className={`fas ${category.icon}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C466D]">
                        {category.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        {category.items.length}{" "}
                        {category.items.length === 1 ? "offering" : "offerings"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 transition-all duration-200 hover:border-[#2C466D] hover:bg-[#2C466D]"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-[#F9C100] shadow-sm group-hover:bg-[#F9C100] group-hover:text-[#2C466D]">
                          <i
                            className="fas fa-check text-[10px]"
                            aria-hidden="true"
                          />
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
            <p className="mt-10 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-500">
              {service.note}
            </p>
          )}
        </section>

        {/* OTHER SERVICES */}
        <section className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                  Eight practices, one partner
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
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
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F9C100] hover:bg-white hover:shadow-xl"
                >
                  <span className="mb-2 text-base font-bold leading-snug text-[#2C466D]">
                    {other.shortTitle}
                  </span>
                  <span className="mt-auto pt-4 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#2C466D]">
                    View practice
                    <i
                      className="fas fa-arrow-right ml-2 text-[10px]"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-linear-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to talk through your {service.shortTitle} needs?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Partner with Intellidea advisors for a tailored approach —
                strategy, delivery, or a managed function.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transform whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
              >
                Book an appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-md border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePageTemplate;
