import React, { useState } from 'react'
import {
  getFocusRingTheme,
  getLightBackGroundTheme,
  getFocusPlaceholderTheme,
  getFocusTextTheme,
  getTextTheme,
} from '../../util/theme/theme'
import { theme } from '../../util/theme/types'

interface SelectBoxInHookFormProps {
  label: string
  name: string
  options: { value: string; label: string }[]
  description: string
  field: any
  error: string | React.JSX.Element
  theme: theme
}

export const SelectBoxInHookForm = (props: SelectBoxInHookFormProps) => {
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
      <select
        title={props.label}
        className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
        {...props.field}
      >
        {props.options.map((option: { value: string; label: string }) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description}</p>
      {<span>{props.error}</span>}
    </div>
  )
}
