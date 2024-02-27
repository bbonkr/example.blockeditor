export const PageBlockType = {
  Title: "Title",
  Title1: "Title1",
  Title2: "Title2",
  Title3: "Title3",
  Title4: "Title4",
  About: "About",
  ListItem: "ListItem",
  Award: "Award",
  Press: "Press",
} as const;

export type PageBlockType = (typeof PageBlockType)[keyof typeof PageBlockType];
