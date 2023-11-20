import { FC } from "react";

interface Props {
  id: string;
  breed: string;
  origin: string;
  temperament: string;
  description: string;
  imageUrl: string;
}

const Card: FC<Props> = ({ imageUrl }) => {
  return (
    <div className="rounded-3xl h-max shadow-xl bg-orange-50 transition ease-in-out duration-200 sm:hover:-translate-y-1 hover:shadow-xl">
      <img className="h-auto max-w-full rounded-t-3xl" src={imageUrl} />
      <button className="w-full lg:h-16 h-12 lg:text-xl sm:text-lg text-sm rounded-b-3xl font-semibold text-yellow-950 transition-color ease-in-out duration-200 hover:bg-orange-100">
        View Details
      </button>
    </div>
  );
};

export default Card;
