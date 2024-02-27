import { PageBlockLinkType } from "./PageBlockLinkType";

export type PageBlockLinkModel = {
  id: string;
  languageCode: string;
  linkType: PageBlockLinkType;
  name?: string | null;
  url?: string | null;
  isConfirmed: boolean;
  order: number;
};
