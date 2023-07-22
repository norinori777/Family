import React from 'react';
import { SpeechBubble } from '../../components/atoms/SpeechBubble';
import { SpeechBubbleAside } from '../../components/atoms/SpeechBubbleAside';
import { TalkMessage } from '../../domain/TalkMessage/types';

interface TalkProps {
    talkMessage: TalkMessage
}

export const Talk = (props: TalkProps) => {
    return(
        <div className="flex flex-col gap-1">
            <SpeechBubbleAside name={props.talkMessage.name} date={props.talkMessage.createAt} />
            <SpeechBubble message={props.talkMessage.message} />
        </div>
    );
}