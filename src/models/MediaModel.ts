import { MediaType } from "./MediaType";

export type MediaModel = {
  id: string;
  mediaType: MediaType;
  url: string;
  thumbnailUrl?: string | null;
  description?: string | null;
  order: number;
};
