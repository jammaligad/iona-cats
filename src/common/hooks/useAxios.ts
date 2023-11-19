/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";

import { RequestMethods } from "../../types";

const useAxios = (
  url: string,
  method: RequestMethods,
  payload?: Record<string, any>
) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const handleRequest = async () => {
      try {
        const response = await axios({
          url,
          method,
          ...(payload && {
            data: payload,
          }),
        });

        setData(response.data);
      } catch (err) {
        // handle error message
        if (typeof err === "string") {
          setError(err);
        } else if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    handleRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(payload)]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useAxios;
