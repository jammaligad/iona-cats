import { FC } from "react";
import cn from "classnames";

import { ChevronUp } from "react-feather";

interface Props {
  isListOpen: boolean;
  handleClick: () => void;
  selectedValue?: string;
  placeholder?: string;
}

const ListButton: FC<Props> = ({
  isListOpen,
  selectedValue,
  handleClick,
  placeholder,
}) => {
  return (
    <div className="flex w-full h-10 px-2 mb-2">
      <input
        className="w-full font-open-sans rounded-l-2xl focus:outline-none shadow px-4 text-yellow-950"
        type="text"
        disabled={true}
        placeholder={selectedValue ?? placeholder}
      />
      <button
        className="rounded-r-2xl w-16 flex justify-center items-center shadow bg-orange-100"
        onClick={handleClick}
      >
        <ChevronUp
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
