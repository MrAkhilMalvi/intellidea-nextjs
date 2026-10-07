import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Why Intellidea | Practitioner-Led, Multidisciplinary Advisory" },
  description:
    "Challenge-led, senior hands-on and execution-focused. Discover why forward-thinking leaders choose Intellidea for strategy, technology, finance, people and governance advisory.",
};

interface Reason {
  id: string;
  title: string;
  category: string;
  description: string;
  takeaway: string;
  image: string;
  alt: string;
}

const CALENDLY_URL = "https://calendly.com/hello-intellidea/new-meeting";

/** Match your site header height, or use "top-0" if the header is not fixed. */
const STICKY_TOP = "top-16 lg:top-20";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]";

const REASONS: Reason[] = [
  {
    id: "01",
    title: "Challenge-Led, Not Solution-Biased",
    category: "Strategic Diagnostic",
    description:
      "We do not arrive with pre-packaged answers or software licenses to sell. We begin by diagnosing your exact strategic friction, structural bottleneck, or market opportunity.",
    takeaway: "Tailored diagnosis with zero vendor or platform bias.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Strategic executive team collaborating over problem diagnosis",
  },
  {
    id: "02",
    title: "Multidisciplinary Perspective",
    category: "Holistic Capabilities",
    description:
      "Modern enterprise challenges cannot be solved in silos. We bring together cross-functional intelligence spanning corporate strategy, emergent technology, capital finance, people operations, and governance.",
    takeaway: "Interconnected solutions addressing technology, finance, and human operations.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    alt: "Multidisciplinary consulting team analyzing business insights",
  },
  {
    id: "03",
    title: "Senior Hands-On Expertise",
    category: "Practitioner Depth",
    description:
      "You will never be handed off to junior associates learning on your clock. You work directly with proven C-suite leaders, domain authorities, and seasoned operators who have walked in your shoes.",
    takeaway: "Direct access to executive-level advisors with proven track records.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    alt: "Senior executive advisor reviewing enterprise roadmaps",
  },
  {
    id: "04",
    title: "Practical & Actionable Execution",
    category: "Measurable Impact",
    description:
      "Insight without execution is merely theory. Our work translates high-altitude vision into tangible milestones, practical toolkits, and measurable commercial progress.",
    takeaway: "Clear KPIs, operational roadmaps, and measurable ROI benchmarks.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard displaying performance metrics and progress",
  },
  {
    id: "05",
    title: "Flexible Engagement Models",
    category: "Agile Structuring",
    description:
      "We adapt to how your organization operates—whether you need targeted sprint projects, ongoing strategic advisory retainers, or embedded fractional leadership.",
    takeaway: "Scale resources up or down dynamically as initiatives evolve.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern flexible corporate conference room",
  },
  {
    id: "06",
    title: "Ecosystem-Led Network",
    category: "Collaborative Reach",
    description:
      "Beyond our core team, you gain immediate access to our vetted international ecosystem of industry practitioners, research institutes, enterprise tech partners, and capital allocators.",
    takeaway: "Expansive access to global institutional and commercial networks.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Collaborative ecosystem partners working together on strategy",
  },
  {
    id: "07",
    title: "Global Perspective, Local Nuance",
    category: "Cross-Border Insight",
    description:
      "We synthesize international best practices and cross-border commercial intelligence with a deep, grounded appreciation for local regulatory, cultural, and market conditions.",
    takeaway: "Global institutional standards tuned for local execution.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern international financial district skyline representing global reach",
  },
  {
    id: "08",
    title: "Long-Term Capability Building",
    category: "Enduring Value",
    description:
      "Our ultimate measure of success is institutional resilience. We transfer knowledge, upskill your internal teams, and establish sustainable capabilities so you do not remain dependent on outside advisors.",
    takeaway: "Empowering internal teams to lead independently after completion.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    alt: "Empowered enterprise team celebrating successful capability handover",
  },
];

const CheckIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

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

export default function WhyIntellideaPage() {
  const stats = [
    { value: String(REASONS.length), label: "Core principles" },
    { value: "Senior-led", label: "Practitioner depth" },
    { value: "Global + Local", label: "Perspective" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white sm:pb-20 lg:pt-32 lg:pb-28">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80"
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
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300"
          >
            <Link href="/" className={`transition-colors hover:text-white ${focusRing}`}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#F9C100]">Why Intellidea</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F9C100]" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                The Intellidea difference
              </span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Why Forward-Thinking Leaders <span className="text-[#F9C100]">Choose Us</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              We replace conventional consulting playbooks with battle-tested practitioner
              experience, multidisciplinary depth, and a challenge-first commitment to your
              long-term success.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#reasons"
                className={`inline-flex items-center justify-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl ${focusRing}`}
              >
                See what sets us apart
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
                <dd className="text-lg font-extrabold text-[#2C466D] sm:text-2xl lg:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= STICKY QUICK NAV ================= */}
      <div
        className={`sticky ${STICKY_TOP} z-30 border-b border-slate-200 bg-white/90 backdrop-blur`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <nav
            aria-label="Jump to reason"
            className="flex items-center gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {REASONS.map((reason) => (
              <a
                key={reason.id}
                href={`#reason-${reason.id}`}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-[#2C466D]/5 hover:text-[#2C466D] sm:text-sm ${focusRing}`}
              >
                <span className="font-mono text-[10px] text-[#d9a800]">{reason.id}</span>
                {reason.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= REASONS ================= */}
      <section
        id="reasons"
        className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
      >
        <div className="mb-12 max-w-2xl sm:mb-16">
          <span className="mb-3 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
            What sets us apart
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
            Eight reasons leaders partner with Intellidea
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {REASONS.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={item.id}
                id={`reason-${item.id}`}
                className="grid scroll-mt-32 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative">
                    <div
                      className={`absolute hidden h-full w-full rounded-2xl bg-[#F9C100]/20 sm:block ${
                        reversed ? "-right-3 -top-3" : "-left-3 -top-3"
                      }`}
                    />
                    <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-[#2C466D]/10 shadow-2xl">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="max-w-xl space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#2C466D]/5 px-3 py-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#F9C100]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2C466D]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2C466D] text-[#F9C100]">
                        <CheckIcon />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                          Key value
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-snug text-slate-800 sm:text-base">
                          {item.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-[#2C466D] to-[#1C2C45] px-6 py-14 text-white shadow-2xl sm:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(#F9C100_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 mask-[linear-gradient(to_left,black,transparent)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F9C100]">
                Operational excellence
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Ready to explore how we can collaborate?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Learn how our tailored engagement models adapt directly to your organizational
                pace, strategic timeline, and operational scale.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/about/engagement-models"
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e] ${focusRing}`}
              >
                Explore engagement models
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}