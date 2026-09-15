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
      exploreHref: "/services",
      items: [
        {
          title: "Strategy & Business Transformation",
          href: "/services#strategy",
        },
        {
          title: "Technology, AI & Digital Transformation",
          href: "/services#tech-ai",
        },
        {
          title: "People, HR & Workforce",
          href: "/services#people",
        },
        {
          title: "Risk, Cybersecurity & Compliance",
          href: "/services#cybersecurity",
        },
        {
          title: "Finance, Governance & Business Advisory",
          href: "/services#finance",
        },
        {
          title: "Transactions, Investment & Growth",
          href: "/services#transactions",
        },
        {
          title: "Sustainability, ESG & Impact",
          href: "/services#esg",
        },
        {
          title: "Managed Services",
          href: "/services#managed-services",
        },
      ],
    },
  },
  {
    name: "Ecosystem",
    megaMenu: {
      description:
        "Our four integrated ecosystem pillars combine strategic insight, on-demand expert networks, capability academies, and executive collaborative communities.",
      exploreHref: "/ecosystem",
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
        {
          title: "Financial Services & Banking",
          href: "/industries#financial-services",
        },
        { title: "Healthcare & Life Sciences", href: "/industries#healthcare" },
        { title: "Energy, Resources & Utilities", href: "/industries#energy" },
        { title: "Technology, Media & Telecom", href: "/industries#tmt" },
        { title: "Consumer Products & Retail", href: "/industries#retail" },
        {
          title: "Government & Public Sector",
          href: "/industries#public-sector",
        },
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
  {
    name: "Resources",
    megaMenu: {
      description:
        "Tools, frameworks, and client success stories to accelerate your enterprise transformation.",
      exploreHref: "/resources",
      items: [
        { title: "Client Case Studies", href: "/resources#case-studies" },
        { title: "Transformation Frameworks", href: "/resources#frameworks" },
        { title: "Toolkits & Whitepapers", href: "/resources#whitepapers" },
      ],
    },
  },
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
  { name: "Contact", href: "/contact" },
];
