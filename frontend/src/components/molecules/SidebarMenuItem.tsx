import React from 'react'
import { NavLink } from 'react-router-dom'

interface SidebarMenuItemProps {
  icon: React.ElementType
  text: string
  link: string
}

export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  return (
    <nav className="flex flex-row gap-4">
      <span className="text-white text-2xl">{React.createElement(props.icon)}</span>
      <NavLink className="text-white" to={props.link}>
        {props.text}
      </NavLink>
    </nav>
  )
}
