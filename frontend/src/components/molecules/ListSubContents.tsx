import React from 'react'
import { SubContent } from './SubContent'
import { getDirection } from '../../util/theme/theme'
import { theme } from '../../util/theme/types'

interface ListSubContentsProps {
  direction: 'row' | 'col'
  items: { title: string; description: string; theme: theme }[]
}

export const ListSubContents = (props: ListSubContentsProps) => {
  const direction = getDirection(props.direction)
  return (
    <div className={`${direction} gap-1`}>
      {props.items.map((item) => {
        return (
          <div className="w-64">
            <SubContent title={item.title} description={item.description} theme={item.theme} />
          </div>
        )
      })}
    </div>
  )
}
