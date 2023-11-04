import { useState } from 'react'
import useDirectAxios from './useDirectAxios'
import { ChatRoom } from '../../domain/chatRoom/types'
import { CsrfToken } from '../../domain/csrf/types'
import { useAxios } from './useAxios'

export const useCsrf = () => {
  const [reGet, setReGet] = useState<number>(0)
  const {
    data: csrfData,
    error: csrfError,
    isLoading: isCsrfLoading,
  } = useAxios<CsrfToken>({
    url: '/csrf',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    reGet: reGet,
  })

  return { csrfData, csrfError, isCsrfLoading, setReGet }
}
