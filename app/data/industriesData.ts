export interface Industry {
  slug: string;
  name: string;
  image: string;
}

export interface IndustriesData {
  heroHeadline: string;
  heroSubhead: string;
  badge: string;
  capabilities: string[];
  ctaLabel: string;
  industries: Industry[];
}

export const INDUSTRIES_PAGE: IndustriesData = {
  heroHeadline: "Expertise That Understands Your Industry.",
  heroSubhead:
    "We combine cross-industry experience with specialist perspectives to address the realities of your business environment.",
  badge: "Industries",
  ctaLabel: "Explore Your Industry",
  capabilities: [
    "Strategy",
    "Technology",
    "AI",
    "People",
    "Risk",
    "Finance",
    "Managed Services",
  ],
  industries: [
    {
      slug: "financial-services",
      name: "Banking & Financial Services",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "insurance",
      name: "Insurance",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "healthcare",
      name: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "life-sciences-pharma",
      name: "Life Sciences & Pharma",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "tmt",
      name: "Technology & IT Services",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "education-edtech",
      name: "Education & EdTech",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "manufacturing",
      name: "Manufacturing",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "retail",
      name: "Retail & Consumer",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "energy",
      name: "Energy & Utilities",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "infrastructure",
      name: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "real-estate",
      name: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "public-sector",
      name: "Government & Public Sector",
      image:
        "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&w=1200&q=80",
    },
    {
      slug: "startups",
      name: "Startups & Emerging Businesses",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};