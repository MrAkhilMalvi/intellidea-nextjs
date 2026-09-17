"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function EngagementModelsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#12203A]">
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#12203A] pb-28 pt-36 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="International financial center"
            fill
            priority
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#12203A]/90 via-[#12203A]/95 to-[#12203A]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#F9C100] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F9C100] animate-pulse" />
              Collaboration Architecture
            </span>

            <h1 className="mt-5 font-display text-4xl font-light tracking-tight text-white md:text-6xl">
              Flexible Models <br />
              <span className="font-semibold text-[#F9C100]">Tailored to Your Pace</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              We structure our collaboration to fit your operating model, risk preference,
              and strategic horizon—from targeted advisory sprints to end-to-end capability incubation.
            </p>
          </div>
        </div>
      </section>

      {/* ── ALTERNATING ENGAGEMENT SHOWCASE (IMAGE + CONTENT) ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {MODELS.map((model, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={model.id}
                  className={`flex flex-col items-center gap-10 lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* IMAGE CONTAINER WITH ZOOM HOVER */}
                  <div className="w-full lg:w-1/2">
                    <div className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-[#12203A]/10 bg-[#12203A]/5 shadow-xl">
                      <Image
                        src={model.image}
                        alt={model.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#12203A]/50 via-transparent to-transparent opacity-60" />


                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-xl">
                      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#12203A] md:text-3xl">
                        {model.title}
                      </h2>

                      <p className="mt-3 text-base leading-relaxed text-[#12203A]/75">
                        {model.description}
                      </p>

                      {/* DELIVERABLES LIST */}
                      <div className="mt-6 rounded-2xl border border-[#12203A]/10 bg-white p-5 shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#12203A]">
                          Typical Deliverables:
                        </span>
                        <ul className="mt-3 space-y-2">
                          {model.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-xs text-[#12203A]/80">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#F9C100]" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 border-t border-[#12203A]/10 pt-3 text-xs text-[#12203A]/70">
                          <strong className="text-[#2C466D]">Ideal For: </strong>
                          {model.idealFor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ── */}
      <section className="bg-[#12203A] py-20 text-white">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F9C100]">
              Let&apos;s Design Your Solution
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-white md:text-4xl">
              Unsure Which Model Suits Your Objectives?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              Book a direct exploratory session with an Intellidea partner. We will evaluate your
              immediate operational requirements and recommend a tailored collaboration framework.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://calendly.com/hello-intellidea/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#12203A] shadow-lg transition duration-200 hover:bg-white hover:shadow-xl"
              >
                Schedule Partner Consultation
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <Link
                href="/#contact"
                className="rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-white/10 hover:border-white"
              >
                Send Us a Brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}