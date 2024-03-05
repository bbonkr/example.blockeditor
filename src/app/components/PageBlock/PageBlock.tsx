"use client";
import { PageBlockModel } from "@/models/PageBlockModel";
import { PageBlockLink } from "../PageBlockLink";
import { PageBlockLocation } from "../PageBlockLocation";
import { Icon } from "../Icon";
import { MediaType } from "@/models/MediaType";
import { PageBlockType } from "@/models/PageBlockType";
import { PageBlockFormItem } from "../PageBlockFormItem";
import * as React from "react";
import { FormKeyValueModel } from "@/models/FormKeyValueModel";
import { PageBlockFormItemModel } from "@/models/PageBlockFormItemModel";

type PageBlockProps = {
  block: PageBlockModel;
  debug?: boolean;
  onSubmit?: (formValues: FormKeyValueModel[]) => void;
};

export const PageBlock = ({ block, debug, onSubmit }: PageBlockProps) => {
  const [formValues, setFormValues] = React.useState<FormKeyValueModel[]>([]);

  const titleTextSize = "text-3xl";
  const frontalImages = (block.medias ?? []).filter(
    (media) => media.mediaType === MediaType.Frontal
  );
  const hasFrontalImage = frontalImages.length > 0;
  const bgImageUrl = hasFrontalImage
    ? frontalImages.find((_, index) => index === 0)?.thumbnailUrl ?? ""
    : "";
  const bgClassName = hasFrontalImage ? "bg-local bg-cover min-h-80 " : "";

  const contentBgClassName = hasFrontalImage
    ? "opacity-50 bg-slate-700 dark:bg-slate-900 text-slate-200 self-start px-2 py-3 mx-2 rounded-lg"
    : "";

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  const handleFormItemChanged = (
    formItem: PageBlockFormItemModel,
    formName: string,
    formValue: string | number | undefined
  ) => {
    setFormValues((prevState) => {
      const foundIndex = prevState.findIndex((x) => x.key === formName);
      if (foundIndex >= 0) {
        prevState.splice(foundIndex, 1, {
          key: formName,
          value: formValue?.toString(),
        });
      } else {
        prevState.push({ key: formName, value: formValue?.toString() });
      }
      return [...prevState];
    });
  };

  if (block.blockType === PageBlockType.Image) {
    return (
      <div>
        <img src={block.imageThumbnailUrl} alt={block.name} />
      </div>
    );
  }
  if (block.blockType === PageBlockType.Title) {
    return (
      <div
        className={`flex flex-col justify-between relative rounded-lg ${bgClassName}`}
        style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "" }}
      >
        {(block.icon || block.name) && (
          <div
            className={`flex flex-row items-center gap-3 my-3 ${contentBgClassName}`}
          >
            {block.icon && (
              <div className={`${titleTextSize}`}>
                {<Icon name={block.icon} />}
              </div>
            )}

            {block.name && <h3 className={`${titleTextSize}`}>{block.name}</h3>}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p>{block.subtitle}</p>
          {(block.links ?? []).length > 0 && (
            <div className="flex flex-row gap-3 my-3">
              {block.links?.map((link) => (
                <PageBlockLink key={link.id} link={link} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (block.blockType === PageBlockType.Form) {
    return (
      <React.Fragment>
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-row flex-wrap gap-3 items-center justify-between">
            {block.formItems?.map((formItem) => (
              <PageBlockFormItem
                key={formItem.id}
                item={formItem}
                values={formValues}
                onChange={handleFormItemChanged}
                showFormName
              />
            ))}
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </div>
        </form>
        {debug && (
          <div className="p-3 text-slate-200 bg-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <pre>{formValues && JSON.stringify(formValues, null, 2)}</pre>
          </div>
        )}
      </React.Fragment>
    );
  }

  if (
    block.blockType === PageBlockType.Award ||
    block.blockType === PageBlockType.Press
  ) {
    return (
      <div
        className={`flex flex-col justify-between relative rounded-lg ${bgClassName}`}
        style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "" }}
      >
        {(block.icon || block.name) && (
          <div
            className={`flex flex-row items-center gap-3 my-3 ${contentBgClassName}`}
          >
            {block.icon && (
              <div className={`${titleTextSize}`}>
                {<Icon name={block.icon} />}
              </div>
            )}

            {block.name && <h3 className={`${titleTextSize}`}>{block.name}</h3>}
          </div>
        )}

        <div>
          <p>{block.subtitle}</p>
        </div>

        {block.content && (
          <div className="px-2 py-3">
            <div dangerouslySetInnerHTML={{ __html: block.content ?? "" }} />
          </div>
        )}

        {block.overview && (
          <div className={`px-2 py-3 mb-3 ${contentBgClassName}`}>
            <div dangerouslySetInnerHTML={{ __html: block.overview ?? "" }} />
          </div>
        )}

        {(block.locations ?? []).length > 0 && (
          <div className="flex flex-row gap-3">
            {block.locations?.map((location) => (
              <PageBlockLocation key={location.id} location={location} />
            ))}
          </div>
        )}

        {(block.links ?? []).length > 0 && (
          <div className="flex flex-row gap-3 my-3">
            {block.links?.map((link) => (
              <PageBlockLink key={link.id} link={link} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (block.blockType === PageBlockType.ListItem) {
    return (
      <div
        className={`flex flex-col justify-between relative rounded-lg ${bgClassName}`}
        style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "" }}
      >
        {(block.icon || block.name) && (
          <div
            className={`flex flex-row items-center gap-3 my-3 ${contentBgClassName}`}
          >
            {block.icon && (
              <div className={`${titleTextSize}`}>
                {<Icon name={block.icon} />}
              </div>
            )}

            {block.name && <h3 className={`${titleTextSize}`}>{block.name}</h3>}
          </div>
        )}

        <div>
          <p>{block.subtitle}</p>
        </div>

        {block.content && (
          <div className="px-2 py-3">
            <div dangerouslySetInnerHTML={{ __html: block.content ?? "" }} />
          </div>
        )}

        {block.overview && (
          <div className={`px-2 py-3 mb-3 ${contentBgClassName}`}>
            <div dangerouslySetInnerHTML={{ __html: block.overview ?? "" }} />
          </div>
        )}

        {(block.locations ?? []).length > 0 && (
          <div className="flex flex-row gap-3">
            {block.locations?.map((location) => (
              <PageBlockLocation key={location.id} location={location} />
            ))}
          </div>
        )}

        {(block.links ?? []).length > 0 && (
          <div className="flex flex-row gap-3 my-3">
            {block.links?.map((link) => (
              <PageBlockLink key={link.id} link={link} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // About or etc ... (Html content rendering)
  return (
    <div
      className={`flex flex-col justify-between relative rounded-lg ${bgClassName}`}
      style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "" }}
    >
      {(block.icon || block.name) && (
        <div
          className={`flex flex-row items-center gap-3 my-3 ${contentBgClassName}`}
        >
          {block.icon && (
            <div className={`${titleTextSize}`}>
              {<Icon name={block.icon} />}
            </div>
          )}

          {block.name && <h3 className={`${titleTextSize}`}>{block.name}</h3>}
        </div>
      )}

      <div>
        <p>{block.subtitle}</p>
      </div>

      {block.content && (
        <div className="px-2 py-3">
          <div dangerouslySetInnerHTML={{ __html: block.content ?? "" }} />
        </div>
      )}

      {block.overview && (
        <div className={`px-2 py-3 mb-3 ${contentBgClassName}`}>
          <div dangerouslySetInnerHTML={{ __html: block.overview ?? "" }} />
        </div>
      )}

      {(block.locations ?? []).length > 0 && (
        <div className="flex flex-row gap-3">
          {block.locations?.map((location) => (
            <PageBlockLocation key={location.id} location={location} />
          ))}
        </div>
      )}

      {(block.links ?? []).length > 0 && (
        <div className="flex flex-row gap-3 my-3">
          {block.links?.map((link) => (
            <PageBlockLink key={link.id} link={link} />
          ))}
        </div>
      )}
    </div>
  );
};
