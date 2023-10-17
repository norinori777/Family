import React from 'react'
import { ActionRow } from '../../components/molecules/ActionRow'
import { User } from '../../domain/user/types'
import { UserActionContainer } from './UserActionContainer'

interface UserActionRowContainerProps {
  titleHeader: string[]
  item: User
  actionColumn: number
}

export const UserActionRowContainer = (props: UserActionRowContainerProps) => {
  return (
    <ActionRow<User>
      titleHeader={props.titleHeader}
      item={props.item}
      actionColumn={props.actionColumn}
      actionElement={UserActionContainer}
    />
  )
}
