import { MenuItem } from "@/types/navigation";

export const NAV_ITEMS: MenuItem[] = [
  { name: "Home", href: "index.html" },
  {
    name: "Services",
    megaMenu: {
      description:
        "Intellidea helps clients create long-term value for all stakeholders. Enabled by data and technology, our services and solutions provide trust through assurance and help clients transform, grow and operate.",
      exploreHref: "index.html#offerings",
      items: [
        {
          title: "AI & Digital Transformation",
          href: "index.html#tech-ai",
          subItems: [
            { title: "Agentic AI", href: "index.html#agentic-ai" },
            { title: "AI Strategy & Roadmap", href: "index.html#ai-strategy" },
            { title: "Generative AI Solutions", href: "index.html#gen-ai" },
            { title: "Responsible & Ethical AI", href: "index.html#responsible-ai" },
          ],
        },
        {
          title: "Strategy and Business Transformation",
          href: "index.html#strategy",
          subItems: [
            { title: "Corporate Strategy", href: "index.html#corp-strategy" },
            { title: "Operating Model Redesign", href: "index.html#operating-model" },
            { title: "Digital Business Models", href: "index.html#digital-models" },
          ],
        },
        { title: "Managed Services", href: "index.html#managed-services" },
        { title: "Risk, Cybersecurity & Compliance", href: "index.html#cybersecurity" },
        { title: "Finance & Governance", href: "index.html#finance" },
        { title: "People & Workforce", href: "index.html#people" },
        { title: "Transactions & Growth Strategy", href: "index.html#transactions" },
        { title: "Sustainability & ESG", href: "index.html#esg" },
      ],
      spotlight: [
        { title: "intellidea.ai The Reimagination Engine", href: "index.html#ai-engine" },
        { title: "IntellXperia™ Expert Network", href: "index.html#intellxperia" },
        { title: "Technology Solutions", href: "index.html#tech-solutions" },
        { title: "Technology Transformation", href: "index.html#tech-transform" },
      ],
    },
  },
  {
    name: "Ecosystem",
    megaMenu: {
      description:
        "Our four integrated ecosystem pillars combine strategic insight, on-demand expert networks, capability academies, and executive collaborative communities.",
      exploreHref: "index.html#ecosystem",
      items: [
        { title: "IntEllev8 (Strategy & Acceleration)", href: "index.html#intellev8" },
        { title: "IntellXperia (Expertise as a Service)", href: "index.html#intellxperia" },
        { title: "IntelliWise (Capability Development)", href: "index.html#intelliwise" },
        { title: "IntelliCircle (Executive Community)", href: "index.html#intellicircle" },
      ],
      spotlight: [
        { title: "On-Demand Advisory Pool", href: "index.html#advisory-pool" },
        { title: "Corporate Leadership Academies", href: "index.html#academies" },
        { title: "Global Innovation Hub", href: "index.html#hub" },
      ],
    },
  },
  {
    name: "About Us",
    megaMenu: {
      description:
        "A multidisciplinary business transformation ecosystem helping organizations navigate complexity, build capability, and execute sustainable value.",
      exploreHref: "index.html#aboutus",
      items: [
        { title: "Who We Are", href: "index.html#aboutus" },
        { title: "Vision & Mission", href: "index.html#vision" },
        { title: "Leadership Team", href: "index.html#leadership" },
        { title: "Advisory Council", href: "index.html#advisory" },
      ],
      spotlight: [
        { title: "Our Global Footprint", href: "index.html#footprint" },
        { title: "ESG & Purpose Statement", href: "index.html#esg-statement" },
      ],
    },
  },
  {
    name: "Resources",
    megaMenu: {
      description:
        "Explore market perspectives, technological whitepapers, and real-world client case studies crafted by industry leaders.",
      exploreHref: "index.html#resources",
      items: [
        { title: "Perspectives & Articles", href: "index.html#resources" },
        { title: "Client Case Studies", href: "index.html#casestudies" },
        { title: "Industry Benchmarks", href: "index.html#benchmarks" },
      ],
      spotlight: [
        { title: "2026 AI Transformation Report", href: "index.html#ai-report" },
        { title: "Future of Enterprise Workforce", href: "index.html#workforce-report" },
      ],
    },
  },
  { name: "Contact", href: "index.html#contact" },
];
