import React from 'react'
import { TextMessage } from '../../components/atoms/TextMessage'
import { NavLink } from 'react-router-dom'

interface SidebarMenuItemProps {
  icon: React.ElementType
  text: string
  link: string
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
}

export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  return (
    <nav className="flex flex-row gap-4">
      <span className="text-white text-2xl">
        {React.createElement(props.icon, { theme: props.theme })}
      </span>
      <NavLink className="text-white" to={props.link}>
        <TextMessage theme={props.theme} text={props.text} size={'base'} />
      </NavLink>
    </nav>
  )
}
