import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import bannerWheelImage from "./fns-banner-wheel.png";
import networkImage from "./fns-network.png";
import shadowReportImage from "./fns-shadow-report.png";

export const metadata: Metadata = {
  title: "FN's Verdensmål — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde i relation til FN's verdensmål for bæredygtig udvikling.",
};

export default function FnsVerdensmaalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerWheelImage}
          alt="Illustration af FN's verdensmål"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/55" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[360px] md:py-24">
          <div className="inline-flex bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase text-accent-gold md:text-3xl">
              FN&apos;s Verdensmål
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Samarbejde" },
          { label: "FN’s verdensmål" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          {/* ── Hvad er FN’s verdensmål? ───────────────────── */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Hvad er FN’s verdensmål for bæredygtig udvikling?
              </h2>
              <p>
                Verden står i dag overfor mange store udfordringer — miljøforurening,
                klimaforandringer, naturkatastrofer, men også fødevareusikkerhed, fattigdom og
                ulighed mellem mennesker på baggrund af køn, seksualitet og etnicitet.
              </p>
              <p>
                Derfor blev der vedtaget 17 verdensmål for bæredygtig udvikling (UN’s
                Sustainable Development Goals, SDG) på FN-topmødet d. 25. september 2015.
                Målene afspejler en ambitiøs udviklingsdagsorden, der skal vise os vejen til en
                mere bæredygtig udvikling — for både mennesker og for vores planet.
              </p>
              <p>
                Verdensmålene består af 17 konkrete mål og 169 delmål, som forpligter alle
                FN’s 193 medlemslande til at afskaffe fattigdom og sult, reducere uligheder,
                sikre god uddannelse og bedre sundhed til alle. Alle lande har deres egne
                udfordringer, og det er derfor nødvendigt, at vi løser udfordringerne i
                fællesskab.
              </p>
              <p>
                Noget af det centrale i dagsordenen er, at verdensmålene indebærer social,
                økonomisk og miljømæssig bæredygtighed, og forsikringen om at <span className="italic">no one will be left behind</span>.
              </p>
              <p>
                Målene trådte i kraft 1. januar 2016.
              </p>
              <ul className="list-disc space-y-2 pl-6">
              <li>
                <a href="https://www.verdensmaalene.dk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs om verdensmålene.dk</a>
              </li>
              <li>
                <a href="http://www.undp.org/content/undp/en/home/sustainable-development-goals.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">UN’s Development Programme</a>
              </li>
              </ul>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={networkImage}
                  alt="KBH SDG Netværk grafik"
                  width={655}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>
          </div>

          {/* ── KBH SDG Netværk ────────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] md:items-start">
            <figure className="order-2 md:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={shadowReportImage}
                  alt="Skyggerapport for verdensmålene"
                  width={724}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>

            <div className="order-1 space-y-4 font-body leading-relaxed text-body-text md:order-2">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                KBH SDG Netværk
              </h2>
              <p>
                Københavns Kommune vedtog i oktober 2017 en handlingsplan for implementering af
                FN’s 17 verdensmål i København — som den første kommune i Danmark. Som svar på
                en utilstrækkelig inddragelse af det lokale civilsamfund i udarbejdelsen af
                handlingsplanen, tog FN-forbundet København i sommeren 2018 kontakt til en række
                mindre organisationer forankret i København. Formålet var at udarbejde en fælles
                skyggerapport på kommunens handlingsplan.
              </p>
              <p>
                17 lokale organisationer har fokuseret på et relevant verdensmål og givet deres
                anbefalinger til, hvordan der på lokalt plan kan sikres bedst mulig
                implementering af verdensmålene.
              </p>
              <p>
                Herefter blev KBH SDG Netværk etableret med det formål, at vi — med udgangspunkt
                i verdensmålene — fortsat arbejder sammen for en mere bæredygtig by i social,
                økonomisk og miljømæssig balance. Vores mål er bl.a. at sikre sammenhæng og
                overensstemmelse med verdensmålene i kommunens arbejde. Vi arbejder fortsat på at
                få målene implementeret i København.
              </p>
              <ul className="list-disc space-y-2 pl-6">
              <li>
                <a href="http://www.fnforbundet.dk/arkiv/nyheder-2018/civilsamfundet-efterlyser-inddragelse--dialog-med-koebenhavns-kommune" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs mere om civilsamfundets rolle</a>
              </li>
              <li>
                <a href="http://a21.dk/wp-content/uploads/2019/02/Skyggerapporten_2018_FINAL_LS05.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs skyggerapporten her (PDF)</a>
              </li>
              </ul>
            </div>
          </div>

          {/* ── ESPDs rolle ───────────────────────────────── */}
          <div className="mt-12 space-y-4 border-t border-light-gray pt-12 font-body leading-relaxed text-body-text">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              ESPDs rolle
            </h2>
            <p>
              KBH SDG Netværk er en samling af lokale civilsamfundsorganisationer, der med
              verdensmålene som omdrejningspunkt kæmper for et bæredygtigt København. Vi står
              bag en fælles rapport om verdensmålene og bruger målene som springbræt til at
              fremme dialogen med beslutningstagere og andre, i håbet om at sikre en storby i
              social, økonomisk og miljømæssig balance.
            </p>
            <p>
              ESPD har bidraget til rapporten omkring verdensmål 5 og fortsætter med at kæmpe
              for ligestilling i København.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
