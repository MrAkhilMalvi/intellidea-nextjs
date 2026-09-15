// data/navigationData.ts
import { NavItem } from '@/types/navigation';

export const navigationData: NavItem[] = [
  { label: 'HOME', href: '/' },
  {
    label: 'ABOUT',
    megaMenu: [
      {
        category: 'Company Overview',
        items: [
          { title: 'Who We Are', description: 'Our multidisciplinary transformation philosophy', href: '/about' },
          { title: 'Vision & Mission', description: 'Driving sustainable value and capability', href: '/about/vision' },
          { title: 'Leadership Team', description: 'Industry veterans and strategic advisors', href: '/about/leadership' },
        ],
      },
      {
        category: 'Governance & Impact',
        items: [
          { title: 'Advisory Council', description: 'Global experts guiding client outcomes', href: '/about/advisory-council' },
          { title: 'Careers', description: 'Join our ecosystem of expert advisors', href: '/careers' },
          { title: 'ESG & Purpose', description: 'Our commitment to sustainable impact', href: '/about/esg' },
        ],
      },
    ],
  },
  {
    label: 'SERVICES',
    megaMenu: [
      {
        category: 'Strategic & Digital Capabilities',
        items: [
          { title: 'Strategy & Business Transformation', description: 'Corporate strategy, business models, and market expansion', href: '/services/strategy' },
          { title: 'Technology, AI & Digital', description: 'Enterprise AI deployment, tech architecture, and modernization', href: '/services/technology-ai' },
          { title: 'People & Workforce', description: 'Organization design, talent strategy, and leadership building', href: '/services/people-workforce' },
          { title: 'Risk, Cybersecurity & Compliance', description: 'Data protection, threat management, and regulatory compliance', href: '/services/risk-cybersecurity' },
        ],
      },
      {
        category: 'Operations & Execution',
        items: [
          { title: 'Finance & Governance', description: 'Financial structuring, performance management, and governance', href: '/services/finance-governance' },
          { title: 'Transactions & Growth', description: 'M&A advisory, due diligence, and capital strategy', href: '/services/transactions-growth' },
          { title: 'ESG & Sustainability', description: 'Decarbonization strategy, reporting, and sustainable operations', href: '/services/esg-sustainability' },
          { title: 'Managed Services', description: 'Turnkey execution, PMO, and Expertise-as-a-Service (EaaS)', href: '/services/managed-services' },
        ],
      },
    ],
  },
  {
    label: 'ECOSYSTEM',
    megaMenu: [
      {
        category: 'Pillars of Intellidea',
        items: [
          { title: 'IntEllev8', description: 'Growth acceleration and strategic business transformation', href: '/ecosystem/intellev8' },
          { title: 'IntellXperia', description: 'On-demand expert networks and specialized advisory', href: '/ecosystem/intellxperia' },
          { title: 'IntelliWise', description: 'Corporate capability development, training, and academies', href: '/ecosystem/intelliwise' },
          { title: 'IntelliCircle', description: 'Collaborative executive network and innovation hub', href: '/ecosystem/intellicircle' },
        ],
      },
    ],
  },
  {
    label: 'INDUSTRIES',
    megaMenu: [
      {
        category: 'Sectors We Serve',
        items: [
          { title: 'BFSI', description: 'Banking, financial services, and insurance innovation', href: '/industries/bfsi' },
          { title: 'Technology & Telecom', description: 'Software, infrastructure, and telecommunication strategy', href: '/industries/tech-telecom' },
          { title: 'Healthcare & Life Sciences', description: 'Digital health, compliance, and operational scale', href: '/industries/healthcare' },
        ],
      },
      {
        category: 'Enterprise & Emerging',
        items: [
          { title: 'Retail & Consumer Goods', description: 'Supply chain, e-commerce, and brand expansion', href: '/industries/retail' },
          { title: 'Manufacturing & Industrial', description: 'Industry 4.0, smart factory, and lean operations', href: '/industries/manufacturing' },
          { title: 'Startups & Scale-ups', description: 'Venture scaling, fundraising readiness, and governance', href: '/industries/startups' },
        ],
      },
    ],
  },
  {
    label: 'INSIGHTS',
    megaMenu: [
      {
        category: 'Thought Leadership',
        items: [
          { title: 'Perspectives & Articles', description: 'Expert insights on business, AI, and leadership', href: '/insights' },
          { title: 'Case Studies', description: 'Real-world client success stories and measurable impact', href: '/insights/case-studies' },
          { title: 'Whitepapers & Reports', description: 'In-depth market research and industry benchmarks', href: '/insights/reports' },
        ],
      },
    ],
  },
  { label: 'CONTACT', href: '/contact' },
];