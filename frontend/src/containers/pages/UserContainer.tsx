import React from "react";
import { useRecoilState } from "recoil";
import { isDisplayRegistUserModal } from "../../domain/modal/atoms";
import { ListUsers } from "../../components/pages/ListUsers";

export const UserContainer = () => {
  const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] = useRecoilState(
    isDisplayRegistUserModal
  );

  const handleModal = () => {
    setDisplayedUserModalAtom(!isDisplayedUserModalAtom);
  };
  return <ListUsers openHandle={handleModal} isDisplay={isDisplayedUserModalAtom} />;
};
