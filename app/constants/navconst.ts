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
    name: "Our Solutions",
    megaMenu: {
      description:
        "Intellidea helps clients create long-term value for all stakeholders. Enabled by data and technology, our services and solutions provide trust through assurance and help clients transform, grow and operate.",
      exploreHref: "/services/strategy-business-transformation",
      items: [
        {
          title: "Strategy & Transformation",
          href: "/services/strategy-business-transformation",
        },
        {
          title: "Technology, AI & Digital",
          href: "/services/technology-ai-digital-transformation",
        },
        {
          title: "People & Workforce",
          href: "/services/people-hr-workforce",
        },
        {
          title: "Risk & Cybersecurity",
          href: "/services/risk-cybersecurity-compliance",
        },
        {
          title: "Finance & Governance",
          href: "/services/finance-governance-business-advisory",
        },
        {
          title: "Transactions & Investment",
          href: "/services/transactions-investment-growth",
        },
        {
          title: "Sustainability, & ESG",
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
    name: "Verticals",
    href: "/#offerings",
    megaMenu: {
      description:
        "Our four integrated ecosystem pillars combine strategic insight, on-demand expert networks, capability academies, and executive collaborative communities.",
      exploreHref: "/#offerings",
      items: [
        { title: "IntEllev8 (Strategy & Acceleration)", href: "/intellev8" },
        {
          title: "IntellXperia (Expertise as a Service)",
          href: "/intellxperia",
        },
        {
          title: "IntelliWise (Capability Development)",
          href: "/intelliwise",
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
     { name: "Insights", href: "/insights" },
  { name: "Resources", href: "/#resources" },
  {
    name: "About Us",
    megaMenu: {
      description:
        "Learn about our purpose, mission, leadership, and collaborative engagement models powering modern enterprises.",
      exploreHref: "/about",
      items: [
        { title: "Why Intellidea?", href: "/about/why-intellidea" },
        { title: "Our Purpose", href: "/#our-mission-vision" },
        { title: "Our Mission", href: "/#our-mission-vision" },
        { title: "Our Core Values", href: "/#core-values" },
        { title: "Our Proposition", href: "/#our-proposition" },
        { title: "Engagement Models", href: "/about/engagement-models" },
        { title: "Leadership", href: "/#leadership" },
        { title: "Our Partner Ecosystem", href: "/#partners" },
      ],
    },
  },
  { name: "Contact", href: "/#contact" },
];