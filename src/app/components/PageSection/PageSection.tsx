import { PageSectionModel } from "@/models/PageSectionModel";
import { PageBlock } from "../PageBlock";
import { PageSectionListType } from "@/models/PageSectionListType";

type PageSectionProps = {
  section: PageSectionModel;
};

export const PageSection = ({ section }: PageSectionProps) => {
  const classNames =
    section.listType == PageSectionListType.List
      ? "flex flex-col"
      : section.listType == PageSectionListType.Grid
      ? "flex flex-col md:grid md:grid-cols-2 gap-3"
      : "";

  return (
    <div id={`section-${section.id}`} className={`${classNames} my-3`}>
      {section.blocks.map((block) => (
        <PageBlock key={block.id} block={block} />
      ))}
    </div>
  );
};
