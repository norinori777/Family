import React from 'react'
import { Icon } from '../../components/atoms/Icon'
import { Pencil } from '../../components/Icons/Pencil'
import { XCircle } from '../../components/Icons/XCircle'
import { User } from 'domain/user/types'

interface UserActionContainerProps {
  item: User
}

export const UserActionContainer = (props: UserActionContainerProps) => {
  const editUser = () => {
    console.log(props.item.name + ' edit user')
  }
  const deleteUser = () => {
    console.log(props.item.name + ' delete user')
  }
  return (
    <div className="flex flex-row gap-2">
      <Icon icon={Pencil} action={editUser} />
      <Icon icon={XCircle} action={deleteUser} />
    </div>
  )
}
