import { atom } from 'recoil'
import { EditUser, LoginedUser } from './types'

export const loginedUser = atom<LoginedUser>({
  key: 'loginedUser',
  default: { name: '', emailAddress: '', state: 0, userId: 0 },
})

export const editUser = atom<EditUser>({
  key: 'editUser',
  default: { name: '', emailAddress: '', beforeEmailAddress: '', version: 0 },
})
