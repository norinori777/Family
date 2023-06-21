import Chat from "../../components/pages/Chat";
import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useAxios } from "../../util/hooks/useAxios";
import { CsrfToken } from "domain/csrf/types";

interface Message {
    message: string;
  }

export const ChatContainer = () => {
    const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
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
      const socket = new SockJS("/ws");
      const stompClient = Stomp.over(socket);
      stompClient?.connect(csrfToken, frame => {
        setStompClient(stompClient);
        stompClient.subscribe('/topic/messages', message => {
          receiveMessage(JSON.parse(message.body));
        });
      });
      return () => {
        socket.close();
      }
    }, [isLoading]);

    const receiveMessage = (message: Message) => {
        setMessages((preMessages) => [...preMessages, message]);
    };

    const handleMessageSubmit = (message:Message) => {
        if (message) {
          stompClient?.send(
            "/app/message",
            {},
            JSON.stringify(message)
          );
        }
    };

    return (
        <div>
            <Chat messages={messages} submit={handleMessageSubmit} />
        </div>
    )
}