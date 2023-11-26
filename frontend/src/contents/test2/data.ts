import { ContentItem, Contents, HeaderMenuItem, SideMenuItem } from '../../domain/contents/types'
import { Pencil } from '../../components/Icons/Pencil'
import { test } from '../../components/pages/test'

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: 'MenuTitle6', link: '/test6', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle7', link: '/test7', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle8', link: '/test8', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle9', link: '/test9', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle10', link: '/test10', theme: 'white' },
]

const contentItems: ContentItem[] = [
  { link: '/test6', key: 'test6', component: test },
  { link: '/test7', key: 'test7', component: test },
  { link: '/test8', key: 'test8', component: test },
  { link: '/test9', key: 'test9', component: test },
  { link: '/test10', key: 'test10', component: test },
]

const headerMenuItem: HeaderMenuItem = {
  text: 'HeaderTitle2',
  initialLink: '/test6',
}

export const header2Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
}
