import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vedtægter — Everyday Sexism Project Danmark",
  description:
    "Læs vedtægterne for Everyday Sexism Project Danmark.",
};

export default function VedtaegterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Vedtægter
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Hvem er vi?", href: "/hvem-er-vi/om-espd" },
          { label: "Vedtægter" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed">
          {/* TODO: Replace with actual Sanity CMS content */}
          <p>Indhold kommer snart.</p>
        </div>
      </section>
    </>
  );
}
