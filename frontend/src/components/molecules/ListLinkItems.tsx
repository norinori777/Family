import React from "react";
import { LinkItemsContainer } from "../../containers/molecules/LinkItemsContainer";

interface ListLinkItemsProps {
  items: {
    text: string;
    initialLink: string;
  }[];
}

export const ListLinkItems = (props: ListLinkItemsProps) => {
  return (
    <div className="flex flex-row justify-around">
      {props.items.map((item) => {
        return (
          <LinkItemsContainer
            key={item.text}
            text={item.text}
            link={item.initialLink}
          />
        );
      })}
    </div>
  );
};
