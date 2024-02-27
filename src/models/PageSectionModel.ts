import { PageBlockModel } from "./PageBlockModel";
import { PageSectionListType } from "./PageSectionListType";

export type PageSectionModel = {
  id: string;
  listType?: PageSectionListType | null;
  customStyle?: string | null;
  order: number;
  blocks: PageBlockModel[];
};
