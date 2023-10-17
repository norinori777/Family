import React from 'react'

interface SpeechBubbleProps {
  message: string
}

export const SpeechBubble = (props: SpeechBubbleProps) => {
  return (
    <p
      className={
        'relative ' +
        'block ' +
        'whitespace-nowrap ' +
        'rounded ' +
        'bg-green-400 ' +
        'px-2 ' +
        'py-1 ' +
        'mb-2 ' +
        'max-w-[10rem] ' +
        'w-fit ' +
        'whitespace-pre-wrap ' +
        'text-white ' +
        "before:content-[''] " +
        'before:absolute ' +
        'before:-translate-x-1/2 ' +
        'before:left-1/2 ' +
        'before:top-full ' +
        'before:border-4 ' +
        'before:border-transparent ' +
        'before:border-t-green-400 '
      }
    >
      {props.message}
    </p>
  )
}
