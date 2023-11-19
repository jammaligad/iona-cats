export enum RequestMethods {
  GET = "get",
  POST = "post",
}

export interface BreedsContextValues {
  isLoading: boolean;
  catBreeds?: Record<string, never>[];
}

export interface BreedImage {
  size: number;
  url: string;
}

export interface BreedData {
  id: string;
  name: string;
  image: BreedImage;
}
