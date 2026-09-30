"use client";

import React, { useState } from "react";

// Filter Category Type
type Category =
  | "All"
  | "AI & Digital"
  | "Cybersecurity"
  | "Leadership"
  | "Global Connect"
  | "Governance, Risk, Compliance"
  | "Emotional Intelligence"
  | "General, Others";

interface LinkedInPost {
  id: string;
  title: string;
  category: Category;
  embedUrl: string;
}

const CATEGORIES: Category[] = [
  "All",
  "AI & Digital",
  "Cybersecurity",
  "Leadership",
  "Global Connect",
  "Governance, Risk, Compliance",
  "Emotional Intelligence",
  "General, Others",
];

const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    title: "AI & Digital Transformation in Modern Enterprises",
    category: "AI & Digital",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7497849241218949120",
  },
  {
    id: "post-2",
    title: "Scaling Revenue & Navigating Market Expansion",
    category: "Global Connect",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7488507282717085696",
  },
  {
    id: "post-3",
    title: "Cybersecurity Governance & Enterprise Risk",
    category: "Cybersecurity",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7487510290931318784",
  },
  {
    id: "post-4",
    title: "Leadership & Workforce Capability Building",
    category: "Leadership",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7485199128176779265",
  },
  {
    id: "post-5",
    title: "Navigating Regulatory Demands & Compliance Frameworks",
    category: "Governance, Risk, Compliance",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7487510290931318784",
  },
  {
    id: "post-6",
    title: "Empathy, Mindset & Emotional Intelligence in Modern Teams",
    category: "Emotional Intelligence",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7485199128176779265",
  },
  {
    id: "post-7",
    title: "Industry Perspectives & General Business Intelligence",
    category: "General, Others",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7497849241218949120",
  },
];

export default function InsightZonePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts =
    activeCategory === "All"
      ? LINKEDIN_POSTS
      : LINKEDIN_POSTS.filter((post) => post.category === activeCategory);

  return (
    <main className="w-full bg-[#F8FAFC] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full bg-[#2C466D] text-white pt-14 pb-8 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/insights-banner.jpg"
            alt="InsightZone Header"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/85 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12">
            <h1 className="font-display  text-2xl sm:text-3xl font-medium lg:text-3xl text-white leading-tight mb-3 sm:mb-4 max-w-3xl">
              Insights
            </h1>
            <p className="font-sans text-slate-200 text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Latest perspectives, industry trends, and strategic intelligence
              curated by Intellidea leadership and sector experts.
            </p>
          </div>

          {/* CATEGORY FILTER TABS (Inside Banner at bottom) */}
          <div className="pt-4 border-t border-white/15">
            <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3">
              Filter by Topic:
            </p>
            <div className="flex items-center gap-2 overflow-x-auto pb-2  snap-x [-ms-overflow-style:none] scrollbar-none">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count =
                  category === "All"
                    ? LINKEDIN_POSTS.length
                    : LINKEDIN_POSTS.filter((p) => p.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 snap-start flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f7bf22] focus:ring-offset-2 focus:ring-offset-[#2C466D] ${
                      isActive
                        ? "bg-[#f7bf22] text-[#2C466D] font-bold shadow-md scale-102"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/30"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#2C466D] text-white"
                          : "bg-white/20 text-slate-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* POSTS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Active Filter Indicator */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredPosts.length}
            </span>{" "}
            {filteredPosts.length === 1 ? "article" : "articles"} in{" "}
            <span className="font-semibold text-[#2C466D]">
              "{activeCategory}"
            </span>
          </p>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="text-xs text-[#2C466D] hover:text-[#f7bf22] underline font-medium cursor-pointer"
            >
              Reset to All
            </button>
          )}
        </div>

        {/* Results Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-3 sm:p-5 lg:p-6"
              >
                {/* Category Pill Tag */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-[#2C466D] border border-slate-200">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    LinkedIn Insight
                  </span>
                </div>

                {/* LinkedIn Embed Container */}
                <div className="w-full flex justify-center rounded-lg sm:rounded-xl overflow-hidden bg-slate-50 min-h-120 sm:min-h-137.5">
                  <iframe
                    src={post.embedUrl}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title={post.title}
                    className="rounded-lg sm:rounded-xl w-full border-0 h-120 sm:h-137.5 lg:h-150"
                  />
                </div>

                {/* Direct View Link */}
                <div className="pt-3 sm:pt-4 mt-2 border-t border-slate-100 text-center">
                  <a
                    href={post.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-[#2C466D] hover:text-[#f7bf22] transition-colors inline-flex items-center gap-2 py-1"
                  >
                    <span>View Full Post on LinkedIn</span>
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-300">
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              No insights found for "{activeCategory}"
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              We regularly publish new research and updates. Please check back soon.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="bg-[#2C466D] text-white hover:bg-[#f7bf22] hover:text-[#2C466D] transition-colors font-medium px-5 py-2.5 rounded-lg text-sm"
            >
              View All Insights
            </button>
          </div>
        )}
      </section>
    </main>
  );
}