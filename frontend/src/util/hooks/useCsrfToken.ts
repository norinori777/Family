import { useEffect, useState } from 'react'
import { CsrfToken } from '../../domain/csrf/types'
import axios, { AxiosResponse } from 'axios'

interface UseAxiosResponse<CsrfToken> {
  csrfToken: CsrfToken | null
  error: Error | null
  isLoading: boolean
}

export const useCsrfToken = (): UseAxiosResponse<CsrfToken> => {
  const [csrfToken, setCsrfToken] = useState<CsrfToken | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response: AxiosResponse<CsrfToken> = await axios({
          method: 'get',
          url: '/csrf',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (isMounted) {
          setCsrfToken(response.data)
          setIsLoading(false)
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error)
          setIsLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [])

  return { csrfToken, error, isLoading }
}
