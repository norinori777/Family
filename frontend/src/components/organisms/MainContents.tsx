import React from 'react'
import { Contents } from '../molecules/Contents'
import { ContentItem } from '../../domain/contents/types'

interface MainContentsProps {
  contentItems: ContentItem[]
}

export const MainContents = (props: MainContentsProps) => {
  return (
    <section className="p-4 h-full">
      <Contents contents={props.contentItems} />
    </section>
  )
}
