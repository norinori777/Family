import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { reGetCatRoomFlag } from '../../domain/chatRoom/atoms'
import { isDisplayRegistChatRoomModal } from '../../domain/modal/atoms'
import { ListChatRoom } from '../../components/pages/ListChatRooms'

export const ListChatRoomContainer = () => {
  const [isDisplayedChatRoomModalAtom, setDisplayedChatRoomModalAtom] = useRecoilState(
    isDisplayRegistChatRoomModal
  )
  const reGetChatRoomFlagAtom = useRecoilValue(reGetCatRoomFlag)

  const handleModal = () => {
    setDisplayedChatRoomModalAtom(!isDisplayedChatRoomModalAtom)
  }

  return <ListChatRoom openHandle={handleModal} reGet={reGetChatRoomFlagAtom} />
}
