"use client";

import React, { useMemo, useState } from "react";
import {
  CATEGORY_ORDER,
  COMPANY_URL,
  LINKEDIN_POSTS,
  embedUrl,
  formatPostDate,
  postUrl,
  type Category,
  type LinkedInPost,
} from "@/app/data/linkedinPosts";

type Filter = "All" | Category;

const PAGE_SIZE = 9;
const MAX_EMBED_HEIGHT = 680;

/* ---------- Icons ---------- */
const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const ArrowIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
  </svg>
);

/* ---------- Post Card ---------- */
function PostCard({ post }: { post: LinkedInPost }) {
  const [loaded, setLoaded] = useState(false);
  const height = Math.min(post.height, MAX_EMBED_HEIGHT);

  return (
    <article className="group mb-5 sm:mb-6 lg:mb-8 break-inside-avoid flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between gap-3 px-4 sm:px-5 pt-4 sm:pt-5 pb-3">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#2C466D]/5 text-[#2C466D] border border-[#2C466D]/10">
            {post.category}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            {formatPostDate(post.urn)}
          </span>
        </div>
        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
          <LinkedInIcon />
        </span>
      </header>



      {/* Embed */}
      <div
        className="relative mx-3 sm:mx-4 rounded-xl overflow-hidden bg-slate-50 border border-slate-100"
        style={{ height }}
      >
        {!loaded && (
          <div className="absolute inset-0 p-5 space-y-4 animate-pulse" aria-hidden>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/2 rounded bg-slate-200" />
                <div className="h-2.5 w-1/3 rounded bg-slate-200" />
              </div>
            </div>
            <div className="h-3 w-full rounded bg-slate-200" />
            <div className="h-3 w-5/6 rounded bg-slate-200" />
            <div className="h-3 w-4/6 rounded bg-slate-200" />
            <div className="h-40 w-full rounded-lg bg-slate-200" />
          </div>
        )}
        <iframe
          src={embedUrl(post.urn)}
          loading="lazy"
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className={`w-full h-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-medium">
          Intellidea on LinkedIn
        </span>
        <a
          href={postUrl(post.urn)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2C466D] hover:text-[#b8890a] transition-colors"
        >
          View on LinkedIn
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </footer>
    </article>
  );
}

/* ---------- Page ---------- */
export default function InsightZonePage() {
  const [active, setActive] = useState<Filter>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const tabs = useMemo(() => {
    const counts = new Map<Category, number>();
    LINKEDIN_POSTS.forEach((p) =>
      counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
    );
    return [
      { label: "All" as Filter, count: LINKEDIN_POSTS.length },
      ...CATEGORY_ORDER.filter((c) => counts.has(c)).map((c) => ({
        label: c as Filter,
        count: counts.get(c)!,
      })),
    ];
  }, []);

  const filtered = useMemo(
    () =>
      active === "All"
        ? LINKEDIN_POSTS
        : LINKEDIN_POSTS.filter((p) => p.category === active),
    [active]
  );

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const changeFilter = (f: Filter) => {
    setActive(f);
    setVisible(PAGE_SIZE);
  };

  return (
    <main className="w-full bg-[#F8FAFC] min-h-screen">
      {/* HERO */}
      <section className="relative w-full bg-[#2C466D] text-white pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/insights-banner.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block w-12 h-1 rounded-full bg-[#f7bf22] mb-4" />
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-3 sm:mb-4">
                Insights
              </h1>
              <p className="font-sans text-slate-200 text-sm sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Latest perspectives, industry trends, and strategic intelligence
                curated by Intellidea leadership and sector experts.
              </p>
            </div>

            <a
              href={COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start lg:self-auto inline-flex items-center gap-2.5 rounded-full bg-[#f7bf22] text-[#2C466D] font-bold text-sm px-5 py-2.5 shadow-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2C466D]"
            >
              <LinkedInIcon />
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div
            role="tablist"
            aria-label="Filter insights by topic"
            className="flex items-center gap-2 overflow-x-auto snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map(({ label, count }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => changeFilter(label)}
                  className={`snap-start whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f7bf22] focus:ring-offset-2 ${
                    isActive
                      ? "bg-[#2C466D] text-white border-[#2C466D] shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#2C466D]/40 hover:text-[#2C466D]"
                  }`}
                >
                  {label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-[#f7bf22] text-[#2C466D]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">{shown.length}</span>{" "}
            of{" "}
            <span className="font-semibold text-slate-800">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "post" : "posts"}
            {active !== "All" && (
              <>
                {" "}in <span className="font-semibold text-[#2C466D]">{active}</span>
              </>
            )}
          </p>
          {active !== "All" && (
            <button
              onClick={() => changeFilter("All")}
              className="text-xs sm:text-sm font-medium text-[#2C466D] hover:text-[#b8890a] underline underline-offset-4 cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>

        {shown.length > 0 ? (
          <>
            {/* Masonry: embeds have different heights */}
            <div className="columns-1 md:columns-2 xl:columns-3 gap-5 sm:gap-6 lg:gap-8">
              {shown.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {remaining > 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2C466D] text-[#2C466D] font-semibold text-sm px-6 py-3 hover:bg-[#2C466D] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f7bf22] focus:ring-offset-2"
                >
                  Load more insights
                  <span className="text-xs opacity-70">({remaining} more)</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-300">
            <h3 className="font-display text-lg font-medium text-slate-700 mb-2">
              No insights in "{active}" yet
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              We publish new research and updates regularly. Please check back soon.
            </p>
            <button
              onClick={() => changeFilter("All")}
              className="bg-[#2C466D] text-white hover:bg-[#f7bf22] hover:text-[#2C466D] transition-colors font-medium px-5 py-2.5 rounded-lg text-sm cursor-pointer"
            >
              View all insights
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-[#2C466D] text-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-medium mb-1">
              Want more insights?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Follow Intellidea on LinkedIn for the latest updates and perspectives.
            </p>
          </div>
          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#f7bf22] text-[#2C466D] font-bold text-sm px-6 py-3 hover:bg-white transition-colors"
          >
            Visit our LinkedIn page <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}