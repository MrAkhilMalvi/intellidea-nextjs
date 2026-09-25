import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "../data/industries";

export const metadata: Metadata = {
  title: "Industries | Intellidea",
  description:
    "Tailored advisory and transformation capabilities engineered across key global industries.",
};

export default function IndustriesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-sm"
            >
              <Link href="/" className="transition-colors hover:text-[#F9C100]">
                Intellidea
              </Link>
              <span className="text-[#F9C100]" aria-hidden="true">
                &gt;
              </span>
              <span className="font-bold text-[#F9C100]">Industries</span>
            </nav>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Combining deep domain expertise with technology and strategic insight to solve sector-specific challenges.
            </p>
          </div>
        </section>

        {/* INDUSTRIES LIST GRID */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
              Sectors & Domains
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#2C466D]">
              Sectors ({industries.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F9C100] hover:shadow-xl lg:p-9"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-display text-2xl font-bold leading-none text-[#F9C100]">
                    {String(industry.number).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#2C466D] transition-colors duration-300 group-hover:border-[#2C466D] group-hover:bg-[#2C466D] group-hover:text-white"
                  >
                    <i className="fas fa-arrow-right text-xs" />
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-[#2C466D] md:text-2xl">
                  {industry.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#2C466D]/75 md:text-base">
                  {industry.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CALENDLY / CTA BANNER */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-linear-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Looking for sector-specific advisory?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Speak directly with our industry leads to discuss your transformation goals.
              </p>
            </div>
            <a
              href="https://calendly.com/hello-intellidea/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="transform whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
            >
              Book an appointment
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}