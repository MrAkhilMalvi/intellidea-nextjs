"use client";

import Image from "next/image";
import Link from "next/link";

interface Reason {
  id: string;
  title: string;
  category: string;
  description: string;
  takeaway: string;
  image: string;
  alt: string;
}

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

export default function WhyIntellideaPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#12203A]">
      {/* ── HERO BANNER WITH BACKGROUND PHOTOGRAPHY & OVERLAYS ── */}
      <section className="relative overflow-hidden bg-[#12203A] pb-28 pt-36 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate strategy boardroom"
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
              The Intellidea Difference
            </span>

            <h1 className="mt-5 font-display text-4xl font-light tracking-tight text-white md:text-6xl">
              Why Forward-Thinking Leaders{" "}
              <span className="font-semibold text-[#F9C100]">Choose Us</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              We replace conventional consulting playbooks with battle-tested practitioner
              experience, multidisciplinary depth, and a challenge-first commitment to your long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* ── ALTERNATING LEFT-RIGHT IMAGE & CONTENT ROWS ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {REASONS.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center gap-10 lg:gap-16 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* IMAGE CONTAINER WITH HOVER EFFECT */}
                  <div className="w-full lg:w-1/2">
                    <div className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-[#12203A]/10 bg-[#12203A]/5 shadow-xl">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#12203A]/40 via-transparent to-transparent opacity-60" />

                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="w-full lg:w-1/2">
                    <div className="max-w-xl">
                      <span className="inline-block rounded-full bg-[#2C466D]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2C466D]">
                        {item.category}
                      </span>

                      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#12203A] md:text-3xl">
                        {item.title}
                      </h2>

                      <p className="mt-4 text-base leading-relaxed text-[#12203A]/75">
                        {item.description}
                      </p>

                      {/* TAKEAWAY CALLOUT BOX */}
                      <div className="mt-6 flex items-start gap-3 rounded-xl border-l-4 border-[#F9C100] bg-white p-4 shadow-sm">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F9C100]/20 text-[#12203A]">
                          <svg
                            className="h-3.5 w-3.5 text-[#12203A]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-xs font-semibold leading-relaxed text-[#12203A]">
                          <span className="text-[#2C466D]">Key Value: </span>
                          {item.takeaway}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="bg-[#12203A] py-20 text-white">
        <div className="container mx-auto px-6 text-center lg:px-12">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F9C100]">
              Operational Excellence
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-white md:text-4xl">
              Ready to Explore How We Can Collaborate?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              Learn how our tailored engagement models adapt directly to your organizational pace,
              strategic timeline, and operational scale.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/about/engagement-models"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F9C100] px-8 py-4 text-sm font-bold text-[#12203A] shadow-lg transition duration-200 hover:bg-white hover:shadow-xl"
              >
                Explore Engagement Models
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/#contact"
                className="rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition duration-200 hover:bg-white/10 hover:border-white"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}