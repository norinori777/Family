import { ChatRoomMemberUser, CheckListChatRoomMember, User } from './types'

export const convertChatRoomMemberListFromUserList = (
  userList: User[]
): CheckListChatRoomMember[] => {
  const chatRoomMemberList = userList.map((user) => ({
    label: user.name,
    name: user.name,
    value: user.emailAddress,
    checked: false,
    userId: user.userId,
  }))
  return chatRoomMemberList
}

export const filterChatRoomMemberList = (
  userList: CheckListChatRoomMember[],
  filter: string
): CheckListChatRoomMember[] => {
  const chatRoomMemberList = userList.filter((user) => filter === '' || user.name.includes(filter))
  return chatRoomMemberList
}

export const changeCheckedUsers = (
  userList: CheckListChatRoomMember[],
  checkedUsers: ChatRoomMemberUser[]
): CheckListChatRoomMember[] => {
  const chatRoomMembersListcheckeddata = userList.map((user) => ({
    ...user,
    checked: checkedUsers.some((checkedUser) => checkedUser.emailAddress === user.value)
      ? true
      : false,
  }))
  return chatRoomMembersListcheckeddata
}

export const convertChatRoomMemberUserToTextMessage = (
  user: ChatRoomMemberUser
): {
  text: string
  theme: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'normal' | 'white' | 'black'
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  underline?: boolean
} => {
  return { text: user.name, theme: 'black', size: 'base', underline: false }
}
