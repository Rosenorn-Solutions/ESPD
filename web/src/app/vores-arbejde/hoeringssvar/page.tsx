import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Høringssvar — Everyday Sexism Project Danmark",
  description:
    "Læs ESPDs høringssvar til lovgivning om seksuel vold og ligestilling.",
};

export default function HoeringssvarsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Høringssvar
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Høringssvar" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Høringssvar ────────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Høringssvar
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Høringssvar vedr. udkast til forslag til lov om ændring af straffeloven
                (samtykkebaseret voldtægtsbestemmelse) fra ESPD —{" "}
                <span className="text-dark-text font-semibold">27. oktober 2020</span>
              </li>
              <li>
                Høringssvar til Straffelovrådets betænkning om ændring af
                voldtægtslovgivningen —{" "}
                <span className="text-dark-text font-semibold">18. marts 2020</span>
              </li>
              <li>
                Høringssvar vedrørende selvstændig bestemmelse om psykisk vold —{" "}
                <span className="text-dark-text font-semibold">18. december 2018</span>
              </li>
            </ul>
          </div>

          {/* ── Samtykkelovgivning ─────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Henvendelser vedr. samtykkelovgivning
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Opfordring til at lave en handlingsplan på tværs — indsats mod voldtægt fra
                Everyday Sexism Project Danmark (ESPD) —{" "}
                <span className="text-dark-text font-semibold">16. november 2020</span>
              </li>
              <li>
                Henvendelse til Retsudvalget v/ SFs retsordfører om bedre forhold for
                voldtægtsofre —{" "}
                <span className="text-dark-text font-semibold">18. september 2019</span>
              </li>
              <li>
                Til justitsminister Søren Pape om samtykkelovgivning —{" "}
                <span className="text-dark-text font-semibold">12. oktober 2018</span>
              </li>
            </ul>
          </div>

          {/* ── Psykisk vold ───────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Henvendelser vedr. psykisk vold
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Input til definition af psykisk vold efter aktørmøde —{" "}
                <span className="text-dark-text font-semibold">27. juni 2018</span>
              </li>
              <li>
                Input til definition af psykisk vold —{" "}
                <span className="text-dark-text font-semibold">11. juni 2018</span>
              </li>
            </ul>
          </div>

          {/* ── Ulovlig billeddeling ───────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Henvendelser vedr. ulovlig billeddeling
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Til Retsudvalget om hævnporno —{" "}
                <span className="text-dark-text font-semibold">29. januar 2017</span>
              </li>
              <li>
                Til rets- og ligestillingsordførerne om indsats mod hævnporno —{" "}
                <span className="text-dark-text font-semibold">27. august 2016</span>
              </li>
            </ul>
          </div>

          {/* ── Sexisme i offentlig transport ──────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Henvendelser vedr. sexisme i offentlig transport
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Til transportministeren (også sendt til ordførerne) om sexisme i offentlig
                transport —{" "}
                <span className="text-dark-text font-semibold">maj 2016</span>
              </li>
            </ul>
          </div>

          {/* ── Kontakt ────────────────────────────────────── */}
          <div className="space-y-4">
            <p>
              Ønsker du adgang til et af ovenstående dokumenter, er du velkommen til at{" "}
              <a
                href="/kontakt/kontakt-os"
                className="underline hover:text-accent-gold transition-colors"
              >
                kontakte os
              </a>{" "}
              på{" "}
              <a
                href="mailto:espdanmark@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdanmark@gmail.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
