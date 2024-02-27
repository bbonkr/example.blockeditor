import { PageItemModel } from "@/models/PageItemModel";
import { PageSection } from "../PageSection";
import React from "react";
import Head from "next/head";

type PageItemProps = {
  item: PageItemModel;
};

export const PageItem = ({ item }: PageItemProps) => {
  const siteName = "";
  return (
    <React.Fragment>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={item.name ?? ""} />
        <meta property="og:description" content={item.description ?? ""} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={item.languageCode} />
      </Head>
      <div>
        <div className="flex flex-col">
          {item.sections.map((section) => (
            <PageSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
