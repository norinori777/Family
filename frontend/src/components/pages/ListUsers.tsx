import React, { useEffect } from 'react'
import { UserForm } from '../organisms/UserForm'
import { ContainIconButton } from '../molecules/ContainIconButton'
import { Plus } from '../Icons/Plus'
import { useAxios } from '../../util/hooks/useAxios'
import { ResponseUserData, User } from '../../domain/user/types'
import { UserFormContainer } from '../../containers/organisms/UserFormContainer'
import { UsersActionTableContainer } from '../../containers/molecules/UsersActionTableContainer'
import { UserEditFormContainer } from '../../containers/organisms/UserEditFormContainer'
import { RestResponse } from '../../domain/Rest/types'
import { UserDeleteModalContainer } from '../../containers/organisms/UserDeleteModalContainer'
import { AlertMessage } from '../../components/atoms/AlertMessage'

interface UserProps {
  openHandle: () => void
  alertMessage: string
  alertshow: boolean
  reGet: number
}

export const ListUsers = (props: UserProps) => {
  const openHandle = () => {
    props.openHandle()
  }
  const { data, error, isLoading } = useAxios<RestResponse<User[]>>({
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
      <div className="pl-2 pr-2 mt-2 mb-2">
        <AlertMessage message={props.alertMessage} showAlert={props.alertshow} theme={'danger'} />
      </div>
      <UserFormContainer />
      <UserEditFormContainer />
      <UserDeleteModalContainer />
      <UsersActionTableContainer
        titleHeader={['name', 'emailAddress', 'state', 'createAt', 'updateAt']}
        items={data?.data !== undefined ? data.data : []}
        actionColumn={5}
      />
    </div>
  )
}
