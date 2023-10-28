import React from 'react'
import { Sidebar } from '../atoms/Sidebar'
import { SidebarMenuList } from '../molecules/SidebarMenuList'

interface SideMenuProps {
  menuItems: {
    icon: React.ElementType
    text: string
    link: string
    theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
  }[]
}

export const SideMenu = (props: SideMenuProps) => {
  return (
    <Sidebar>
      <SidebarMenuList items={props.menuItems} />
    </Sidebar>
  )
}
