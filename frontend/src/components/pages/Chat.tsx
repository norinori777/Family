import React, { useState } from "react";

interface Message {
  message: string;
}

interface ChatProps{
  messages: Message[];
  submit: (message:Message) => void;
}

const Chat = (props:ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submit({ message: newMessage });
    setNewMessage("");
  };

  return (
    <div>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" value={newMessage} onChange={handleMessageChange} />
        <button type="submit">Send</button>
      </form>
      <ul>
        {props.messages.map((message, index) => (
          <li key={index}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
