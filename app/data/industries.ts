export interface IndustrySolution {
  title: string;
  description: string;
  icon?: string;
}

/** Rich content blocks — all optional so basic industries still work */
export interface LandscapeItem {
  title: string;
  description: string;
}

export interface ChallengeGroup {
  question: string;
  items: string[];
}

export interface DetailedSolution {
  number: number;
  title: string;
  description: string;
  question?: string;
  areas?: string[];
  outcome?: string;
}

export interface IndustrySEO {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
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

  // ---- Optional rich content (industry pages that have full copy) ----
  eyebrow?: string;
  h1?: string;
  primaryCta?: string;
  secondaryCta?: string;
  landscapeTitle?: string;
  landscape?: LandscapeItem[];
  challengesTitle?: string;
  challenges?: ChallengeGroup[];
  solutions?: DetailedSolution[];
  seo?: IndustrySEO;
}

/* ---------- helpers to keep the data compact ---------- */
const list = (s: string) => s.split(" • ").map((x) => x.trim());
const ch = (question: string, items: string): ChallengeGroup => ({ question, items: list(items) });
const sol = (
  number: number,
  title: string,
  description: string,
  areas?: string,
  outcome?: string,
  question?: string,
): DetailedSolution => ({ number, title, description, areas: areas ? list(areas) : undefined, outcome, question });

