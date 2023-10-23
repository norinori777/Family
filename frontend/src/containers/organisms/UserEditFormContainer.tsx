import React from 'react'
import { UserEditForm } from '../../components/organisms/UserEditForm'
import { useRecoilState } from 'recoil'
import { reGetFlag } from '../../domain/registUser/atoms'
import { editUser } from '../../domain/user/atoms'
import { isDisplayUserEditModal } from '../../domain/modal/atoms'

export const UserEditFormContainer = () => {
  const [editUserAtom, setEditUserAtom] = useRecoilState(editUser)
  const [isDisplayedUserEditModalAtom, setDisplayedUserEditModalAtom] =
    useRecoilState(isDisplayUserEditModal)
  const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetFlag)

  const handleModal = () => {
    setDisplayedUserEditModalAtom(!isDisplayedUserEditModalAtom)
  }

  const handleReGet = () => {
    setReGetFlagAtom(reGetFlagAtom + 1)
  }

  return (
    <>
      <UserEditForm
        isDisplay={isDisplayedUserEditModalAtom}
        user={editUserAtom}
        handleModal={handleModal}
        handleReGet={handleReGet}
      />
    </>
  )
}
