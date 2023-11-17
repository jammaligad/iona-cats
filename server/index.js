import "dotenv/config";

import express from "express";

import routes from "./routes/index.js";

import { SERVER_PORT } from "./env.js";

const app = express();

routes(app);

// listening for port
app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.info("> Unable to run server", err);
  } else {
    console.info(`> Proxy server is running on ${SERVER_PORT}`);
  }
});
