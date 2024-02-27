export const PageSectionListType = {
  None: "None",
  List: "List",
  Grid: "Grid",
} as const;

export type PageSectionListType =
  (typeof PageSectionListType)[keyof typeof PageSectionListType];
