"use client";

import React from "react";
import type { Industry } from "@/app/data/industries";

interface IndustryPageTemplateProps {
  industry: Industry & {
    heroVideo?: string;
    subCategories?: string[];
  };
}

export default function IndustryPageTemplate({
  industry,
}: IndustryPageTemplateProps) {
  const subCategories = industry.subCategories ?? [];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
        {/* HERO SECTION */}
        <section className="relative mx-auto mt-25 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] max-w-[1800px] min-h-[580px] rounded-3xl bg-slate-950 pt-28 pb-24 text-white flex flex-col justify-between overflow-hidden">
          {/* Background Image / Video Layer */}
          <div className="absolute inset-0 z-0">
            {industry.heroVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-center"
              >
                <source src={industry.heroVideo} type="video/mp4" />
                <img
                  src={industry.heroImage}
                  alt={industry.title}
                  className="h-full w-full object-cover object-center"
                />
              </video>
            ) : (
              <img
                src={industry.heroImage}
                alt={industry.title}
                className="h-full w-full object-cover object-center"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14 flex-1 flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-normal leading-[1.08] text-white tracking-tight mb-6 max-w-4xl">
              {industry.title}
            </h1>

            <p className="text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.4] text-white/95 max-w-3xl mb-10">
              {industry.intro}
            </p>

            {subCategories.length > 0 && (
              <div className="flex flex-wrap items-center text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed gap-y-1.5">
                {subCategories.map((sub, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hover:text-[#F9C100] cursor-pointer transition-colors duration-150">
                      {sub}
                    </span>
                    {idx < subCategories.length - 1 && (
                      <span className="text-sky-300/60 mx-2.5 font-light">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Arch — image asset + centered chevron */}
          <div className="absolute bottom-[-1px] left-1/2 z-20 -translate-x-1/2 pointer-events-none leading-[0]">
            <img
              src="/assets/curved-svg.png"
              alt=""
              className="block h-9 w-28 select-none"
              draggable={false}
            />
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 320 512"
              className="absolute left-1/2 top-[10px] h-3.5 w-3.5 -translate-x-1/2 text-[#1C2C45]"
            >
              <path
                fill="currentColor"
                d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
              />
            </svg>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 mb-20 lg:mb-28">
            {/* Sticky label column */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                  Overview
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-snug text-[#1C2C45]">
                  Where we create the most impact
                </h2>
              </div>
            </div>

            {/* Copy column */}
            <div className="lg:col-span-8 space-y-6">
              {industry.overview.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg leading-relaxed text-slate-600 first:text-lg first:sm:text-xl first:font-medium first:text-slate-800"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT — dark feature section */}
        <section className="relative overflow-hidden bg-[#0B0B2E] py-24 sm:py-28 lg:py-32">
          {/* Decorative orbit rings background — slowly rotating */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] lg:h-[900px] lg:w-[900px] shrink-0 animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-[60px] sm:inset-[80px] lg:inset-[100px] rounded-full border border-white/10" />
              <div className="absolute inset-[120px] sm:inset-[160px] lg:inset-[200px] rounded-full border border-white/10" />
              <div className="absolute left-[8%] top-[62%] h-1.5 w-1.5 rounded-full bg-white/40" />
              <div className="absolute right-[14%] top-[78%] h-1.5 w-1.5 rounded-full bg-white/30" />
              <div className="absolute left-[38%] top-[92%] h-1 w-1 rounded-full bg-white/30" />
              <div className="absolute right-[30%] top-[18%] h-1 w-1 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
              What Makes Us Different
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.2] text-white mb-16">
              {industry.title} Solutions Built for Real Outcomes
            </h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-left">
              {industry.keySolutions.slice(0, 4).map((sol, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-0.625rem)] rounded-xl bg-[#1C2C6B] border border-white/10 px-7 py-8 sm:px-9 sm:py-9 transition-colors duration-300 hover:bg-[#243584]"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-white/70 text-center">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALENDLY CONTACT SECTION */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to transform your {industry.title} enterprise?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Connect with our dedicated industry advisors today.
              </p>
            </div>
            <a
              href="https://calendly.com/hello-intellidea/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="transform whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
            >
              Book an appointment
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
