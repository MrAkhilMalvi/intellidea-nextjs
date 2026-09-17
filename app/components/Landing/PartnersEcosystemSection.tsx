import React from "react";

interface PartnerCategory {
  id: string;
  title: string;
  tags: string[];
  description: string;
  footerLabel: string;
  icon: React.ReactNode;
}

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "tech",
    title: "Technology Partners",
    tags: ["AI", "Cloud", "Cybersecurity", "SaaS"],
    description:
      "Driving digital resilience and technological superiority through next-generation software, cognitive platforms, and secure infrastructure.",
    footerLabel: "Enterprise Architecture",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: "knowledge",
    title: "Knowledge Partners",
    tags: ["Universities", "Institutions", "Research"],
    description:
      "Bridging frontier academic research with practical execution to fuel evidence-based methodologies and continuous innovation.",
    footerLabel: "Research & Academia",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: "business",
    title: "Business Partners",
    tags: ["Consulting", "HR", "Finance", "Legal"],
    description:
      "Delivering end-to-end corporate competence, organizational structuring, fiscal governance, and compliance framework.",
    footerLabel: "Corporate Strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "global",
    title: "Global Partners",
    tags: ["Cross-Border", "Expansion", "Market Entry"],
    description:
      "Facilitating cross-border pathways, global scaling solutions, international entry strategies, and worldwide investor connectivity.",
    footerLabel: "Global Alliances",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.05M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ),
  },
  {
    id: "community",
    title: "Community Partners",
    tags: ["Youth", "Social Impact", "Leadership"],
    description:
      "Fostering inclusive ecosystems that empower emerging entrepreneurs, elevate youth leadership, and catalyze socio-economic change.",
    footerLabel: "Inclusive Growth",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export const PartnersEcosystemSection: React.FC = () => {
  return (
    <section id="partners" className="w-full bg-slate-50 py-20 lg:py-28 border-y border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-[#2C466D] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Our Strategic Partners
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Partnering with global academic, technology, and industry leaders to engineer high-value impact across verticals.
          </p>
        </div>

        {/* 6-Card Balanced Grid (5 Pillars + 1 CTA Slot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PARTNER_CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#2C466D]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#2C466D] to-[#f7bf22] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header / Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#2C466D] group-hover:bg-[#2C466D] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Pillar
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[#2C466D] text-xl mb-3 group-hover:text-[#2C466D] transition-colors">
                  {item.title}
                </h3>

                {/* Pill Tags instead of raw text */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="text-slate-600 font-semibold">{item.footerLabel}</span>
                <div className="w-7 h-7 rounded-full bg-slate-100 text-[#2C466D] group-hover:bg-[#f7bf22] group-hover:text-slate-900 flex items-center justify-center transition-all duration-300">
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Slot: Become a Partner CTA Card (Completes the Grid) */}
          <div className="relative rounded-2xl p-7 bg-gradient-to-br from-[#2C466D] to-[#1e314d] text-white shadow-md flex flex-col justify-between group overflow-hidden border border-[#2C466D]">
            {/* Background Accent glow */}
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#f7bf22]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#f7bf22] flex items-center justify-center text-xl mb-6 backdrop-blur-sm border border-white/10">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-2">
                Join Our Partner Network
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Looking to collaborate, co-innovate, or expand global market access? Partner with our growing ecosystem.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl bg-[#f7bf22] hover:bg-[#e0ac1d] text-slate-950 text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Become a Partner</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};