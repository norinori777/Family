import React from "react";

interface SpeechBubbleProps {
  message: string;
}

export const SpeechBubble = (props: SpeechBubbleProps) => {
  return (
    <div className="block">
      <span className="relative">
        <span
          className={
            "whitespace-nowrap " +
            "rounded " +
            "bg-green-400 " +
            "px-2 " +
            "py-1 " +
            "text-white " +
            "absolute " +
            "top-1/2 " +
            "-left-1/3 " +
            "before:content-[''] " +
            "before:absolute " +
            "before:-translate-x-1/2 " +
            "before:left-1/2 " +
            "before:top-full " +
            "before:border-4 " +
            "before:border-transparent " +
            "before:border-t-green-400 "
          }
        >
          {props.message}
        </span>
      </span>
    </div>
  );
};
