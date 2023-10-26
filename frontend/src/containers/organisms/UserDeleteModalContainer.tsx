import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import useDirectAxios from '../../util/hooks/useDirectAxios'
import { useAxios } from '../../util/hooks/useAxios'
import { TwoChoiceModal } from '../../components/organisms/TwoChoiceModal'
import { alertMessageListUser, alertShowListUser, deleteUser } from '../../domain/user/atoms'
import { isDisplayDeleteUserModal } from '../../domain/modal/atoms'
import { reGetFlag } from '../../domain/registUser/atoms'
import { CsrfToken } from '../../domain/csrf/types'

export const UserDeleteModalContainer = () => {
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

  const [deleteUserAtom, setDeleteUserAtom] = useRecoilState(deleteUser)
  const [isDisplayedUserDeleteModalAtom, setDisplayedUserDeleteModalAtom] =
    useRecoilState(isDisplayDeleteUserModal)
  const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetFlag)
  const setAlertMessage = useSetRecoilState(alertMessageListUser)
  const setAlertShow = useSetRecoilState(alertShowListUser)

  const handleModal = () => {
    setDisplayedUserDeleteModalAtom(!isDisplayedUserDeleteModalAtom)
  }

  const handleReGet = () => {
    setReGetFlagAtom(reGetFlagAtom + 1)
  }

  const userDelete = () => {
    if (isCsrfLoading) return
    const csrfToken = csrfData != null ? { [csrfData.headerName]: csrfData.token } : {}
    sendRequest({
      url: '/user/delete',
      method: 'delete',
      headers: csrfToken,
      params: { emailAddress: deleteUserAtom },
    })
  }

  useEffect(() => {
    if (error != null) {
      if (error.response.status === 404) {
        setAlertMessage('ユーザーはすでに削除されています。')
        setAlertShow(true)
        console.log('ユーザーはすでに削除されています。')
      }
      if (error.response.status === 500) {
        setAlertMessage('ユーザーの削除に失敗しました。')
        setAlertShow(true)
        console.log('ユーザーの削除に失敗しました。')
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
        isDisplayed={isDisplayedUserDeleteModalAtom}
        title={'ユーザー削除確認'}
        description={'選択したユーザーを削除しますか。'}
        content={<div></div>}
        leftButton={'キャンセル'}
        rightButton={'削除'}
        handleModal={handleModal}
        handleReGet={handleReGet}
        leftButtonCallback={handleModal}
        rightButtonCallback={userDelete}
        theme={'primary'}
        descriptionTheme={'normal'}
      />
    </>
  )
}
