import React from 'react'
import { Link } from 'react-router-dom'

interface LinkItemProps {
  text: string
  link: string
  select: (text: string) => void
  underline: boolean
}

export const LinkItem = (props: LinkItemProps) => {
  const underline = props.underline ? 'underline' : ''
  const handleClick = () => props.select(props.text)

  return (
    <>
      <Link data-testid="linkItem" onClick={handleClick} className="font-medium" to={props.link}>
        <p className={`${underline}`}>{props.text}</p>
      </Link>
    </>
  )
}