export const industries: Industry[] = [
  /* 1 ─────────────── BFSI ─────────────── */
  {
    slug: "banking-and-financial-services",
    number: 1,
    title: "Banking & Financial Services",
    tagline: "Navigating technology, risk, customer experience, and workforce priorities.",
    intro:
      "The Banking, Financial Services and Insurance sector operates at the intersection of technology, trust, regulation, capital, people and customer experience. Intellidea brings strategy, technology, AI, people, risk, finance, capability and execution together to help BFSI organizations create measurable business impact.",
    heroImage: "/assets/finance-industries.jpg",
    overview: [],
    keySolutions: [],
    eyebrow: "Banking • Financial Services • Insurance",
    h1: "Transforming Financial Services for a More Digital, Intelligent & Resilient Future.",
    primaryCta: "Explore BFSI Solutions",
    secondaryCta: "Talk to an Intellidea Advisor",
    landscapeTitle: "The BFSI Landscape Is Changing",
    landscape: [
      { title: "Digital Customer Experience", description: "Simpler, faster and more personalized customer journeys across channels." },
      { title: "Artificial Intelligence", description: "Moving from AI experimentation to practical applications in operations, service, risk and decision support." },
      { title: "Cybersecurity & Digital Risk", description: "Strengthening resilience as digital operations and threat environments evolve." },
      { title: "Regulatory & Compliance", description: "Effective governance and compliance without unnecessary operational complexity." },
      { title: "Workforce Transformation", description: "The skills, roles and leadership required for a technology-enabled environment." },
      { title: "Operational Efficiency", description: "Better processes, productivity and cost structures while maintaining service quality." },
      { title: "New Growth Opportunities", description: "New markets, products, partnerships and technology-enabled revenue." },
      { title: "Trust & Resilience", description: "Protecting customer confidence, reputation, data and business continuity." },
    ],
    challengesTitle: "What Is Your BFSI Challenge? We Start With the Business Question.",
    challenges: [
      ch("How do we grow?", "Enter a new market • Expand distribution • Develop new revenue streams • Build strategic partnerships • Improve customer acquisition and retention"),
      ch("How do we transform?", "Modernize operating models • Improve processes • Transform customer experience • Digitize business operations • Improve organizational performance"),
      ch("How do we leverage AI?", "Identify high-value AI opportunities • Develop an AI strategy • Deploy Generative AI • Automate processes • Improve customer interactions • Build AI capability • Establish responsible AI governance"),
      ch("How do we manage risk?", "Strengthen cybersecurity • Improve cyber-risk visibility • Strengthen GRC • Improve data protection and privacy • Enhance business continuity • Improve compliance readiness"),
      ch("How do we build the right workforce?", "Acquire specialized talent • Build flexible workforce models • Transform HR • Develop leaders • Build digital and AI capabilities • Improve workforce productivity"),
      ch("How do we improve performance?", "Improve operating efficiency • Strengthen financial visibility • Optimize costs • Improve management reporting • Strengthen governance • Align performance with strategy"),
    ],
    solutions: [
      sol(1, "Growth & Market Expansion", "Support organizations seeking to identify and pursue new growth opportunities.", "Growth Strategy • Market Assessment • Market Entry • Geographic Expansion • New Business Models • Go-to-Market Strategy • Strategic Partnerships • Business Development • Ecosystem Development", "Greater clarity around where and how to grow."),
      sol(2, "Business & Operating Model Transformation", "Translate strategic ambition into practical transformation.", "Business Transformation • Operating Model Design • Process Transformation • Performance Improvement • Organization Transformation • Transformation Roadmaps • Change Enablement • Transformation Governance", "A more aligned, effective and execution-focused organization."),
      sol(3, "AI & Intelligent Financial Services", "Move beyond AI experimentation toward practical business value.", "AI Readiness Assessment • AI Strategy • Generative AI • AI Use-Case Identification • Intelligent Automation • Customer Service & Conversational AI • AI Productivity • Functional AI Applications • AI Adoption & Capability Building • Responsible AI & Governance", "A structured path from AI opportunity to responsible implementation."),
      sol(4, "Digital & Technology Transformation", "Align technology investments with business priorities.", "Technology Strategy • Digital Transformation • Technology Assessment • Technology Modernization • Data & Analytics • Automation • Digital Operating Models • Digital Customer Experience • Technology Roadmaps", "Technology decisions connected to measurable business outcomes."),
      sol(5, "Customer Experience Transformation", "Create customer experiences that combine technology, people and process.", "Customer Journey Assessment • Digital Customer Experience • Conversational AI • Process Simplification • Service Transformation • Customer Analytics • Automation • Workforce Enablement", "More connected customer journeys and stronger service capability."),
      sol(6, "Workforce & HR Transformation", "Build the workforce required for a rapidly changing BFSI environment.", "Talent Acquisition • Specialist Hiring • Contract-to-Hire • Temporary & Contract Staffing • Workforce Solutions • HR Advisory • Fractional CHRO • HR Retainer Services • HR Transformation • HR Technology / HRIMS • Interview & Assessment Services • Leadership Development", "Access to the right talent, capabilities and workforce models."),
      sol(7, "Risk, Cybersecurity & Compliance", "Build resilience into the business rather than treating risk as an afterthought.", "Cyber Risk Assessment • Cybersecurity Advisory • Governance, Risk & Compliance • Information Security • Data Protection & Privacy • Regulatory & Compliance Advisory • Business Continuity • Security Awareness • Risk Frameworks • Resilience Planning", "Better visibility, stronger controls and greater organizational resilience."),
      sol(8, "Finance, Governance & Performance", "Strengthen the financial and governance foundations behind better decisions.", "Financial Advisory • Business Planning • Management Reporting • Performance Management • Cost Optimization • Internal Controls • Governance Frameworks • Board & Leadership Advisory • Business Diagnostics", "Better visibility, accountability and decision-making."),
      sol(9, "Capability & Leadership Development", "Build the human capabilities required to sustain transformation.", "Executive Development • Leadership Programs • AI & Generative AI Capability • Digital Skills • Manager Development • Future Skills • Business Skills • Coaching & Mentoring • Corporate Learning • Capability Academies", "Transformation that becomes embedded in organizational capability."),
      sol(10, "Managed Workforce & Business Operations", "Access specialist capabilities without having to build every capability internally.", "Talent Acquisition Services • Payroll Processing • HRIMS / HR Technology • Interview Panel Assessment • Contract-to-Hire • Temporary Staffing • HR Retainer • Fractional Leadership • Specialist Advisory • Business Support", "Flexible access to capability, continuity and scalable operational support."),
    ],
    seo: {
      title: "BFSI Consulting & Business Transformation Solutions | Intellidea",
      description: "Intellidea helps banks, financial services companies, insurers and FinTechs address growth, AI, digital transformation, workforce, cybersecurity, risk, governance and performance challenges.",
      keywords: list("BFSI consulting • banking consulting • financial services consulting • insurance consulting • fintech consulting • BFSI transformation • AI in banking • banking digital transformation • financial services strategy • insurance transformation • BFSI cybersecurity • BFSI workforce solutions • financial services AI consulting"),
      ogTitle: "BFSI Solutions | Strategy, AI, Technology, Workforce & Risk | Intellidea",
      ogDescription: "Multidisciplinary BFSI solutions combining strategy, technology, AI, workforce, risk, finance, capability and execution to help financial services organizations create measurable impact.",
    },
  },

  /* 2 ─────────────── Healthcare ─────────────── */
  {
    slug: "healthcare-and-life-sciences",
    number: 2,
    title: "Healthcare & Life Sciences",
    tagline: "Addressing technology, workforce, compliance, and operational growth challenges.",
    intro:
      "Healthcare and life sciences organizations must continuously balance quality, efficiency, innovation, compliance, technology adoption, talent and sustainable growth. Intellidea brings together strategy, technology, AI, people, risk, finance, learning and specialist expertise to help them navigate complexity and build capabilities for what comes next.",
    heroImage: "/assets/healthcare.jpg",
    overview: [],
    keySolutions: [],
    eyebrow: "Healthcare • Life Sciences • Pharmaceuticals",
    h1: "Transform Healthcare. Accelerate Life Sciences. Create Sustainable Impact.",
    primaryCta: "Explore Healthcare & Life Sciences Solutions",
    secondaryCta: "Talk to an Intellidea Advisor",
    landscapeTitle: "A Sector Being Reimagined",
    landscape: [
      { title: "Digital Healthcare", description: "Technology is changing how organizations engage patients, manage operations and deliver services." },
      { title: "Artificial Intelligence", description: "AI creates opportunities across clinical and non-clinical workflows, research, operations and knowledge management." },
      { title: "Data & Analytics", description: "Turning complex data into insight while maintaining privacy, security and governance." },
      { title: "Workforce Transformation", description: "Specialized skills alongside changing roles, technologies and operating models." },
      { title: "Regulatory & Compliance Complexity", description: "Highly regulated environments where governance, quality and privacy are critical." },
      { title: "Operational Efficiency", description: "Improving productivity and processes under resource pressure without compromising quality." },
      { title: "Innovation & Commercialization", description: "Connecting scientific innovation with business strategy and market opportunity." },
      { title: "Sustainable Growth", description: "Balancing financial performance, responsible practices and stakeholder expectations." },
    ],
    challengesTitle: "What Is Your Healthcare or Life Sciences Challenge?",
    challenges: [
      ch("“We want to transform our organization.”", "Business Transformation • Operating Model Transformation • Process Improvement • Digital Transformation • Performance Improvement • Change Management • Transformation Roadmaps"),
      ch("“We want to use AI.”", "AI Readiness • AI Strategy • Generative AI • AI Use-Case Identification • Intelligent Automation • Knowledge Management • AI Capability Building • Responsible AI & Governance"),
      ch("“We need to improve operational performance.”", "Process Assessment • Operating Model Review • Productivity Improvement • Cost Optimization • Performance Management • Management Reporting • Technology Enablement"),
      ch("“We need the right people and capabilities.”", "Talent Acquisition • Specialist Recruitment • Contract-to-Hire • Workforce Solutions • HR Transformation • HR Technology / HRIMS • Leadership Development • Capability Building"),
      ch("“We need to strengthen risk and compliance.”", "Cyber Risk • Information Security • Data Protection & Privacy • GRC • Regulatory Advisory • Business Continuity • Security Awareness • Resilience"),
      ch("“We want to grow.”", "Growth Strategy • Market Assessment • Market Entry • New Business Models • Commercial Strategy • Go-to-Market • Strategic Partnerships • Geographic Expansion"),
    ],
    solutions: [
      sol(1, "Healthcare & Life Sciences Strategy", "Translate organizational ambition into practical strategic priorities.", "Corporate & Business Strategy • Growth Strategy • Business Planning • Operating Model Strategy • Transformation Strategy • Performance Improvement • Strategic Prioritization • Implementation Roadmaps", "Greater clarity around priorities, opportunities and the path forward."),
      sol(2, "Healthcare Digital Transformation", "Connect technology decisions to operational and organizational outcomes.", "Digital Transformation Strategy • Technology Assessment • Technology Modernization • Digital Operating Models • Data & Analytics • Intelligent Automation • Digital Experience • Process Digitization", "A more connected approach to technology-enabled transformation."),
      sol(3, "AI & Generative AI for Healthcare and Life Sciences", "Move from AI curiosity to practical and responsible application. The objective is not simply to introduce AI, but to identify where it creates meaningful value.", "AI Readiness Assessment • AI Strategy • Generative AI • AI Use-Case Discovery • Business Process AI • Knowledge & Information Applications • Conversational AI • Workforce Productivity • AI Capability Building • AI Governance", "A structured path from AI opportunity identification to adoption and scale."),
      sol(4, "Life Sciences & Pharmaceutical Business Transformation", "Support life sciences and pharmaceutical organizations through business, operational and organizational transformation.", "Business Transformation • Operating Model Design • Process Transformation • Commercial Strategy • Performance Improvement • Digital Enablement • Workforce Transformation • Change Management • Capability Building", "Better alignment between strategy, operating capability and business objectives."),
      sol(5, "Healthcare Workforce & HR Transformation", "Healthcare depends on people, so building the right workforce is a strategic priority.", "Workforce Strategy • Talent Acquisition • Specialist Recruitment • Contract-to-Hire • Temporary & Contract Staffing • HR Advisory • Fractional CHRO • HR Retainer Services • HR Technology / HRIMS • Interview & Assessment Services • Leadership Development", "The talent, workforce models and capabilities required for growth and transformation."),
      sol(6, "Leadership & Capability Development", "Build capabilities that allow transformation to continue beyond the consulting engagement.", "Healthcare Leadership Development • Life Sciences Leadership • Executive Development • Manager Development • AI & Generative AI Capability • Digital Skills • Future Skills • Coaching & Mentoring • Capability Academies", "Stronger leaders and a workforce better prepared for changing requirements."),
      sol(7, "Risk, Cybersecurity, Privacy & Compliance", "Strengthen resilience in increasingly digital and regulated environments.", "Cyber Risk Assessment • Cybersecurity Advisory • Information Security • Data Protection & Privacy • GRC • Regulatory & Compliance Advisory • Business Continuity • Security Awareness • Risk Frameworks • Resilience Planning", "Greater risk visibility, stronger controls and improved resilience."),
      sol(8, "Finance, Governance & Performance", "Strengthen the foundations behind effective decision-making.", "Financial Advisory • Business Planning • Management Reporting • Performance Management • Cost Optimization • Internal Controls • Governance Frameworks • Board & Leadership Advisory • Business Diagnostics", "Better visibility, accountability and performance management."),
      sol(9, "Growth, Market Entry & Commercial Strategy", "Help organizations evaluate and pursue new opportunities.", "Growth Strategy • Market Assessment • Market Entry • Geographic Expansion • Go-to-Market Strategy • Commercial Strategy • New Revenue Models • Strategic Partnerships • Business Development • Ecosystem Development", "Clarity around market opportunities and pathways to sustainable growth."),
      sol(10, "Managed Workforce & Business Operations", "Access specialist capabilities when and where they are required.", "Talent Acquisition Services • Payroll Processing • HRIMS / HR Technology • Interview Panel Assessment • Contract-to-Hire • Temporary Staffing • HR Retainer • Fractional Leadership • Specialist Advisory • Business Support", "Flexible operational capability without building everything internally."),
    ],
    seo: {
      title: "Healthcare & Life Sciences Consulting | AI, Digital, HR & Transformation | Intellidea",
      description: "Intellidea helps healthcare, pharmaceutical, life sciences and healthtech organizations with strategy, AI, digital transformation, workforce, cybersecurity, risk, capability and growth.",
      keywords: list("healthcare consulting • healthcare transformation • healthcare AI consulting • life sciences consulting • pharmaceutical consulting • pharma digital transformation • healthcare technology consulting • healthcare workforce solutions • healthtech consulting • healthcare strategy • life sciences AI • healthcare cybersecurity • healthcare HR consulting"),
      ogTitle: "Healthcare & Life Sciences Solutions | Intellidea",
      ogDescription: "Multidisciplinary healthcare and life sciences solutions combining strategy, AI, technology, workforce, risk, finance, capability and execution.",
    },
  },

  /* 3 ─────────────── Pharmaceuticals (basic – no detailed copy yet) ─────────────── */
  {
    slug: "pharmaceuticals",
    number: 3,
    title: "Pharmaceuticals",
    tagline: "Supporting capability development, digital adoption, and business operations.",
    intro:
      "Supporting pharmaceutical organizations across capability development, digital transformation, AI adoption, workforce, and business operations.",
    heroImage: "/assets/Pharmaceuticals.jpg",
    overview: [
      "Pharma enterprises require high precision in execution, regulatory oversight, and continuous capability upgrades.",
      "We assist pharma leaders in optimizing supply chains, modernizing operations, and adopting digital tools for sustainable growth.",
    ],
    keySolutions: [
      { title: "AI Adoption & Digital Operations", description: "Harness AI and modern technology to optimize research, operational pipelines, and commercial workflows.", icon: "fa-solid fa-pills" },
      { title: "Workforce Capability & Execution", description: "Develop technical capabilities and operational excellence across specialized pharmaceutical teams.", icon: "fa-solid fa-flask-vial" },
    ],
  },

  /* 4 ─────────────── Technology ─────────────── */
  {
    slug: "technology-and-it-services",
    number: 4,
    title: "Technology & IT Services",
    tagline: "Helping technology organizations scale people, products, operations, and markets.",
    intro:
      "Technology companies are not only building the future — they are being reshaped by it. Intellidea brings together strategy, AI, technology, people, finance, risk, learning and specialist expertise to help technology organizations transform, scale and create sustainable competitive advantage.",
    heroImage: "/assets/tech-it.jpg",
    overview: [],
    keySolutions: [],
    eyebrow: "Technology • IT Services • Software • Digital Businesses",
    h1: "Turn Technology Disruption Into Business Advantage.",
    primaryCta: "Explore Technology & IT Solutions",
    secondaryCta: "Talk to an Intellidea Advisor",
    landscapeTitle: "Technology Businesses Are at an Inflection Point",
    landscape: [
      { title: "AI Is Reshaping Technology", description: "AI influences software development, customer service, testing, operations and delivery." },
      { title: "Traditional Services Are Being Reimagined", description: "IT services must demonstrate business outcomes, not just effort or utilization." },
      { title: "Talent Models Are Changing", description: "Access to scarce skills while managing new roles and productivity expectations." },
      { title: "Customers Expect More Value", description: "Buyers expect measurable outcomes, speed, flexibility and strategic partnership." },
      { title: "Competition Is Expanding", description: "New platforms, startups and AI-native businesses can change dynamics quickly." },
      { title: "Technology Debt Can Limit Growth", description: "Legacy systems, fragmented architectures and disconnected data restrict innovation." },
      { title: "Cybersecurity Is Business-Critical", description: "Protecting systems, data, IP, customers and business continuity." },
      { title: "Growth Requires Operating Discipline", description: "Scaling needs alignment across strategy, sales, delivery, talent, finance and governance." },
    ],
    challengesTitle: "What Is Your Technology Business Challenge?",
    challenges: [
      ch("“We need to grow.”", "Growth Strategy • Market Expansion • New Revenue Models • Go-to-Market Strategy • Product & Service Strategy • Strategic Partnerships • Geographic Expansion"),
      ch("“AI is changing our business. What should we do?”", "AI Readiness • AI Strategy • Generative AI • AI Use-Case Prioritization • AI Product Opportunities • AI-Enabled Services • AI Governance • Workforce AI Capability"),
      ch("“We need to transform our IT services business.”", "Business Transformation • Operating Model Transformation • Service Portfolio Transformation • Delivery Transformation • Performance Improvement • Change Management"),
      ch("“We need better technology.”", "Technology Strategy • Technology Assessment • Technology Modernization • Architecture Review • Cloud Strategy • Data & Analytics • Digital Platforms • Technology Roadmaps"),
      ch("“We need the right talent.”", "Technology Talent Acquisition • Specialist Recruitment • Contract-to-Hire • Workforce Solutions • HR Transformation • HRIMS • Leadership Development • Managed Workforce"),
      ch("“We need to improve profitability.”", "Performance Improvement • Cost Optimization • Productivity Improvement • Operating Model Review • Business Planning • Management Reporting • Financial Advisory"),
      ch("“We need to strengthen our resilience.”", "Cyber Risk • Cybersecurity Advisory • GRC • Information Security • Data Protection & Privacy • Business Continuity • Resilience Planning"),
    ],
    solutions: [
      sol(1, "Technology Business Strategy", "Connect technology capabilities with business ambition.", "Corporate & Business Strategy • Growth Strategy • Product & Service Strategy • Market Assessment • Business Planning • Operating Model Strategy • Performance Improvement • Strategic Roadmaps", "Clarity around where to compete, how to differentiate and where to invest."),
      sol(2, "AI Strategy & Transformation", "Move from AI experimentation to an enterprise-wide approach. AI can change what technology firms offer, how they deliver and how they compete.", "AI Readiness Assessment • AI Strategy • Generative AI • AI Use-Case Discovery • AI Portfolio Prioritization • AI-Enabled Products & Services • Intelligent Automation • AI Adoption • Responsible AI & Governance", "A practical path from AI opportunity to measurable business value."),
      sol(3, "Digital & Technology Transformation", "Modernize technology while keeping business outcomes at the center.", "Technology Strategy • Digital Transformation • Technology Modernization • Cloud Strategy • Data & Analytics • Automation • Digital Platforms • Digital Operating Models • Technology Roadmaps", "Architecture and investment aligned with strategic priorities."),
      sol(4, "IT Services Transformation", "Help technology service providers evolve their business and delivery models.", "Service Portfolio Review • IT Services Strategy • Operating Model Transformation • Delivery Model Transformation • Productivity Improvement • Automation • AI-Enabled Service Delivery • Customer Experience Transformation", "A more scalable, differentiated and outcome-oriented services business."),
      sol(5, "Product & Platform Strategy", "Identify opportunities to strengthen or create products and platforms.", "Product Strategy • Platform Strategy • Product Portfolio Assessment • Market Opportunity Assessment • Customer Value Proposition • Go-to-Market Strategy • Commercial Model • AI-Enabled Product Opportunities", "Better alignment between product investment, customer need and market opportunity."),
      sol(6, "Technology Workforce & Talent", "Build workforce models aligned with changing technology requirements.", "Technology Talent Acquisition • Specialist Hiring • Contract-to-Hire • Temporary & Contract Staffing • HR Advisory • Fractional CHRO • HR Retainer • HRIMS • Interview & Assessment Services • Leadership Development", "Faster access to critical skills and more flexible workforce capacity."),
      sol(7, "Cybersecurity, Risk & Resilience", "Protect technology businesses against operational, cyber and information risks.", "Cyber Risk Assessment • Cybersecurity Advisory • Information Security • GRC • Data Protection & Privacy • Regulatory & Compliance Advisory • Business Continuity • Risk Frameworks • Resilience Planning", "Greater visibility and stronger foundations for secure growth."),
      sol(8, "Finance, Performance & Governance", "Build the financial and management discipline required for sustainable growth.", "Financial Advisory • Business Planning • Management Reporting • Performance Management • Cost Optimization • Internal Controls • Governance Frameworks • Board & Leadership Advisory • Business Diagnostics", "Better visibility into profitability, performance and strategic decisions."),
      sol(9, "Market Expansion & Growth", "Support technology companies entering new markets or creating new growth engines.", "Market Entry • Geographic Expansion • Growth Strategy • Go-to-Market • New Revenue Models • Strategic Partnerships • Alliances • Business Development • Ecosystem Development • Commercial Strategy", "More structured and informed pathways to expansion."),
      sol(10, "Managed Technology Workforce & Business Support", "Access capabilities without permanent internal capacity for every function.", "Technology Talent Acquisition • Specialist Staffing • Contract-to-Hire • Temporary Workforce • Payroll Processing • HR Technology • Interview & Assessment Services • HR Retainer • Fractional Leadership • Business Support", "Flexible, scalable access to people and operational capabilities."),
    ],
    seo: {
      title: "Technology & IT Services Consulting | AI, Digital & Business Transformation | Intellidea",
      description: "Intellidea helps technology and IT services organizations with business strategy, AI, digital transformation, talent, cybersecurity, operating models, growth and performance improvement.",
      keywords: list("technology consulting • IT services consulting • IT transformation • technology business strategy • AI consulting • digital transformation consulting • IT services transformation • SaaS consulting • technology workforce solutions • technology talent consulting • IT operating model • AI strategy consulting • technology growth strategy • IT business transformation"),
      ogTitle: "Technology & IT Services Solutions | Strategy, AI, Talent & Transformation | Intellidea",
      ogDescription: "Helping technology and IT services organizations connect strategy, AI, technology, people, risk, finance, capability and execution to create sustainable competitive advantage.",
    },
  },

  /* 5 ─────────────── Education ─────────────── */
  {
    slug: "education-and-edtech",
    number: 5,
    title: "Education & EdTech",
    tagline: "Building future-ready learning ecosystems and institutional leadership.",
    intro:
      "Education is being reshaped by technology, AI, changing learner expectations and evolving workforce needs. We don't start with a service — we start with the outcome you want to create, connecting strategy, AI, technology, people, learning, finance, risk and execution.",
    heroImage: "/assets/education-edtech.jpg",
    overview: [],
    keySolutions: [],
    eyebrow: "Education • EdTech • Learning • Skills • Capability",
    h1: "Transform Education. Scale Learning. Build Future-Ready Capability.",
    primaryCta: "Explore Education Solutions",
    secondaryCta: "Talk to an Intellidea Education & EdTech Advisor",
    landscapeTitle: "Education Is at an Inflection Point",
    landscape: [
      { title: "AI Is Changing Learning", description: "Generative AI influences teaching, assessment, content creation and learner support." },
      { title: "Learner Expectations Are Evolving", description: "Flexible, personalized, technology-enabled and outcome-oriented experiences." },
      { title: "Employability Matters More", description: "Connecting education with practical skills, careers and industry requirements." },
      { title: "Digital Models Are Expanding", description: "Physical, digital, blended, cohort-based and on-demand delivery." },
      { title: "Competition Is Increasing", description: "Institutions, EdTechs, global platforms and specialists compete for learners and talent." },
      { title: "Technology Creates Opportunity and Complexity", description: "Value comes only when technology aligns with business and educational objectives." },
      { title: "Faculty & Workforce Capability", description: "Technology cannot replace capable educators, leaders and support teams." },
      { title: "Sustainable Growth Needs More Than Enrollment", description: "Outcomes, retention, employability, efficiency and financial sustainability." },
    ],
    challengesTitle: "What Is Your Education or EdTech Challenge?",
    challenges: [
      ch("“We want to grow.”", "Market expansion • New programs • New learner segments • Go-to-market strategy • Partnerships • New revenue models"),
      ch("“We need to improve learner experience.”", "Learner journeys • Digital experience • Personalization • AI-enabled support • Engagement • Retention • Feedback"),
      ch("“We want to use AI effectively.”", "AI readiness • Generative AI • AI use cases • Faculty productivity • Learner support • Assessment • Automation • Responsible AI"),
      ch("“We need to modernize our technology.”", "Technology strategy • Learning platforms • Data & analytics • Digital infrastructure • Automation • Integration"),
      ch("“We need better learning outcomes.”", "Curriculum relevance • Skills mapping • Assessment • Employability • Faculty capability • Learning analytics • Industry alignment"),
      ch("“We need the right people.”", "Faculty hiring • Specialist talent • Workforce solutions • Contract-to-hire • HR transformation • Leadership • Capability development"),
      ch("“Our costs are increasing.”", "Operating model • Productivity • Process improvement • Automation • Workforce optimization • Financial visibility • Performance management"),
      ch("“We need to strengthen resilience.”", "Cybersecurity • Data protection • Governance • Regulatory compliance • Business continuity • Risk management • Security awareness"),
    ],
    solutions: [
      sol(1, "Education Strategy & Institutional Transformation", "We help leadership teams translate ambition into priorities across strategy, programs, operating models, technology, people and growth.", "Institutional strategy • Business strategy • Operating model • Program portfolio • Performance improvement • Transformation roadmaps", "Greater strategic clarity and stronger alignment between educational purpose and organizational performance.", "Where should our institution or education business go next?"),
      sol(2, "EdTech Business & Growth Strategy", "We help EdTech and learning businesses evaluate markets, offerings, learner segments, commercial models and growth opportunities.", "Market assessment • Product/service strategy • Business models • Go-to-market • Partnerships • New revenue opportunities • Geographic expansion", "A clearer path toward differentiated, commercially sustainable growth.", "How do we build a differentiated and scalable EdTech business?"),
      sol(3, "AI-Enabled Education & Learning", "AI can extend well beyond chatbots — improving learner support, faculty productivity, content, assessment, administration and decisions. It should help educators create better outcomes, not simply automate education.", "AI readiness • Generative AI • AI use-case portfolio • Personalized learning • AI-enabled content • Assessment • Automation • AI adoption • Responsible AI", "A practical roadmap from AI experimentation to responsible, measurable adoption.", "Where can AI create meaningful value across learning and operations?"),
      sol(4, "Digital Learning & Technology Transformation", "We align technology decisions with learner needs, academic objectives and operating realities.", "Digital strategy • Learning technology • Platform assessment • Data & analytics • Automation • Digital experience • Technology modernization • Integration", "A more connected, scalable and purpose-driven digital learning environment.", "How should our learning ecosystem evolve?"),
      sol(5, "Learner Experience & Engagement Transformation", "We look across the learner lifecycle rather than treating touchpoints in isolation.", "Learner journey • Discovery • Enrollment • Onboarding • Learning experience • Engagement • Support • Retention • Career transition", "More coherent learner experiences and stronger engagement and retention.", "How do we create a better learner journey?"),
      sol(6, "Workforce, Faculty & HR Transformation", "Education depends on a diverse workforce — from educators and academic leaders to technology, operations, sales and support teams.", "Talent acquisition • Faculty hiring • Specialist recruitment • Contract-to-hire • Workforce solutions • HR advisory • HR technology • Leadership • Capability", "The right talent today while building workforce capability for tomorrow.", "Do we have the people and capabilities required for the future?"),
      sol(7, "Learning, Leadership & Capability Development", "Through IntelliWise, organizations can develop capabilities across leadership, AI, technology, business, future skills and employability.", "Leadership • AI capability • Digital skills • Future skills • Faculty development • Manager capability • Business skills • Career readiness • Coaching & mentoring", "Learning that moves beyond knowledge toward application, capability and performance.", "How do we build future-ready people?"),
      sol(8, "Cybersecurity, Data Protection & Institutional Resilience", "Education increasingly depends on digital systems and data, so resilience must be considered alongside transformation.", "Cyber risk • Information security • Data protection & privacy • GRC • Compliance • Business continuity • Security awareness", "Greater visibility, stronger controls and improved resilience.", "Can our digital education ecosystem remain trusted and resilient?"),
      sol(9, "Financial Performance & Institutional Governance", "We connect financial and operational perspectives to help leadership understand performance and make better decisions.", "Business planning • Financial advisory • Management reporting • Performance management • Cost optimization • Internal controls • Governance", "Better visibility into performance, priorities and resource allocation.", "Are we creating sustainable educational and business value?"),
      sol(10, "Managed Education Workforce & Business Operations", "Flexible access to specialist capabilities where you need additional capacity, expertise or operational support.", "Talent acquisition • Staffing • Contract-to-hire • Payroll • HR technology • Assessment • Specialist expertise • HR retainers • Fractional leadership • Business support", "Flexible access to capability without building everything internally.", "Which capabilities should we access rather than build internally?"),
    ],
    seo: {
      title: "Education & EdTech Consulting | AI, Digital, Workforce & Transformation | Intellidea",
      description: "Intellidea helps education institutions, EdTech and learning organizations with strategy, AI, digital transformation, learner experience, workforce, capability, cybersecurity, growth and performance.",
      keywords: list("Education consulting • EdTech consulting • education transformation • education strategy consulting • EdTech strategy • AI in education consulting • digital transformation education • learner experience consulting • education technology consulting • education workforce solutions • EdTech business strategy • learning transformation • education AI strategy"),
      ogTitle: "Education & EdTech Solutions | Strategy, AI, Technology & Capability | Intellidea",
      ogDescription: "Helping education institutions, EdTech and learning organizations connect strategy, AI, technology, people, learning, risk, finance and execution to create sustainable impact.",
    },
  },

  /* 6 ─────────────── Manufacturing ─────────────── */
  {
    slug: "manufacturing",
    number: 6,
    title: "Manufacturing",
    tagline: "Improving productivity, technology adoption, and operational resilience.",
    intro:
      "Manufacturers need to improve productivity without compromising quality, adopt technology without unnecessary complexity, and strengthen resilience while controlling costs. We don't start with a technology — we start with the business outcome.",
    heroImage: "/assets/manufacturing.avif",
    overview: [],
    keySolutions: [],
    eyebrow: "Manufacturing • Industrial Businesses • Engineering • Supply Chain",
    h1: "Build Smarter Operations. Compete With Confidence. Create Sustainable Growth.",
    primaryCta: "Explore Manufacturing Solutions",
    secondaryCta: "Talk to an Intellidea Manufacturing Advisor",
    landscapeTitle: "Manufacturing Is at an Inflection Point",
    landscape: [
      { title: "AI Is Moving Into the Factory", description: "Production planning, quality, predictive maintenance, supply chains and engineering." },
      { title: "Industry 4.0 Is a Business Question", description: "The business case must come before the technology investment." },
      { title: "Supply Chains Need Resilience", description: "Visibility into suppliers, dependencies, inventory, logistics and disruption." },
      { title: "Productivity Remains Critical", description: "Margins hinge on materials, energy, labour, downtime and quality losses." },
      { title: "Customers Expect More", description: "Quality, responsiveness, customization, reliability and shorter cycles." },
      { title: "Workforce Models Are Changing", description: "Operators, engineers, data specialists and leaders in increasingly digital environments." },
      { title: "Cybersecurity Is Operational Resilience", description: "Connected plants, suppliers and equipment raise new cyber considerations." },
      { title: "Sustainability Is Operational", description: "Energy efficiency, emissions and responsible sourcing shape decisions." },
    ],
    challengesTitle: "What Is Your Manufacturing Challenge?",
    challenges: [
      ch("“We need to improve productivity.”", "Operational diagnostics • Process improvement • Automation • AI • Workforce productivity • Performance management • Cost optimization"),
      ch("“We want to adopt AI.”", "AI readiness • Use-case identification • Predictive analytics • Intelligent automation • Quality • Maintenance • Planning • Responsible AI"),
      ch("“We need a smarter factory.”", "Industry 4.0 • Industrial IoT • Digital operations • Automation • Data & analytics • Technology assessment • Connected processes"),
      ch("“Our supply chain needs to become more resilient.”", "Supply-chain assessment • Demand visibility • Supplier risk • Planning • Inventory • Logistics • Digital enablement"),
      ch("“We need to reduce costs without compromising growth.”", "Operating model • Productivity • Process transformation • Workforce optimization • Cost diagnostics • Financial performance"),
      ch("“We need better talent and capabilities.”", "Specialist recruitment • Engineering & technology talent • Contract-to-hire • Workforce solutions • Leadership • HR transformation"),
      ch("“We need to enter new markets.”", "Market assessment • Growth strategy • Geographic expansion • Go-to-market • Partnerships • Commercial strategy"),
      ch("“We need to strengthen resilience.”", "Cybersecurity • Operational risk • Data protection • Governance • Business continuity • Regulatory requirements"),
    ],
    solutions: [
      sol(1, "Manufacturing Strategy & Transformation", "We help leadership teams connect strategic ambition with operating priorities.", "Business strategy • Operating model • Transformation roadmap • Performance improvement • Growth priorities • Strategic initiatives", "Clearer priorities and a practical path from strategic intent to execution.", "How should the business compete and evolve?"),
      sol(2, "Smart Manufacturing & Industry 4.0", "The objective is not to make a factory more digital, but to make the business more intelligent, responsive and productive.", "Industry 4.0 • Industrial IoT • Connected operations • Automation • Digital processes • Data & analytics • Technology assessment", "A prioritized roadmap for technology-enabled operational improvement.", "How can connected technology improve our operations?"),
      sol(3, "AI for Manufacturing", "AI can be applied across the value chain — from engineering and production to supply chain, service and enterprise functions.", "AI readiness • Generative AI • Predictive analytics • Predictive maintenance • Quality intelligence • Production planning • Knowledge management • Intelligent automation", "A practical AI portfolio linked to business priorities rather than isolated experimentation.", "Where can AI create measurable business value?"),
      sol(4, "Operations & Performance Transformation", "We identify the operational constraints that limit productivity, quality, responsiveness or profitability.", "Operating model • Process improvement • Productivity • Performance management • Automation • Cost optimization • Transformation execution", "Greater operational visibility and a focused improvement agenda.", "How do we improve operational performance?"),
      sol(5, "Supply Chain & Resilience", "We look across supply, planning, inventory, logistics, suppliers and technology to identify dependencies and opportunities.", "Supply-chain strategy • Supplier ecosystem • Risk visibility • Demand & planning • Inventory • Logistics • Digital enablement • Resilience", "Better visibility and greater ability to respond to disruption.", "How do we make our supply chain more responsive and resilient?"),
      sol(6, "Workforce & Manufacturing Talent", "Modern manufacturing requires domain knowledge, engineering, technology, data, leadership and operational capability.", "Talent acquisition • Specialist hiring • Contract-to-hire • Temporary workforce • Workforce solutions • HR transformation • Leadership • Capability building", "Faster access to critical talent alongside longer-term workforce capability.", "Do we have the workforce required for the next generation of manufacturing?"),
      sol(7, "Digital Engineering, Data & Technology", "We assess technology priorities in the context of operational and commercial objectives.", "Technology strategy • Digital transformation • Data & analytics • Automation • Technology modernization • Digital platforms • Integration", "Technology priorities connected to operational and business value.", "Is our technology environment enabling the business — or constraining it?"),
      sol(8, "Cybersecurity, Risk & Operational Resilience", "Digital manufacturing requires cybersecurity and resilience alongside technology transformation.", "Cyber risk • Information security • Data protection • GRC • Operational resilience • Business continuity • Security awareness", "Greater visibility into risk and stronger foundations for connected operations.", "Can we remain secure while becoming more connected?"),
      sol(9, "Financial Performance & Governance", "Transformation should ultimately be reflected in business performance.", "Financial planning • Management reporting • Performance management • Cost optimization • Internal controls • Governance • Business diagnostics", "Better visibility connecting operational performance with financial outcomes.", "Are operational improvements translating into business value?"),
      sol(10, "Market Expansion & Industrial Growth", "We help manufacturers evaluate new markets, customers, partnerships, products and commercial opportunities.", "Market entry • Geographic expansion • Go-to-market • New revenue models • Partnerships • Alliances • Commercial strategy • Business development", "Greater clarity around where and how to pursue sustainable growth.", "Where should we pursue the next growth opportunity?"),
    ],
    seo: {
      title: "Manufacturing Consulting | Industry 4.0, AI, Digital & Business Transformation | Intellidea",
      description: "Intellidea helps manufacturing organizations with strategy, Industry 4.0, AI, digital transformation, operations, supply chain, workforce, cybersecurity, performance and sustainable growth.",
      keywords: list("Manufacturing consulting • manufacturing transformation • Industry 4.0 consulting • manufacturing AI consulting • smart manufacturing consulting • digital manufacturing transformation • manufacturing strategy consulting • manufacturing operations consulting • supply chain consulting • manufacturing workforce solutions • industrial IoT consulting • manufacturing technology consulting • manufacturing business transformation"),
      ogTitle: "Manufacturing Solutions | Industry 4.0, AI, Operations & Workforce | Intellidea",
      ogDescription: "Helping manufacturing organizations connect strategy, operations, AI, technology, supply chain, people, risk, finance and execution to build smarter and more resilient businesses.",
    },
  },

  /* 7 ─────────────── Retail ─────────────── */
  {
    slug: "retail-and-consumer",
    number: 7,
    title: "Retail & Consumer",
    tagline: "Supporting organizations in customer experience, digital growth, and technology.",
    intro:
      "Retail and consumer businesses operate amid changing customer expectations, digital commerce, AI, pricing pressure, supply-chain complexity and intense competition. We don't start with a service — we start with the customer and business challenge.",
    heroImage: "/assets/retail-consumer.jpg",
    overview: [],
    keySolutions: [],
    eyebrow: "Retail • Consumer Products • E-commerce • Consumer Businesses",
    h1: "Create Better Customer Experiences. Build Smarter Growth.",
    primaryCta: "Explore Retail Solutions",
    secondaryCta: "Talk to an Intellidea Retail & Consumer Advisor",
    landscapeTitle: "What Is Changing?",
    landscape: [
      { title: "Customer Expectations", description: "Convenient, personalized, responsive and consistent experiences across channels." },
      { title: "Digital & Omnichannel", description: "Stores, e-commerce, marketplaces and mobile are increasingly interconnected." },
      { title: "AI Is Reshaping Retail", description: "Personalization, service, forecasting, marketing, pricing and merchandising." },
      { title: "Margin Pressure", description: "Balancing pricing, promotions, inventory, operating costs and customer value." },
      { title: "Supply Chains Are Strategic", description: "Demand visibility, sourcing, logistics and fulfillment shape experience and profit." },
      { title: "Workforce Models Are Evolving", description: "Frontline, sales, operations, technology, analytics and leadership capabilities." },
    ],
    challengesTitle: "What Is Your Challenge?",
    challenges: [
      ch("We want to grow", "Market expansion • New channels • New customer segments • Partnerships • New revenue models"),
      ch("We need better customer experience", "Customer journeys • Personalization • Digital experience • Conversational AI • Loyalty • Service transformation"),
      ch("We want to leverage AI", "GenAI • Customer service • Marketing • Demand forecasting • Merchandising • Productivity • Automation"),
      ch("We need stronger digital commerce", "E-commerce • Omnichannel • Digital platforms • Customer analytics • Technology modernization"),
      ch("We need better operational performance", "Process improvement • Productivity • Inventory • Cost optimization • Performance management"),
      ch("We need the right workforce", "Talent acquisition • Staffing • Contract-to-hire • Workforce solutions • HR transformation • Capability development"),
      ch("We need a more resilient supply chain", "Demand planning • Supplier ecosystem • Inventory • Logistics • Risk visibility • Resilience"),
    ],
    solutions: [
      sol(1, "Retail & Consumer Strategy", "Business strategy, growth priorities, operating models, portfolio strategy and transformation roadmaps."),
      sol(2, "Customer Experience & Omnichannel", "Customer journeys, digital experience, personalization, loyalty, service transformation and omnichannel models."),
      sol(3, "AI & Intelligent Retail", "Generative AI, conversational AI, customer intelligence, demand forecasting, marketing, merchandising and automation."),
      sol(4, "Digital Commerce & Technology", "E-commerce, digital platforms, data & analytics, technology modernization and digital transformation."),
      sol(5, "Operations & Supply Chain", "Productivity, process improvement, inventory, demand planning, sourcing, logistics and operational resilience."),
      sol(6, "Workforce & Capability", "Talent acquisition, flexible workforce, HR transformation, leadership, frontline capability and future skills."),
      sol(7, "Risk & Resilience", "Cybersecurity, data protection, governance, business continuity and operational risk."),
      sol(8, "Growth & Market Expansion", "Market entry, geographic expansion, go-to-market, partnerships, commercial strategy and new revenue opportunities."),
    ],
    seo: {
      title: "Retail & Consumer Consulting | AI, Digital, CX & Business Transformation | Intellidea",
      description: "Intellidea helps retail and consumer businesses with strategy, AI, customer experience, digital commerce, omnichannel transformation, workforce, supply chain, risk and growth.",
      keywords: list("Retail consulting • retail transformation • consumer business consulting • retail strategy consulting • retail AI consulting • omnichannel consulting • customer experience consulting • digital commerce consulting • retail technology consulting • retail workforce solutions • retail business transformation • consumer growth strategy"),
      ogTitle: "Retail & Consumer Solutions | Strategy, AI, CX & Digital Transformation | Intellidea",
      ogDescription: "Helping retail and consumer businesses connect strategy, customer experience, AI, technology, people, operations and execution to create sustainable growth.",
    },
  },

  /* 8–11 ─────────────── Basic (fallback layout until full copy is ready) ─────────────── */
  {
    slug: "energy-and-utilities",
    number: 8,
    title: "Energy & Utilities",
    tagline: "Navigating technology, operational resilience, and sustainability.",
    intro:
      "Supporting energy and utility organizations navigating technology, workforce, operational resilience, sustainability, and transformation.",
    heroImage: "/assets/energy.jpg",
    overview: [
      "Energy operators are balancing grid reliability, clean energy transition, and infrastructure modernization.",
      "We assist utility leaders in operational transformation, sustainable resource management, and workforce transition.",
    ],
    keySolutions: [
      { title: "Sustainability & Transformation", description: "Drive clean energy strategies, ESG alignment, and operational efficiency.", icon: "fa-solid fa-leaf" },
      { title: "Operational Resilience & Workforce", description: "Strengthen physical and digital infrastructure reliability while training skilled technicians.", icon: "fa-solid fa-bolt" },
    ],
  },
  {
    slug: "infrastructure-and-real-estate",
    number: 9,
    title: "Infrastructure & Real Estate",
    tagline: "Supporting growth, governance, technology, and project capability.",
    intro:
      "Supporting growth, governance, technology, project management, and organizational capability in infrastructure and real estate.",
    heroImage: "/assets/infrastructure.webp",
    overview: [
      "Capital-intensive real estate and infrastructure projects rely heavily on clear governance, accurate timelines, and technology integration.",
      "Our advisory supports real estate leaders with governance frameworks, project capability building, and smart asset technologies.",
    ],
    keySolutions: [
      { title: "Governance & Project Management", description: "Establish robust risk governance frameworks and high-output project execution practices.", icon: "fa-solid fa-building-user" },
      { title: "Organizational Capability & Tech", description: "Empower asset teams with smart building technologies and streamlined management processes.", icon: "fa-solid fa-city" },
    ],
  },
  {
    slug: "government-and-public-sector",
    number: 10,
    title: "Government & Public Sector",
    tagline: "Building institutional capacity, governance, and citizen-centric initiatives.",
    intro:
      "Supporting public sector institutions with capability building, digital transformation, governance, technology, and citizen-centric initiatives.",
    heroImage: "/assets/government.jpg",
    overview: [
      "Public sector bodies require scalable digital governance models to deliver transparent, efficient public services.",
      "We partner with government bodies to implement digital administration tools, upskill civil servants, and optimize public service delivery.",
    ],
    keySolutions: [
      { title: "Citizen-Centric Digital Governance", description: "Implement accessible digital public platforms that improve service transparency and reach.", icon: "fa-solid fa-landmark-flag" },
      { title: "Capability Building & Tech Advisory", description: "Equip public institutions with modern administrative processes and digital skillsets.", icon: "fa-solid fa-users-line" },
    ],
  },
  {
    slug: "startups-and-emerging-businesses",
    number: 11,
    title: "Startups & Emerging Businesses",
    tagline: "Helping founders move from idea to business model, scale, and sustainable growth.",
    intro:
      "Helping founders move from idea to business model, market entry, scale, and sustainable growth.",
    heroImage: "/assets/startup.jpg",
    overview: [
      "Startups face crucial execution milestones—from defining product-market fit to securing growth capital.",
      "We support founders across business modeling, go-to-market strategies, funding readiness, finance, talent acquisition, and market expansion.",
    ],
    keySolutions: [
      { title: "Business Model & Go-to-Market", description: "Refine value propositions, unit economics, and scalable market launch frameworks.", icon: "fa-solid fa-rocket" },
      { title: "Funding Readiness & Finance", description: "Prepare financial models, investor pitch decks, and governance practices for fundraising.", icon: "fa-solid fa-coins" },
      { title: "Talent, Leadership & Tech Scale", description: "Build agile executive teams, robust tech architectures, and international scaling roadmaps.", icon: "fa-solid fa-chart-line" },
    ],
  },
];

/* ---------- helpers ---------- */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((item) => item.slug === slug);
}

export function hasRichContent(industry: Industry): boolean {
  return Boolean(industry.solutions && industry.solutions.length > 0);
}

export function getAdjacentIndustries(slug: string): { prev: Industry; next: Industry } {
  const i = industries.findIndex((x) => x.slug === slug);
  return {
    prev: industries[(i - 1 + industries.length) % industries.length],
    next: industries[(i + 1) % industries.length],
  };
}

export function getSolutionCount(industry: Industry): number {
  return industry.solutions?.length ?? industry.keySolutions.length;
}