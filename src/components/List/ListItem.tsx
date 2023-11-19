import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { LOGO } from "../../common/assets";

import { BreedData } from "../../types";

import "../styles.css";

const placeholderImg = LOGO.MEDIUM;

interface Props extends BreedData {
  isSelected: boolean;
}

export const ListItem: FC<Props> = ({ id, name, image, isSelected }) => {
  return (
    <Link
      to={`/breed/${id}`}
      className={cn(
        "sidebar-list-item w-full rounded-xl flex items-center space-x-2 transition-color ease-in-out duration-200 hover:bg-orange-100 hover:cursor-pointer p-2",
        {
          active: isSelected,
        }
      )}
    >
      <div className="w-6 h-6 drop-shadow">
        <img
          className="w-full h-full rounded-full"
          src={image?.url || placeholderImg} // use placeholder image if url is broken
          alt={id}
        />
      </div>
      <p className="font-open-sans text-yellow-950">{name}</p>
    </Link>
  );
};
