import React from 'react'
import { ActionRow } from '../../components/molecules/ActionRow'
import { ChatRoom } from '../../domain/chatRoom/types'
import { ChatRoomActionContainer } from './ChatRoomActionContainer'

interface ChatRoomActionRowContainerProps {
  titleHeader: string[]
  item: ChatRoom
  actionColumn: number
}

export const ChatRoomActionRowContainer = (props: ChatRoomActionRowContainerProps) => {
  return (
    <ActionRow<ChatRoom>
      titleHeader={props.titleHeader}
      item={props.item}
      actionColumn={props.actionColumn}
      actionElement={ChatRoomActionContainer}
    />
  )
}
