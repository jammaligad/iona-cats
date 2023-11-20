import { RequestMethods } from "../types";

export const BREEDS_ENDPOINT = {
  url: "/api/cats/breeds",
  method: RequestMethods.GET,
};

export const IMAGES_ENDPOINT = {
  url: "/api/cats/images",
  method: RequestMethods.POST,
};

export const CAT_DETAILS_ENDPOINT = {
  url: "/api/cats/cat-details",
  method: RequestMethods.POST,
};
