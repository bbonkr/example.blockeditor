export const PageBlockFormItemType = {
  SingleLineText: "SingleLineText",
  MultiLineText: "MultiLineText",
  Select: "Select",
  CheckBox: "CheckBox",
  RadioButton: "RadioButton",
  Email: "Email",
  Specialties: "Specialties",
  Services: "Services",
  PhoneNumber: "PhoneNumber",
} as const;

export type PageBlockFormItemType =
  (typeof PageBlockFormItemType)[keyof typeof PageBlockFormItemType];
