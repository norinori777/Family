import React from 'react'

interface ListForOnActionProps<T, U, V> {
  direction: 'row' | 'column'
  items: T[]
  children: React.ElementType
  action: (event: U, data: V) => void
}

export const ListForOnAction = <T, U, V>(props: ListForOnActionProps<T, U, V>) => {
  const handleAction = (event: U, data: V) => {
    props.action(event, data)
  }
  const direction = props.direction === 'row' ? 'flex-row' : 'flex-col'
  return (
    <ul className={`flex ${direction} gap-2`}>
      {props.items.map((item: T, index: number) => (
        <li key={index}>
          {React.createElement(props.children, { ...item, onChange: handleAction })}
        </li>
      ))}
    </ul>
  )
}
