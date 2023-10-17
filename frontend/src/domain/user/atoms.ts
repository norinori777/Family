import { atom } from 'recoil'
import { LoginedUser } from './types'

export const loginedUser = atom<LoginedUser>({
  key: 'loginedUser',
  default: { name: '', emailAddress: '', state: 0, userId: 0 },
})
