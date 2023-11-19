import { ChangeEvent, FC, useState } from "react";
import cn from "classnames";

import ListButton from "../ListButton";

import { ListItem } from "./ListItem";

import { BreedData } from "../../types";

import "./styles.css";

interface Props {
  items: BreedData[];
  isMobile: boolean;
  placeholder?: string;
}

const List: FC<Props> = ({ items, isMobile, placeholder }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSearchValue, setActiveSearchValue] = useState<string>();
  const [filteredListItems, setFilteredListItems] = useState<BreedData[]>([]);

  const handleFilterItems = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setActiveSearchValue(searchValue);

    const filteredListItems = items.filter(({ name }) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredListItems(filteredListItems);
  };

  const renderListItems = () => {
    let listItems = [...items];

    if (activeSearchValue) {
      listItems = [...filteredListItems];
    }

    return listItems.map(({ id, name, image }) => {
      const listItemProps = {
        id,
        name,
        image,
      };

      return <ListItem key={id} {...listItemProps} />;
    });
  };

  return (
    <div className="w-full h-full sm:space-y-6">
      {isMobile ? (
        <ListButton
          isListOpen={isOpen}
          items={items}
          placeholder={placeholder}
          handleClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <input
          className="rounded-xl w-full h-10 px-4 focus:outline-none shadow"
          type="text"
          onChange={handleFilterItems}
          placeholder={placeholder}
        />
      )}
      <div
        className={cn(
          "list-items fixed w-full overflow-y-auto sm:h-full h-0 space-y-1 sm:relative sm:pb-0 bg-orange-50",
          "transition-all ease-in-out duration-500",
          "flex-grow-0 flex-shrink-0 overflow-hidden",
          {
            "sm:relative": !isOpen,
          },
          {
            active: isOpen,
          }
        )}
      >
        {items && renderListItems()}
      </div>
    </div>
  );
};

export default List;
