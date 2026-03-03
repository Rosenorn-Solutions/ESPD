import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

// TODO: Replace with actual Sanity fetch when CMS is connected
async function getPageBySlug(slug: string) {
  // Placeholder — returns null so all dynamic routes 404 until CMS is live
  // In production:
  //   import { client } from "@/lib/sanity/client";
  //   import { pageBySlugQuery } from "@/lib/sanity/queries";
  //   return client.fetch(pageBySlugQuery, { slug });
  void slug;
  return null as {
    title: string;
    slug: string;
    metaDescription?: string;
    body?: string;
  } | null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription ?? "",
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            {page.title}
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: page.title }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed">
          {/* TODO: render portable text from Sanity */}
          {page.body && <div dangerouslySetInnerHTML={{ __html: page.body }} />}
        </div>
      </section>
    </>
  );
}
