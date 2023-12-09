import React from 'react'
import { theme } from '../../util/theme/types'
import { useState } from 'react'
import {
  getFocusPlaceholderTheme,
  getFocusRingTheme,
  getFocusTextTheme,
  getTextTheme,
} from '../../util/theme/theme'

export interface TwoTextBoxHookFormProps {
  type: 'text' | 'password' | 'submit'
  name1: string
  name2: string
  label1: string
  label2: string
  placeholder1: string
  placeholder2: string
  defaultValue1: string
  defaultValue2: string
  description1: string
  description2: string
  theme: theme
  index: number
  field: any
  error1: string | React.JSX.Element
  error2: string | React.JSX.Element
}

export const TwoTextBoxHookForm = (props: TwoTextBoxHookFormProps) => {
  const [inputFocus, setInputFocus] = useState(false)
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
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-1">
        <div className="flex flex-col">
          <label
            htmlFor={`${props.name1}.${props.index}`}
            className={`block mb-2 text-sm font-medium  ${textTheme}`}
          >
            {props.label1}
          </label>
          <input
            type={props.type}
            name={`${props.name1}.${props.index}`}
            defaultValue={props.defaultValue1}
            className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-8 p-2.5`}
            placeholder={props.placeholder1}
            onBlur={onBlurHandle}
            onFocus={onFocusHandle}
            {...props.field}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor={`${props.name2}.${props.index}`}
            className={`block mb-2 text-sm font-medium  ${textTheme}`}
          >
            {props.label2}
          </label>
          <input
            type={props.type}
            name={`${props.name2}.${props.index}`}
            defaultValue={props.defaultValue2}
            className={`${focusRingTheme} ring-gray-300 ring-2 focus:ring-2 focus:outline-none ${focusTextTheme} placeholder-gray-300 ${focusPlaceholderTheme} text-sm rounded-lg block w-full p-2.5`}
            placeholder={props.placeholder2}
            onBlur={onBlurHandle}
            onFocus={onFocusHandle}
            {...props.field}
          />
        </div>
      </div>
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description1}</p>
      {<span>{props.error1}</span>}
      <p className={`mt-2 text-sm ${textTheme}`}>{props.description2}</p>
      {<span>{props.error2}</span>}
    </div>
  )
}
