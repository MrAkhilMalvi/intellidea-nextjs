

export interface SubMenuItem {
  title: string;
  description: string;
  href: string;
}

export interface MegaMenuCategory {
  category: string;
  items: SubMenuItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  megaMenu?: MegaMenuCategory[];
}

export interface ListItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

export interface SpotlightItem {
  title: string;
  href: string;
}

export interface MegaMenuData {
  description: string;
  exploreHref: string;
  items: ListItem[];
  spotlight: SpotlightItem[];
}

export interface MenuItem {
  name: string;
  href?: string;
  megaMenu?: MegaMenuData;
}