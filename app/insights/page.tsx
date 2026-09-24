"use client";

import React from "react";

interface LinkedInPost {
  id: string;
  title: string;
  embedUrl: string;
}

const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "post-1",
    title: "AI & Digital Transformation in Modern Enterprises",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7497849241218949120",
  },
  {
    id: "post-2",
    title: "Scaling Revenue & Navigating Market Expansion",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7488507282717085696",
  },
  {
    id: "post-3",
    title: "Cybersecurity Governance & Enterprise Risk",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7487510290931318784",
  },
  {
    id: "post-4",
    title: "Leadership & Workforce Capability Building",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7485199128176779265",
  },
];

export default function InsightZonePage() {
  return (
    <main className="w-full bg-[#F8FAFC] min-h-screen">
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full bg-[#2C466D] text-white py-14  sm:py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/insights-banner.jpg"
            alt="InsightZone Header"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3 sm:mb-4 max-w-3xl">
            Insights
          </h1>

          <p className="font-sans text-slate-200 text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Latest perspectives, industry trends, and strategic intelligence curated by Intellidea leadership and sector experts.
          </p>
        </div>
      </section>

      {/* LINKEDIN POSTS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {LINKEDIN_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col justify-between p-3 sm:p-5 lg:p-6"
            >
              {/* Responsive LinkedIn Embedded iFrame Container */}
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
                  <i className="fas fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}