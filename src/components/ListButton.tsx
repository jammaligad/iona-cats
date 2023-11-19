import { FC } from "react";
import cn from "classnames";

import { ChevronDown } from "react-feather";

import { BreedData } from "../types";

interface Props {
  items: BreedData[];
  isListOpen: boolean;
  handleClick: () => void;
  placeholder?: string;
}

const ListButton: FC<Props> = ({ isListOpen, handleClick, placeholder }) => {
  return (
    <div className="flex w-full h-10 px-2 mb-2">
      <input
        className="w-full rounded-l-2xl focus:outline-none shadow px-4 bg-white"
        type="text"
        disabled={true}
        placeholder={placeholder}
      />
      <button
        className="rounded-r-2xl w-16 flex justify-center items-center shadow text-yellow-950"
        onClick={handleClick}
      >
        <ChevronDown
          size="26"
          className={cn("transition-transform delay-150", {
            "rotate-180": !isListOpen,
          })}
        />
      </button>
    </div>
  );
};

export default ListButton;
