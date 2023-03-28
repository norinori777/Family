import React from "react";
import { useRecoilState } from "recoil";
import { isDisplayRegistUserModal } from "../../domain/modal/atoms";
import { User } from "../../components/pages/User";

export const UserContainer = () => {
  const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] = useRecoilState(
    isDisplayRegistUserModal
  );

  const handleModal = () => {
    setDisplayedUserModalAtom(!isDisplayedUserModalAtom);
  };
  return <User openHandle={handleModal} isDisplay={isDisplayedUserModalAtom} />;
};
