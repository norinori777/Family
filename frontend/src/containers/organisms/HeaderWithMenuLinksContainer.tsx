import React from "react";
import { useRecoilValue } from "recoil";
import { HeaderWithMenuLinks } from "../../components/organisms/HeaderWithMenuLinks";
import { headerMenu } from "../../domain/contents/atoms";

export const HeaderWithMenuLinkConatainer = () => {
  const menuLinks = useRecoilValue(headerMenu);
  return (
    <>
      <HeaderWithMenuLinks
        headerTitle={"AppBase2"}
        headerMenuLinks={menuLinks}
        headerTheme={"primary"}
      />
    </>
  );
};
