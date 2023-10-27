import { AxiosRequestConfig } from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useAxios } from './useAxios'

interface UseChatOptions {
  url: string
  method?: AxiosRequestConfig['method']
  headers?: AxiosRequestConfig['headers']
  reGet: number
  positionGet: 'top' | 'bottom'
}

interface UseChat<T> {
  messages: T[] | null
  isLoading: boolean
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  handleScroll: () => void
  scrollToBottom: () => void
  scrollToTop: () => void
}

export const useChat = <T>({
  url,
  method = 'get',
  headers = {},
  reGet,
  positionGet,
}: UseChatOptions): UseChat<T> => {
  const [messages, setMessages] = useState([] as T[])
  const [hasMore, setHasMore] = useState(true)
  const [fetchCount, setFetchCount] = useState(20)
  const [reGetCount, setReGetCount] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { data, error, isLoading } = useAxios<T[]>({
    url: url,
    method: method,
    headers: headers,
    reGet: reGetCount,
  })

  useEffect(() => {
    if (isLoading) return
    setFetchCount(fetchCount + 20)
    const fetchedMessages = fetchMessages(fetchCount)
    setMessages(fetchedMessages)
    setHasMore(isOverFetch(data, fetchCount))
  }, [data, error, isLoading, reGet])

  const isOverFetch = (data: T[] | null, fetchCount: number) => {
    if (data?.length === undefined) return false
    return data?.length > fetchCount
  }

  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return
    const { scrollTop } = container
    if (scrollTop === 0 && hasMore && !isLoading && positionGet === 'top')
      setReGetCount(reGetCount + 1)
    if (scrollTop === container.scrollHeight && hasMore && !isLoading && positionGet === 'bottom')
      setReGetCount(reGetCount + 1)
  }

  const fetchMessages = (fetchCount: number): T[] => {
    const messages: T[] = [] as T[]
    if (data === null) return messages
    if (fetchCount > data.length) fetchCount = data.length
    for (let i = 0; i < fetchCount; i++) {
      if (data[data.length - fetchCount + i] === undefined) return messages
      messages.push(data[data.length - fetchCount + i])
    }
    return messages
  }

  const scrollToBottom = () => {
    const container = containerRef.current
    if (!container) return
    container.scrollTop = container.scrollHeight
  }

  const scrollToTop = () => {
    const container = containerRef.current
    if (!container) return
    container.scrollTop = 0
  }

  return { messages, isLoading, containerRef, handleScroll, scrollToBottom, scrollToTop }
}
