import React from 'react'
import { LinkItemsContainer } from '../../containers/molecules/LinkItemsContainer'

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
        return <LinkItemsContainer key={item.text} text={item.text} link={item.initialLink} />
      })}
    </div>
  )
}
