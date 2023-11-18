import { useState } from "react";

import { ListItem } from "./ListItem";

const List = ({ items, placeholder }) => {
  const [activeSearchValue, setActiveSearchValue] = useState();
  const [filteredListItems, setFilteredListItems] = useState([]);

  const handleFilterItems = (e) => {
    const searchValue = e.target.value;
    setActiveSearchValue(searchValue);

    const filteredListItems = items.filter(({ name }) => {
      name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredListItems(filteredListItems);
  };

  return (
    <div className="w-full h-full space-y-2">
      <input
        className="rounded-xl w-full h-10 px-4 focus:outline-none shadow"
        type="text"
        onChange={handleFilterItems}
        placeholder={placeholder}
      />
      <div className="w-full overflow-y-auto h-full space-y-1">
        {filteredListItems &&
          filteredListItems.map(({ id, name, image }) => {
            const listItemProps = {
              id,
              name,
              image,
            };

            return <ListItem key={id} {...listItemProps} />;
          })}
      </div>
    </div>
  );
};

export default List;
