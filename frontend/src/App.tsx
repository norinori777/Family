import React from "react";
import { HeaderWithMenuLinkConatainer } from "./containers/organisms/HeaderWithMenuLinksContainer";
import { SideMenuContainer } from "./containers/organisms/SideMenuContainer";
import { MainContantsContainer } from "./containers/organisms/MainContentsContainer";

export const App = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <HeaderWithMenuLinkConatainer />
      <div className="flex flex-row h-full w-full bg-slate-200">
        <SideMenuContainer />
        <MainContantsContainer />
      </div>
    </div>
  );
};
