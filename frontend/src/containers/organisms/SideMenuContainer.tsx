import React from 'react'
import { useRecoilValue } from 'recoil'
import { SideMenu } from '../../components/organisms/SideMenu'
import { nowChapterSideMenu } from '../../domain/contents/atoms'

export const SideMenuContainer = () => {
  const menuItems = useRecoilValue(nowChapterSideMenu)
  return (
    <>
      <SideMenu menuItems={menuItems} />
    </>
  )
}
