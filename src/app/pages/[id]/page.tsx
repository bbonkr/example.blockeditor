import { PageItem } from "@/app/components/PageItem";
import { sample } from "@/examples/sample";
import { sampleForm } from "@/examples/sample-form";
import type { Metadata, ResolvingMetadata } from "next";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const getData = async (id: string) => {
  await delay(500);
  if (id === "1") {
    return sampleForm;
  }
  return sample;
};

export default async function Page({ params }: { params: { id: string } }) {
  const pageItem = await getData(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24  ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <PageItem item={pageItem} />
      </div>
    </main>
  );
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const pageItem = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: pageItem.name,
    openGraph: {
      images: [...previousImages],
    },
  };
}
