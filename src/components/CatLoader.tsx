import { FC } from "react";
import cn from "classnames";

interface Props {
  containerClass: string;
}

const CatLoader: FC<Props> = ({ containerClass }) => {
  return (
    <div
      className={cn(
        "cat-loader-container w-full m-auto justify-center flex",
        containerClass
      )}
    >
      <div
        id="cat-head"
        className="relative lg:w-96 lg:h-72 w-48 h-36 rounded-full animate-pulse bg-orange-200"
      >
        <div
          id="cat-ears"
          className="relative flex h-2/3 lg:bottom-10 bottom-5"
        >
          <div
            id="left-ear"
            className="absolute bg-orange-200 w-1/2 h-full rounded-bl-[50%] rounded-tr-[50%] rotate-6"
          ></div>
          <div
            id="right-ear"
            className="absolute bg-orange-200 w-1/2 h-full right-0 rounded-br-[50%] rounded-tl-[50%] rotate-[174deg]"
          ></div>
        </div>
        <div
          id="cat-whiskers"
          className="relative flex h-1/6 justify-center lg:bottom-10 bottom-5"
        >
          <div className="relative w-1/2 lg:space-y-6 space-y-3">
            <div className="bg-orange-100 skew-y-12 w-2/3 h-1/6 ml-auto rounded-full"></div>
            <div className="bg-orange-100 -skew-y-2 h-1/6 ml-auto rounded-full"></div>
            <div className="bg-orange-100 -skew-y-12 w-2/3 h-1/6 ml-auto rounded-full"></div>
          </div>
          <div className="relative w-1/2"></div>
          <div className="relative w-1/2 lg:space-y-6 space-y-3">
            <div className="bg-orange-100 -skew-y-6 w-2/3 h-1/6 rounded-full"></div>
            <div className="bg-orange-100 skew-y-2 h-1/6 rounded-full"></div>
            <div className="bg-orange-100 skew-y-12 w-2/3 h-1/6 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatLoader;
