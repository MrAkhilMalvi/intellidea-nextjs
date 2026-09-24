"use client";

import React from "react";

interface PartnerCategory {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "tech",
    title: "Technology Partners",
    tags: ["AI & Cloud", "Cybersecurity", "SaaS Platforms"],
    description: "Architecting digital resilience with cognitive platforms and enterprise infrastructure.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: "knowledge",
    title: "Knowledge Partners",
    tags: ["Research", "Institutions", "Academia"],
    description: "Bridging frontier academic research with practical execution to fuel evidence-based methodologies.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "business",
    title: "Business Partners",
    tags: ["Corporate Advisory", "Governance", "Legal"],
    description: "Delivering organizational structuring, fiscal governance, and compliance frameworks.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "global",
    title: "Global Partners",
    tags: ["Cross-Border", "Market Entry", "Scaling"],
    description: "Facilitating international pathways, global market scaling, and cross-border connectivity.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.05M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
  {
    id: "community",
    title: "Community Partners",
    tags: ["Leadership", "Ecosystems", "Social Impact"],
    description: "Empowering emerging entrepreneurs and fostering leadership across regional networks.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export const PartnersEcosystemSection: React.FC = () => {
  return (
    <section id="partners" className="w-full bg-[#F8FAFC] py-20 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-1  gap-6">
          <div>
            <h2 className="font-display font-bold text-[#2C466D] text-3xl sm:text-4xl leading-tight">
              Partner Ecosystem
            </h2>
          </div>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-md">
            Collaborating with global academic, technology, and industry leaders to engineer enterprise value.
          </p>
        </div>

        {/* Professional 5-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PARTNER_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl p-6 border border-slate-200/90 hover:border-[#2C466D] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2C466D]/5 text-[#2C466D] group-hover:bg-[#2C466D] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-[#2C466D] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-slate-100 text-[#2C466D] text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Integrated Partnership Banner inside Grid */}
          <div className="bg-[#2C466D] rounded-xl p-6 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f7bf22] block mb-2">
                Co-Innovate
              </span>
              <h3 className="font-display text-xl font-bold mb-2">
                Join Our Alliance Network
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Expand global reach and co-create strategic capabilities within our ecosystem.
              </p>
            </div>

            <a
              href="#contact"
              className="relative z-10 w-full inline-flex items-center justify-center rounded-lg bg-[#f7bf22] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#12203A] hover:bg-white transition-colors duration-200 active:scale-95 shadow-sm"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};