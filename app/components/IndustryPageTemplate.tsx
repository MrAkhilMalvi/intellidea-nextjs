import Image from "next/image";
import Link from "next/link";
import {
  getAdjacentIndustries,
  hasRichContent,
  industries,
  type Industry,
} from "@/app/data/industries";
import ChallengeExplorer from "./ChallangeExplorer";

const CALENDLY = "https://calendly.com/hello-intellidea/new-meeting";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]";

function Arrow({ dir = "right", className = "" }: { dir?: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${dir === "left" ? "rotate-180" : ""} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const rich = hasRichContent(industry);
  const { prev, next } = getAdjacentIndustries(industry.slug);

  return (
    <div className="bg-white text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <Hero industry={industry} rich={rich} />
      {rich ? <RichBody industry={industry} /> : <BasicBody industry={industry} />}
      <ClosingCta industry={industry} />

      {/* Previous / next */}
      <nav aria-label="More industries" className="border-t border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <Link
            href={`/industries/${prev.slug}`}
            className={`group flex items-center gap-4 px-6 py-8 transition-colors hover:bg-white md:border-r md:border-slate-200 lg:px-12 ${focusRing}`}
          >
            <Arrow dir="left" className="shrink-0 text-[#2C466D] transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-sm text-slate-500">Previous industry</span>
              <span className="block text-lg font-bold text-[#2C466D]">{prev.title}</span>
            </span>
          </Link>
          <Link
            href={`/industries/${next.slug}`}
            className={`group flex items-center justify-between gap-4 border-t border-slate-200 px-6 py-8 text-right transition-colors hover:bg-white md:border-t-0 lg:px-12 ${focusRing}`}
          >
            <span className="ml-auto">
              <span className="block text-sm text-slate-500">Next industry</span>
              <span className="block text-lg font-bold text-[#2C466D]">{next.title}</span>
            </span>
            <Arrow className="shrink-0 text-[#2C466D] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 px-6 py-5 text-sm lg:px-12">
          <Link href="/industries" className={`font-bold text-[#2C466D] hover:underline ${focusRing}`}>
            All industries
          </Link>
          {industries
            .filter((i) => i.slug !== industry.slug)
            .map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className={`text-slate-500 transition-colors hover:text-[#2C466D] ${focusRing}`}
              >
                {i.title}
              </Link>
            ))}
        </div>
      </nav>
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero({ industry, rich }: { industry: Industry; rich: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#2C466D] text-white">
      {/* Image: faded backdrop on small screens, right-hand panel on large */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image src={industry.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
      </div>
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] lg:block">
        <Image src={industry.heroImage} alt="" fill priority sizes="48vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/50 to-[#2C466D]/10" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.07]" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-12 lg:pb-28 lg:pt-32">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <Link href="/" className={`transition-colors hover:text-[#F9C100] ${focusRing}`}>Intellidea</Link>
          <span className="text-[#F9C100]" aria-hidden="true">/</span>
          <Link href="/industries" className={`transition-colors hover:text-[#F9C100] ${focusRing}`}>Industries</Link>
          <span className="text-[#F9C100]" aria-hidden="true">/</span>
          <span className="font-semibold text-white">{industry.title}</span>
        </nav>

        <div className="max-w-2xl lg:max-w-[52%]">
          {industry.eyebrow && (
            <p className="mb-4 text-sm font-medium text-[#F9C100]">{industry.eyebrow}</p>
          )}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            {industry.h1 ?? industry.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {industry.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={rich ? "#solutions" : "#key-solutions"}
              className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#F9C100] px-6 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-colors hover:bg-[#e0ac1e] ${focusRing}`}
            >
              {industry.primaryCta ?? "Explore solutions"}
              <Arrow />
            </a>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-md border border-white/35 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#F9C100] hover:text-[#F9C100] ${focusRing}`}
            >
              {industry.secondaryCta ?? "Talk to an Intellidea advisor"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Rich layout ───────────────────────── */
function RichBody({ industry }: { industry: Industry }) {
  const links = [
    industry.landscape && { id: "landscape", label: "What’s changing" },
    industry.challenges && { id: "challenges", label: "Your challenge" },
    { id: "solutions", label: "Solutions" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <>
      {/* In-page navigation */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 lg:px-12">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`whitespace-nowrap border-b-2 border-transparent py-3.5 text-sm font-semibold text-slate-500 transition-colors hover:border-[#F9C100] hover:text-[#2C466D] ${focusRing}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Landscape: heading on the left, ruled list on the right */}
      {industry.landscape && (
        <section id="landscape" className="scroll-mt-14 bg-[#F8FAFC]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20 lg:px-12 lg:py-28">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
                {industry.landscapeTitle ?? "What is changing"}
              </h2>
              <div className="mt-6 h-1 w-14 bg-[#F9C100]" />
            </div>

            <dl className="grid gap-x-12 sm:grid-cols-2">
              {industry.landscape.map((item) => (
                <div key={item.title} className="border-t border-slate-300 py-6">
                  <dt className="text-lg font-bold text-[#2C466D]">{item.title}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-slate-600">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Challenges: interactive explorer on navy */}
      {industry.challenges && (
        <section id="challenges" className="scroll-mt-14 bg-[#1C2C45] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
            <h2 className="max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {industry.challengesTitle ?? "What is your challenge?"}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Pick the question closest to yours. We start with the business problem, then bring the right
              expertise to it.
            </p>
            <div className="mt-12">
              <ChallengeExplorer groups={industry.challenges} />
            </div>
          </div>
        </section>
      )}

      {/* Solutions: sticky index + long-form entries */}
      <section id="solutions" className="scroll-mt-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-20 lg:px-12 lg:py-28">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold leading-tight text-[#2C466D]">
                {industry.title} solutions
              </h2>
              <ul className="mt-6 border-l border-slate-200">
                {industry.solutions!.map((s) => (
                  <li key={s.number}>
                    <a
                      href={`#solution-${s.number}`}
                      className={`-ml-px block border-l-2 border-transparent py-2 pl-4 text-sm leading-snug text-slate-500 transition-colors hover:border-[#F9C100] hover:text-[#2C466D] ${focusRing}`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0">
            <h2 className="mb-10 text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl lg:hidden">
              {industry.title} solutions
            </h2>

            {industry.solutions!.map((s, i) => (
              <article
                key={s.number}
                id={`solution-${s.number}`}
                className={`scroll-mt-24 border-t border-slate-200 py-10 lg:py-12 ${
                  i === industry.solutions!.length - 1 ? "border-b" : ""
                }`}
              >
                <h3 className="text-balance text-2xl font-bold leading-snug text-[#2C466D] sm:text-[1.7rem]">
                  {s.title}
                </h3>

                {s.question && (
                  <p className="mt-2 text-[15px] text-slate-500">
                    Answers the question: <span className="text-slate-700">{s.question}</span>
                  </p>
                )}

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">{s.description}</p>

                {s.areas && (
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-[#2C466D]">What we cover</p>
                    <ul className="grid gap-x-8 gap-y-2 text-[15px] text-slate-600 sm:grid-cols-2 xl:grid-cols-3">
                      {s.areas.map((a) => (
                        <li key={a} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F9C100]" aria-hidden="true" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {s.outcome && (
                  <p className="mt-7 border-l-4 border-[#F9C100] bg-[#F8FAFC] py-3 pl-5 pr-4 text-[15px] leading-relaxed text-[#2C466D]">
                    <span className="font-bold">The outcome: </span>
                    {s.outcome}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── Fallback layout ───────────────────────── */
function BasicBody({ industry }: { industry: Industry }) {
  return (
    <>
      {industry.overview.length > 0 && (
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20 lg:px-12 lg:py-28">
            <div>
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
                Our perspective on {industry.title.toLowerCase()}
              </h2>
              <div className="mt-6 h-1 w-14 bg-[#F9C100]" />
            </div>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-700">
              {industry.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="key-solutions" className="scroll-mt-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20 lg:px-12 lg:py-28">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
            Key solutions
          </h2>
          <ul>
            {industry.keySolutions.map((s, i) => (
              <li
                key={s.title}
                className={`flex gap-5 border-t border-slate-200 py-8 ${
                  i === industry.keySolutions.length - 1 ? "border-b" : ""
                }`}
              >
                {s.icon && (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2C466D] text-[#F9C100]">
                    <i className={`${s.icon} text-base`} aria-hidden="true" />
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-[#2C466D]">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── Closing CTA ───────────────────────── */
function ClosingCta({ industry }: { industry: Industry }) {
  return (
    <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-[#2C466D] to-[#1C2C45] px-8 py-14 text-white sm:px-14 lg:py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
              Start with your {industry.title.toLowerCase()} question
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              Speak directly with our advisors. We’ll help you frame the problem and shape a path to
              measurable impact.
            </p>
          </div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-colors hover:bg-[#e0ac1e] sm:w-auto ${focusRing}`}
          >
            Book an appointment
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}