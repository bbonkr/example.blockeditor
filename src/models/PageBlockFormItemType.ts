export const PageBlockFormItemType = {
  SingleLineText: "SingleLineText",
  MultiLineText: "MultiLineText",
  Select: "Select",
  CheckBox: "CheckBox",
  RadioButton: "RadioButton",
} as const;

export type PageBlockFormItemType =
  (typeof PageBlockFormItemType)[keyof typeof PageBlockFormItemType];
