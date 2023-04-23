import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface UseAxiosOptions {
  url: string;
  method?: AxiosRequestConfig["method"];
  headers?: AxiosRequestConfig["headers"];
}

interface UseAxiosResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export const useAxios = <T>({
  url,
  method = "get",
  headers = {},
}: UseAxiosOptions): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios({
          method,
          url,
          headers,
        });
        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error, isLoading };
};
