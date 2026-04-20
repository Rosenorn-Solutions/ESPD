import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Samtykkebaseret voldtægtslovgivning — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde for en samtykkebaseret voldtægtslovgivning i Danmark.",
};

export default function SamtykkebaseretVoldtaegtslovgivningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Samtykkebaseret voldtægtslovgivning
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde", href: "/vores-arbejde/maerkesager/samtykkebaseret-voldtaegtslovgivning" },
          { label: "Mærkesager" },
          { label: "Samtykkebaseret voldtægtslovgivning" },
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
