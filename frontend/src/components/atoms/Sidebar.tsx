import React from 'react'
import { ReactNode } from 'react'

export const Sidebar = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      className={
        'h-full max-md:-ml-52  md:w-52 md:shadow transform -translate-x-full md:translate-x-0 duration-150 ease-in bg-primary-default pl-4 pt-8'
      }
    >
      {children}
    </div>
  )
}
