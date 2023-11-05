import { atom } from 'recoil'
import { ChatRoom } from './types'
import { ChatRoomMemberUser } from '../../domain/user/types'

export const reGetCatRoomFlag = atom<number>({
  key: 'reGetCatRoomFlag',
  default: 0,
})

export const reGetChatRoomMemberFlag = atom<number>({
  key: 'reGetChatRoomMemberFlag',
  default: 0,
})

export const editChatRoom = atom<ChatRoom>({
  key: 'editChatRoom',
  default: {
    roomId: 0,
    roomName: '',
    roomDescription: '',
    roomOwnerId: 0,
    createAt: '',
    updateAt: '',
  },
})

export const chatRoomMembers = atom<ChatRoomMemberUser[]>({
  key: 'chatRoomMembers',
  default: [],
})

export const editModeChatRoom = atom<boolean>({
  key: 'editMode',
  default: false,
})

export const deleteChatRoom = atom<number>({
  key: 'deleteChatRoom',
  default: 0,
})

export const alertMessageListChatRoom = atom<string>({
  key: 'alertMessageListChatRoom',
  default: '',
})

export const alertShowListChatRoom = atom<boolean>({
  key: 'alertShowListChatRoom',
  default: false,
})
