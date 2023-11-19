import { ChangeEvent, FC, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";

import ListButton from "./ListButton";
import { ListItem } from "./ListItem";
import Placeholder from "../Placeholder";

import { BreedData, PlaceholderTypes } from "../../types";

import "../styles.css";

interface Props {
  items: BreedData[];
  isLoading: boolean;
  isMobile: boolean;
  placeholder?: string;
}

const DEFAULT_NUM_ITEMS = 20;

const List: FC<Props> = ({ items, isLoading, isMobile, placeholder }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSearchValue, setActiveSearchValue] = useState<string>();
  const [filteredListItems, setFilteredListItems] = useState<BreedData[]>([]);
  const { id: paramID } = useParams();

  const handleFilterItems = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setActiveSearchValue(searchValue);

    const filteredListItems = items.filter(({ name }) => {
      return name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredListItems(filteredListItems);
  };

  const renderListItems = () => {
    if (isLoading) {
      return [...Array(DEFAULT_NUM_ITEMS).keys()].map((index) => (
        <Placeholder
          key={`placeholder-${index}`}
          type={PlaceholderTypes.LIST_ITEM}
        />
      ));
    }

    let listItems = [...items];

    if (activeSearchValue) {
      listItems = [...filteredListItems];
    }

    return listItems.map(({ id, name, image }) => {
      const listItemProps = {
        id,
        name,
        image,
        isSelected: paramID === id,
      };

      return <ListItem key={id} {...listItemProps} />;
    });
  };

  return (
    <div className="w-full h-full sm:space-y-6 sm:relative fixed">
      {isMobile ? (
        <ListButton
          isListOpen={isOpen}
          selectedValue={paramID}
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
