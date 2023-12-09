import { theme } from '../../util/theme/types'
import { getTextTheme } from '../../util/theme/theme'
import React from 'react'

export interface MainTitleProps {
  title: string
  theme: theme
}

export const MainTitle = (props: MainTitleProps) => {
  const textTheme = getTextTheme(props.theme)
  return (
    <div className="w-72">
      <h1 className={`${textTheme} text-2xl font-bold`}>{props.title}</h1>
    </div>
  )
}
