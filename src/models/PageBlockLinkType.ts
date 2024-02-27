export const PageBlockLinkType = {
  Button: "Button",
  Anchor: "Anchor",
} as const;

export type PageBlockLinkType =
  (typeof PageBlockLinkType)[keyof typeof PageBlockLinkType];
