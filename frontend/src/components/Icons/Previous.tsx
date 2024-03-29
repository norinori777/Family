import React from 'react'
import { theme } from '../../util/theme/types'
import { getTextTheme } from '../../util/theme/theme'

interface PreviousProps {
  theme: theme
}

export const Previous = (props: PreviousProps) => {
  const theme = getTextTheme(props.theme)
  return (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 mr-2 ${theme}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  )
}
