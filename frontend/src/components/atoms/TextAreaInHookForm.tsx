import React, { useState } from 'react'
import {
  getFocusRingTheme,
  getFocusPlaceholderTheme,
  getFocusTextTheme,
  getTextTheme,
} from '../../util/theme/theme'
import { theme } from '../../util/theme/types'
import { FieldError } from 'react-hook-form/dist/types'

interface TextAreaProps {
  name: string
  label: string
  placeholder: string
  description: string
  rowLength: number
  theme: theme
  field: any
  error: string | React.JSX.Element
}

export const TextAreaInHookForm = (props: TextAreaProps) => {
  const [inputFocus, setInputFocus] = useState(false)
  const [message, setMessage] = useState('')

  const textTheme = inputFocus == true ? getTextTheme(props.theme) : 'text-gray-500'
  const focusTextTheme = getFocusTextTheme(props.theme)
  const focusRingTheme = getFocusRingTheme(props.theme)
  const focusPlaceholderTheme = getFocusPlaceholderTheme(props.theme)

  const onFocusHandle = () => {
    setInputFocus(true)
  }

  const onBlurHandle = () => {
    setInputFocus(false)
  }

  return (
    <div className="mb-6">
      <label htmlFor={props.name} className={`block mb-2 text-sm font-medium  ${textTheme}`}>
        {props.label}
      </label>
      <textarea
        id={props.name}
        name={props.name}
        rows={props.rowLength}
        className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
        placeholder={props.placeholder}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        {...props.field}
      />
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description}</p>
      {<span>{props.error}</span>}
    </div>
  )
}
