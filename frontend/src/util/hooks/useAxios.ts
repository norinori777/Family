import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface UseAxiosOptions {
  url: string
  method?: AxiosRequestConfig['method']
  headers?: AxiosRequestConfig['headers']
  reGet: number
}

interface UseAxiosResponse<T> {
  data: T | null
  error: Error | null
  isLoading: boolean
}

export const useAxios = <T>({
  url,
  method = 'get',
  headers = {},
  reGet,
}: UseAxiosOptions): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios({
          method,
          url,
          headers,
        })
        if (isMounted) {
          setData(response.data)
          setIsLoading(false)
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error)
          setIsLoading(false)

          // Redirect to login page if the user is not authenticated
          if (error.response.status === 401) {
            window.location.href = '/login'
          }
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [reGet])

  return { data, error, isLoading }
}
