import { useRecoilState } from "recoil";
import { isDisplayRegistChatRoomModal } from "../../domain/modal/atoms";
import { reGetCatRoomFlag } from "../../domain/chatRoom/atoms";
import { ChatRoomForm } from "../../components/organisms/ChatRoomForm";
import React from "react";

export const ChatRoomFormContainer = () => {
    const [isDisplayedChatRoomModalAtom, setIsDisplayedChatRoomModalAtom] = useRecoilState(isDisplayRegistChatRoomModal);

    const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetCatRoomFlag);

    const handleModal = () => {
        setIsDisplayedChatRoomModalAtom(!isDisplayedChatRoomModalAtom);
    }

    const handleReGet = () => {
        setReGetFlagAtom(reGetFlagAtom + 1);
    }

    return (
        <ChatRoomForm
            isDisplay={isDisplayedChatRoomModalAtom}
            chatRoom={{
                roomId: 0,  
                roomName: "",
                roomDescription: "",
                roomOwnerId: 0,
                createAt: "",
                updateAt: "",
            }}
            handleModal={handleModal}
            handleReGet={handleReGet}
        />
    );
    };