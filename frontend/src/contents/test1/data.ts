import { ContentItem, Contents, HeaderMenuItem, SideMenuItem } from '../../domain/contents/types'
import { Pencil } from '../../components/Icons/Pencil'
import { test } from '../../components/pages/test'
import { UserContainer } from '../../containers/pages/UserContainer'
import { ChatContainer } from '../../containers/pages/ChatContainer'
import { ListChatRoomContainer } from '../../containers/pages/ListChatRoomConatainer'

const sideMenuItems: SideMenuItem[] = [
  { icon: Pencil, text: 'Chat', link: '/Chat/1' },
  { icon: Pencil, text: 'ユーザー情報', link: '/User' },
  { icon: Pencil, text: 'チャットルーム', link: '/ChatRoom' },
  { icon: Pencil, text: 'MenuTitle4', link: '/test4' },
  { icon: Pencil, text: 'MenuTitle5', link: '/test5' },
]

const contentItems: ContentItem[] = [
  { link: '/Chat/:roomId', key: 'chat', component: ChatContainer },
  { link: '/User', key: 'user', component: UserContainer },
  { link: '/ChatRoom', key: 'chatroom', component: ListChatRoomContainer },
  { link: '/test4', key: 'test4', component: test },
  { link: '/test5', key: 'test5', component: test },
]

const headerMenuItem: HeaderMenuItem = {
  text: 'HeaderTitle1',
  initialLink: '/Chat',
}

export const header1Contents: Contents = {
  headerMenuItem: headerMenuItem,
  sideMenuItems: sideMenuItems,
  contentItems: contentItems,
}
