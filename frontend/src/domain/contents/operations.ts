import { useRecoilCallback } from "recoil";
import { allContents, viewContent } from "./atoms";
import { ContentItem } from "./types";

export const useSearchContents = () =>
  useRecoilCallback(({ set, snapshot }) => (request: string) => {
    const all = snapshot.getLoadable(allContents).getValue();
    const contents = all.find((contents) => {
      const item: ContentItem | undefined = contents.contentItems.find(
        (item) => item.link === request
      );
      return item !== undefined;
    });
    if (contents !== undefined) set(viewContent, contents?.headerMenuItem.text);
  });
