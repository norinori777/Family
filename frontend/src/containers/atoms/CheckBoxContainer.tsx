import React from 'react'
import { CheckBox } from '../../components/atoms/CheckBox'

interface CheckBoxContainerProps {
  label: string
  name: string
  value: string
  checked: boolean
  userId: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>, userId: number) => void
}

export const CheckBoxContainer = (props: CheckBoxContainerProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event, props.userId)
  }

  return (
    <>
      <CheckBox
        label={props.label}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
      />
    </>
  )
}
