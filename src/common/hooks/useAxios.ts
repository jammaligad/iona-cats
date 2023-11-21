/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { DEFAULT_ERROR_MESSAGE } from "../constants";

import { RequestMethods } from "../../types";

const useAxios = (
  url: string,
  method: RequestMethods,
  payload?: Record<string, any>
) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [error, setError] = useState<string | null>(null);
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

        toast.dismiss();
        setError(null);
        setData(response.data);
      } catch (err) {
        // handle error message
        toast.dismiss();

        if (typeof err === "string") {
          setError(err);
        } else if (err instanceof Error) {
          setError(err.message);
        }

        toast.error(DEFAULT_ERROR_MESSAGE);
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
