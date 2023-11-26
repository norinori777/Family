export type LoginedUser = {
  name: string
  emailAddress: string
  state: number
  userId: number
}

export type User = {
  userId: number
  name: string
  emailAddress: string
  state: number
  createAt: string
  updateAt: string
  version: number
}

export type ResponseUserData = {
  name: string
  emailAddress: string
  state: number
  version: number
  createAt: string
  updateAt: string
}

export type EditUser = {
  name: string
  emailAddress: string
  beforeEmailAddress: string
  version: number
}

export type ChatRoomMemberUser = {
  roomId: number
  userId: number
  name: string
  emailAddress: string
}

export type CheckListChatRoomMember = {
  label: string
  name: string
  value: string
  checked: boolean
  userId?: number
}
