import React from "react";

interface SpeechBubbleAsideProps {
    text: string;
}

export const SpeechBubbleAside = (props: SpeechBubbleAsideProps) => {
    return (
        <div className="speech-bubble-aside">
            <p className="speech-bubble-aside__text">{props.text}</p>
        </div>
    )
}