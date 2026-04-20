import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Retningslinjer til medier i sager om kønnet vold — Everyday Sexism Project Danmark",
  description:
    "ESPDs retningslinjer til medier i sager om kønnet vold og seksuelle krænkelser.",
};

export default function RetningslinjerTilMedierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Retningslinjer til medier i sager om kønnet vold
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde", href: "/vores-arbejde/maerkesager/retningslinjer-til-medier-i-sager-om-koennet-vold" },
          { label: "Mærkesager" },
          { label: "Retningslinjer til medier" },
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
