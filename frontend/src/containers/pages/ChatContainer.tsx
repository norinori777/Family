import Chat from "../../components/pages/Chat";
import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAxios } from "../../util/hooks/useAxios";
import { CsrfToken } from "../../domain/csrf/types";
import { TalkMessage } from "../../domain/TalkMessage/types";
import { useParams } from "react-router-dom";

export const ChatContainer = () => {
  const params = useParams<{ roomId: string }>();
    const roomId = params.roomId;
    const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
    const [receiveMessages, setReceiveMessages] = useState<TalkMessage[]>([]);
    const {data, error, isLoading,} = useAxios<CsrfToken>({
      url: "/csrf",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      reGet: 0,});

    useEffect(() => {
      if(isLoading) return;
      const csrfToken = data != null ? {[data.headerName]: data.token} : {};
      const socket = new SockJS("/ws/" + roomId);
      const stompClient = Stomp.over(socket);
      stompClient?.connect(csrfToken, frame => {
        setStompClient(stompClient);
        stompClient.subscribe('/topic/' + roomId + 'messages', message => {
          receiveMessage(JSON.parse(message.body));
        });
      });
      return () => {
        socket.close();
      }
    }, [isLoading]);

    const receiveMessage = (receiveMessage: TalkMessage) => {
      setReceiveMessages((preMessages) => [...preMessages, receiveMessage]);
    };

    const handleMessageSubmit = (sendMessage:string) => {
      if (sendMessage) {
        stompClient?.send(
          "/app/" + roomId + "/message",
          {},
          JSON.stringify({message: sendMessage})
        );
      }
    };

    return (
        <div>
            <Chat talkMessages={receiveMessages} submit={handleMessageSubmit} />
        </div>
    )
}