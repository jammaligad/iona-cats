import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SideBar from "../components/Sidebar";

import useAxios from "../common/hooks/useAxios";

import { BreedsContext } from "../store/cat-breeds-context";

import { BREEDS_ENDPOINT } from "../common/endpoints";

import { BreedData } from "../types";

import "./index.css";

function App() {
  const { data, isLoading } = useAxios(
    BREEDS_ENDPOINT.url,
    BREEDS_ENDPOINT.method
  );
  const catBreeds = [...data] as BreedData[];

  return (
    <BreedsContext.Provider value={{ isLoading, catBreeds: catBreeds || [] }}>
      <main className="app-container">
        <Toaster position="bottom-right" reverseOrder={false} />
        <SideBar />

        <Outlet />
      </main>
    </BreedsContext.Provider>
  );
}

export default App;
