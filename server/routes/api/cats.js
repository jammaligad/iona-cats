import axios from "axios";

import { CATS_API_BASE_URL, CATS_API_PRODUCTION_KEY } from "../../env.js";

const commonConfig = {
  baseURL: CATS_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": CATS_API_PRODUCTION_KEY,
  },
};

export function catsApi(app) {
  app.get("/api/cats/breeds", async (req, res) => {
    try {
      const apiResponse = await axios({
        url: "/breeds",
        method: "get",
        ...commonConfig,
      });

      res.json(apiResponse.data)
    } catch (err) {
      return res.status(400).send({
        status: "fail",
        message: err.message,
      });
    }
  });

  app.get("/api/cats/images", async (req, res) => {
    const { breedID, limit } = req.body;

    try {
      const apiResponse = await axios({
        url: `/images/search?breed_ids=${breedID}&limit=${limit}`,
        method: "get",
        ...commonConfig,
      });

      res.json(apiResponse.data)
    } catch (err) {
      return res.status(400).send({
        status: "fail",
        message: err.message,
      });
    }
  });
}