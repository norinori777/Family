import {
  ContentItem,
  Contents,
  HeaderMenuItem,
  SideMenuItem,
} from "../../domain/contents/types";
import { Pencil } from "../../components/Icons/Pencil";
import { test } from "../../components/pages/test";

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: "MenuTitle16", link: "/test16" },
  { icon: Pencil, text: "MenuTitle17", link: "/test17" },
  { icon: Pencil, text: "MenuTitle18", link: "/test18" },
  { icon: Pencil, text: "MenuTitle19", link: "/test19" },
  { icon: Pencil, text: "MenuTitle20", link: "/test20" },
];

const contentItems: ContentItem[] = [
  { link: "/test16", key:"test16", component: test },
  { link: "/test17", key:"test17", component: test },
  { link: "/test18", key:"test18",  component: test },
  { link: "/test19", key:"test19",  component: test },
  { link: "/test20", key:"test20", component: test },
];

const headerMenuItem: HeaderMenuItem = {
  text: "HeaderTitle4",
  initialLink: "/test16",
};

export const header4Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
};
