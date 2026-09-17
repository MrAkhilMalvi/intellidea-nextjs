export interface FocusArea {
  name: string;
  icon: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface PillarStat {
  label: string;
  value: string;
}

export interface CommunityPillar {
  title: string;
  description: string;
}

export interface PillarData {
  slug: string;
  title: string;
  /** Large hero H1. Falls back to `title` when omitted. */
  heroHeadline?: string;
  /** One-line sentence under the hero H1. Falls back to `tagline` when omitted. */
  heroSubhead?: string;
  tagline: string;
  description: string;
  badge: string;
  heroImage: string;
  secondaryImage: string;
  externalLink?: string;
  stats: PillarStat[];
  focusAreas: FocusArea[];
  valueProps: ValueProp[];
  /** Short engagement model tags, e.g. Consulting | Advisory | Managed Services */
  engagementModel?: string[];
  /** Four-step community model, used on IntelliCircle */
  communityPillars?: CommunityPillar[];
  ctaLabel: string;
}

export const ECOSYSTEM_PAGES: Record<string, PillarData> = {
  intellev8: {
    slug: "intellev8",
    title: "IntEllev8",
    heroHeadline: "Elevate the Way You Think, Lead and Grow.",
    heroSubhead: "IntEllev8 is Intellidea's strategy and business transformation ecosystem.",
    tagline: "Business & Growth Transformation",
    description:
      "Helping organizations, entrepreneurs, and leaders make better strategic decisions, improve performance, and unlock exponential growth through data-driven advisory.",
    badge: "Strategy & Advisory",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "360°", label: "Strategic Transformation" },
      { value: "C-Suite", label: "Board & Fractional Advisory" },
      { value: "Scalable", label: "Go-to-Market Frameworks" },
    ],
    valueProps: [
      {
        title: "Strategic Decision-Making",
        description:
          "Deploy data-driven frameworks and executive intelligence to evaluate market opportunities and mitigate operating risks.",
      },
      {
        title: "Operating Model Innovation",
        description:
          "Re-engineer organizational structures and business processes to optimize unit economics and accelerate enterprise delivery.",
      },
      {
        title: "Fractional CXO Leadership",
        description:
          "Embed seasoned executive talent into growth-stage ventures and enterprise business units on-demand.",
      },
    ],
    focusAreas: [
      { name: "Business Strategy", icon: "fa-chess-king" },
      { name: "Growth Strategy", icon: "fa-chart-line" },
      { name: "Digital Transformation", icon: "fa-laptop-code" },
      { name: "Business Transformation", icon: "fa-arrows-spin" },
      { name: "Operating Model Transformation", icon: "fa-sitemap" },
      { name: "Organization Transformation", icon: "fa-building-user" },
      { name: "Market Entry Strategy", icon: "fa-globe" },
      { name: "Go-to-Market Strategy", icon: "fa-bullseye" },
      { name: "Business Model Innovation", icon: "fa-lightbulb" },
      { name: "Performance Improvement", icon: "fa-gauge-high" },
      { name: "Entrepreneurship Advisory", icon: "fa-rocket" },
      { name: "Fractional CXO Advisory", icon: "fa-user-tie" },
      { name: "CEO Advisory", icon: "fa-user-gear" },
      { name: "Board Advisory", icon: "fa-people-roof" },
    ],
    ctaLabel: "Explore IntEllev8",
  },

  intellxperia: {
    slug: "intellxperia",
    title: "IntellXperia",
    heroHeadline: "The Right Expertise. When You Need It.",
    heroSubhead:
      "IntellXperia connects organizations with specialist expertise, practitioners and strategic capabilities to solve complex business challenges.",
    tagline: "Expertise-as-a-Service",
    description:
      "Access specialized, expert-led consulting and capability architecture on demand without the high overhead of building internal domain teams.",
    badge: "Capabilities & Managed Services",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "On-Demand", label: "Specialist Capability Pool" },
      { value: "Enterprise-Grade", label: "Consulting Architecture" },
      { value: "Flexible", label: "Contract & Managed Services" },
    ],
    valueProps: [
      {
        title: "Collaborative Expert Pool",
        description:
          "Leverage domain specialists across HR, Cybersecurity, Finance, ESG, and Legal through curated partner networks.",
      },
      {
        title: "Adaptive Workforce Models",
        description:
          "Transition between temporary staffing, contract-to-hire, and end-to-end managed service engagements seamlessly.",
      },
      {
        title: "Enterprise Risk & Compliance",
        description:
          "Ensure complete adherence to evolving global technology, ESG, financial, and legal regulatory frameworks.",
      },
    ],
    focusAreas: [
      { name: "Human Resources Advisory", icon: "fa-users-gear" },
      { name: "Talent Acquisition", icon: "fa-user-plus" },
      { name: "Workforce Solutions", icon: "fa-people-group" },
      { name: "HR Transformation", icon: "fa-arrows-split-up-and-left" },
      { name: "HR Technology", icon: "fa-microchip" },
      { name: "Payroll Services", icon: "fa-file-invoice-dollar" },
      { name: "HRMS / HRIS", icon: "fa-database" },
      { name: "Contract Staffing", icon: "fa-id-card" },
      { name: "Temporary Staffing", icon: "fa-clock" },
      { name: "Contract-to-Hire", icon: "fa-briefcase" },
      { name: "Managed Services", icon: "fa-headset" },
      { name: "Finance & Accounting Advisory", icon: "fa-calculator" },
      { name: "Technology Advisory", icon: "fa-network-wired" },
      { name: "Cybersecurity", icon: "fa-shield-halved" },
      { name: "Risk & Compliance", icon: "fa-clipboard-check" },
      { name: "Legal & Regulatory Advisory", icon: "fa-scale-balanced" },
      { name: "ESG & Sustainability", icon: "fa-leaf" },
      { name: "Project & Program Management", icon: "fa-list-check" },
      { name: "Business Process Advisory", icon: "fa-diagram-project" },
    ],
    engagementModel: [
      "Consulting",
      "Advisory",
      "Specialist Deployment",
      "Managed Services",
      "Strategic Partnerships",
    ],
    ctaLabel: "Access Specialist Expertise",
  },

  intelliwise: {
    slug: "intelliwise",
    title: "IntelliWise",
    heroHeadline: "Build Capability. Empower People. Create Possibility.",
    heroSubhead: "IntelliWise is Intellidea's learning and capability development ecosystem.",
    tagline: "Learning, Capability & Leadership Development",
    description:
      "Building future-ready capabilities for organizations and individuals through executive education, AI integration, and targeted skill development programs.",
    badge: "Learning Academy",
    heroImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "Future-Ready", label: "Generative AI & Tech Skills" },
      { value: "360°", label: "Assessment & Mentorship" },
      { value: "Tailored", label: "Corporate & Individual Learning" },
    ],
    valueProps: [
      {
        title: "Executive & Future Skills",
        description:
          "Tailored upskilling programs covering AI for Business, Leadership, Cybersecurity Awareness, and Financial Literacy.",
      },
      {
        title: "Diagnostic Assessment Centers",
        description:
          "Conduct structured interview panel assessments, competency evaluations, and career readiness diagnostics.",
      },
      {
        title: "Flexible Learning Models",
        description:
          "Delivered via hands-on workshops, masterclasses, certifications, and cohort-based learning environments.",
      },
    ],
    focusAreas: [
      { name: "Leadership Development", icon: "fa-user-graduate" },
      { name: "AI for Business", icon: "fa-brain" },
      { name: "AI for Educators", icon: "fa-chalkboard-user" },
      { name: "Generative AI", icon: "fa-wand-magic-sparkles" },
      { name: "Cyber Awareness", icon: "fa-shield-halved" },
      { name: "Money Skills", icon: "fa-vault" },
      { name: "Career Readiness", icon: "fa-compass" },
      { name: "Business Skills", icon: "fa-briefcase" },
      { name: "Professional Development", icon: "fa-chart-line" },
      { name: "Executive Learning", icon: "fa-graduation-cap" },
      { name: "Vedic Mathematics / MathWise", icon: "fa-calculator" },
      { name: "Customized Corporate Programs", icon: "fa-building-user" },
    ],
    engagementModel: [
      "Workshops",
      "Masterclasses",
      "Certifications",
      "Executive Programs",
      "Cohort Learning",
      "Customized Learning",
    ],
    ctaLabel: "Explore IntelliWise",
  },

  intellicircle: {
    slug: "intellicircle",
    title: "IntelliCircle",
    heroHeadline: "Connect. Collaborate. Learn. Grow.",
    heroSubhead:
      "IntelliCircle brings together leaders, entrepreneurs, professionals, experts and ecosystem partners to create meaningful connections and shared learning.",
    tagline: "Community, Ecosystem & Collaboration",
    description:
      "Fostering strategic connections among enterprise leaders, entrepreneurs, and subject experts to drive peer learning and shared growth.",
    badge: "Ecosystem & Network",
    heroImage:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "Global", label: "Cross-Border Business Connect" },
      { value: "Peer-to-Peer", label: "Advisory Councils & Forums" },
      { value: "Curated", label: "Conferences & Mentorship" },
    ],
    valueProps: [
      {
        title: "Peer Leadership Communities",
        description:
          "Engage in confidential forums, founder networks, and executive advisory councils with top-tier industry peers.",
      },
      {
        title: "Cross-Border Partnerships",
        description:
          "Unlock international joint ventures, market access programs, and strategic ecosystem alliances.",
      },
      {
        title: "Knowledge Exchange Forums",
        description:
          "Participate in curated industry summits, specialized working groups, and global business connect events.",
      },
    ],
    focusAreas: [
      { name: "Business Networking", icon: "fa-network-wired" },
      { name: "Industry Forums", icon: "fa-users-line" },
      { name: "Leadership Communities", icon: "fa-crown" },
      { name: "Entrepreneur Networks", icon: "fa-lightbulb" },
      { name: "Mentoring", icon: "fa-hands-holding-child" },
      { name: "Advisory Councils", icon: "fa-people-roof" },
      { name: "Knowledge Communities", icon: "fa-book-open-reader" },
      { name: "Strategic Partnerships", icon: "fa-handshake-angle" },
      { name: "Global Business Connect", icon: "fa-earth-americas" },
      { name: "Cross-border Collaboration", icon: "fa-arrows-spin" },
      { name: "Events & Conferences", icon: "fa-calendar-days" },
    ],
    communityPillars: [
      { title: "Connect", description: "Build meaningful relationships." },
      { title: "Collaborate", description: "Create partnerships and opportunities." },
      { title: "Learn", description: "Exchange knowledge and perspectives." },
      { title: "Grow", description: "Create business, professional and social impact." },
    ],
    ctaLabel: "Join the Ecosystem",
  },
};

export const ECOSYSTEM_SLUGS = Object.keys(ECOSYSTEM_PAGES);