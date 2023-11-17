import bodyParser from 'body-parser'

import { catsApi } from "./api/cats.js";

export const routes = (app) => {
  // parse application/json
  app.use(bodyParser.json())

  // endpoint routes
  catsApi(app);
};

export default routes;
