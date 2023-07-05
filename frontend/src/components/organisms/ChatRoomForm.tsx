import React from "react";
import { AxiosHeaders } from "axios";
import { Controller, useForm } from "react-hook-form";
import useDirectAxios from "../../util/hooks/useDirectAxios";
import { ChatRoom, RegistChatRoom } from "../../domain/chatRoom/types";
import { Modal } from "../../components/atoms/Modal";
import { ModalDescription } from "../../components/atoms/ModalDescription";
import { ModalHeader } from "../../components/atoms/ModalHeader";
import { TextboxInHookForm } from "../../components/atoms/TextboxInHookForm";
import { Button } from "../../components/atoms/Button";
import { useCsrfToken } from "../../util/hooks/useCsrfToken";
import { TextAreaInHookForm } from "../../components/atoms/TextAreaInHookForm";

interface ChatRoomFormProps {
    chatRoom: ChatRoom;
    isDisplay: boolean;
    handleModal: () => void;
    handleReGet: () => void;
}

export const ChatRoomForm = (props: ChatRoomFormProps) => {
    const {response, error, loading, sendRequest} = useDirectAxios<ChatRoom, RegistChatRoom>();
    const {csrfToken, isLoading} = useCsrfToken();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistChatRoom>();
    
    const onSubmit = (data: RegistChatRoom) => {
        if(isLoading || csrfToken == null) return;
        sendRequest({
            url: "/chatroom/add",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken.token,
            },
            params: data,
        }).then((response) => {
            console.log(response)
            handleModal();
            handleReGet();
        }).catch((error) => console.log(error));
    };

    const handleModal = () => {
        props.handleModal();
    };

    const handleReGet = () => {
        props.handleReGet();
    };

    return (
        <Modal isDisplayed={props.isDisplay}>
            {
                loading ? <div>loading...</div> :
                <article className="flex flex-col gap-1">
                    <ModalHeader title={"チャットルーム登録"} theme={"primary"} />
                    <ModalDescription
                        description="チャットルーム情報を入力して、登録ボタンをクリックしてください。"
                        theme={"normal"}
                        />
                    <form id="regist-chatRoom-form" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="roomName"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, maxLength: 32 }}
                            render={({ field }) => (
                                <TextboxInHookForm
                                    name="roomName"
                                    field={field}
                                    type="text"
                                    label={"チャットルーム名"}
                                    placeholder="チャットルーム名を入力してください。"
                                    description={""}
                                    theme={"primary"}
                                    error={
                                        errors.roomName && errors.roomName?.type === "required" ? "チャットルーム名は必須です。" : "" +
                                        errors.roomName && errors.roomName?.type === "maxLength" ? "チャットルーム名は32文字以内で入力してください。" : ""
                                    }
                                /> 
                            )}
                        />
                        <Controller
                            name="roomDescription"
                            control={control}
                            defaultValue=""
                            rules={{ required: false, maxLength: 256 }}
                            render={({ field }) => (
                                <TextAreaInHookForm
                                    name="roomDescription"
                                    field={field}
                                    rowLength={5}
                                    label={"チャットルーム説明"}
                                    placeholder="チャットルームの説明を入力してください。"
                                    description={""}
                                    theme={"primary"}
                                    error={
                                        errors.roomDescription && errors.roomDescription?.type === "maxLength" ? "チャットルーム名は256文字以内で入力してください。" : ""
                                    }
                                /> 
                            )}
                        />
                        <div className="flex flex-row gap-2">
                            <Button
                                type={"submit"}
                                label={"登録"}
                                theme={"primary"}
                                action={() => {}}
                            />
                            <Button
                                type={"button"}
                                label={"閉じる"}
                                theme={"normal"}
                                action={handleModal}
                            />
                        </div>
                    </form>
                </article>
            }
        </Modal>
    )
}