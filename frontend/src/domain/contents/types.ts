export type SideMenuItem = {
  icon: React.ComponentType;
  text: string;
  link: string;
};

export type HeaderMenuItem = {
  text: string;
  initialLink: string;
};

export type ContentItem = {
  component: React.ElementType;
  link: string;
};

export type Contents = {
  headerMenuItem: HeaderMenuItem;
  sideMenuItems: SideMenuItem[];
  contentItems: ContentItem[];
};
