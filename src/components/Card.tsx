import { FC, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import CatLoader from "./CatLoader";

import { CatLoaderSizes } from "../types";

interface Props {
  id: string;
  breed: string;
  origin: string;
  temperament: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
}

const Card: FC<Props> = ({ imageUrl, redirectUrl, ...rest }) => {
  const [imgLoading, setImgLoading] = useState(true);

  const handleImageLoading = () => {
    setImgLoading(true);
  };

  const handleImageLoaded = () => {
    setImgLoading(false);
  };

  return (
    <div className="rounded-3xl h-max shadow-xl bg-orange-50 transition ease-in-out duration-200 sm:hover:-translate-y-1 hover:shadow-xl">
      <img
        className={cn("h-auto max-w-full rounded-t-3xl", {
          hidden: imgLoading,
          block: !imgLoading,
        })}
        src={imageUrl}
        onLoadStart={handleImageLoading}
        onLoad={handleImageLoaded}
      />
      {imgLoading && (
        <div className="flex xl:w-96 xl:h-72 lg:w-52 lg:h-48 sm:w-52 sm:h-26 pt-8 m-auto justify-center">
          {" "}
          <CatLoader size={CatLoaderSizes.SMALL} />
        </div>
      )}
      <Link to={redirectUrl} state={{ ...rest, imageUrl }}>
        <button className="w-full lg:h-16 h-12 lg:text-xl sm:text-lg text-sm rounded-b-3xl font-semibold text-yellow-950 transition-color ease-in-out duration-200 hover:bg-orange-100">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
