import { User } from '../../domain/user/types'
import { atom } from 'recoil'
export const listUser = atom<User[]>({ key: 'listUser', default: [] })
export const isDisplayRegistUserModal = atom<boolean>({
  key: 'isDisplayRegsitUserModal',
  default: false,
})
export const isDisplayUserEditModal = atom<boolean>({
  key: 'isDisplayUserEditModal',
  default: false,
})

export const isDisplayRegistChatRoomModal = atom<boolean>({
  key: 'isDisplayRegistChatRoomModal',
  default: false,
})

export const isDisplayDeleteUserModal = atom<boolean>({
  key: 'isDisplayDeleteUserModal',
  default: false,
})
