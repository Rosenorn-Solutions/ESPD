import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Find hjælp",
  description:
    "Er du udsat for overgreb eller vold? Her finder du hjælp og ressourcer.",
};

const resources = [
  {
    name: "Kvindernes Krisecenter",
    description: "Rådgivning og ophold for kvinder udsat for vold.",
    href: "https://telefonkrisecenter.dk",
    phone: "70 20 30 82",
  },
  {
    name: "Center for Voldtægtsofre",
    description: "Akut hjælp og rådgivning til voldtægtsofre.",
    href: "https://LevUdenVold.dk",
    phone: "1888",
  },
  {
    name: "Offerrådgivningen",
    description: "Gratis og anonym rådgivning til ofre for forbrydelser.",
    href: "https://offerraaadgivningen.dk",
    phone: null,
  },
  {
    name: "Dialog mod Vold",
    description: "Behandlingstilbud til voldsudøvere og voldsramte.",
    href: "https://telefonkrisecenter.dk",
    phone: null,
  },
  {
    name: "Politiet",
    description: "Ring til politiet ved akut fare.",
    href: "https://politi.dk",
    phone: "114",
  },
];

export default function FindHjaelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase leading-tight">
            Udsat for overgreb eller vold?
            <br />
            Find hjælp her
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Kontakt", href: "/kontakt-os" },
          { label: "Find hjælp" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <p className="mb-8 font-body text-body-text leading-relaxed">
            Hvis du er udsat for overgreb, vold eller andre former for
            krænkelser, er der hjælp at hente. Nedenfor finder du en liste over
            relevante organisationer og hotlines.
          </p>

          <div className="space-y-6">
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="rounded-sm border border-gray-200 p-6"
              >
                <h2 className="font-heading text-lg font-semibold text-dark-text mb-2">
                  {resource.name}
                </h2>
                <p className="font-body text-body-text text-sm mb-3">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-dark-text hover:text-accent-gold transition-colors"
                  >
                    Besøg hjemmeside
                  </Link>
                  {resource.phone && (
                    <a
                      href={`tel:${resource.phone.replace(/\s/g, "")}`}
                      className="underline text-dark-text hover:text-accent-gold transition-colors"
                    >
                      Tlf: {resource.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
