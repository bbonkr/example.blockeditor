import { PageBlockModel } from "@/models/PageBlockModel";
import { PageBlockLink } from "../PageBlockLink";
import { PageBlockLocation } from "../PageBlockLocation";
import { Icon } from "../Icon";
import { MediaType } from "@/models/MediaType";
import { PageBlockType } from "@/models/PageBlockType";

type PageBlockProps = {
  block: PageBlockModel;
};

export const PageBlock = ({ block }: PageBlockProps) => {
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

  if (
    block.blockType === PageBlockType.Title ||
    block.blockType === PageBlockType.Title1 ||
    block.blockType === PageBlockType.Title2 ||
    block.blockType === PageBlockType.Title3 ||
    block.blockType === PageBlockType.Title4
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
      </div>
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
            {block.locations.map((location) => (
              <PageBlockLocation key={location.id} location={location} />
            ))}
          </div>
        )}

        {(block.links ?? []).length > 0 && (
          <div className="flex flex-row gap-3 my-3">
            {block.links.map((link) => (
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
            {block.locations.map((location) => (
              <PageBlockLocation key={location.id} location={location} />
            ))}
          </div>
        )}

        {(block.links ?? []).length > 0 && (
          <div className="flex flex-row gap-3 my-3">
            {block.links.map((link) => (
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
          {block.locations.map((location) => (
            <PageBlockLocation key={location.id} location={location} />
          ))}
        </div>
      )}

      {(block.links ?? []).length > 0 && (
        <div className="flex flex-row gap-3 my-3">
          {block.links.map((link) => (
            <PageBlockLink key={link.id} link={link} />
          ))}
        </div>
      )}
    </div>
  );
};
