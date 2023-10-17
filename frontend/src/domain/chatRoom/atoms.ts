import { atom } from 'recoil'

export const reGetCatRoomFlag = atom<number>({
  key: 'reGetCatRoomFlag',
  default: 0,
})
