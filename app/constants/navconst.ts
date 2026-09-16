export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavItemType {
  title: string;
  href: string;
  subItems?: NavSubItem[];
  external?: boolean;
}

export interface MenuItem {
  name: string;
  href?: string;
  megaMenu?: {
    description: string;
    exploreHref: string;
    items: NavItemType[];
  };
}

export const NAV_ITEMS: MenuItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    megaMenu: {
      description:
        "Intellidea helps clients create long-term value for all stakeholders. Enabled by data and technology, our services and solutions provide trust through assurance and help clients transform, grow and operate.",
      // No /services index page — "Explore" opens straight into the first service page.
      exploreHref: "/services/strategy-business-transformation",
      items: [
        {
          title: "Strategy & Business Transformation",
          href: "/services/strategy-business-transformation",
        },
        {
          title: "Technology, AI & Digital Transformation",
          href: "/services/technology-ai-digital-transformation",
        },
        {
          title: "People, HR & Workforce",
          href: "/services/people-hr-workforce",
        },
        {
          title: "Risk, Cybersecurity & Compliance",
          href: "/services/risk-cybersecurity-compliance",
        },
        {
          title: "Finance, Governance & Business Advisory",
          href: "/services/finance-governance-business-advisory",
        },
        {
          title: "Transactions, Investment & Growth",
          href: "/services/transactions-investment-growth",
        },
        {
          title: "Sustainability, ESG & Impact",
          href: "/services/sustainability-esg-impact",
        },
        {
          title: "Managed Services",
          href: "/services/managed-services",
        },
      ],
    },
  },
  {
    name: "Ecosystem",
    megaMenu: {
      description:
        "Our four integrated ecosystem pillars combine strategic insight, on-demand expert networks, capability academies, and executive collaborative communities.",
      exploreHref: "/intellev8",
      items: [
        { title: "IntEllev8 (Strategy & Acceleration)", href: "/intellev8" },
        {
          title: "IntellXperia (Expertise as a Service)",
          href: "/intellxperia",
        },
        {
          title: "IntelliWise (Capability Development)",
          href: "https://intelliwiseacademy.com/",
          external: true,
        },
        {
          title: "IntelliCircle (Executive Community)",
          href: "/intellicircle",
        },
      ],
    },
  },
  {
    name: "Industries",
    megaMenu: {
      description:
        "Tailored expertise and digital solutions engineered specifically for complex industry verticals.",
      exploreHref: "/industries",
      items: [
        { title: "Banking & Financial Services", href: "/industries#financial-services" },
        { title: "Insurance", href: "/industries#insurance" },
        { title: "Healthcare", href: "/industries#healthcare" },
        { title: "Life Sciences & Pharma", href: "/industries#life-sciences-pharma" },
        { title: "Technology & IT Services", href: "/industries#tmt" },
        { title: "Education & EdTech", href: "/industries#education-edtech" },
        { title: "Manufacturing", href: "/industries#manufacturing" },
        { title: "Retail & Consumer", href: "/industries#retail" },
        { title: "Energy & Utilities", href: "/industries#energy" },
        { title: "Infrastructure", href: "/industries#infrastructure" },
        { title: "Real Estate", href: "/industries#real-estate" },
        { title: "Government & Public Sector", href: "/industries#public-sector" },
        { title: "Startups & Emerging Businesses", href: "/industries#startups" },
      ],
    },
  },
  {
    name: "Insights",
    megaMenu: {
      description:
        "Market perspectives, technological whitepapers, and real-world executive intelligence.",
      exploreHref: "/insights",
      items: [
        { title: "Perspectives & Articles", href: "/insights#perspectives" },
        { title: "Executive Reports", href: "/insights#reports" },
        { title: "Industry Benchmarks", href: "/insights#benchmarks" },
        { title: "Global Research", href: "/insights#research" },
      ],
    },
  },
  { name: "Resources", href: "#resources" },
  {
    name: "About Us",
    megaMenu: {
      description:
        "Learn about our mission, leadership, and collaborative engagement models powering modern enterprises.",
      exploreHref: "/about",
      items: [
        { title: "WHY INTELLIDEA?", href: "/about#why-intellidea" },
        { title: "ENGAGEMENT MODELS", href: "/about#engagement-models" },
        { title: "Leadership", href: "/about#leadership" },
      ],
    },
  },
  { name: "Contact", href: "/#contact" },
];