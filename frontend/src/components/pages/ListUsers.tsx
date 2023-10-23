import React, { useEffect } from 'react'
import { UserForm } from '../organisms/UserForm'
import { ContainIconButton } from '../molecules/ContainIconButton'
import { Plus } from '../Icons/Plus'
import { useAxios } from '../../util/hooks/useAxios'
import { ResponseUserData, User } from '../../domain/user/types'
import { UserFormContainer } from '../../containers/organisms/UserFormContainer'
import { UsersActionTableContainer } from '../../containers/molecules/UsersActionTableContainer'
import { UserEditFormContainer } from '../../containers/organisms/UserEditFormContainer'

interface UserProps {
  openHandle: () => void
  reGet: number
}

export const ListUsers = (props: UserProps) => {
  const openHandle = () => {
    props.openHandle()
  }
  const { data, error, isLoading } = useAxios<User[]>({
    url: '/user/list',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: props.reGet,
  })

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <ContainIconButton
        type={'button'}
        label={'ユーザー登録'}
        theme={'primary'}
        icon={Plus}
        action={openHandle}
      />
      <UserFormContainer />
      <UserEditFormContainer />
      <UsersActionTableContainer
        titleHeader={['name', 'emailAddress', 'state', 'createAt', 'updateAt']}
        items={data}
        actionColumn={5}
      />
    </div>
  )
}
