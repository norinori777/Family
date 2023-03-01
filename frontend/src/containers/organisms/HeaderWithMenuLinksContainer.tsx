import React from "react";
import { useRecoilValue } from "recoil";
import { HeaderWithMenuLinks } from "../../components/organisms/HeaderWithMenuLinks";
import { headerMenu } from "../../domain/contents/atoms";
import { Puzzle } from "../../components/Icons/Puzzle";

export const HeaderWithMenuLinkConatainer = () => {
  const menuLinks = useRecoilValue(headerMenu);
  return (
    <>
      <HeaderWithMenuLinks
        headerIcon={Puzzle}
        headerTitle={"Family"}
        headerMenuLinks={menuLinks}
        headerTheme={"primary"}
      />
    </>
  );
};
