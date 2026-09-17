"use client";

import React, { useState, useRef } from "react";

const PILLARS = [
  "Business Transformation",
  "Technology",
  "People",
  "Strategy",
  "Risk",
  "Growth",
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
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* ── BACKGROUND VIDEO ── */}
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

      {/* ── GRADIENT OVERLAYS (EXECUTIVE NAVY DEPTH) ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a121e]/95 via-[#12203A]/90 to-[#1e3352]/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a121e] via-transparent to-transparent opacity-80" />

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-left">
          
          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15]">
            Insight{" "}
            <span className="text-sm sm:text-lg md:text-xl font-semibold uppercase tracking-widest text-[#f7bf22] align-middle px-1 sm:px-2">
              to
            </span>{" "}
            Innovate{" "}
            <span className="text-sm sm:text-lg md:text-xl font-semibold uppercase tracking-widest text-[#f7bf22] align-middle px-1 sm:px-2">
              for
            </span>{" "}
            Impact
          </h1>

          {/* PILLARS BAR */}
          <div className="mt-5 mb-8 flex flex-wrap items-center gap-y-2 text-xs sm:text-sm md:text-base font-medium text-white/85">
            {PILLARS.map((pillar, index) => (
              <span key={pillar} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2.5 sm:mx-3 text-[#f7bf22]/60 font-light">|</span>
                )}
                <span>{pillar}</span>
              </span>
            ))}
          </div>

          {/* ── PROPER BUTTON GROUP (HORIZONTAL, COMPACT, NEVER STRETCHED) ── */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            {/* Primary Button */}
            <a
              href="#offerings"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7bf22] px-6 sm:px-7 py-3 text-sm sm:text-base font-bold text-[#12203A] shadow-md transition-all duration-200 hover:bg-white hover:text-[#12203A] hover:-translate-y-0.5"
            >
              Explore Offerings
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/5 backdrop-blur-sm px-6 sm:px-7 py-3 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#12203A]"
            >
              Get In Touch
            </a>

            {/* Audio Toggle (Compact Button) */}
            <button
              onClick={toggleAudio}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm px-4 sm:px-5 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-white/20"
            >
              {isMuted ? (
                <svg className="h-4 w-4 text-[#f7bf22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-[#f7bf22]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>

          {/* ── METRICS STRIP (CLEARLY VISIBLE, PROPERLY SIZED) ── */}
          <div className="flex flex-row items-center gap-6 sm:gap-10 border-t border-white/20 pt-6 max-w-xl">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                30+<span className="text-[#f7bf22] font-bold"> Yrs</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                Advisory Heritage
              </p>
            </div>

            <div className="h-9 w-px bg-white/20" />

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                4+<span className="text-[#f7bf22] font-bold"> Pillars</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                End-to-End Solutions
              </p>
            </div>

            <div className="h-9 w-px bg-white/20" />

            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Global
              </p>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mt-1">
                Expert Network
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};