    import { Table } from "../molecules/Table"
import { Plus } from "../Icons/Plus"
import { ContainIconButton } from "../molecules/ContainIconButton"
import React from "react"
import { ChatRoom } from "../../domain/chatRoom/types"
import { useAxios } from "../../util/hooks/useAxios"
import { ChatRoomFormContainer } from "../../containers/organisms/ChatRoomFormContainer"
import { DynamicTable } from "../../components/molecules/DynamicTable"
import { DynamicRow } from "../../components/molecules/DynamicRow"


interface ListChatRoomProps {
    openHandle: () => void;
    reGet: number;
}

export const ListChatRoom = (props: ListChatRoomProps) => {
    const openHandle = () => {
        props.openHandle();
    };

    const {data, error, isLoading,} = useAxios<ChatRoom[]>({
        url: "/chatroom/list",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        reGet: props.reGet,
    });

    return (
        <div>
            <ContainIconButton
                type={"button"}
                label={"チャットルーム作成"}
                theme={"primary"}
                icon={Plus}
                action={openHandle}
            />
            <ChatRoomFormContainer />
            <DynamicTable<ChatRoom> titleHeader={["roomId", "roomName", "roomDescription", "createAt", "updateAt"]} targetLink={["roomName"]} items={data} Row={DynamicRow} />
                        
        </div>
    )

}
