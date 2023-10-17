import React from 'react'
import { ReactNode } from 'react'
import { theme } from '../../util/theme/types'
import { getDrakBorderBackGroundTheme } from '../../util/theme/theme'

interface PaperProps {
  children: ReactNode
  theme: theme
}

export const Paper = (props: PaperProps) => {
  const themeStyle = getDrakBorderBackGroundTheme(props.theme)
  return (
    // The Paper component is a section with rounded corners and a border.
    // The themeStyle variable contains the correct border color and background color for this theme.
    <section className={`rounded box-border border-solid border ${themeStyle}`}>
      {props.children}
    </section>
  )
}
