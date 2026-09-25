"use client";

import React from "react";

interface PartnerTag {
  name: string;
  iconClass: string;
}

interface PartnerCategory {
  id: string;
  title: string;
  categoryIcon: string;
  tags: PartnerTag[];
}

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    id: "tech",
    title: "Technology Partners",
    categoryIcon: "fa-solid fa-microchip",
    tags: [
      { name: "AI", iconClass: "fa-solid fa-brain" },
      { name: "Cloud", iconClass: "fa-solid fa-cloud" },
      { name: "SaaS", iconClass: "fa-solid fa-cubes" },
      { name: "Cybersecurity", iconClass: "fa-solid fa-shield-halved" },
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge Partners",
    categoryIcon: "fa-solid fa-graduation-cap",
    tags: [
      { name: "Universities", iconClass: "fa-solid fa-building-columns" },
      { name: "Institutions", iconClass: "fa-solid fa-landmark" },
      { name: "Research", iconClass: "fa-solid fa-flask" },
    ],
  },
  {
    id: "business",
    title: "Business Partners",
    categoryIcon: "fa-solid fa-briefcase",
    tags: [
      { name: "Finance", iconClass: "fa-solid fa-coins" },
      { name: "Legal", iconClass: "fa-solid fa-scale-balanced" },
      { name: "HR", iconClass: "fa-solid fa-users-gear" },
      { name: "Consulting", iconClass: "fa-solid fa-chart-line" },
    ],
  },
  {
    id: "global",
    title: "Global Partners",
    categoryIcon: "fa-solid fa-earth-americas",
    tags: [
      { name: "Market Entry", iconClass: "fa-solid fa-passport" },
      { name: "International Business", iconClass: "fa-solid fa-globe" },
      { name: "Investors", iconClass: "fa-solid fa-hand-holding-dollar" },
    ],
  },
  {
    id: "community",
    title: "Community Partners",
    categoryIcon: "fa-solid fa-people-group",
    tags: [
      { name: "Youth", iconClass: "fa-solid fa-user-graduate" },
      { name: "Entrepreneurship", iconClass: "fa-solid fa-rocket" },
      { name: "Social Impact (Non-Profits)", iconClass: "fa-solid fa-hand-holding-heart" },
    ],
  },
];

export const PartnersEcosystemSection: React.FC = () => {
  return (
    <section id="partners" className="w-full bg-[#F8FAFC] py-16 sm:py-24 border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-[#2C466D] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
          Partner Ecosystem
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PARTNER_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="partner-card group relative flex flex-col rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#2C466D]/25 hover:shadow-xl hover:shadow-[#2C466D]/8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2C466D] text-[#f7bf22] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                  <i className={`${category.categoryIcon} text-base`} />
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#2C466D] tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Tag List */}
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 px-3 py-1.5 text-xs sm:text-[13px] font-medium text-slate-700 transition-colors duration-200 hover:bg-[#2C466D] hover:border-[#2C466D] hover:text-white"
                  >
                    <i className={`${tag.iconClass} text-[#f7bf22] text-[11px]`} />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Banner */}
        <div className="bg-[#2C466D] rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#2C466D]">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <i className="fa-solid fa-handshake text-[#f7bf22] text-xl" />
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
              Are you an expert, organisation or technology provider?
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f7bf22] px-7 py-3 text-xs sm:text-sm font-bold text-[#12203A] transition-all duration-200 hover:bg-white hover:gap-3 active:scale-95 whitespace-nowrap shrink-0"
          >
            Join the Intellidea Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
};