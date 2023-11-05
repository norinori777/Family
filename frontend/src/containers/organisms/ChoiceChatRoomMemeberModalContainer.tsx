import React, { useEffect, useState, CompositionEvent, ChangeEvent } from 'react'
import { ChoiceChatRoomMemeberModal } from '../../components/organisms/ChoiceChatRoomMemeberModal'
import { useRecoilState } from 'recoil'
import { isDisplayChoiceChatRoomMemberModal } from '../../domain/modal/atoms'
import { useAxios } from '../../util/hooks/useAxios'
import { RestResponse } from '../../domain/Rest/types'
import { ChatRoomMemberUser, CheckListChatRoomMember, User } from '../../domain/user/types'
import { reGetFlag } from '../../domain/registUser/atoms'
import { alertMessageChatRoomForm, alertShowChatRoomForm } from '../../domain/user/atoms'
import {
  changeCheckedUsers,
  convertChatRoomMemberListFromUserList,
  filterChatRoomMemberList,
} from '../../domain/user/operation'
import { chatRoomMembers } from '../../domain/chatRoom/atoms'

export const ChoiceChatRoomMemeberModalContainer = () => {
  const [isDisplayChoiceChatRoomMemberModalAtom, setIsDisplayedChatRoomMemmberModalAtom] =
    useRecoilState(isDisplayChoiceChatRoomMemberModal)
  const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetFlag)
  const [alertMessageChatRoomFormAtom, setAlertMessageChatRoomFormAtom] =
    useRecoilState(alertMessageChatRoomForm)
  const [alertShowChatRoomFormAtom, setAlertShowChatRoomFormAtom] =
    useRecoilState(alertShowChatRoomForm)
  const [member, setMember] = useState<CheckListChatRoomMember[]>([])
  const [filterMember, setFilterMember] = useState<CheckListChatRoomMember[]>([])
  const [filter, setFilter] = useState<string>('')
  const [selectedMembersAtom, setSelectedMembersAtom] =
    useRecoilState<ChatRoomMemberUser[]>(chatRoomMembers)
  const [tempSelectedMembers, setTempSelectedMembers] = useState<ChatRoomMemberUser[]>(
    selectedMembersAtom ?? []
  )

  const handleSelectingMember = (e: ChangeEvent<HTMLInputElement>, userId: number) => {
    if (e.target.checked)
      setTempSelectedMembers([
        ...tempSelectedMembers,
        { roomId: 0, userId: userId, name: e.target.name, emailAddress: e.target.value },
      ])
    if (!e.target.checked)
      setTempSelectedMembers(
        tempSelectedMembers.filter((item) => item.emailAddress !== e.target.value)
      )
  }

  const handleDoubleByteChangeFilter = (e: CompositionEvent<HTMLInputElement>) => {
    if (e && e.currentTarget) {
      setFilter(e.currentTarget.value)
    }
  }

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.currentTarget) {
      setFilter(e.currentTarget.value)
    }
  }

  const handleCancel = () => {
    setTempSelectedMembers(selectedMembersAtom)
    handleModal()
  }

  const handleUpdate = () => {
    setSelectedMembersAtom(tempSelectedMembers)
    handleModal()
  }

  const { data, error, isLoading } = useAxios<RestResponse<User[]>>({
    url: '/user/list',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: reGetFlagAtom,
  })

  const handleModal = () => {
    setIsDisplayedChatRoomMemmberModalAtom(!isDisplayChoiceChatRoomMemberModalAtom)
    setAlertMessageChatRoomFormAtom('')
    setAlertShowChatRoomFormAtom(false)
  }

  // ここで、チャットルームメンバーの選択状態を初期化する
  useEffect(() => {
    setTempSelectedMembers(selectedMembersAtom)
    setFilterMember(member)
  }, [selectedMembersAtom])

  // ここで、チャットルームメンバーの選択状態を初期化する
  useEffect(() => {
    const chatRoomMemberCandidate = filterChatRoomMemberList(member, filter)
    const chatRoomMemberCheckedCandidate = changeCheckedUsers(
      chatRoomMemberCandidate,
      tempSelectedMembers ?? []
    )
    setFilterMember(chatRoomMemberCheckedCandidate)
  }, [filter, member, tempSelectedMembers])

  useEffect(() => {
    if (error !== undefined && isLoading === false) {
      setAlertMessageChatRoomFormAtom('ユーザー情報の取得に失敗しました。')
      setAlertShowChatRoomFormAtom(true)
      setIsDisplayedChatRoomMemmberModalAtom(false)
    }
    if (data !== undefined && isLoading === false) {
      const chatRoomMemberCandidate = convertChatRoomMemberListFromUserList(data?.data ?? [])
      setMember(chatRoomMemberCandidate)
    }
  }, [error, isLoading, data])

  return (
    <div>
      <ChoiceChatRoomMemeberModal
        isDisplayed={isDisplayChoiceChatRoomMemberModalAtom}
        items={filterMember}
        filter={filter}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
        handleDoubleByteChangeFilter={handleDoubleByteChangeFilter}
        handleChangeFilter={handleChangeFilter}
        handleSelectingMember={handleSelectingMember}
        theme={'primary'}
      />
    </div>
  )
}
