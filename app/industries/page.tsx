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

const CALENDLY_URL = "https://calendly.com/hello-intellidea/new-meeting";
const WHATSAPP_URL = "https://wa.me/919082378708";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]";

const ArrowIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
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

export default function IndustriesIndexPage() {
  const totalSolutions = industries.reduce(
    (sum, industry) => sum + getSolutionCount(industry),
    0,
  );

  const stats = [
    { value: String(industries.length), label: "Industries served" },
    { value: `${totalSolutions}+`, label: "Solution areas" },
    { value: "Global", label: "Delivery reach" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white sm:pb-20 lg:pt-32 lg:pb-28">
        <Image
          src="/assets/industries.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2C466D] via-[#2C466D]/90 to-[#2C466D]/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[22px_22px] opacity-10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300"
          >
            <Link href="/" className={`transition-colors hover:text-white ${focusRing}`}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#F9C100]">Industries</span>
          </nav>

          <div className="max-w-3xl">
            <span className="mb-5 block h-1 w-14 rounded-full bg-[#F9C100]" />
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              Combining deep domain expertise with technology and strategic
              insight to solve sector-specific challenges.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#industries"
                className={`inline-flex items-center justify-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl ${focusRing}`}
              >
                Find your sector
                <svg
                  viewBox="0 0 20 20"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M5 11l5 5 5-5" />
                </svg>
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-md border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-white hover:bg-white/10 ${focusRing}`}
              >
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <dl className="grid grid-cols-3 divide-x divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-6 text-center sm:px-6 sm:py-8">
                <dt className="order-2 mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-extrabold text-[#2C466D] sm:text-3xl lg:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= INDUSTRIES GRID ================= */}
      <section
        id="industries"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
      >
        <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-8 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
              Sector expertise
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
              Find your sector
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-600">
            {industries.length} industries, each with its own challenges. Choose
            yours to see the solutions we build around them.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {industries.map((industry, index) => (
            <li key={industry.slug} className="flex">
              <Link
                href={`/industries/${industry.slug}`}
                className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F9C100] hover:shadow-xl ${focusRing}`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2C466D]/10">
                  <Image
                    src={industry.heroImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/70 via-[#2C466D]/10 to-transparent" />

                  <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-lg bg-[#F9C100] px-2 font-mono text-xs font-bold text-[#2C466D] shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold leading-snug text-[#2C466D] sm:text-2xl">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {industry.tagline}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#2C466D]/5 px-3 py-1 text-xs font-bold text-[#2C466D]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F9C100]" />
                      {getSolutionCount(industry)} solution areas
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-[#2C466D] transition-all duration-300 group-hover:border-[#F9C100] group-hover:bg-[#F9C100]"
                    >
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#F9C100] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-[#2C466D] to-[#1C2C45] px-6 py-14 text-white shadow-2xl sm:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 mask-[linear-gradient(to_left,black,transparent)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Looking for sector-specific advisory?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Speak directly with our industry leads to discuss your
                transformation goals.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e] ${focusRing}`}
              >
                Book an appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}