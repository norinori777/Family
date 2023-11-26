import React from 'react'
import { RouterLinkItemsContainer } from '../../containers/molecules/RouterLinkItemsContainer'

interface ListLinkItemsProps {
  items: {
    text: string
    initialLink: string
  }[]
}

export const ListLinkItems = (props: ListLinkItemsProps) => {
  return (
    <div className="flex flex-row md:justify-around max-md:gap-2">
      {props.items.map((item) => {
        return <RouterLinkItemsContainer key={item.text} text={item.text} link={item.initialLink} />
      })}
    </div>
  )
}
