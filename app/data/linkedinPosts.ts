export type Category =
  | "AI & Digital"
  | "Cybersecurity"
  | "Leadership"
  | "Global Connect"
  | "Governance, Risk, Compliance"
  | "Emotional Intelligence"
  | "General, Others";

export interface LinkedInPost {
  id: string;
  category: Category;
  urn: string;
  height: number;
}

export const COMPANY_URL = "https://in.linkedin.com/company/intellidea";

export const CATEGORY_ORDER: Category[] = [
  "AI & Digital",
  "Cybersecurity",
  "Leadership",
  "Global Connect",
  "Governance, Risk, Compliance",
  "Emotional Intelligence",
];

export const embedUrl = (urn: string) =>
  `https://www.linkedin.com/embed/feed/update/${urn}?collapsed=1`;
export const postUrl = (urn: string) =>
  `https://www.linkedin.com/feed/update/${urn}`;

/** LinkedIn IDs embed a timestamp (id >> 22 = ms since epoch). */
export const getPostDate = (urn: string): Date => {
  const id = BigInt(urn.split(":").pop() as string);
  return new Date(Number(id >> BigInt(22)));
};

export const formatPostDate = (urn: string) =>
  getPostDate(urn).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

const RAW_POSTS: Omit<LinkedInPost, "id">[] = [
    { urn: "urn:li:share:7488507282717085696", height: 650, category: "AI & Digital" },
    { urn: "urn:li:share:7485199128176779265", height: 660, category: "AI & Digital"  },
    { urn: "urn:li:ugcPost:7491111577593528320", height: 566, category: "AI & Digital" },
    { urn: "urn:li:share:7438422397847773184", height: 669, category: "AI & Digital" },
    
    { urn: "urn:li:share:7497849241218949120", height: 580, category: "Emotional Intelligence"  },
    { urn: "urn:li:share:7482761317725134849", height: 669, category: "Global Connect" },
    { urn: "urn:li:share:7465797312838258688", height: 669, category: "Emotional Intelligence" },
    { urn: "urn:li:share:7445324033602142208", height: 669, category: "Leadership" },
    { urn: "urn:li:share:7455477452560035841", height: 669, category: "Emotional Intelligence" },
    { urn: "urn:li:share:7435921077685436418", height: 480, category: "Leadership" },
    { urn: "urn:li:share:7487510290931318784", height: 592, category: "Cybersecurity" },
    { urn: "urn:li:share:7457058577359364096", height: 669, category: "Cybersecurity" },
    { urn: "urn:li:share:7407038665539043328", height: 480, category: "Cybersecurity" },
    { urn: "urn:li:share:7440767811351875584", height: 605, category: "General, Others" },
  { urn: "urn:li:share:7445859463049351168", height: 669, category: "Governance, Risk, Compliance" },
  { urn: "urn:li:share:7439895505876172800", height: 480, category: "Emotional Intelligence" },
];



export const LINKEDIN_POSTS: LinkedInPost[] = RAW_POSTS.map((p) => ({
  ...p,
  id: p.urn.split(":").pop() as string,
})).sort((a, b) => (BigInt(b.id) > BigInt(a.id) ? 1 : -1));

