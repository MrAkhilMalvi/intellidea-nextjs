"use client";
import React, { useState, useRef } from "react";

const PILLARS = [
  "Business Transformation",
  "Growth",
  "Technology",
  "People",
  "Strategy",
  "Compliance",
  "Governance",
];

export const HeroSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsMuted(false))
        .catch(() => setIsMuted(true));
    } else {
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full flex items-start sm:items-center justify-start overflow-hidden pt-28 pb-10 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="./assets/intellideahero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Audio Element */}
      <audio ref={audioRef} src="./Corporate RF.mp3" loop preload="auto" />

      {/* SOFT LIGHTER OVERLAY */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-[#0a121e]/80 via-[#0a121e]/50 to-transparent" />
      <div className="absolute inset-0 z-1 bg-linear-to-t from-[#0a121e]/60 via-transparent to-transparent opacity-40" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="container relative z-10 mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl text-left">
          {/* HEADLINE */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15]">
            Insight{" "}
            <span className="text-xs sm:text-lg md:text-xl font-semibold uppercase tracking-widest ext-white  align-middle px-0.5 sm:px-2">
              to
            </span>{" "}
            Innovate{" "}
            <span className="text-xs sm:text-lg md:text-xl font-semibold uppercase tracking-widest text-white  align-middle px-0.5 sm:px-2">
              for
            </span>{" "}
            Impact
          </h1>

          {/* PILLARS BAR */}
          <div className="mt-10 sm:mt-5 mb-4 sm:mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] sm:text-sm md:text-base font-medium text-white/85">
            {PILLARS.map((pillar, index) => (
              <span key={pillar} className="inline-flex items-center">
                {index > 0 && (
                  <span className="mr-1.5 sm:mx-2.5 text-[#f7bf22]/60 font-light">
                    |
                  </span>
                )}
                <span>{pillar}</span>
              </span>
            ))}
          </div>

          {/* DESCRIPTIVE PARAGRAPH & BOTTOM TAGLINE */}
          <div className="mb-6 sm:mb-8 max-w-3xl space-y-3">
            <p className="text-2xl sm:text-sm md:text-3xl font-bold text-[#f7bf22] tracking-wide">
              Your on-demand business transformation partner
            </p>
            <p className="text-xl sm:text-base md:text-lg lg:text-lg font-bold text-white/90 leading-relaxed">
              From Transformation to Growth strategy, AI to People, Technology,
              Finance, Compliance, Governance and Global expansion — access the
              right expertise, solutions and execution support for every stage
              of your business.
            </p>
          </div>

          {/* BUTTON GROUP - SIDE-BY-SIDE ON MOBILE */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12">
            {/* Primary Button */}
            <a
              href="#contact"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#f7bf22] px-3.5 sm:px-7 py-2.5 sm:py-3.5 text-lg sm:text-base font-bold text-[#12203A] shadow-md transition-all duration-200 hover:bg-white hover:text-[#12203A] active:scale-95 text-center whitespace-nowrap"
            >
              <span>Tell Us Your Challenge</span>
            </a>

            {/* Secondary Button */}
            <a
              href="#offerings"
              className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-xl border border-white/50 bg-white/10 backdrop-blur-sm px-3.5 sm:px-7 py-2.5 sm:py-3.5 text-lg sm:text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#12203A] active:scale-95 text-center whitespace-nowrap"
            >
              Explore Solutions
            </a>

            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/30 bg-black/40 backdrop-blur-sm px-3.5 sm:px-5 py-2.5 sm:py-3.5 text-lg sm:text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 active:scale-95 shrink-0"
            >
              {isMuted ? (
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f7bf22] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f7bf22] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
