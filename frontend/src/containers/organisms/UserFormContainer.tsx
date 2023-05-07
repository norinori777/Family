import React from "react";
import { UserForm } from "../../components/organisms/UserForm";
import { useRecoilState } from "recoil";
import { reGetFlag } from "../../domain/registUser/atoms";
import { isDisplayRegistUserModal } from "../../domain/modal/atoms";

export const UserFormContainer = () => {
    const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] = useRecoilState(
        isDisplayRegistUserModal
    );
    const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetFlag);
    
    const handleModal = () => {
        setDisplayedUserModalAtom(!isDisplayedUserModalAtom);
    };

    const handleReGet = () => {
        setReGetFlagAtom(reGetFlagAtom + 1);
    };
    
    return (
        <UserForm
        isDisplay={isDisplayedUserModalAtom}
        user={{
            name: "",
            password: "",
            emailAddress: "",
        }}
        handleModal={handleModal}
        handleReGet={handleReGet}
        />
    );
};
