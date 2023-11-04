import React from 'react'

interface ListChildProps<T, U> {
  direction: 'row' | 'column'
  items: T[]
  children: React.ElementType
  convert?: (item: T) => U
}

export const ListChild = <T, U>(props: ListChildProps<T, U>) => {
  const direction = props.direction === 'row' ? 'flex-row' : 'flex-col'
  const convertItem = (item: T) => {
    if (props.convert) {
      return props.convert(item)
    }
    return item
  }
  return (
    <ul className={`flex ${direction} gap-2`}>
      {props.items.map((item: T, index: number) => (
        <li key={index}>{React.createElement(props.children, { ...convertItem(item) })}</li>
      ))}
    </ul>
  )
}
