import { ContentItem, Contents, HeaderMenuItem, SideMenuItem } from '../../domain/contents/types'
import { Pencil } from '../../components/Icons/Pencil'
import { test } from '../../components/pages/test'

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: 'MenuTitle11', link: '/test11', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle12', link: '/test12', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle13', link: '/test13', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle14', link: '/test14', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle15', link: '/test15', theme: 'white' },
]

const contentItems: ContentItem[] = [
  { link: '/test11', key: 'test11', component: test },
  { link: '/test12', key: 'test12', component: test },
  { link: '/test13', key: 'test13', component: test },
  { link: '/test14', key: 'test14', component: test },
  { link: '/test15', key: 'test15', component: test },
]

const headerMenuItem: HeaderMenuItem = {
  text: 'HeaderTitle3',
  initialLink: '/test11',
}

export const header3Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
}
