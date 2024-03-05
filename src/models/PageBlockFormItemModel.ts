import { PageBlockFormItemOptionModel } from "./PageBlockFormItemOptionModel";
import { PageBlockFormItemType } from "./PageBlockFormItemType";

export type PageBlockFormItemModel = {
  id: string;
  formItemType: PageBlockFormItemType;
  customStyle?: string | null;
  name: string;
  placeholder?: string;
  required?: boolean;
  order: number;
  options?: PageBlockFormItemOptionModel[];
};
