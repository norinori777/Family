import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { isDisplayRegistChatRoomModal } from '../../domain/modal/atoms'
import {
  chatRoomMembers,
  editChatRoom,
  editModeChatRoom,
  reGetCatRoomFlag,
} from '../../domain/chatRoom/atoms'
import { ChatRoomForm } from '../../components/organisms/ChatRoomForm'
import { ChatRoomMemberUser } from '../../domain/user/types'

export const ChatRoomFormContainer = () => {
  const [isDisplayedChatRoomModalAtom, setIsDisplayedChatRoomModalAtom] = useRecoilState(
    isDisplayRegistChatRoomModal
  )
  const editChatRoomAtom = useRecoilValue(editChatRoom)
  const editModeAtom = useRecoilValue(editModeChatRoom)
  const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetCatRoomFlag)
  const [selectedMembersAtom, setSelectedMembersAtom] =
    useRecoilState<ChatRoomMemberUser[]>(chatRoomMembers)

  const handleModal = () => {
    setIsDisplayedChatRoomModalAtom(!isDisplayedChatRoomModalAtom)
  }

  const handleReGet = () => {
    setReGetFlagAtom(reGetFlagAtom + 1)
  }

  const setChatRoomMembers = (chatRoomMembers: ChatRoomMemberUser[]) => {
    setSelectedMembersAtom(chatRoomMembers)
  }

  const deleteChatRoomMember = (emailAddress: string) => {
    setSelectedMembersAtom(selectedMembersAtom.filter((item) => item.emailAddress !== emailAddress))
  }

  return (
    <ChatRoomForm
      isDisplay={isDisplayedChatRoomModalAtom}
      editMode={editModeAtom}
      chatRoom={editChatRoomAtom}
      selectedMembers={selectedMembersAtom}
      handleModal={handleModal}
      handleReGet={handleReGet}
      setChatRoomMembers={setChatRoomMembers}
      deleteChatRoomMember={deleteChatRoomMember}
    />
  )
}
