import { Outlet } from "react-router-dom";

import SideBar from "../components/Sidebar";

import useAxios from "../common/hooks/useAxios";

import { BreedsContext } from "../store/cat-breeds-context";

import { BREEDS_ENDPOINT } from "../common/endpoints";

import "./index.css";
import { BreedData } from "../types";

function App() {
  const { data, isLoading } = useAxios(
    BREEDS_ENDPOINT.url,
    BREEDS_ENDPOINT.method
  );
  const catBreeds = [...data] as BreedData[];

  return (
    <BreedsContext.Provider value={{ isLoading, catBreeds: catBreeds || [] }}>
      <main className="app-container">
        <SideBar />

        <Outlet />
      </main>
    </BreedsContext.Provider>
  );
}

export default App;
