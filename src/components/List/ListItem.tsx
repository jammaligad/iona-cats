import { FC } from "react";

import { LOGO } from "../../common/assets";

import { BreedData as Props } from "../../types";

const placeholderImg = LOGO.MEDIUM;

export const ListItem: FC<Props> = ({ id, name, image }) => {
  return (
    <div className="w-full rounded-xl flex items-center space-x-2 transition-color ease-in-out duration-200 hover:bg-orange-100 hover:cursor-pointer p-2">
      <div className="w-6 h-6 drop-shadow">
        <img
          className="w-full h-full rounded-full"
          src={image?.url || placeholderImg} // use placeholder image if url is broken
          alt={id}
        />
      </div>
      <p className="font-open-sans text-yellow-950">{name}</p>
    </div>
  );
};
