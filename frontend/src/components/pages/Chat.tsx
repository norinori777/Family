import React, { useEffect, useState } from "react";
import Stomp from "stompjs";

interface Message {
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null);

  useEffect(() => {
    const client = Stomp.client("ws://localhost:8080/test");
    client.connect({}, () => {
      console.log("WebSocket connection established.");
      setStompClient(client);

      client.subscribe("/receive/response", (message) => {
        const newMessage: Message = JSON.parse(message.body);
        setMessages([...messages, newMessage]);
      });
    });

    return () => {
      if (client) {
        client.disconnect(() => {
          console.log("disconnected");
        });
      }
    };
  }, [messages]);

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage) {
      stompClient?.send(
        "/send/chat",
        {},
        JSON.stringify({ content: newMessage })
      );
      setNewMessage("");
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" value={newMessage} onChange={handleMessageChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
