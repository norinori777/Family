import { useState, useEffect, useRef } from 'react'

interface UseWebSocketOptions {
  onMessage?: (event: MessageEvent) => void
  onOpen?: (event: Event) => void
  onClose?: (event: CloseEvent) => void
  onError?: (event: Event) => void
}

export const useWebSocket = (url: string, options?: UseWebSocketOptions) => {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState<ErrorEvent | null>(null)
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    const { onMessage, onOpen, onClose, onError } = options ?? {}

    ws.current = new WebSocket(url)

    ws.current.onopen = (event: Event) => {
      setConnected(true)
      onOpen?.(event)
    }

    ws.current.onmessage = (event: MessageEvent) => {
      onMessage?.(event)
    }

    ws.current.onerror = (event: Event) => {
      setError(event as ErrorEvent)
      onError?.(event)
    }

    ws.current.onclose = (event: CloseEvent) => {
      setConnected(false)
      onClose?.(event)
    }

    return () => {
      ws.current?.close()
    }
  }, [url, options])

  return { connected, error, send: ws.current?.send.bind(ws.current) }
}
