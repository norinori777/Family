import React from 'react'
import { ActionTable } from '../../components/molecules/ActionTable'
import { ChatRoom } from '../../domain/chatRoom/types'
import { ChatRoomActionRowContainer } from './ChatRoomsActionRowContainer'

interface ChatRoomActionTableContainerProps {
  titleHeader: string[]
  items: ChatRoom[] | null
  actionColumn: number
}

export const ChatRoomActionTableContainer = (props: ChatRoomActionTableContainerProps) => {
  return (
    <ActionTable<ChatRoom>
      titleHeader={props.titleHeader}
      items={props.items}
      actionRow={ChatRoomActionRowContainer}
      actionColumn={props.actionColumn}
    />
  )
}
