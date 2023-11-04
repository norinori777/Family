import { ChatRoomMemberUser } from '../../domain/user/types'

export type ChatRoom = {
  roomId: number
  roomName: string
  roomDescription: string
  roomOwnerId: number
  createAt: string
  updateAt: string
}

export type RegistChatRoom = {
  roomName: string
  roomDescription: string
  roomOwnerId: number
  chatRoomMembers: ChatRoomMemberUser[]
}
