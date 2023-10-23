import React from 'react'

interface TextMessageProps {
  text: string
  theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'normal'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
}

export const TextMessage = (props: TextMessageProps) => {
  const textSize = 'text-' + props.size
  const textTheme = 'text-' + props.theme + '-default'

  return (
    <>
      <p className={`${textSize} ${textTheme} `}>{props.text}</p>
    </>
  )
}
