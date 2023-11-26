import React from 'react'
import { SidebarMenuItem } from './SidebarMenuItem'

interface SidebarMenuListProps {
  items: {
    icon: React.ElementType
    text: string
    link: string
    theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
  }[]
}

export const SidebarMenuList = (prorps: SidebarMenuListProps) => {
  return (
    <div className="flex flex-col gap-10">
      {prorps.items?.map((item) => {
        return (
          <SidebarMenuItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            link={item.link}
            theme={item.theme}
          />
        )
      })}
    </div>
  )
}
