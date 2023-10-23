import { atom } from 'recoil'
import { RegistUser } from './types'

export const reGetFlag = atom<number>({
  key: 'reGetFlag',
  default: 0,
})
