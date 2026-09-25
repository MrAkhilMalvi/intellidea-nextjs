export interface IndustrySolution {
  title: string;
  description: string;
  icon?: string;
}

export interface Industry {
  slug: string;
  number: number;
  title: string;
  tagline: string;
  intro: string;
  heroImage: string;
  overview: string[];
  keySolutions: IndustrySolution[];
}

export const industries: Industry[] = [
  {
    slug: "banking-and-financial-services",
    number: 1,
    title: "Banking & Financial Services",
    tagline: "Navigating technology, risk, customer experience, and workforce priorities.",
    intro:
      "Helping banks, NBFCs, insurers, fintechs, and financial institutions navigate technology, customer, workforce, risk, and transformation priorities.",
    heroImage: "/assets/industries/bfsi.jpg",
    overview: [
      "A strategy that works in one industry may fail in another. The financial services landscape faces rapid technological change, regulatory pressures, and evolving customer expectations.",
      "Our multidisciplinary ecosystem combines functional expertise with deep sector understanding to help financial institutions maintain security, compliance, and growth.",
    ],
    keySolutions: [
      {
        title: "Digital Transformation & AI",
        description: "Modernize legacy systems, automate processes, and integrate AI to enhance operational speed.",
        icon: "fa-solid fa-microchip",
      },
      {
        title: "Cybersecurity & Risk",
        description: "Strengthen governance, manage enterprise risk, and fortify institutions against cyber threats.",
        icon: "fa-solid fa-shield-halved",
      },
      {
        title: "Customer & Workforce Experience",
        description: "Elevate digital banking journeys and build resilient workforce capabilities for the future.",
        icon: "fa-solid fa-users-gear",
      },
      {
        title: "Technology Modernization",
        description: "Upgrade core infrastructure and technology platforms for seamless scalability.",
        icon: "fa-solid fa-network-wired",
      },
    ],
  },
  {
    slug: "healthcare-and-life-sciences",
    number: 2,
    title: "Healthcare & Life Sciences",
    tagline: "Addressing technology, workforce, compliance, and operational growth challenges.",
    intro:
      "Helping healthcare organizations and life-sciences businesses address technology, workforce, compliance, operations, and growth challenges.",
    heroImage: "/assets/industries/healthcare.jpg",
    overview: [
      "Healthcare institutions need to balance high-quality care delivery with strict compliance and operational efficiency.",
      "We provide actionable capability building, digital health integration, and operational frameworks tailored to modern health systems.",
    ],
    keySolutions: [
      {
        title: "Digital Health & AI Integration",
        description: "Deploy patient-centric digital tools and smart AI applications across operational workflows.",
        icon: "fa-solid fa-stethoscope",
      },
      {
        title: "Operations & Compliance",
        description: "Streamline healthcare delivery while ensuring regulatory adherence and risk management.",
        icon: "fa-solid fa-[#2C466D] fa-notes-medical",
      },
      {
        title: "Workforce & Capability Building",
        description: "Empower medical and administrative staff with structured training and leadership capability.",
        icon: "fa-solid fa-user-nurse",
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    number: 3,
    title: "Pharmaceuticals",
    tagline: "Supporting capability development, digital adoption, and business operations.",
    intro:
      "Supporting pharmaceutical organizations across capability development, digital transformation, AI adoption, workforce, and business operations.",
    heroImage: "/assets/industries/pharma.jpg",
    overview: [
      "Pharma enterprises require high precision in execution, regulatory oversight, and continuous capability upgrades.",
      "We assist pharma leaders in optimizing supply chains, modernizing operations, and adopting digital tools for sustainable growth.",
    ],
    keySolutions: [
      {
        title: "AI Adoption & Digital Operations",
        description: "Harness AI and modern technology to optimize research, operational pipelines, and commercial workflows.",
        icon: "fa-solid fa-pills",
      },
      {
        title: "Workforce Capability & Execution",
        description: "Develop technical capabilities and operational excellence across specialized pharmaceutical teams.",
        icon: "fa-solid fa-flask-vial",
      },
    ],
  },
  {
    slug: "technology-and-it-services",
    number: 4,
    title: "Technology & IT Services",
    tagline: "Helping technology organizations scale people, products, operations, and markets.",
    intro:
      "Helping technology organizations scale people, products, operations, and markets with end-to-end strategic support.",
    heroImage: "/assets/industries/technology.jpg",
    overview: [
      "Tech companies face fierce global competition, talent bottlenecks, and fast-moving technological shifts.",
      "Our solutions empower IT businesses to drive growth strategies, execute global expansion, and scale managed services.",
    ],
    keySolutions: [
      {
        title: "Growth Strategy & Global Expansion",
        description: "Formulate market entry strategies and scale operations across new international territories.",
        icon: "fa-solid fa-globe",
      },
      {
        title: "Talent & AI Integration",
        description: "Build high-performing tech teams and integrate enterprise AI capabilities into product offerings.",
        icon: "fa-solid fa-brain",
      },
      {
        title: "Cybersecurity & Managed Services",
        description: "Secure digital assets and optimize IT infrastructure with managed operational models.",
        icon: "fa-solid fa-server",
      },
    ],
  },
  {
    slug: "education-and-edtech",
    number: 5,
    title: "Education & EdTech",
    tagline: "Building future-ready learning ecosystems and institutional leadership.",
    intro:
      "Helping institutions and education businesses build future-ready learning ecosystems.",
    heroImage: "/assets/industries/education.jpg",
    overview: [
      "Education models are evolving rapidly through blended learning, digital assessment platforms, and employability focus.",
      "We help universities, schools, and EdTech ventures develop institutional capacity, faculty capabilities, and EdTech strategies.",
    ],
    keySolutions: [
      {
        title: "Digital Learning & EdTech Strategy",
        description: "Architect scalable online platforms and digital curriculum ecosystems.",
        icon: "fa-solid fa-laptop-file",
      },
      {
        title: "Faculty Development & Employability",
        description: "Train educators and construct career-oriented frameworks to raise student employability.",
        icon: "fa-solid fa-graduation-cap",
      },
      {
        title: "Assessment & Leadership",
        description: "Implement robust evaluation tools and cultivate forward-looking educational leadership.",
        icon: "fa-solid fa-award",
      },
    ],
  },
  {
    slug: "manufacturing",
    number: 6,
    title: "Manufacturing",
    tagline: "Improving productivity, technology adoption, and operational resilience.",
    intro:
      "Helping manufacturers improve productivity, technology adoption, workforce capability, and operational resilience.",
    heroImage: "/assets/industries/manufacturing.jpg",
    overview: [
      "Industry 4.0 demands smart factory operations, resilient supply chains, and workforce upskilling.",
      "We work alongside manufacturing companies to drive operational productivity, introduce digital automation, and elevate shop-floor capabilities.",
    ],
    keySolutions: [
      {
        title: "Operational Resilience & Productivity",
        description: "Optimize production cycles, eliminate bottlenecks, and implement lean manufacturing workflows.",
        icon: "fa-solid fa-industry",
      },
      {
        title: "Technology & Workforce Capability",
        description: "Introduce smart automation and train workers to operate advanced industrial technologies.",
        icon: "fa-solid fa-[#2C466D] fa-gears",
      },
    ],
  },
  {
    slug: "retail-and-consumer",
    number: 7,
    title: "Retail & Consumer",
    tagline: "Supporting organizations in customer experience, digital growth, and technology.",
    intro:
      "Supporting retail and consumer organizations in customer experience, digital transformation, workforce, growth, and technology.",
    heroImage: "/assets/industries/retail.jpg",
    overview: [
      "Modern retail requires seamless omnichannel engagement, strong supply chain alignment, and continuous consumer insight.",
      "We help consumer brands build responsive customer journeys and modernize backend technology stack.",
    ],
    keySolutions: [
      {
        title: "Customer Experience & Omnichannel",
        description: "Design memorable retail experiences across both digital and physical touchpoints.",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        title: "Digital Growth & Technology",
        description: "Adopt e-commerce frameworks, inventory technology, and data analytics for scale.",
        icon: "fa-solid fa-store",
      },
    ],
  },
  {
    slug: "energy-and-utilities",
    number: 8,
    title: "Energy & Utilities",
    tagline: "Navigating technology, operational resilience, and sustainability.",
    intro:
      "Supporting energy and utility organizations navigating technology, workforce, operational resilience, sustainability, and transformation.",
    heroImage: "/assets/industries/energy.jpg",
    overview: [
      "Energy operators are balancing grid reliability, clean energy transition, and infrastructure modernization.",
      "We assist utility leaders in operational transformation, sustainable resource management, and workforce transition.",
    ],
    keySolutions: [
      {
        title: "Sustainability & Transformation",
        description: "Drive clean energy strategies, ESG alignment, and operational efficiency.",
        icon: "fa-solid fa-leaf",
      },
      {
        title: "Operational Resilience & Workforce",
        description: "Strengthen physical and digital infrastructure reliability while training skilled technicians.",
        icon: "fa-solid fa-bolt",
      },
    ],
  },
  {
    slug: "infrastructure-and-real-estate",
    number: 9,
    title: "Infrastructure & Real Estate",
    tagline: "Supporting growth, governance, technology, and project capability.",
    intro:
      "Supporting growth, governance, technology, project management, and organizational capability in infrastructure and real estate.",
    heroImage: "/assets/industries/infrastructure.jpg",
    overview: [
      "Capital-intensive real estate and infrastructure projects rely heavily on clear governance, accurate timelines, and technology integration.",
      "Our advisory supports real estate leaders with governance frameworks, project capability building, and smart asset technologies.",
    ],
    keySolutions: [
      {
        title: "Governance & Project Management",
        description: "Establish robust risk governance frameworks and high-output project execution practices.",
        icon: "fa-solid fa-building-user",
      },
      {
        title: "Organizational Capability & Tech",
        description: "Empower asset teams with smart building technologies and streamlined management processes.",
        icon: "fa-solid fa-[#2C466D] fa-city",
      },
    ],
  },
  {
    slug: "government-and-public-sector",
    number: 10,
    title: "Government & Public Sector",
    tagline: "Building institutional capacity, governance, and citizen-centric initiatives.",
    intro:
      "Supporting public sector institutions with capability building, digital transformation, governance, technology, and citizen-centric initiatives.",
    heroImage: "/assets/industries/government.jpg",
    overview: [
      "Public sector bodies require scalable digital governance models to deliver transparent, efficient public services.",
      "We partner with government bodies to implement digital administration tools, upskill civil servants, and optimize public service delivery.",
    ],
    keySolutions: [
      {
        title: "Citizen-Centric Digital Governance",
        description: "Implement accessible digital public platforms that improve service transparency and reach.",
        icon: "fa-solid fa-landmark-flag",
      },
      {
        title: "Capability Building & Tech Advisory",
        description: "Equip public institutions with modern administrative processes and digital skillsets.",
        icon: "fa-solid fa-users-line",
      },
    ],
  },
  {
    slug: "startups-and-emerging-businesses",
    number: 11,
    title: "Startups & Emerging Businesses",
    tagline: "Helping founders move from idea to business model, scale, and sustainable growth.",
    intro:
      "Helping founders move from idea to business model, market entry, scale, and sustainable growth.",
    heroImage: "/assets/industries/startups.jpg",
    overview: [
      "Startups face crucial execution milestones—from defining product-market fit to securing growth capital.",
      "We support founders across business modeling, go-to-market strategies, funding readiness, finance, talent acquisition, and market expansion.",
    ],
    keySolutions: [
      {
        title: "Business Model & Go-to-Market",
        description: "Refine value propositions, unit economics, and scalable market launch frameworks.",
        icon: "fa-solid fa-rocket",
      },
      {
        title: "Funding Readiness & Finance",
        description: "Prepare financial models, investor pitch decks, and governance practices for fundraising.",
        icon: "fa-solid fa-[#2C466D] fa-coins",
      },
      {
        title: "Talent, Leadership & Tech Scale",
        description: "Build agile executive teams, robust tech architectures, and international scaling roadmaps.",
        icon: "fa-solid fa-chart-line",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((item) => item.slug === slug);
}