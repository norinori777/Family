import { useState, useEffect, useCallback } from 'react'
import Stomp, { Client, Message, StompHeaders, StompSubscription } from '@stomp/stompjs'

type UseStompClientOptions = StompHeaders & {
  onConnect?: (frame?: Stomp.Frame) => void
  onClose?: () => void
}

const useStompClient = (url: string, options: UseStompClientOptions = {}): Client | null => {
  const [client, setClient] = useState<Client | null>(null)

  useEffect(() => {
    const stompClient = new Stomp.Client({
      brokerURL: url,
      connectHeaders: options,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })

    const onConnect = (frame?: Stomp.Frame) => {
      console.log('Connected', frame)
      if (options.onConnect) {
        options.onConnect(frame)
      }
    }

    const onClose = () => {
      console.log('Disconnected')
      if (options.onClose) {
        options.onClose()
      }
    }

    stompClient.activate()

    setClient(stompClient)

    return () => {
      stompClient.deactivate()
    }
  }, [url, options])

  return client
}

type UseStompSubscriptionCallback = (message: Message) => void

const useStompSubscription = (
  client: Client | null,
  destination: string,
  onMessageReceived: UseStompSubscriptionCallback
): StompSubscription | null => {
  const [subscription, setSubscription] = useState<StompSubscription | null>(null)

  const subscribe = useCallback(() => {
    if (client) {
      const newSubscription = client.subscribe(destination, (message: Message) => {
        const parsedMessage = JSON.parse(message.body)
        onMessageReceived(parsedMessage)
      })
      setSubscription(newSubscription)
    }
  }, [client, destination, onMessageReceived])

  const unsubscribe = useCallback(() => {
    if (subscription && client?.connected) {
      subscription.unsubscribe()
    }
  }, [client, subscription])

  useEffect(() => {
    subscribe()
    return () => unsubscribe()
  }, [subscribe, unsubscribe])

  return subscription
}

export { useStompClient, useStompSubscription }
