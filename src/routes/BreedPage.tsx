/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import cn from "classnames";

import Card from "../components/Card";
import CatLoader from "../components/CatLoader";

import useAxiosPagination from "../common/hooks/useAxiosPagination";
import { useResponsive } from "../common/hooks/useResponsive";

import { IMAGES_ENDPOINT } from "../common/endpoints";
import { useUnmountTransition } from "../common/hooks/useUnmountTransition";

import { LOGO } from "../common/assets";

import { BreedDetails } from "../types";

const DEFAULT_IMAGE_LIMIT = 10;

const BreedPage = () => {
  const { id: breedID } = useParams();
  const { isMobile, isTablet } = useResponsive();

  const {
    data: catsData,
    isLoading,
    isLastPage,
    page,
    nextPage,
    reset,
  } = useAxiosPagination(IMAGES_ENDPOINT.url, IMAGES_ENDPOINT.method, {
    breedID,
    limit: DEFAULT_IMAGE_LIMIT,
  });

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breedID]);

  const shouldRenderLoader = useUnmountTransition(isLoading, 500) && page === 1;

  const renderCatsData = () => {
    let columns = 1;

    if (catsData?.length > columns) {
      columns = catsData.length;
    }

    if (catsData?.length > 4) {
      columns = 4;
    }

    if (isMobile || isTablet) {
      columns = 2;
    }

    return (
      <div
        className={cn(
          "grid sm:gap-10 gap-6 mx-auto sm:mt-8 mt-40 auto-rows-min",
          `grid-cols-${columns}`
        )}
      >
        {catsData?.map((group) => {
          return (
            <div key={group[0].id} className="grid sm:gap-10 gap-6 h-min">
              {group.map(
                ({
                  id,
                  name,
                  origin,
                  temperament,
                  description,
                  imageUrl,
                }: BreedDetails) => {
                  return (
                    <Card
                      key={id}
                      id={id}
                      breed={name}
                      origin={origin}
                      temperament={temperament}
                      description={description}
                      imageUrl={imageUrl}
                      redirectUrl={`/cat-details/${id}`}
                    />
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen px-4 z-0 sm:ml-64 z-10">
      {shouldRenderLoader ? (
        <CatLoader
          containerClass={
            isLoading
              ? "opacity-1 transition-opacity ease-in duration-500"
              : "opacity-0 transition-opacity ease-in duration-500"
          }
        />
      ) : (
        renderCatsData()
      )}

      {!isLastPage && !shouldRenderLoader && (
        <div className="mt-auto sm:w-40 w-full rounded-2xl sm:shadow-lg sm:bg-orange-50 mx-auto sm:mb-8 mb-0 font-semibold text-yellow-950 transition ease-in-out duration-200 sm:hover:-translate-y-1 sm:hover:bg-orange-100">
          <button
            className="h-20 w-full text-lg flex items-center justify-center space-x-2"
            onClick={nextPage}
            disabled={isLoading}
          >
            <span>Load More</span>{" "}
            <img
              className={cn({
                "animate-spin": isLoading,
              })}
              src={LOGO.SMALL}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default BreedPage;
