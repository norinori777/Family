import React from 'react'
import { HeaderMenuItem } from '../../domain/contents/types'
import { Header } from '../atoms/Header'
import { HeaderTitle } from '../atoms/HeaderTitle'
import { ListLinkItems } from '../molecules/ListLinkItems'

interface HeaderWithMenuLinksProps {
  headerIcon: React.ElementType
  headerTitle: string
  headerTheme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'normal'
  headerMenuLinks: HeaderMenuItem[]
}

export const HeaderWithMenuLinks = (props: HeaderWithMenuLinksProps) => {
  return (
    <Header>
      <div className="flex-shrink-0  max-md:hidden md:w-52 md:shadow transform -translate-x-full md:translate-x-0 duration-150 ease-in">
        <HeaderTitle title={props.headerTitle} theme={props.headerTheme} icon={props.headerIcon} />
      </div>
      <nav className="flex-grow">
        <ListLinkItems items={props.headerMenuLinks} />
      </nav>
    </Header>
  )
}
