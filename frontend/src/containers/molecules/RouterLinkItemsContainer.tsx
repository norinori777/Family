import React from 'react'
import { useSetRecoilState } from 'recoil'
import { RouterLinkItem } from '../../components/atoms/RouterLinkItem'
import { viewContent } from '../../domain/contents/atoms'

interface RouterLinkItemProps {
  text: string
  link: string
}

export const RouterLinkItemsContainer = (props: RouterLinkItemProps) => {
  const setSelect = useSetRecoilState(viewContent)
  const setSelectOne = (selected: string) => setSelect(selected)
  return (
    <>
      <RouterLinkItem
        text={props.text}
        link={props.link}
        select={setSelectOne}
        underline={false}
        theme={'black'}
        size={'base'}
      />
    </>
  )
}
