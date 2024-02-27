"use client";

import { PageBlockLinkModel } from "@/models/PageBlockLinkModel";
import { PageBlockLinkType } from "@/models/PageBlockLinkType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "../ErrorMessage";

type PageBlockLinkProps = {
  link: PageBlockLinkModel;
  onClick?: () => void;
};

export const PageBlockLink = ({ link, onClick }: PageBlockLinkProps) => {
  const routrer = useRouter();

  if (!link.url) {
    return <ErrorMessage message="Url is not set" />;
  }

  const isInternalLink = link.url?.startsWith("/") ?? false;

  const onButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (isInternalLink) {
      routrer.push(link.url ?? "");
    } else {
      window.open(link.url ?? "");
    }
  };

  if (link.linkType === PageBlockLinkType.Button) {
    return (
      <button className="btn-primary" onClick={onButtonClick}>
        {link.name}
      </button>
    );
  }

  if (isInternalLink) {
    return <Link href={link.url}>{link.name}</Link>;
  }

  return <a href={link.url}>{link.name}</a>;
};
