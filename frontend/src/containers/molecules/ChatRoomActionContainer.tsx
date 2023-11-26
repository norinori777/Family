import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ChatRoom } from '../../domain/chatRoom/types'
import {
  deleteChatRoom,
  editChatRoom,
  editModeChatRoom,
  reGetChatRoomMemberFlag,
} from '../../domain/chatRoom/atoms'
import {
  isDisplayChatRoomDeleteModal,
  isDisplayRegistChatRoomModal,
} from '../../domain/modal/atoms'
import { Icon } from '../../components/atoms/Icon'
import { Pencil } from '../../components/Icons/Pencil'
import { XCircle } from '../../components/Icons/XCircle'

interface ChatRoomActionContainerProps {
  item: ChatRoom
}

export const ChatRoomActionContainer = (props: ChatRoomActionContainerProps) => {
  const [editChatRoomAtom, setEditChatRoomAtom] = useRecoilState(editChatRoom)
  const [isDisplayedChatRoomEditModalAtom, setIsDisplayedChatRoomEditModalAtom] = useRecoilState(
    isDisplayRegistChatRoomModal
  )

  const [reGetChatRoomMembersFlag, setReGetChatRoomMembersFlag] =
    useRecoilState<number>(reGetChatRoomMemberFlag)
  const [deleteChatRoomAtom, setDeleteChatRoomAtom] = useRecoilState(deleteChatRoom)
  const [isDisplayedChatRoomDeleteModalAtom, setIsDisplayedChatRoomDeleteModalAtom] =
    useRecoilState(isDisplayChatRoomDeleteModal)
  const setEditModeChatRoomAtom = useSetRecoilState(editModeChatRoom)

  const handleEditChatRoom = () => {
    setEditModeChatRoomAtom(true)
    setEditChatRoomAtom({
      roomId: props.item.roomId,
      roomName: props.item.roomName,
      roomDescription: props.item.roomDescription,
      roomOwnerId: props.item.roomOwnerId,
      createAt: props.item.createAt,
      updateAt: props.item.updateAt,
    })
    setReGetChatRoomMembersFlag(reGetChatRoomMembersFlag + 1)
    setIsDisplayedChatRoomEditModalAtom(!isDisplayedChatRoomEditModalAtom)
  }

  const handleDeleteChatRoom = () => {
    setDeleteChatRoomAtom(props.item.roomId)
    setIsDisplayedChatRoomDeleteModalAtom(!isDisplayedChatRoomDeleteModalAtom)
  }
  return (
    <div className="flex flex-row gap-2 cursor-pointer">
      <Icon icon={Pencil} action={handleEditChatRoom} theme={'primary'} />
      <Icon icon={XCircle} action={handleDeleteChatRoom} theme={'primary'} />
    </div>
  )
}
