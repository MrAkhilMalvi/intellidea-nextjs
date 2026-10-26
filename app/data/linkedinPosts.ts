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
  { urn: "urn:li:share:7517186662561636352", height: 1741, category: "AI & Digital" },
  { urn: "urn:li:ugcPost:7476985306408443904", height: 1739, category: "Global Connect" },
  { urn: "urn:li:ugcPost:7470523849449787392", height: 1132, category: "Global Connect" },
  { urn: "urn:li:share:7455477452560035841", height: 1342, category: "Emotional Intelligence" },
  { urn: "urn:li:ugcPost:7452670746373365776", height: 1319, category: "Global Connect" },
  { urn: "urn:li:ugcPost:7447703135562756096", height: 1445, category: "Governance, Risk, Compliance" },
  { urn: "urn:li:share:7445859463049351168", height: 1636, category: "Governance, Risk, Compliance" },
  { urn: "urn:li:ugcPost:7442238580942462976", height: 1592, category: "Leadership" },
  { urn: "urn:li:share:7438422397847773184", height: 1993, category: "AI & Digital" },
  { urn: "urn:li:share:7435921077685436418", height: 1591, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7431280834604634112", height: 1258, category: "Leadership" },
  { urn: "urn:li:ugcPost:7430238414207111168", height: 1718, category: "Global Connect" },
  { urn: "urn:li:ugcPost:7430238414207111168", height: 1718, category: "Global Connect" },
  { urn: "urn:li:share:7420149163507519489", height: 1699, category: "General, Others" },
  { urn: "urn:li:share:7418846933902880768", height: 1615, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7408472218407559168", height: 1069, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7407038665539043328", height: 2042, category: "Cybersecurity" },
  { urn: "urn:li:share:7403831843214663680", height: 2006, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7402013243310780416", height: 2090, category: "AI & Digital" },
  { urn: "urn:li:share:7399362398572232704", height: 985, category: "General, Others" },
  { urn: "urn:li:share:7399362398572232704", height: 985, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7388808842869997568", height: 1258, category: "Global Connect" },
  { urn: "urn:li:ugcPost:7382073219610120192", height: 1403, category: "Emotional Intelligence" },
  { urn: "urn:li:ugcPost:7380236029032566784", height: 1885, category: "Cybersecurity" },
  { urn: "urn:li:ugcPost:7379138172166770688", height: 1067, category: "AI & Digital" },
  { urn: "urn:li:share:7376509210366427137", height: 2216, category: "Cybersecurity" },
  { urn: "urn:li:ugcPost:7375781499071062016", height: 1405, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7372668667924418560", height: 894, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7370249253581053952", height: 1153, category: "Emotional Intelligence" },
  { urn: "urn:li:ugcPost:7362722206440734720", height: 920, category: "Leadership" },
  { urn: "urn:li:share:7362126134672601088", height: 1321, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7362126134672601088", height: 1321, category: "Leadership" },
  { urn: "urn:li:share:7354885059134259201", height: 1342, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7354885059134259201", height: 1342, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7349447206166245376", height: 1342, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7349447206166245376", height: 1342, category: "General, Others" },
  { urn: "urn:li:share:7349447206166245376", height: 1342, category: "Leadership" },
  { urn: "urn:li:share:7345653505933676544", height: 1090, category: "Emotional Intelligence" },
  { urn: "urn:li:share:7343508161296752640", height: 1321, category: "Emotional Intelligence" },
  { urn: "urn:li:ugcPost:7341316269431742464", height: 1486, category: "Emotional Intelligence" },
  { urn: "urn:li:ugcPost:7341316269431742464", height: 1486, category: "Leadership" },
  { urn: "urn:li:share:7331163135095083010", height: 775, category: "Emotional Intelligence" },
];

export const LINKEDIN_POSTS: LinkedInPost[] = RAW_POSTS.map((p) => ({
  ...p,
  id: p.urn.split(":").pop() as string,
})).sort((a, b) => (BigInt(b.id) > BigInt(a.id) ? 1 : -1));