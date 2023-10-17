import React from 'react'

interface SidebarTitleProps {
  title: string
}

export const SidebarTitle = (props: SidebarTitleProps) => {
  return (
    <>
      <p className="text-4xl text-white">{props.title}</p>
    </>
  )
}
