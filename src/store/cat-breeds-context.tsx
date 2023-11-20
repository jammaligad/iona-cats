import { createContext } from "react";

import { BreedData } from "../types";

export const BreedsContext = createContext({
  isLoading: false,
  catBreeds: [] as BreedData[],
});
