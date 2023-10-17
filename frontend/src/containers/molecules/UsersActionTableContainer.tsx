import React from 'react'
import { User } from '../../domain/user/types'
import { UserActionRowContainer } from './UsersActoinRowContainer'
import { ActionTable } from '../../components/molecules/ActionTable'

interface UsersActionTableContainerProps {
  titleHeader: string[]
  items: User[] | null
  actionColumn: number
}

export const UsersActionTableContainer = (props: UsersActionTableContainerProps) => {
  return (
    <ActionTable<User>
      titleHeader={props.titleHeader}
      items={props.items}
      actionRow={UserActionRowContainer}
      actionColumn={props.actionColumn}
    />
  )
}
