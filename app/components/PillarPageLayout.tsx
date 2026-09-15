"use client";

import React from "react";
import { PillarData } from "../data/ecoSystemData";
import Header from "./Navbar";

interface PillarPageLayoutProps {
  data: PillarData;
}

export const PillarPageLayout: React.FC<PillarPageLayoutProps> = ({ data }) => {
  return (
    <>
      <Header />
    <main className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-[#f7bf22] selection:text-[#1C2C45]">
      {/* 1. SLANTED SPLIT HERO SECTION (Matching Reference Image 1) */}
      <section className="relative bg-[#1C2C45] text-white overflow-hidden min-h-[480px] lg:min-h-[520px] flex items-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-full">
          
          {/* Left Column: Brand Background + Breadcrumbs + Header */}
          <div className="lg:col-span-7 relative z-20 py-16 px-6 lg:px-12 flex flex-col justify-center">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f7bf22_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Breadcrumb Path */}
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase mb-4 relative z-10">
              <a href="#" className="hover:text-[#f7bf22] transition-colors">Ecosystem</a>
              <span className="text-[#f7bf22]">&gt;</span>
              <a href="#" className="hover:text-[#f7bf22] transition-colors">{data.badge}</a>
              <span className="text-[#f7bf22]">&gt;</span>
              <span className="text-[#f7bf22] font-bold">{data.title}</span>
            </nav>

            {/* Main Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 relative z-10">
              {data.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl mb-8 relative z-10">
              {data.description}
            </p>

            {/* Action Button */}
            <div className="relative z-10 flex flex-wrap items-center gap-4">
              <a
                href="#details"
                className="bg-[#f7bf22] hover:bg-[#e0ac1e] text-[#1C2C45] font-bold text-sm py-3.5 px-8 rounded-sm shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <i className="fas fa-arrow-right text-xs" />
              </a>
            </div>
          </div>

          {/* Right Column: Angled Image Mask */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center z-10"
              style={{ backgroundImage: `url(${data.heroImage})` }}
            />
            {/* Diagonal Slash Separator for Desktop */}
            <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-24 bg-[#1C2C45] z-20 transform -skew-x-12 origin-top-left" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/80 via-transparent to-transparent lg:hidden z-10" />
          </div>

        </div>
      </section>

      {/* 2. ENTERPRISE METRICS STRIP */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="py-7 px-6 text-center group hover:bg-slate-50 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-[#1C2C45] mb-1 group-hover:text-[#f7bf22] transition-colors">
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

      {/* 3. TWO-COLUMN CONTENT + IMAGE SECTION (Matching Reference Image 2) */}
      <section id="details" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Box: Title, Paragraph & Button */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f7bf22]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1C2C45]">
                Strategy &amp; Impact
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2C45] tracking-tight leading-tight">
              {data.tagline}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Through strategic framework execution, our solutions leverage domain expertise to build resilient enterprise architectures. We empower organizations to drive measurable outcomes and long-term sustainable growth.
            </p>

            <div className="pt-2">
              <a
                href={data.externalLink || "#contact"}
                target={data.externalLink ? "_blank" : "_self"}
                rel={data.externalLink ? "noopener noreferrer" : undefined}
                className="bg-[#1C2C45] hover:bg-[#2C466D] text-white font-bold text-sm py-3.5 px-8 rounded-sm shadow-md transition-all duration-200 inline-flex items-center gap-2.5"
              >
                <span>Get Started</span>
                <i className="fas fa-arrow-right text-xs text-[#f7bf22]" />
              </a>
            </div>
          </div>

          {/* Right Rounded Corner Image Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={data.secondaryImage}
                alt={data.title}
                className="w-full h-[380px] sm:h-[440px] object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2C45]/30 via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. VALUE PROPOSITION CARDS */}
      <section className="bg-white py-20 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-[#1C2C45] uppercase tracking-widest block mb-2 border-l-4 border-[#f7bf22] pl-3">
              Core Deliverables
            </span>
            <h2 className="text-3xl font-bold text-[#1C2C45] tracking-tight">
              How {data.title} Drives Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.valueProps.map((prop, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-8 rounded-sm hover:border-[#f7bf22] hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 bg-[#1C2C45] text-[#f7bf22] font-mono text-sm font-bold flex items-center justify-center rounded-sm mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1C2C45] mb-3">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOCUS AREAS / CAPABILITIES MODULE */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6 gap-6">
          <div>
            <span className="text-xs font-bold text-[#1C2C45] uppercase tracking-widest block mb-1 border-l-4 border-[#f7bf22] pl-3">
              Domain Capabilities
            </span>
            <h2 className="text-3xl font-bold text-[#1C2C45] tracking-tight">Focus Areas</h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Specialized capability modules engineered to address core functional requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.focusAreas.map((area) => (
            <div
              key={area.name}
              className="group bg-white hover:bg-[#1C2C45] border border-slate-200 p-4 rounded-sm transition-all duration-200 flex items-center gap-4 hover:shadow-lg cursor-default"
            >
              <div className="w-10 h-10 rounded-sm bg-slate-100 group-hover:bg-[#f7bf22] text-[#1C2C45] flex items-center justify-center text-base transition-colors duration-200 flex-shrink-0">
                <i className={`fas ${area.icon}`} />
              </div>
              <span className="text-sm font-bold text-slate-800 group-hover:text-white transition-colors">
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </section>

    </main>
    </>
  );
  
};