import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDisplayRegistUserModal } from "../../domain/modal/atoms";
import { reGetFlag } from "../../domain/registUser/atoms";
import { ListUsers } from "../../components/pages/ListUsers";

export const UserContainer = () => {
  const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] = useRecoilState(
    isDisplayRegistUserModal
  );
  const reGetFlagAtom = useRecoilValue(reGetFlag);

  const handleModal = () => {
    setDisplayedUserModalAtom(!isDisplayedUserModalAtom);
  };


  return <ListUsers openHandle={handleModal} reGet={reGetFlagAtom} />;
};
