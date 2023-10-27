import Chat from '../../components/pages/Chat'
import React, { useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { useAxios } from '../../util/hooks/useAxios'
import { CsrfToken } from '../../domain/csrf/types'
import { TalkMessage } from '../../domain/TalkMessage/types'
import { useParams } from 'react-router-dom'
import { Paper } from '../../components/atoms/Paper'
import { useChat } from '../../util/hooks/useChat'

export const ChatContainer = () => {
  const params = useParams<{ roomId: string }>()
  const roomId = params.roomId
  const [stompClient, setStompClient] = useState<Stomp.Client | null>(null)
  const [receiveMessages, setReceiveMessages] = useState<TalkMessage[]>([])
  const [first, setFirst] = useState<boolean>(true)
  const { data, error, isLoading } = useAxios<CsrfToken>({
    url: '/csrf',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
  })

  const {
    data: useridData,
    error: userIdError,
    isLoading: isUserIdLoading,
  } = useAxios<number>({
    url: '/user/id',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
  })

  const {
    messages: talkMessageData,
    isLoading: isTalkMessageLoading,
    containerRef,
    handleScroll,
    scrollToBottom,
  } = useChat<TalkMessage>({
    url: '/talkmessage/list/' + roomId,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: 0,
    positionGet: 'top',
  })

  useEffect(() => {
    if (isLoading || isUserIdLoading || isTalkMessageLoading) return
    setReceiveMessages(talkMessageData ?? [])
    const csrfToken = data != null ? { [data.headerName]: data.token } : {}
    const socket = new SockJS('/ws')
    const stompClient = Stomp.over(socket)
    stompClient?.connect(csrfToken, (frame) => {
      setStompClient(stompClient)
      stompClient.subscribe('/topic/' + roomId + '/messages', (message) => {
        receiveMessage(JSON.parse(message.body))
      })
      if (first) {
        setFirst(false)
        scrollToBottom()
      }
    })
    return () => {
      socket.close()
    }
  }, [isLoading, isUserIdLoading, isTalkMessageLoading, talkMessageData])

  const receiveMessage = (receiveMessage: TalkMessage) => {
    setReceiveMessages((preMessages) => [...preMessages, receiveMessage])
    scrollToBottom()
  }

  const handleMessageSubmit = (sendMessage: string) => {
    if (sendMessage) {
      stompClient?.send('/app/' + roomId + '/message', {}, JSON.stringify({ message: sendMessage }))
    }
  }

  return (
    <div className="w-96 sm:w-container-sm">
      {isLoading && <div>loading...</div>}
      <Paper theme={'white'}>
        <Chat
          talkMessages={receiveMessages}
          submit={handleMessageSubmit}
          userId={useridData ?? 0}
          handleScroll={handleScroll}
          containerRef={containerRef}
        />
      </Paper>
    </div>
  )
}
