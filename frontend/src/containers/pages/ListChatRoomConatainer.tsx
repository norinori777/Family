import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { editChatRoom, editModeChatRoom, reGetCatRoomFlag } from '../../domain/chatRoom/atoms'
import { isDisplayRegistChatRoomModal } from '../../domain/modal/atoms'
import { ListChatRoom } from '../../components/pages/ListChatRooms'

export const ListChatRoomContainer = () => {
  const [isDisplayedChatRoomModalAtom, setDisplayedChatRoomModalAtom] = useRecoilState(
    isDisplayRegistChatRoomModal
  )
  const setEditModeChatRoomAtom = useSetRecoilState(editModeChatRoom)
  const setEditChatRoomAtom = useSetRecoilState(editChatRoom)
  const reGetChatRoomFlagAtom = useRecoilValue(reGetCatRoomFlag)

  const handleModal = () => {
    setDisplayedChatRoomModalAtom(!isDisplayedChatRoomModalAtom)
    setEditChatRoomAtom({
      roomId: 0,
      roomName: '',
      roomDescription: '',
      roomOwnerId: 0,
      createAt: '',
      updateAt: '',
    })
    setEditModeChatRoomAtom(false)
  }

  return <ListChatRoom openHandle={handleModal} reGet={reGetChatRoomFlagAtom} />
}
