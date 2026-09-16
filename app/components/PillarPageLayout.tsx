"use client";

import React, { useMemo, useState } from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import { PillarData } from "../data/ecoSystemData";

interface PillarPageLayoutProps {
  data: PillarData;
}

export const PillarPageLayout: React.FC<PillarPageLayoutProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFocusAreas = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return data.focusAreas;
    return data.focusAreas.filter((area) =>
      area.name.toLowerCase().includes(query),
    );
  }, [data.focusAreas, searchQuery]);

  const heroHeadline = data.heroHeadline ?? data.title;
  const heroSubhead = data.heroSubhead ?? data.tagline;

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
       

        {/* ------------------------------------------------------------ */}
        {/* 1. HERO                                                      */}
        {/* ------------------------------------------------------------ */}
        <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-[length:20px_20px] opacity-10" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Copy */}
              <div className="space-y-6 lg:col-span-7">
                

                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {heroHeadline}
                </h1>

                <p className="text-lg text-slate-200 sm:text-xl">{heroSubhead}</p>

                <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {data.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#capabilities"
                    className="inline-flex transform items-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl"
                  >
                    <span>{data.ctaLabel}</span>
                    <i className="fas fa-arrow-down text-xs" aria-hidden="true" />
                  </a>

                  {data.externalLink && (
                    <a
                      href={data.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border-2 border-white/80 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                    >
                      <span>Visit Academy Platform</span>
                      <i
                        className="fas fa-external-link-alt text-xs text-[#F9C100]"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Hero image */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#F9C100] to-amber-500 opacity-30 blur-lg" />

                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl lg:aspect-square">
                    <img
                      src={data.heroImage}
                      alt={data.title}
                      className="h-full w-full transform object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C466D]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2C466D] text-lg font-bold text-[#F9C100]">
                          <i className="fas fa-layer-group" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Pillar Focus
                          </p>
                          <p className="text-sm font-bold text-[#2C466D]">{data.badge}</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-[#F9C100]/30 px-2.5 py-1 text-xs font-bold text-[#2C466D]">
                        {data.focusAreas.length} Modules
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* 2. STATS STRIP                                               */}
        {/* ------------------------------------------------------------ */}
        <section className="relative z-20 border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              {data.stats.map((stat) => (
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

        {/* ------------------------------------------------------------ */}
        {/* 3. OVERVIEW                                                  */}
        {/* ------------------------------------------------------------ */}
        <section id="details" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2C466D]/5 px-3 py-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F9C100]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                  Strategic Overview
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
                {data.tagline}
              </h2>

              <p className="text-lg text-justify leading-relaxed text-slate-600">
                {data.description} Our framework bridges domain expertise with execution
                capability, ensuring long-term sustainable impact and operational resilience.
              </p>

              {data.engagementModel && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {data.engagementModel.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#2C466D]/15 bg-[#2C466D]/5 px-3.5 py-1.5 text-xs font-bold text-[#2C466D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <a
                  href="https://calendly.com/hello-intellidea/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-md bg-[#2C466D] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#1C2C45]"
                >
                  <span>Schedule Executive Advisory</span>
                  <i className="fas fa-arrow-right text-xs text-[#F9C100]" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
                <img
                  src={data.secondaryImage}
                  alt={data.title}
                  className="h-[380px] w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-[440px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C466D]/40 via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* 4. COMMUNITY PILLARS (IntelliCircle only)                    */}
        {/* ------------------------------------------------------------ */}
        {data.communityPillars && (
          <section className="border-t border-b border-slate-200 bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div className="mb-14 max-w-2xl">
                <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                  Community Pillars
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
                  How {data.title} Brings People Together
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.communityPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#F9C100] hover:bg-white hover:shadow-xl"
                  >
                    <h3 className="text-lg font-bold text-[#2C466D]">{pillar.title}</h3>
                    <p className="mt-2 text-sm  leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------ */}
        {/* 5. VALUE PROPOSITIONS                                        */}
        {/* ------------------------------------------------------------ */}
        <section className="border-t border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-14 max-w-2xl">
              <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                Core Deliverables
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
                How {data.title} Drives Success
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {data.valueProps.map((prop, idx) => (
                <div
                  key={prop.title}
                  className="group relative flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-8 transition-all duration-300 hover:border-[#F9C100] hover:bg-white hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2C466D] font-mono text-base font-bold text-[#F9C100] shadow-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C466D]">{prop.title}</h3>
                    <p className="text-lg leading-relaxed text-justify text-slate-600">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* 6. CAPABILITIES MATRIX                                       */}
        {/* ------------------------------------------------------------ */}
        <section id="capabilities" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-20 lg:px-12">
          <div className="mb-10 flex flex-col gap-6 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-1 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                Specialized Practice Areas
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
                Domain Capabilities ({data.focusAreas.length})
              </h2>
            </div>

            <div className="relative w-full md:w-72">
              <label htmlFor="capability-search" className="sr-only">
                Search capability or topic
              </label>
              <input
                id="capability-search"
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

          {filteredFocusAreas.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredFocusAreas.map((area) => (
                <div
                  key={area.name}
                  className="group flex cursor-default items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-[#2C466D] hover:bg-[#2C466D] hover:shadow-xl"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-lg text-[#2C466D] shadow-sm transition-colors duration-200 group-hover:bg-[#F9C100]">
                    <i className={`fas ${area.icon}`} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold leading-snug text-slate-800 transition-colors group-hover:text-white">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <i className="fas fa-search mb-3 block text-3xl text-slate-300" aria-hidden="true" />
              <p className="text-sm font-medium text-slate-600">
                No domain capability matching &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs font-bold text-[#2C466D] hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* ------------------------------------------------------------ */}
        {/* 7. CTA BANNER                                                */}
        {/* ------------------------------------------------------------ */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-[length:16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to transform your enterprise architecture?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Partner with Intellidea advisory experts to build tailor-made solutions for
                sustainable growth.
              </p>
            </div>
            <a
              href="https://calendly.com/hello-intellidea/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="transform whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </div>

  
    </div>
  );
};

export default PillarPageLayout;