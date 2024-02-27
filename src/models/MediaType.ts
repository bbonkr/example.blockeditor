export const MediaType = {
  Photo: "Photo",
  Video: "Vedio",
  Youtube: "Youtube",
  Document: "Document",
  Frontal: "Frontal",
  Diagonal: "Diagonal",
  Side: "Side",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];
