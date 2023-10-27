import React from 'react'

interface ListForOnChangeProps<T> {
  direction: 'row' | 'column'
  items: T[]
  children: React.ElementType
  onChange: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

export const ListForOnChange = <T,>(props: ListForOnChangeProps<T>) => {
  const handleChange = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    props.onChange(event)
  }
  const direction = props.direction === 'row' ? 'flex-row' : 'flex-col'
  return (
    <ul className={`flex ${direction} gap-2`}>
      {props.items.map((item: T, index: number) => (
        <li key={index} onChange={handleChange}>
          {React.createElement(props.children, { ...item })}
        </li>
      ))}
    </ul>
  )
}
