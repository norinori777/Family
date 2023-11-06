import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { useAxios } from '../../util/hooks/useAxios'
import { TwoChoiceModal } from '../../components/organisms/TwoChoiceModal'
import { alertMessageListUser, alertShowListUser, deleteUser } from '../../domain/user/atoms'
import { isDisplayChatRoomDeleteModal, isDisplayDeleteUserModal } from '../../domain/modal/atoms'
import { reGetFlag } from '../../domain/registUser/atoms'
import { CsrfToken } from '../../domain/csrf/types'
import {
  alertMessageListChatRoom,
  alertShowListChatRoom,
  deleteChatRoom,
  reGetCatRoomFlag,
} from '../../domain/chatRoom/atoms'

export const ChatRoomDeleteModalContainer = () => {
  const { response, error, loading, sendRequest } = useDirectAxios<string, string>()

  const {
    data: csrfData,
    error: csrfError,
    isLoading: isCsrfLoading,
  } = useAxios<CsrfToken>({
    url: '/csrf',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
  })

  const [deleteChatRoomAtom, setDeleteChatRoomAtom] = useRecoilState(deleteChatRoom)
  const [isDisplayChatRoomDeleteModalAtom, setIsDisplayChatRoomDeleteModalAtom] = useRecoilState(
    isDisplayChatRoomDeleteModal
  )
  const [reGetChatRoomFlagAtom, setReChatRoomGetFlagAtom] = useRecoilState(reGetCatRoomFlag)
  const setAlertMessage = useSetRecoilState(alertMessageListChatRoom)
  const setAlertShow = useSetRecoilState(alertShowListChatRoom)

  const handleModal = () => {
    setIsDisplayChatRoomDeleteModalAtom(!isDisplayChatRoomDeleteModalAtom)
  }

  const handleReGet = () => {
    setReChatRoomGetFlagAtom(reGetChatRoomFlagAtom + 1)
  }

  const chatRoomDelete = () => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}
    sendRequest({
      url: '/chatroom/delete/' + deleteChatRoomAtom,
      method: 'delete',
      headers: csrfToken,
    })
  }

  useEffect(() => {
    if (error != null) {
      if (error.response.status === 404) {
        setAlertMessage('チャットルームはすでに削除されています。')
        setAlertShow(true)
        console.log('チャットルームはすでに削除されています。')
      }
      if (error.response.status === 500) {
        setAlertMessage('チャットルームの削除に失敗しました。')
        setAlertShow(true)
        console.log('チャットルームの削除に失敗しました。')
      }
      handleModal()
    }
    if (response != null) {
      handleModal()
      setAlertShow(false)
      handleReGet()
    }
  }, [error, response])

  return (
    <>
      <TwoChoiceModal
        isDisplayed={isDisplayChatRoomDeleteModalAtom}
        title={'チャットルーム削除確認'}
        description={'選択したチャットルームを削除しますか。'}
        content={<div></div>}
        leftButton={'キャンセル'}
        rightButton={'削除'}
        handleModal={handleModal}
        handleReGet={handleReGet}
        leftButtonCallback={handleModal}
        rightButtonCallback={chatRoomDelete}
        theme={'primary'}
        descriptionTheme={'normal'}
      />
    </>
  )
}
