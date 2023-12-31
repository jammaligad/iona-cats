import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useAxios from "../common/hooks/useAxios";
import { AlertTriangle, ArrowLeft } from "react-feather";
import cn from "classnames";

import Badge from "../components/Badge";
import CatLoader from "../components/CatLoader";

import { useUnmountTransition } from "../common/hooks/useUnmountTransition";

import { CAT_DETAILS_ENDPOINT } from "../common/endpoints";
import { extractCatDetails } from "../common/utils/extractCatDetails";

import { CatLoaderSizes } from "../types";
import { CAT_DETAILS_ERROR_MESSAGE } from "../common/constants";

const CatDetails = () => {
  const { id: catID } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useAxios(
    CAT_DETAILS_ENDPOINT.url,
    CAT_DETAILS_ENDPOINT.method,
    {
      catID,
    }
  );

  const [imgLoading, setImgLoading] = useState(true);

  const handleImageLoading = () => {
    setImgLoading(true);
  };

  const handleImageLoaded = () => {
    setImgLoading(false);
  };

  const catData = extractCatDetails(data);
  const shouldRenderLoader = useUnmountTransition(isLoading, 500);

  const renderCard = () => {
    if (error) {
      return (
        <div className="m-auto space-y-8">
          <CatLoader />
          <div className="flex w-full space-x-2 border rounded-2xl p-4">
            <AlertTriangle size={30} />
            <p className="lg:text-2xl text-lg">{CAT_DETAILS_ERROR_MESSAGE}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex w-full h-full m-auto text-yellow-950">
        <div className="w-full h-min lg:m-24 lg:mt-8 m-6 mt-6 rounded-xl space-y-2 shadow-2xl">
          <p className="font-semibold text-lg text-center py-4">
            {catData?.name}
          </p>
          <img
            className={cn({
              hidden: imgLoading,
              block: !imgLoading,
            })}
            src={catData?.imageUrl}
            onLoadStart={handleImageLoading}
            onLoad={handleImageLoaded}
          />
          {imgLoading && (
            <div className="flex xl:w-96 xl:h-72 lg:w-52 lg:h-48 sm:w-52 sm:h-26 pt-8 m-auto justify-center">
              {" "}
              <CatLoader size={CatLoaderSizes.SMALL} />
            </div>
          )}
          <p className="pl-2 m-2">Origin: {catData?.origin}</p>
          <div className="flex flex-wrap m-2">
            {catData?.temperaments?.map((temperament: string) => (
              <Badge key={temperament} value={temperament} type="default" />
            ))}
          </div>
          <div className="w-full text-center">—</div>
          <p className="px-4 pb-4">{catData?.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "cat-details-container flex h-screen sm:ml-64 flex-col mt-32 sm:mt-0",
        {
          "w-full": shouldRenderLoader || error,
          "max-w-screen-lg": !shouldRenderLoader,
        }
      )}
    >
      <button
        className="ml-4 mt-4 max-w-min transition ease-in-out duration-200 hover:-translate-y-1 hover:drop-shadow-lg"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={34} />
      </button>
      {shouldRenderLoader ? (
        <CatLoader
          containerClass={
            isLoading
              ? "opacity-1 transition-opacity ease-in duration-500"
              : "opacity-0 transition-opacity ease-in duration-500"
          }
        />
      ) : (
        renderCard()
      )}
    </div>
  );
};

export default CatDetails;
