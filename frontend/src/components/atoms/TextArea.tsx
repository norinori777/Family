import React from 'react'
import { useState } from 'react'
import {
  getFocusPlaceholderTheme,
  getFocusRingTheme,
  getFocusTextTheme,
  getLightBackGroundTheme,
  getTextTheme,
} from '../../util/theme/theme'
import { theme } from '../../util/theme/types'

interface TextAreaProps {
  label: string
  placeholder: string
  description: string
  theme: theme
  rowLength: number
}

export const TextArea = (props: TextAreaProps) => {
  const [inputFocus, setInputFocus] = useState(false)

  const textTheme = inputFocus == true ? getTextTheme(props.theme) : 'text-gray-500'
  const focusTextTheme = getFocusTextTheme(props.theme)
  const focusRingTheme = getFocusRingTheme(props.theme)
  const backGroundTheme = getLightBackGroundTheme(props.theme)
  const focusPlaceholderTheme = getFocusPlaceholderTheme(props.theme)

  const onFocusHandle = () => {
    setInputFocus(true)
  }

  const onBlurHandle = () => {
    setInputFocus(false)
  }

  return (
    <div className="mb-6">
      <label htmlFor="success" className={`block mb-2 text-sm font-medium  ${textTheme}`}>
        {props.label}
      </label>
      <textarea
        aria-placeholder={props.placeholder}
        id="success"
        rows={props.rowLength}
        className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
        placeholder={props.placeholder}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
      />
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description}</p>
    </div>
  )
}
