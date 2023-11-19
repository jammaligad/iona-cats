import { FC } from "react";

import { ListItemPlaceholder } from "./ListItemPlaceholder";

import { PlaceholderTypes } from "../../types";

interface Props {
  type: PlaceholderTypes;
}

const PLACEHOLDER_TYPES: Record<PlaceholderTypes, JSX.Element> = {
  [PlaceholderTypes.LIST_ITEM]: <ListItemPlaceholder />,
  [PlaceholderTypes.CARD]: <></>,
};

const Placeholder: FC<Props> = ({ type }) => {
  return <div className="placeholder-container">{PLACEHOLDER_TYPES[type]}</div>;
};

export default Placeholder;
