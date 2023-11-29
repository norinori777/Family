import { ContentItem, Contents, HeaderMenuItem, SideMenuItem } from '../../domain/contents/types'
import { Pencil } from '../../components/Icons/Pencil'
import { test } from '../../components/pages/test'
import { UserContainer } from '../../containers/pages/UserContainer'
import { ChatContainer } from '../../containers/pages/ChatContainer'
import { ListChatRoomContainer } from '../../containers/pages/ListChatRoomConatainer'
import { CycleDoContainer } from '../../containers/pages/CycleDoContainer'

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: 'チャットルーム', link: '/ChatRoom', theme: 'white' },
  { icon: Pencil, text: 'CycleDo', link: '/CycleDo', theme: 'white' },
  { icon: Pencil, text: 'Chat', link: '/Chat/1', theme: 'white' },
  { icon: Pencil, text: 'ユーザー情報', link: '/User', theme: 'white' },
  { icon: Pencil, text: 'MenuTitle5', link: '/test5', theme: 'white' },
]

const contentItems: ContentItem[] = [
  { link: '/ChatRoom', key: 'chatroom', component: ListChatRoomContainer },
  { link: '/CycleDo', key: 'CycleDo', component: CycleDoContainer },
  { link: '/Chat/:roomId', key: 'chat', component: ChatContainer },
  { link: '/User', key: 'user', component: UserContainer },
  { link: '/test5', key: 'test5', component: test },
]

const headerMenuItem: HeaderMenuItem = {
  text: 'HeaderTitle1',
  initialLink: '/ChatRoom',
}

export const header1Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
}
