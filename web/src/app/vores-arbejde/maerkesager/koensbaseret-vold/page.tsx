import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kønsbaseret vold — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde mod kønsbaseret vold og seksuelle overgreb.",
};

export default function KoensbaseretVoldPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Kønsbaseret vold
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde", href: "/vores-arbejde/maerkesager/koensbaseret-vold" },
          { label: "Mærkesager" },
          { label: "Kønsbaseret vold" },
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
