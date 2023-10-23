import React from 'react'
import { getDrakBorderBackGroundTheme } from '../../util/theme/theme'

interface AlertMessageProps {
  message: string
  showAlert: boolean
  theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'normal'
}

export const AlertMessage: React.FC<AlertMessageProps> = (props: AlertMessageProps) => {
  const themeStyle = getDrakBorderBackGroundTheme(props.theme)
  return (
    <>
      {props.showAlert && (
        <div className={`text-white p-2 opacity-70 rounded-lg  ${themeStyle}`}>{props.message}</div>
      )}
    </>
  )
}
