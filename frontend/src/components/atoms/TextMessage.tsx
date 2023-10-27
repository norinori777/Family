import React from 'react'
import { getTextTheme } from '../../util/theme/theme'

interface TextMessageProps {
  text: string
  theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'normal' | 'white' | 'black'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
}

export const TextMessage = (props: TextMessageProps) => {
  const textSize = 'text-' + props.size
  const textTheme = getTextTheme(props.theme)

  return (
    <>
      <p className={`${textSize} ${textTheme} `}>{props.text}</p>
    </>
  )
}
