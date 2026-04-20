import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sexisme i Gaming og Rollespil — Everyday Sexism Project Danmark",
  description:
    "ESPDs samarbejde om sexisme i gaming- og rollespilsmiljøet.",
};

export default function SexismeIGamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Sexisme i Gaming og Rollespil
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde", href: "/vores-arbejde/samarbejde/sexisme-i-gaming-og-rollespil" },
          { label: "Samarbejde" },
          { label: "Sexisme i Gaming og Rollespil" },
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
