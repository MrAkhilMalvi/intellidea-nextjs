"use client";

import React from "react";
import Link from "next/link";
import type { Industry } from "@/app/data/industries";

interface IndustryPageTemplateProps {
  industry: Industry;
}

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-20">
          <div className="absolute inset-0 opacity-20">
            <img
              src={industry.heroImage}
              alt={industry.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/90 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
              {industry.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {industry.intro}
            </p>
          </div>
        </section>

        {/* OVERVIEW & SOLUTIONS */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          {/* Overview Paragraphs */}
          <div className="mb-16 space-y-4 max-w-3xl">
            <span className="block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
              Overview
            </span>
            {industry.overview.map((para, idx) => (
              <p key={idx} className="text-base leading-relaxed text-slate-700 sm:text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* Key Solutions Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#2C466D] sm:text-3xl mb-8">
              Capabilities & Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {industry.keySolutions.map((sol, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#F9C100] hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {sol.icon && <i className={`${sol.icon} text-[#F9C100] text-xl`} />}
                    <h3 className="text-lg font-bold text-[#2C466D]">{sol.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    {sol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT & CALENDLY CTA */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-linear-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
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