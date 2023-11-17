import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import CatDetails from "./CatDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cat-details/:id",
    element: <CatDetails />,
  },
]);

export default router;
