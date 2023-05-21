import {
  ContentItem,
  Contents,
  HeaderMenuItem,
  SideMenuItem,
} from "../../domain/contents/types";
import { Pencil } from "../../components/Icons/Pencil";
import { test } from "../../components/pages/test";
import { UserContainer } from "../../containers/pages/UserContainer";
import { ChatContainer } from "../../containers/pages/ChatContainer";

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: "Chat", link: "/Chat" },
  { icon: Pencil, text: "ユーザー情報", link: "/User" },
  { icon: Pencil, text: "MenuTitle3", link: "/test3" },
  { icon: Pencil, text: "MenuTitle4", link: "/test4" },
  { icon: Pencil, text: "MenuTitle5", link: "/test5" },
];

const contentItems: ContentItem[] = [
  { link: "/Chat", component: ChatContainer },
  { link: "/User", component: UserContainer },
  { link: "/test3", component: test },
  { link: "/test4", component: test },
  { link: "/test5", component: test },
];

const headerMenuItem: HeaderMenuItem = {
  text: "HeaderTitle1",
  initialLink: "/Chat",
};

export const header1Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
};
