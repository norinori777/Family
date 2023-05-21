import Chat from "../../components/pages/Chat";
import React, { useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

interface Message {
    message: string;
  }

export const ChatContainer = () => {
    const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const socket = new SockJS("/ws");
        const stompClient = Stomp.over(socket);
        stompClient?.connect({}, frame => {
          setStompClient(stompClient);
          stompClient.subscribe('/topic/messages', message => {
            receiveMessage(JSON.parse(message.body));
          });
        });
        return () => {
          socket.close();
        }
      }, []);

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