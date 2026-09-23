"use client";

import React from "react";

interface SolutionItem {
  id: string;
  title: string;
  category: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "strategy",
    title: "Strategy & Transformation",
    category: "Growth & Scaling",
  },
  {
    id: "tech-ai",
    title: "Technology, AI & Digital",
    category: "Innovation & Tech",
  },
  {
    id: "people",
    title: "People & Workforce",
    category: "Talent & Leadership",
  },
  {
    id: "risk",
    title: "Risk & Cybersecurity",
    category: "Resilience & Security",
  },
  {
    id: "finance",
    title: "Finance & Governance",
    category: "Capital & Advisory",
  },
  {
    id: "investment",
    title: "Investment & Scale",
    category: "Global Expansion",
  },
  {
    id: "sustainability",
    title: "Sustainability & ESG",
    category: "Impact & Operations",
  },
  {
    id: "managed",
    title: "Managed Services",
    category: "On-demand CXO",
  },
];

export const OurSolutionsSection: React.FC = () => {
  return (
    <section id="our-solutions" className="flex flex-col lg:flex-row w-full bg-white border-t border-slate-100">
      {/* LEFT SIDE: Content & Solutions Grid */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-10 lg:p-14 order-1 lg:order-1">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#f7bf22]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2C466D]/80">
              Intellidea Capabilities
            </span>
          </div>

          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] leading-tight mb-3">
            Our Solutions
          </h2>

          <p className="font-sans text-slate-600 text-sm md:text-base font-normal max-w-xl">
            Tailored capability tracks designed to scale, transform, and protect your enterprise.
          </p>
        </div>

        {/* 8 Solutions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="group p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/90 transition-all duration-200 hover:border-[#2C466D] hover:bg-white hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f7bf22]" />
                <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  {sol.category}
                </span>
              </div>

              <h3 className="font-display text-sm md:text-base font-bold text-[#2C466D] group-hover:text-[#12203A] transition-colors leading-snug">
                {sol.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#f7bf22] px-7 py-3 text-sm font-bold text-[#12203A] shadow hover:bg-[#2C466D] hover:text-white transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Let's Talk
          </a>
          <span className="text-xs text-slate-500 font-medium sm:ml-2">
            Speak with our sector advisors today.
          </span>
        </div>
      </div>

      {/* RIGHT SIDE: Corporate Visual Image */}
      <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-slate-200 relative order-2 lg:order-2">
        <img
          src="./assets/sol.jpg"
          alt="Our Solutions Strategy & Technology"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};