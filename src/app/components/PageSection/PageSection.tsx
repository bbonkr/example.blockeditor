import { PageSectionModel } from "@/models/PageSectionModel";
import { PageBlock } from "../PageBlock";
import { PageSectionListType } from "@/models/PageSectionListType";
import { FormKeyValueModel } from "@/models/FormKeyValueModel";

type PageSectionProps = {
  section: PageSectionModel;
  onSubmit?: (formValues: FormKeyValueModel[]) => void;
};

export const PageSection = ({ section, onSubmit }: PageSectionProps) => {
  const classNames =
    section.listType == PageSectionListType.List
      ? "flex flex-col"
      : section.listType == PageSectionListType.Grid
      ? "flex flex-col md:grid md:grid-cols-2 gap-3"
      : "";

  return (
    <div id={`section-${section.id}`} className={`${classNames} my-3`}>
      {section.blocks.map((block) => (
        <PageBlock key={block.id} block={block} onSubmit={onSubmit} />
      ))}
    </div>
  );
};
