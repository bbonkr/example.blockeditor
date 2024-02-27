export const PageItemStatus = {
  Draft: "Draft",
  Active: "Active",
  Archived: "Archived",
} as const;

export type PageItemStatus =
  (typeof PageItemStatus)[keyof typeof PageItemStatus];
