import React from 'react'
import { Icon } from '../../components/atoms/Icon'
import { Pencil } from '../../components/Icons/Pencil'
import { XCircle } from '../../components/Icons/XCircle'
import { User } from '../../domain/user/types'
import { useRecoilState } from 'recoil'
import { isDisplayDeleteUserModal, isDisplayUserEditModal } from '../../domain/modal/atoms'
import { deleteUser, editUser } from '../../domain/user/atoms'

interface UserActionContainerProps {
  item: User
}

export const UserActionContainer = (props: UserActionContainerProps) => {
  const [editUserAtom, setEditUserAtom] = useRecoilState(editUser)
  const [isDisplayedUserEditModalAtom, setDisplayedUserEditModalAtom] =
    useRecoilState(isDisplayUserEditModal)
  const [deleteUserAtom, setDeleteUserAtom] = useRecoilState(deleteUser)
  const [isDisplayedUserDeleteModalAtom, setDisplayedUserDeleteModalAtom] =
    useRecoilState(isDisplayDeleteUserModal)

  const handleEditUser = () => {
    setEditUserAtom({
      name: props.item.name,
      emailAddress: props.item.emailAddress,
      beforeEmailAddress: props.item.emailAddress,
      version: props.item.version,
    })
    setDisplayedUserEditModalAtom(!isDisplayedUserEditModalAtom)
    console.log(props.item.name + ' edit user')
  }
  const handleDeleteUser = () => {
    setDeleteUserAtom(props.item.emailAddress)
    setDisplayedUserDeleteModalAtom(!isDisplayedUserDeleteModalAtom)
    console.log(props.item.name + ' delete user')
  }
  return (
    <div className="flex flex-row gap-2 cursor-pointer">
      <Icon icon={Pencil} action={handleEditUser} theme={'primary'} />
      <Icon icon={XCircle} action={handleDeleteUser} theme={'primary'} />
    </div>
  )
}
