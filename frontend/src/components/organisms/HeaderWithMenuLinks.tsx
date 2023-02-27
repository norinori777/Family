import React from "react";
import { HeaderMenuItem } from "../../domain/contents/types";
import { Header } from "../atoms/Header";
import { HeaderTitle } from "../atoms/HeaderTitle";
import { ListLinkItems } from "../molecules/ListLinkItems";

interface HeaderWithMenuLinksProps {
  headerTitle: string;
  headerTheme:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "normal";
  headerMenuLinks: HeaderMenuItem[];
}

export const HeaderWithMenuLinks = (props: HeaderWithMenuLinksProps) => {
  return (
    <Header>
      <HeaderTitle title={props.headerTitle} theme={props.headerTheme} />
      <nav className="pt-4 w-1/2">
        <ListLinkItems items={props.headerMenuLinks} />
      </nav>
    </Header>
  );
};
