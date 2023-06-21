import React from "react";

interface SpeechBubbleAsideProps {
    name: string;
    date: string
}

export const SpeechBubbleAside = (props: SpeechBubbleAsideProps) => {
    return (
        <div className="flex flex-row gap-1">
            <p className=" text-xs text-green-400">{props.name}</p>
            <p className=" text-xs text-green-400">{props.date}</p>
        </div>
    )
}