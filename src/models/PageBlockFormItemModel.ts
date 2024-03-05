import { PageBlockFormItemOptionModel } from "./PageBlockFormItemOptionModel";
import { PageBlockFormItemType } from "./PageBlockFormItemType";

export type PageBlockFormItemModel = {
  id: string;
  formItemType: PageBlockFormItemType;
  name: string;
  placeholder?: string;
  order: number;
  options?: PageBlockFormItemOptionModel[];
};
