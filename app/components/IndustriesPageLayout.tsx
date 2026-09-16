import Header from "./Navbar";
import Footer from "./Footer";
import { INDUSTRIES_PAGE } from "../data/industriesData";

export default function IndustriesPageLayout() {
  const { heroHeadline, heroSubhead, badge, capabilities, ctaLabel, industries } =
    INDUSTRIES_PAGE;

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      <div>


        {/* ------------------------------------------------------------ */}
        {/* 1. HERO                                                      */}
        {/* ------------------------------------------------------------ */}
        <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white lg:pt-32 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-[length:20px_20px] opacity-10" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroHeadline}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {heroSubhead}
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="#industries"
                className="inline-flex transform items-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl"
              >
                <span>{ctaLabel}</span>
                <i className="fas fa-arrow-down text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/* 2. INDUSTRY CARDS                                            */}
        {/* ------------------------------------------------------------ */}
        <section id="industries" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-2 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
              Sectors We Serve
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-[#2C466D]">
              Our Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                id={industry.slug}
                tabIndex={0}
                className="group relative block aspect-[4/5] scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full transform object-cover object-center transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C466D]/95 via-[#2C466D]/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold leading-snug text-white">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* ------------------------------------------------------------ */}
        {/* 4. CTA BANNER                                                */}
        {/* ------------------------------------------------------------ */}
        <section className="relative mx-auto my-12 max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-[#2C466D] to-[#1C2C45] px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-1/3 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-[length:16px_16px] opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Don't see your exact sector listed?
              </h3>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Our cross-industry frameworks adapt to adjacent and emerging sectors — talk to an
                advisor about your specific business environment.
              </p>
            </div>
            <a
              href="https://calendly.com/hello-intellidea/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="transform whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e]"
            >
              Book an Appointment
            </a>
          </div>
        </section>
      </div>

  
    </div>
  );
}