import { PageItemStatus } from "./PageItemStatus";
import { PageSectionModel } from "./PageSectionModel";

export type PageItemModel = {
  id: string;
  languageCode: string;
  status: PageItemStatus;
  customStyle?: string | null;
  sections: PageSectionModel[];
  name?: string | null;
  slug: string;
  description?: string | null;
  overview?: string | null;
  content?: string | null;
  isConfirmed: boolean;
};
