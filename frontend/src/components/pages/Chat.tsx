import React, { useState } from "react";
import { TalkMessage } from "../../domain/TalkMessage/types";
import { Talk } from "../../components/molecules/Talk";

interface ChatProps{
  talkMessages: TalkMessage[];
  submit: (message:string) => void;
}

const Chat = (props:ChatProps) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submit(newMessage);
    setNewMessage("");
  };

  return (
    <div>
      <form onSubmit={handleMessageSubmit}>
        <input type="text" value={newMessage} onChange={handleMessageChange} />
        <button type="submit">Send</button>
      </form>
      <div className="flex flex-col">
        {props.talkMessages.map((talkMessage, index) => (
            <Talk key={index} talkMessage={talkMessage} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
