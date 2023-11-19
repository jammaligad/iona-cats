import { useContext, useEffect, useState } from "react";
import cn from "classnames";

import List from "./List/List";

import { BreedsContext } from "../store/cat-breeds-context";

import { useMobileView } from "../common/hooks/useMobileView";

import { LOGO } from "../common/assets";

import "./styles.css";

const SideBar = () => {
  const { catBreeds, isLoading } = useContext(BreedsContext);
  const isMobile = useMobileView();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, [isMobile]);

  const handleActiveState = () => {
    if (isMobile) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "relative transition-all ease-in-out duration-500 sm:h-screen border-r bg-orange-50 shadow-lg sm:w-0 w-full sm:p-2 space-y-4",
        "lg:flex-grow-0 lg:flex-shrink-0 lg:w-20 xxl:w-64 overflow-hidden",
        {
          active: isOpen,
        }
      )}
    >
      <header className="w-full flex sm:flex-col flex-row space-y-2 sm:space-x-0 space-x-2 sm:justify-normal justify-center pt-4 sm:pt-0">
        <button
          className={cn("logo-btn sm:m-auto items-center", {
            active: isOpen,
          })}
          onClick={handleActiveState}
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
          "sidebar-content flex flex-col sm:h-5/6 lg:opacity-0 transition-all ease-in-out duration-500",
          {
            active: isOpen,
          }
        )}
      >
        <List
          placeholder="Look up breeds ..."
          items={catBreeds}
          isLoading={isLoading}
          isMobile={isMobile}
        />
      </div>
    </nav>
  );
};

export default SideBar;
