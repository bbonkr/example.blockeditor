export const PageBlockType = {
  Title: "Title",
  Image: "Image",
  About: "About",
  ListItem: "ListItem",
  Award: "Award",
  Press: "Press",
  Form: "Form",
} as const;

export type PageBlockType = (typeof PageBlockType)[keyof typeof PageBlockType];
