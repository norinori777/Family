import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isDisplayRegistUserModal } from '../../domain/modal/atoms'
import { reGetFlag } from '../../domain/registUser/atoms'
import { ListUsers } from '../../components/pages/ListUsers'
import { alertMessageListUser, alertShowListUser } from '../../domain/user/atoms'

export const UserContainer = () => {
  const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] =
    useRecoilState(isDisplayRegistUserModal)
  const reGetFlagAtom = useRecoilValue(reGetFlag)
  const alertMessage = useRecoilValue(alertMessageListUser)
  const alertShow = useRecoilValue(alertShowListUser)

  const handleModal = () => {
    setDisplayedUserModalAtom(!isDisplayedUserModalAtom)
  }

  return (
    <ListUsers
      openHandle={handleModal}
      reGet={reGetFlagAtom}
      alertMessage={alertMessage}
      alertshow={alertShow}
    />
  )
}
