export interface ServiceCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceOutcome {
  title: string;
  description: string;
}

export interface ServiceData {
  number: number;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  intro: string;
  heroImage: string;
  secondaryImage: string;
  stats: ServiceStat[];
  outcomes: ServiceOutcome[];
  engagementModel: string[];
  /** Optional highlighted callout, e.g. a proposition statement or closing line */
  callout?: string;
  categories: ServiceCategory[];
  /** Optional small-print note, e.g. a regulatory disclaimer */
  note?: string;
}

export const services: ServiceData[] = [
  {
    number: 1,
    slug: "strategy-business-transformation",
    title: "Strategy & Business Transformation",
    shortTitle: "Strategy & Transformation",

    tagline: "From strategic intent to measurable impact.",
    intro:
      "Businesses need more than strategy documents. They need clarity about where to play, how to win and how to execute. We work with promoters, boards, CEOs and leadership teams to define strategies that are practical, measurable and execution-oriented.",
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "Boards", label: "Promoters, CEOs & leadership teams" },
      { value: "360°", label: "Strategy through execution" },
      { value: "SME+", label: "Startups to enterprise groups" },
    ],
    outcomes: [
      {
        title: "Clarity of direction",
        description:
          "Define where to play, how to win, and what leadership must stop, start and scale.",
      },
      {
        title: "Executable strategy",
        description:
          "Turn intent into operating models, portfolios and performance rhythms the organisation can run.",
      },
      {
        title: "Growth with discipline",
        description:
          "Align market entry, new bets and transformation programmes to measurable commercial outcomes.",
      },
    ],
    engagementModel: ["Consulting", "Advisory", "Fractional leadership"],
    categories: [
      {
        name: "Corporate Strategy",
        icon: "fa-chess",
        items: [
          "Vision and strategic planning",
          "Corporate growth strategy",
          "Business portfolio strategy",
          "Business model transformation",
          "Strategic performance management",
        ],
      },
      {
        name: "Growth Strategy",
        icon: "fa-chart-line",
        items: [
          "Market assessment",
          "Market entry",
          "New business development",
          "Revenue growth",
          "Customer acquisition strategy",
          "Go-to-market strategy",
          "Channel strategy",
        ],
      },
      {
        name: "Transformation",
        icon: "fa-sync-alt",
        items: [
          "Enterprise transformation",
          "Business transformation",
          "Operating model transformation",
          "Organization transformation",
          "Process transformation",
          "Digital transformation",
        ],
      },
      {
        name: "Entrepreneurship & SME Advisory",
        icon: "fa-rocket",
        items: [
          "Business model development",
          "Startup advisory",
          "Scale-up strategy",
          "Family business advisory",
          "Promoter advisory",
          "Funding readiness",
        ],
      },
    ],
  },
  {
    number: 2,
    slug: "technology-ai-digital-transformation",
    title: "Technology, AI & Digital Transformation",
    shortTitle: "Technology, AI & Digital",
    tagline: "Technology is no longer an IT agenda. It is a business agenda.",
    intro:
      "We help organizations use technology, data and AI to improve customer experience, productivity, decision-making and business performance.",
    callout:
      "We help organizations move from experimenting with AI to creating measurable business value from AI.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "AI-first", label: "Strategy, use-cases & governance" },
      { value: "CX", label: "Digital products & experience" },
      { value: "Cloud", label: "Architecture & modernization" },
    ],
    outcomes: [
      {
        title: "From experiments to value",
        description:
          "Prioritise AI and digital investments that move revenue, cost, risk and customer outcomes.",
      },
      {
        title: "Architecture that scales",
        description:
          "Modernise data, cloud and enterprise systems so new capabilities can be adopted without chaos.",
      },
      {
        title: "Responsible adoption",
        description:
          "Stand up governance, readiness and operating models so technology is trusted as well as fast.",
      },
    ],
    engagementModel: ["Advisory", "Implementation guidance", "Managed support"],
    categories: [
      {
        name: "Digital, Data & AI",
        icon: "fa-microchip",
        items: [
          "Digital Transformation",
          "Technology Strategy",
          "AI Strategy",
          "Generative AI",
          "Agentic AI Advisory",
          "AI Readiness Assessment",
          "AI Use-Case Identification",
          "AI Governance",
          "Responsible AI",
          "Data & Analytics",
          "Business Intelligence",
          "Automation",
          "RPA",
          "Cloud Transformation",
          "Enterprise Architecture",
          "Technology Modernization",
          "IT Strategy",
          "Digital Customer Experience",
          "Digital Product Strategy",
          "Technology Implementation Advisory",
        ],
      },
    ],
  },
  {
    number: 3,
    slug: "people-hr-workforce",
    title: "People, HR & Workforce",
    shortTitle: "People, HR & Workforce",
    tagline:
      "People create performance. We help organizations build the workforce to deliver it.",
    intro:
      "From sourcing and hiring talent to running HR as a managed function, we support organizations across the full employee lifecycle.",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "Full cycle", label: "Hire to payroll to leadership" },
      { value: "CHRO", label: "Fractional & retained HR" },
      { value: "Scale", label: "Volume, specialist & executive search" },
    ],
    outcomes: [
      {
        title: "The right talent, faster",
        description:
          "Build hiring engines for leadership, specialist and volume roles without losing quality.",
      },
      {
        title: "HR that runs the business",
        description:
          "Design policies, operating models and performance systems leadership can actually use.",
      },
      {
        title: "Workforce as a service",
        description:
          "Flex staffing, payroll and HR technology so people operations keep pace with growth.",
      },
    ],
    engagementModel: ["Search", "Advisory", "HR-as-a-Service"],
    categories: [
      {
        name: "Talent Acquisition",
        icon: "fa-user-plus",
        items: [
          "Permanent Recruitment",
          "Executive Search",
          "Leadership Hiring",
          "Volume Recruitment",
          "Specialist Recruitment",
          "Recruitment Process Outsourcing",
          "Talent Mapping",
          "Employer Branding",
        ],
      },
      {
        name: "Workforce Solutions",
        icon: "fa-users",
        items: [
          "Contract Staffing",
          "Temporary Staffing",
          "Contract-to-Hire",
          "Workforce Management",
          "Project Staffing",
          "Gig / Flexible Workforce",
        ],
      },
      {
        name: "HR Advisory",
        icon: "fa-briefcase",
        items: [
          "HR Strategy",
          "HR Transformation",
          "HR Operating Model",
          "HR Policies",
          "HR Process Optimization",
          "Performance Management",
          "Compensation & Benefits",
          "Organization Design",
          "Employee Engagement",
          "Talent Management",
          "Succession Planning",
        ],
      },
      {
        name: "Fractional Leadership",
        icon: "fa-user-tie",
        items: [
          "Fractional CHRO",
          "HR-as-a-Service",
          "HR Retainer",
          "Strategic HR Advisory",
        ],
      },
      {
        name: "HR Technology",
        icon: "fa-laptop",
        items: [
          "HRMS / HRIS",
          "HR Technology Selection",
          "HR Digital Transformation",
          "HR Analytics",
          "Payroll Technology",
          "Employee Experience Platforms",
        ],
      },
      {
        name: "Payroll",
        icon: "fa-file-invoice-dollar",
        items: [
          "Payroll Processing",
          "Payroll Compliance",
          "Payroll Administration",
          "Payroll Technology",
          "Payroll Outsourcing",
        ],
      },
    ],
  },
  {
    number: 4,
    slug: "risk-cybersecurity-compliance",
    title: "Risk, Cybersecurity & Compliance",
    shortTitle: "Risk & Cybersecurity",
    tagline: "Building trust and resilience in a connected world.",
    intro:
      "Organizations increasingly face risks across technology, cyber, regulatory, operational and third-party ecosystems. We provide advisory-led solutions across the following areas.",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "Trust", label: "Cyber, privacy & data protection" },
      { value: "Resilience", label: "Continuity, crisis & recovery" },
      { value: "Governance", label: "Controls, policy & DPDP" },
    ],
    outcomes: [
      {
        title: "See the real risk",
        description:
          "Assess cyber maturity, third-party exposure and operational risk before incidents force the agenda.",
      },
      {
        title: "Govern with confidence",
        description:
          "Build frameworks, policies and controls that stand up to regulators, boards and customers.",
      },
      {
        title: "Stay operational",
        description:
          "Prepare incident response, continuity and crisis playbooks so disruption does not become damage.",
      },
    ],
    engagementModel: ["Assessment", "Advisory", "Governance"],
    categories: [
      {
        name: "Cybersecurity",
        icon: "fa-shield-alt",
        items: [
          "Cybersecurity Assessment",
          "Cyber Maturity Assessment",
          "Cyber Risk Assessment",
          "Cybersecurity Strategy",
          "Cybersecurity Governance",
          "Data Protection",
          "Privacy Advisory",
          "Security Awareness",
          "Incident Response Readiness",
          "Third-party Cyber Risk",
          "Cloud Security Advisory",
        ],
      },
      {
        name: "Enterprise Risk",
        icon: "fa-exclamation-triangle",
        items: [
          "Enterprise Risk Management",
          "Operational Risk",
          "Technology Risk",
          "IT Risk",
          "Third-party Risk",
          "Business Continuity",
          "Disaster Recovery",
          "Crisis Management",
        ],
      },
      {
        name: "Compliance",
        icon: "fa-balance-scale",
        items: [
          "Regulatory Compliance",
          "Governance Frameworks",
          "Internal Controls",
          "Policy Development",
          "Compliance Assessments",
          "DPDP Act Advisory",
          "Information Security Compliance",
          "Corporate Governance",
        ],
      },
    ],
  },
  {
    number: 5,
    slug: "finance-governance-business-advisory",
    title: "Finance, Governance & Business Advisory",
    shortTitle: "Finance & Governance",
    tagline:
      "Better decisions begin with better financial and business intelligence.",
    intro:
      "We help leadership teams strengthen financial discipline, reporting and governance so decisions are backed by reliable numbers.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "CFO", label: "Fractional & retained finance leadership" },
      { value: "FP&A", label: "Planning, MIS and controls" },
      { value: "Ready", label: "Investor, IPO & fundraising" },
    ],
    outcomes: [
      {
        title: "Numbers leadership can trust",
        description:
          "Stand up reporting, controls and MIS so boards and operators see the same truth.",
      },
      {
        title: "Performance with a pulse",
        description:
          "Improve working capital, cost and unit economics with finance as a decision function.",
      },
      {
        title: "Capital-ready businesses",
        description:
          "Prepare governance, valuation partners and investor materials when growth needs capital.",
      },
    ],
    engagementModel: [
      "Fractional CFO",
      "Advisory",
      "Partner-led regulated work",
    ],
    categories: [
      {
        name: "Finance & Business Advisory",
        icon: "fa-chart-pie",
        items: [
          "CFO Advisory",
          "Fractional CFO",
          "Financial Planning & Analysis",
          "Management Reporting",
          "Business Performance Improvement",
          "Financial Controls",
          "Internal Controls",
          "Management Accounting",
          "Working Capital Advisory",
          "Cost Optimization",
          "Business Valuation through qualified partners",
          "IPO Readiness",
          "Investor Readiness",
          "Fundraising Advisory",
          "Corporate Governance",
          "MIS & Business Intelligence",
        ],
      },
    ],
    note: "For regulated activities such as statutory audit, investment banking, legal opinions, tax practice or valuation requiring specific registration, services are delivered through appropriately qualified and registered professionals or partner firms.",
  },
  {
    number: 6,
    slug: "transactions-investment-growth",
    title: "Transactions, Investment & Growth",
    shortTitle: "Transactions & Investment",
    tagline:
      "Helping businesses make informed decisions about capital, growth and transformation.",
    intro:
      "From opportunity identification to execution, we help stakeholders evaluate, structure and realize growth opportunities.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "M&A", label: "Buy-side, sell-side & partnerships" },
      { value: "Diligence", label: "Commercial, operational & financial" },
      { value: "Value", label: "Integration, turnaround & capital" },
    ],
    outcomes: [
      {
        title: "Decide with evidence",
        description:
          "Test the commercial story, operations and partnership logic before capital is committed.",
      },
      {
        title: "Structure the deal",
        description:
          "Advise on buy-side, sell-side, JV and investment paths that match strategic intent.",
      },
      {
        title: "Capture the value",
        description:
          "Support post-merger integration, turnaround and portfolio choices after the close.",
      },
    ],
    engagementModel: ["Advisory", "Diligence", "Integration"],
    categories: [
      {
        name: "Transactions & Growth",
        icon: "fa-handshake",
        items: [
          "M&A Advisory",
          "Buy-side Advisory",
          "Sell-side Advisory",
          "Strategic Investment Advisory",
          "Business Valuation",
          "Commercial Due Diligence",
          "Operational Due Diligence",
          "Financial Due Diligence through partners",
          "Business Restructuring",
          "Turnaround Advisory",
          "Portfolio Review",
          "Capital Allocation Advisory",
          "Investor Readiness",
          "IPO Readiness",
          "Post-merger Integration",
          "Strategic Partnerships",
          "Joint Venture Advisory",
        ],
      },
    ],
  },
  {
    number: 7,
    slug: "sustainability-esg-impact",
    title: "Sustainability, ESG & Impact",
    shortTitle: "Sustainability & ESG",
    tagline:
      "Building businesses that create value today without compromising tomorrow.",
    intro:
      "We treat sustainability as a business transformation and value-creation opportunity, not simply a compliance exercise.",
    heroImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "ESG", label: "Strategy, governance & reporting" },
      { value: "Climate", label: "Risk, carbon & supply chain" },
      { value: "Impact", label: "CSR, social value & capability" },
    ],
    outcomes: [
      {
        title: "ESG as strategy",
        description:
          "Set a sustainability agenda that is material to the business, not a parallel reporting track.",
      },
      {
        title: "Credible disclosure",
        description:
          "Build governance, metrics and reporting that stakeholders, lenders and boards can rely on.",
      },
      {
        title: "Capability in the organisation",
        description:
          "Train teams and measure impact so sustainability survives beyond a single programme.",
      },
    ],
    engagementModel: ["Strategy", "Reporting", "Capability building"],
    categories: [
      {
        name: "ESG & Impact",
        icon: "fa-leaf",
        items: [
          "ESG Strategy",
          "Sustainability Strategy",
          "ESG Readiness Assessment",
          "ESG Governance",
          "Sustainability Reporting",
          "Climate Risk Advisory",
          "Carbon Management",
          "Sustainable Supply Chain",
          "Responsible Business",
          "Social Impact Strategy",
          "CSR Strategy",
          "ESG Training",
          "Sustainability Capability Building",
          "Impact Measurement",
        ],
      },
    ],
  },
  {
    number: 8,
    slug: "managed-services",
    title: "Managed Services",
    shortTitle: "Managed Services",
    tagline: "Beyond advisory. We help you run it.",
    intro:
      "Many organizations don't need another consultant. They need an experienced partner who can operate, manage and continuously improve a business function.",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    secondaryImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    stats: [
      { value: "Operate", label: "HR, tech, finance & operations" },
      { value: "Continuity", label: "Functions that run every month" },
      { value: "Improve", label: "Managed delivery with accountability" },
    ],
    outcomes: [
      {
        title: "A function, not a slide",
        description:
          "Take ownership of HR, payroll, IT, finance support or operations with named accountability.",
      },
      {
        title: "Capacity without overhead",
        description:
          "Scale specialist teams and shared services without building every capability in-house.",
      },
      {
        title: "Continuous improvement",
        description:
          "Run the process, then tighten it — PMO, learning and back-office with a quality rhythm.",
      },
    ],
    engagementModel: ["Managed delivery", "Outsourcing", "Shared services"],
    categories: [
      {
        name: "Sales & Marketing",
        icon: "fa-bullhorn",
        items: [
          "Growth Office as a Service",
          "Sales Effectiveness & Governance",
          "Executive Positioning",
          "Branding & Product Positioning",
          "Global Outreach",
        ],
      },
      {
        name: "People",
        icon: "fa-users-cog",
        items: [
          "HR Managed Services",
          "Payroll Managed Services",
          "Talent Acquisition Managed Services",
          "Recruitment Process Outsourcing",
        ],
      },
      {
        name: "Technology",
        icon: "fa-server",
        items: [
          "Technology Managed Services",
          "Application Support",
          "IT Operations",
          "Cybersecurity Managed Services",
        ],
      },
      {
        name: "Finance",
        icon: "fa-calculator",
        items: [
          "Finance & Accounting Support",
          "MIS",
          "FP&A",
          "Accounts Payable / Receivable support",
        ],
      },
      {
        name: "Learning",
        icon: "fa-graduation-cap",
        items: [
          "Managed Learning Services",
          "Corporate Training Operations",
          "Assessment Management",
        ],
      },
      {
        name: "Business Operations",
        icon: "fa-cogs",
        items: [
          "Business Process Management",
          "Back-office Operations",
          "Project Management Office",
          "Shared Services",
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((service) => service.slug === slug);
