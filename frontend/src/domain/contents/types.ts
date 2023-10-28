export type SideMenuItem = {
  icon: React.ElementType
  text: string
  link: string
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'normal' | 'white' | 'black'
}

export type HeaderMenuItem = {
  text: string
  initialLink: string
}

export type ContentItem = {
  component: React.ElementType
  key: string
  link: string
}

export type Contents = {
  headerMenuItem: HeaderMenuItem
  sideMenuItems: SideMenuItem[]
  contentItems: ContentItem[]
}
