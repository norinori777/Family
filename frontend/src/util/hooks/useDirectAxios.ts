import { useState } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

interface UseAxiosState<T> {
  response: AxiosResponse<T> | null
  error: any | null
  loading: boolean
}

const useDirectAxios = <T, D>() => {
  const [state, setState] = useState<UseAxiosState<T>>({
    response: null,
    error: null,
    loading: false,
  })

  const sendRequest = async (config: AxiosRequestConfig<D>) => {
    await setState({ ...state, loading: true })
    try {
      const res = await axios(config)
      await setState({ ...state, response: res, error: null, loading: false })
    } catch (error: any) {
      await setState({ ...state, error: error, loading: false })
      if (error.response.status === 401) {
        window.location.href = '/login'
      }
    }
  }
  return { ...state, sendRequest }
}

export default useDirectAxios
