import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Regnskab — Everyday Sexism Project Danmark",
  description:
    "Se regnskabet for Everyday Sexism Project Danmark.",
};

export default function RegnskabPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Regnskab
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Hvem er vi?", href: "/hvem-er-vi/om-espd" },
          { label: "Regnskab" },
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
