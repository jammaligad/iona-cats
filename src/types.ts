export enum RequestMethods {
  GET = "get",
  POST = "post",
}

export enum PlaceholderTypes {
  LIST_ITEM = "list-item",
  CARD = "card",
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

export interface BreedDetails {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
  imageUrl: string;
}
