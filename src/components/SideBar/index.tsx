import { useContext, useState } from "react";
import cn from "classnames";

import List from "../List";

import { BreedsContext } from "../../store/cat-breeds-context";

import { LOGO } from "../../common/assets";

import "./styles.css";

const SideBar = () => {
  const { catBreeds } = useContext(BreedsContext);
  const [isOpen, setIsOpen] = useState(true);

  // @TODO: handle `isLoading` state from context

  return (
    <nav
      className={cn(
        "relative transition-all ease-in-out duration-500 h-screen border-r bg-orange-50 shadow-lg w-0 p-2 space-y-6",
        "lg:flex-grow-0 lg:flex-shrink-0 lg:w-20 xxl:w-64 overflow-hidden",
        {
          active: isOpen,
        }
      )}
    >
      <header className="w-full flex flex-col space-y-2">
        <button
          className={cn("logo-btn m-auto items-center", {
            active: isOpen,
          })}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="w-12 drop-shadow hover:drop-shadow-lg"
            src={LOGO.MEDIUM}
          />
        </button>
        <span
          className={cn(
            "title drop-shadow text-center text-2xl font-pacifico text-yellow-950 whitespace-nowrap lg:opacity-0 transition-all ease-in-out duration-200",
            {
              active: isOpen,
            }
          )}
        >
          The Cat Browser
        </span>
      </header>

      <div
        className={cn(
          "sidebar-content flex flex-col h-5/6 lg:opacity-0 transition-all ease-in-out duration-500",
          {
            active: isOpen,
          }
        )}
      >
        <List placeholder="Look up breeds ..." items={catBreeds} />
      </div>
    </nav>
  );
};

export default SideBar;
