export enum RequestMethods {
  GET = "get",
  POST = "post",
}

export interface BreedsContextValues {
  isLoading: boolean;
  catBreeds?: Record<string, never>[];
}
