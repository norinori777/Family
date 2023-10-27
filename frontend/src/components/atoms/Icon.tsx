import React from 'react'

interface IconProps {
  action: () => void
  icon: React.ElementType
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
}

export const Icon = (props: IconProps) => {
  const handleClick = () => {
    props.action()
  }
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <props.icon theme={props.theme} />
    </div>
  )
}
