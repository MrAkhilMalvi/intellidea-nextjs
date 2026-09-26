"use client";

import React from "react";
import Link from "next/link";

interface SolutionItem {
  id: string;
  title: string;
  iconPath: string;
  href: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "strategy",
    title: "Strategy & Transformation",
    iconPath: "./assets/strategy.png",
    href: "/services/strategy-business-transformation",
  },
  {
    id: "tech-ai",
    title: "Technology, AI & Digital",
    iconPath: "./assets/ai.png",
    href: "/services/technology-ai-digital-transformation",
  },
  {
    id: "people",
    title: "People & Workforce",
    iconPath: "./assets/people.png",
    href: "/services/people-hr-workforce",
  },
  {
    id: "risk",
    title: "Risk & Cybersecurity",
    iconPath: "./assets/risk.png",
    href: "/services/risk-cybersecurity-compliance",
  },
  {
    id: "finance",
    title: "Finance & Governance",
    iconPath: "./assets/finance.png",
    href: "/services/finance-governance-business-advisory",
  },
  {
    id: "investment",
    title: "Investment & Scale",
    iconPath: "./assets/investment.png",
    href: "/services/transactions-investment-growth",
  },
  {
    id: "sustainability",
    title: "Sustainability & ESG",
    iconPath: "./assets/sustainability.png",
    href: "/services/sustainability-esg-impact",
  },
  {
    id: "managed",
    title: "Managed Services",
    iconPath: "./assets/managedservice.png",
    href: "/services/managed-services",
  },
];

export const OurSolutionsSection: React.FC = () => {
  return (
    <section
      id="our-solutions"
      className="flex flex-col lg:flex-row w-full bg-white border-t border-slate-100 overflow-hidden"
    >
      {/* LEFT SIDE: Corporate Image */}
      <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-full bg-slate-200 relative order-1 lg:order-1">
        <img
          src="./assets/solutions.jpg"
          alt="Our Solutions Strategy & Technology"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </div>

      {/* RIGHT SIDE: Content & Clickable Solutions Grid */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-10 lg:p-14 order-2 lg:order-2">
        <div>
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] leading-tight mb-3">
              Our Solutions
            </h2>

            <p className="font-sans text-slate-600 text-sm md:text-base font-normal max-w-xl">
              Tailored capability tracks designed to scale, transform, and
              protect your enterprise.
            </p>
          </div>

          {/* 8 Clickable Solutions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {SOLUTIONS.map((sol) => (
              <Link
                key={sol.id}
                href={sol.href}
                className="group flex items-center gap-3 p-3.5 cursor-pointer rounded-lg transition-colors duration-150 active:bg-[#2C466D]/10 max-md:hover:bg-[#2C466D]/10 md:hover:bg-transparent"
              >
                {/* PNG Icon */}
                <div className="w-16 h-16 flex items-center justify-center shrink-0">
                  <img
                    src={sol.iconPath}
                    alt={sol.title}
                    className="w-16 h-16 md:w-14 md:h-14 object-contain transition-transform duration-200 md:group-hover:scale-110"
                  />
                </div>

                {/* Clickable Title */}
                <h3 className="font-display text-lg md:text-lg font-bold text-[#2C466D] md:group-hover:text-[#F9C100] max-md:group-active:text-[#F9C100] transition-colors leading-snug">
                  {sol.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#f7bf22] px-7 py-3 text-lg font-bold text-[#12203A] shadow-sm hover:bg-[#2C466D] hover:text-white transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Let's Talk
          </a>
          <span className="text-xs text-slate-500 font-medium sm:ml-1">
            Speak with our sector advisors today.
          </span>
        </div>
      </div>
    </section>
  );
};
