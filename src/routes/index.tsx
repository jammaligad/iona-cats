import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import CatDetails from "./CatDetails";
import Dashboard from "./Dashboard";
import BreedPage from "./BreedPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="breed/:id" element={<BreedPage />} />
      <Route path="cat-details/:id" element={<CatDetails />} />
    </Route>
  )
);

export default router;
