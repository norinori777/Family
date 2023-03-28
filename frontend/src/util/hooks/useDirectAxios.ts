import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface UseAxiosState<T> {
  response: AxiosResponse<T> | null;
  error: any;
  loading: boolean;
}

const useDirectAxios = <T,>() => {
  const [state, setState] = useState<UseAxiosState<T>>({
    response: null,
    error: null,
    loading: false,
  });

  const sendRequest = async (config: AxiosRequestConfig) => {
    setState({ ...state, loading: true });
    try {
      const res = await axios(config);
      setState({ response: res, error: null, loading: false });
    } catch (error) {
      setState({ ...state, error, loading: false });
    }
  };

  return { ...state, sendRequest };
};

export default useDirectAxios;
