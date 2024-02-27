import { PageBlockLinkModel } from "./PageBlockLinkModel";
import { PageBlockLocationModel } from "./PageBlockLocationModel";
import { MediaModel } from "./MediaModel";
import { PageBlockType } from "./PageBlockType";

export type PageBlockModel = {
  id: string;
  languageCode: string;
  blockType: PageBlockType;
  icon?: string | null;
  customStyle?: string | null;
  order: number;
  name: string;
  subtitle: string;
  description?: string | null;
  overview?: string | null;
  content?: string | null;
  isConfirmed: boolean;
  medias: MediaModel[];
  links: PageBlockLinkModel[];
  locations: PageBlockLocationModel[];
};
