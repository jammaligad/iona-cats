/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { groupFormat } from "../utils/groupFormat";
import { DEFAULT_ERROR_MESSAGE } from "../constants";

import { RequestMethods } from "../../types";

const extractNewHits = (
  prevData: Record<string, any>[],
  data: Record<string, any>[]
) => {
  const flattenedPrevDataIDs = prevData.flat().map(({ id }) => id);
  const newHits = data
    .flat()
    .filter(({ id }) => !flattenedPrevDataIDs.includes(id));

  return newHits;
};

const useAxiosPagination = (
  url: string,
  method: RequestMethods,
  payload?: Record<string, any>
) => {
  const [data, setData] = useState<Record<string, any>[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);

  const handleReset = () => {
    setData([]);
    setPage(1);
  };

  useEffect(() => {
    setIsLoading(true);

    const handleRequest = async () => {
      try {
        const response = await axios({
          url,
          method,
          ...(payload && {
            data: { ...payload, page },
          }),
        });

        if (page <= 1) {
          setData(() => [...response.data]);
          setPage(() => 1);
          setIsLastPage(() => false);
        }

        if (page > 1) {
          if (
            response.data.length === 0 ||
            extractNewHits(data, response.data).length === 0
          ) {
            setIsLastPage(() => true);
          }

          setData((prevData) => {
            const newHits = extractNewHits(prevData, response.data);

            return [...groupFormat([...prevData.flat(), ...newHits])];
          });
        }

        toast.dismiss();
        setError(null);
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
  }, [url, method, JSON.stringify(payload), page]);

  return {
    data,
    error,
    isLoading,
    isLastPage,
    page,
    nextPage: () => setPage((prevPage) => prevPage + 1),
    reset: () => handleReset(),
  };
};

export default useAxiosPagination;
