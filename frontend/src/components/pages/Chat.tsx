import React, { useEffect, useRef, useState } from "react";
import { TalkMessage } from "../../domain/TalkMessage/types";
import { Talk } from "../../components/molecules/Talk";
import { InputBox } from "../../components/atoms/InputBox";
import { Button } from "../../components/atoms/Button";

interface ChatProps{
  userId: number;
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

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  
  const scrollToBottom = () => {
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [props.talkMessages]
  )

  return (
    <div ref={scrollContainerRef} className="relative h-87vh">
      <div className="flex flex-col h-80vh overflow-auto hidden-scrollbar p-2">
        {props.talkMessages.map((talkMessage, index) => (
          props.userId === talkMessage.userId 
? <div className="flex flex-row justify-start"><Talk key={index} talkMessage={talkMessage} /></div> :
          <div className="flex flex-row justify-end"><Talk key={index} talkMessage={talkMessage} /></div>      
        ))}
      </div>
      <div className="absolute bottom-0 p-2 border-t-2 w-full">
        <form onSubmit={handleMessageSubmit}>
          <div className="flex flex-row gap-1">
            <InputBox placeholder="メッセージを入力してください" handleChange={handleMessageChange} value={newMessage} theme={'success'}  />
            <Button type={'submit'} label={'送信'} theme={'success'} action={()=>{}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
