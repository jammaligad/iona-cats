import { createContext } from "react";

export const BreedsContext = createContext({
  isLoading: false,
  catBreeds: [],
});
