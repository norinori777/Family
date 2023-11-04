import React from 'react'

interface CheckBoxProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox = (props: CheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event)
  }

  return (
    <div className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label htmlFor={props.name} className="ml-2 block text-sm text-gray-900">
        {props.label}
      </label>
    </div>
  )
}
