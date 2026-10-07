import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Engagement Models | Flexible Advisory & Delivery | Intellidea" },
  description:
    "From board-level advisory and strategic retainers to fractional leadership, managed services and Build–Operate–Transfer, Intellidea structures collaboration around your pace, risk preference and strategic horizon.",
};

interface EngagementModel {
  id: string;
  title: string;
  badge: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  image: string;
  alt: string;
}

const CALENDLY_URL = "https://calendly.com/hello-intellidea/new-meeting";

/** Match your site header height, or use "top-0" if the header is not fixed. */
const STICKY_TOP = "top-16 lg:top-20";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]";

const MODELS: EngagementModel[] = [
  {
    id: "01",
    title: "Advisory & Board Guidance",
    badge: "Strategic Oversight",
    description:
      "Objective, board-level strategic counsel focused on high-stakes executive decisions, market entry, digital disruption, and investment governance.",
    idealFor: "CEOs, Boards, and Senior Founders navigating major pivots or scale milestones.",
    deliverables: [
      "Executive advisory sessions & soundboard",
      "Strategic roadmap reviews",
      "Independent risk & opportunity assessments",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive advisor leading strategic guidance session",
  },
  {
    id: "02",
    title: "Strategic Retainer",
    badge: "Continuous Access",
    description:
      "Ongoing, dedicated access to senior expertise on an agile monthly framework. Guarantees priority response and steady executive sounding support without project overhead.",
    idealFor: "Rapidly evolving enterprises requiring fluid, continuous advisory inputs.",
    deliverables: [
      "Guaranteed monthly advisory hours",
      "Priority triage for emergent business issues",
      "Regular market & technological scanning",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Team engaged in ongoing retainer strategy review",
  },
  {
    id: "03",
    title: "Project-Based Engagements",
    badge: "Targeted Delivery",
    description:
      "Rigidly scoped, milestone-driven initiatives with transparent timelines, clear workstreams, and concrete commercial deliverables.",
    idealFor: "Discrete problems with well-defined parameters, budgets, and deadlines.",
    deliverables: [
      "Comprehensive diagnostic & solution architecture",
      "Execution playbook and toolkits",
      "Performance sign-off and knowledge handover",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    alt: "Consultants planning milestone workstreams on digital whiteboard",
  },
  {
    id: "04",
    title: "Fractional Executive Leadership",
    badge: "Embedded Leadership",
    description:
      "High-caliber C-suite leadership (CTO, COO, CMO, CSO) embedded directly into your leadership cadence without the full-time balance sheet burden.",
    idealFor: "High-growth scale-ups or organizations bridging executive transitions.",
    deliverables: [
      "Embedded functional department leadership",
      "Team mentoring, hiring, and structuring",
      "Board reporting and executive alignment",
    ],
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    alt: "Fractional executive conducting a departmental leadership briefing",
  },
  {
    id: "05",
    title: "Managed Operational Services",
    badge: "Turnkey Execution",
    description:
      "We assume full operating accountability for critical non-core business or technological capabilities, delivering strict SLAs and continuous optimization.",
    idealFor: "Organizations seeking to modernize functions while keeping internal focus on core business.",
    deliverables: [
      "End-to-end process management",
      "Performance metrics & SLA dashboards",
      "Continuous iterative efficiency gains",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Managed services operations center and infrastructure monitoring",
  },
  {
    id: "06",
    title: "Teaming & Consortium Co-Delivery",
    badge: "Synergistic Alliances",
    description:
      "We join forces with your internal teams or professional consortiums to jointly pursue commercial opportunities, RFP bids, or complex client deliveries.",
    idealFor: "Firms looking to augment their bench with specialized capabilities.",
    deliverables: [
      "Joint bid formulation and solution design",
      "Integrated project delivery governance",
      "Shared resource optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Consortium team members celebrating a successful joint delivery",
  },
  {
    id: "07",
    title: "Build–Operate–Transfer (B-O-T)",
    badge: "Capability Incubation",
    description:
      "We architect a new business unit, capability, or tech center from scratch, manage operations until performance stabilizes, then smoothly transfer full control to you.",
    idealFor: "Enterprises establishing new geographical units or innovation hubs.",
    deliverables: [
      "Complete entity and operational setup",
      "Staff recruitment, workflow maturation, and stabilization",
      "Systematic transfer of IP, systems, and management",
    ],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "High-tech innovation center during build operate transfer phase",
  },
  {
    id: "08",
    title: "Strategic Joint Partnership",
    badge: "Value Co-Creation",
    description:
      "Long-term collaborative venture structures aligned on co-investing expertise, sharing commercial risk, and participating in long-term enterprise upside.",
    idealFor: "Visionary leaders launching transformative platform products or market ecosystems.",
    deliverables: [
      "Shared IP development agreements",
      "Joint go-to-market commercialization",
      "Aligned incentives and milestone-tied rewards",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Strategic partners shaking hands after finalizing joint venture",
  },
];

const CheckIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
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

export default function EngagementModelsPage() {
  const totalDeliverables = MODELS.reduce((sum, m) => sum + m.deliverables.length, 0);

  const stats = [
    { value: String(MODELS.length), label: "Engagement models" },
    { value: `${totalDeliverables}+`, label: "Typical deliverables" },
    { value: "Flexible", label: "Tailored to your pace" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#F9C100] selection:text-[#2C466D]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#2C466D] pt-24 pb-16 text-white sm:pb-20 lg:pt-32 lg:pb-28">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
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
            <span className="text-[#F9C100]">Engagement Models</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F9C100]" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                Collaboration architecture
              </span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Flexible Models <span className="text-[#F9C100]">Tailored to Your Pace</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              We structure our collaboration to fit your operating model, risk preference, and
              strategic horizon—from targeted advisory sprints to end-to-end capability
              incubation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#models"
                className={`inline-flex items-center justify-center gap-2.5 rounded-md bg-[#F9C100] px-8 py-3.5 text-sm font-bold text-[#2C466D] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0ac1e] hover:shadow-xl ${focusRing}`}
              >
                Explore the models
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

      {/* ================= STICKY QUICK NAV ================= */}
      <div
        className={`sticky ${STICKY_TOP} z-30 border-b border-slate-200 bg-white/90 backdrop-blur`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <nav
            aria-label="Jump to engagement model"
            className="flex items-center gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MODELS.map((model) => (
              <a
                key={model.id}
                href={`#model-${model.id}`}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold text-slate-600 transition-colors hover:bg-[#2C466D]/5 hover:text-[#2C466D] sm:text-sm ${focusRing}`}
              >
                <span className="font-mono text-[10px] text-[#d9a800]">{model.id}</span>
                {model.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= MODELS ================= */}
      <section
        id="models"
        className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-28"
      >
        <div className="mb-12 max-w-2xl sm:mb-16">
          <span className="mb-3 block border-l-4 border-[#F9C100] pl-3 text-xs font-bold uppercase tracking-widest text-[#2C466D]">
            How we work together
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-4xl">
            Eight ways to engage Intellidea
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {MODELS.map((model, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={model.id}
                id={`model-${model.id}`}
                className="grid scroll-mt-32 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative">
                    <div
                      className={`absolute hidden h-full w-full rounded-2xl bg-[#F9C100]/20 sm:block ${
                        reversed ? "-right-3 -top-3" : "-left-3 -top-3"
                      }`}
                    />
                    <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-[#2C466D]/10 shadow-2xl">
                      <Image
                        src={model.image}
                        alt={model.alt}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#2C466D]/60 via-transparent to-transparent" />

                      <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2C466D] shadow-lg backdrop-blur">
                        {model.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="max-w-xl space-y-5">


                    <h3 className="text-balance text-2xl font-bold leading-tight tracking-tight text-[#2C466D] sm:text-3xl">
                      {model.title}
                    </h3>

                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                      {model.description}
                    </p>

                    <blockquote className="rounded-r-xl border-l-4 border-[#F9C100] bg-[#E6F4F1] px-5 py-4 text-sm font-semibold leading-snug text-[#2C466D] sm:text-base">
                      <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-[#2C466D]/60">
                        Ideal for
                      </span>
                      {model.idealFor}
                    </blockquote>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Typical deliverables
                      </p>
                      <ul className="space-y-3">
                        {model.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#2C466D] text-[#F9C100]">
                              <CheckIcon />
                            </span>
                            <span className="text-sm font-semibold leading-snug text-slate-800">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/link inline-flex items-center gap-2 text-sm font-bold text-[#2C466D] transition-colors hover:text-[#b8890a] ${focusRing}`}
                    >
                      Discuss this model
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
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
                Let&apos;s design your solution
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Unsure which model suits your objectives?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Book a direct exploratory session with an Intellidea partner. We will evaluate
                your immediate operational requirements and recommend a tailored collaboration
                framework.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#2C466D] shadow-lg transition-all hover:scale-105 hover:bg-[#e0ac1e] ${focusRing}`}
              >
                Schedule partner consultation
              </a>
              <Link
                href="/#contact"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-white/70 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 ${focusRing}`}
              >
                Send us a brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}