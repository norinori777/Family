import React from 'react'
import { UserForm } from '../../components/organisms/UserForm'
import { useRecoilState, useRecoilValue } from 'recoil'
import { reGetFlag } from '../../domain/registUser/atoms'
import { isDisplayRegistUserModal } from '../../domain/modal/atoms'
import { masterRoleQuery } from '../../domain/role/atoms'
import { RoLeList } from 'domain/role/types'

export const UserFormContainer = () => {
  const [isDisplayedUserModalAtom, setDisplayedUserModalAtom] =
    useRecoilState(isDisplayRegistUserModal)
  const [reGetFlagAtom, setReGetFlagAtom] = useRecoilState(reGetFlag)
  // TODO: Recoilのselectorでエラーが発生する問題あり。
  //const listRoles = useRecoilValue(masterRoleQuery)
  const listRoles = [
    { value: 'admin', label: 'ROLE_ADMIN' },
    { value: 'general', label: 'ROLE_GENERAL' },
  ]
  const handleModal = () => {
    setDisplayedUserModalAtom(!isDisplayedUserModalAtom)
  }

  const handleReGet = () => {
    setReGetFlagAtom(reGetFlagAtom + 1)
  }

  return (
    <UserForm
      isDisplay={isDisplayedUserModalAtom}
      user={{
        name: '',
        password: '',
        emailAddress: '',
        roleId: '',
      }}
      roleList={listRoles}
      handleModal={handleModal}
      handleReGet={handleReGet}
    />
  )
}
