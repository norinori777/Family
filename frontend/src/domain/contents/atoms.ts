import { atom, selector } from "recoil";
import { header1Contents } from "../../contents/test1/data";
import { header2Contents } from "../../contents/test2/data";
import { header3Contents } from "../../contents/test3/data";
import { header4Contents } from "../../contents/test4/data";
import { ContentItem, Contents, HeaderMenuItem, SideMenuItem } from "./types";

export const allContents = atom<Contents[]>({
  key: "allContents",
  default: [header1Contents, header2Contents, header3Contents, header4Contents],
});

export const viewContent = atom<string>({
  key: "viewContent",
  default: "HeaderTitle1",
});

export const nowChapterSideMenu = selector<SideMenuItem[]>({
  key: "newChapterSideMenu",
  get: ({ get }) => {
    const now = get(viewContent);
    const all: Contents[] = get(allContents);
    const contents: Contents[] = all.filter((item) => {
      return item.headerMenuItem.text === now;
    });
    return contents[0].sideMenuItems;
  },
});

export const nowChapterContents = selector<ContentItem[]>({
  key: "newChapterContents",
  get: ({ get }) => {
    const now = get(viewContent);
    const all: Contents[] = get(allContents);
    const contents: Contents[] = all.filter((item) => {
      return item.headerMenuItem.text === now;
    });
    return contents[0].contentItems;
  },
});

export const headerMenu = selector<HeaderMenuItem[]>({
  key: "headerMenu",
  get: ({ get }) => {
    const all: Contents[] = get(allContents);
    const menuItems: HeaderMenuItem[] = all.map((item) => {
      return item.headerMenuItem;
    });
    return menuItems;
  },
});
