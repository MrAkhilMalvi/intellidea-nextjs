import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSolutionCount, industries } from "../data/industries";

export const metadata: Metadata = {
  title: { absolute: "Industries We Serve | Sector Consulting & Transformation | Intellidea" },
  description:
    "Intellidea combines strategy, AI, technology, workforce, risk and finance expertise to solve sector-specific challenges across banking, healthcare, technology, education, manufacturing, retail and more.",
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    url: "/industries",
    siteName: "Intellidea",
    title: "Industries We Serve | Intellidea",
    description:
      "Tailored advisory and transformation capabilities engineered across key global industries.",
  },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]";

export default function IndustriesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
        {/* HERO SECTION — unchanged */}
<section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-20">
      {/* Background Image using Next.js Image */}
      <Image
        src="/assets/industries.jpg" // Replace with your image path or URL
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Optional: Dark Overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#2C466D]/80" />

      {/* Radial Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Industries We Serve
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Combining deep domain expertise with technology and strategic insight to solve sector-specific challenges.
        </p>
      </div>
    </section>

        {/* INDUSTRIES LIST */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-20 lg:px-12 lg:py-28">
            {/* Left: heading stays in view while the list scrolls */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
                Find your sector
              </h2>
              <div className="mt-6 h-1 w-14 bg-[#F9C100]" />
              <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-600">
                {industries.length} industries, each with its own challenges. Choose yours to see the
                solutions we build around them.
              </p>
            </div>

            {/* Right: ruled list of industries */}
            <ul className="border-b border-slate-200">
              {industries.map((industry) => (
                <li key={industry.slug} className="border-t border-slate-200">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={`group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-1 px-2 py-7 transition-colors hover:bg-[#F8FAFC] sm:grid-cols-[112px_1fr_auto] sm:gap-x-7 sm:px-4 lg:grid-cols-[136px_1fr_auto] ${focusRing}`}
                  >
                    {/* Thumbnail (hidden on the smallest screens) */}
                    <div className="relative row-span-2 hidden aspect-4/3 overflow-hidden rounded-lg bg-[#2C466D]/10 sm:block">
                      <Image
                        src={industry.heroImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 136px, 112px"
                        className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-[#2C466D] sm:self-end md:text-2xl">
                      {industry.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="row-span-2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#2C466D] transition-all duration-300 group-hover:border-[#F9C100] group-hover:bg-[#F9C100] sm:h-11 sm:w-11"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 10h12M11 5l5 5-5 5" />
                      </svg>
                    </span>

                    <p className="text-[15px] leading-relaxed text-slate-600 sm:self-start">
                      {industry.tagline}
                      <span className="mt-2 block text-sm font-medium text-[#2C466D]/60">
                        {getSolutionCount(industry)} solution areas
                      </span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CALENDLY / CTA BANNER */}
        <section className="bg-[#F8FAFC] px-6 py-16 lg:px-12 lg:py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-[#2C466D] to-[#1C2C45] px-8 py-14 text-white sm:px-14 lg:py-20">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 mask-[linear-gradient(to_left,black,transparent)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                  Looking for sector-specific advisory?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                  Speak directly with our industry leads to discuss your transformation goals.
                </p>
              </div>
              <a
                href="https://calendly.com/hello-intellidea/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-colors hover:bg-[#e0ac1e] sm:w-auto ${focusRing}`}
              >
                Book an appointment
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}