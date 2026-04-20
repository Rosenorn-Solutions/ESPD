import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "FN's Verdensmål — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde i relation til FN's verdensmål for bæredygtig udvikling.",
};

export default function FnsVerdensmaalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            FN&apos;s Verdensmål
          </h1>
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
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Hvad er FN’s verdensmål? ───────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Hvad er FN’s verdensmål for bæredygtig udvikling?
            </h2>
            <p>
              Verden står i dag overfor mange store udfordringer — miljøforurening, klimaforandringer, naturkatastrofer, men også fødevareusikkerhed, fattigdom og ulighed mellem mennesker på baggrund af køn, seksualitet og etnicitet.
            </p>
            <p>
              Derfor blev der vedtaget 17 verdensmål for bæredygtig udvikling (UN’s Sustainable Development Goals, SDG) på FN-topmødet d. 25. september 2015. Målene afspejler en ambitiøs udviklingsdagsorden, der skal vise os vejen til en mere bæredygtig udvikling — for både mennesker og for vores planet.
            </p>
            <p>
              Verdensmålene består af 17 konkrete mål og 169 delmål, som forpligter alle FN’s 193 medlemslande til at afskaffe fattigdom og sult, reducere uligheder, sikre god uddannelse og bedre sundhed til alle. Alle lande har deres egne udfordringer, og det er derfor nødvendigt, at vi løser udfordringerne i fællesskab.
            </p>
            <p>
              Noget af det centrale i dagsordenen er, at verdensmålene indebærer social, økonomisk og miljømæssig bæredygtighed, og forsikringen om at <span className="italic">no one will be left behind</span>.
            </p>
            <p>
              Målene trådte i kraft 1. januar 2016.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://www.verdensmaalene.dk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs om verdensmålene.dk</a>
              </li>
              <li>
                <a href="http://www.undp.org/content/undp/en/home/sustainable-development-goals.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">UN’s Development Programme</a>
              </li>
            </ul>
          </div>

          {/* ── KBH SDG Netværk ────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              KBH SDG Netværk
            </h2>
            <p>
              Københavns Kommune vedtog i oktober 2017 en handlingsplan for implementering af FN’s 17 verdensmål i København — som den første kommune i Danmark. Som svar på en utilstrækkelig inddragelse af det lokale civilsamfund i udarbejdelsen af handlingsplanen, tog FN-forbundet København i sommeren 2018 kontakt til en række mindre organisationer forankret i København. Formålet var at udarbejde en fælles skyggerapport på kommunens handlingsplan.
            </p>
            <p>
              17 lokale organisationer har fokuseret på et relevant verdensmål og givet deres anbefalinger til, hvordan der på lokalt plan kan sikres bedst mulig implementering af verdensmålene.
            </p>
            <p>
              Herefter blev KBH SDG Netværk etableret med det formål, at vi — med udgangspunkt i verdensmålene — fortsat arbejder sammen for en mere bæredygtig by i social, økonomisk og miljømæssig balance. Vores mål er bl.a. at sikre sammenhæng og overensstemmelse med verdensmålene i kommunens arbejde. Vi arbejder fortsat på at få målene implementeret i København.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="http://www.fnforbundet.dk/arkiv/nyheder-2018/civilsamfundet-efterlyser-inddragelse--dialog-med-koebenhavns-kommune" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs mere om civilsamfundets rolle</a>
              </li>
              <li>
                <a href="http://a21.dk/wp-content/uploads/2019/02/Skyggerapporten_2018_FINAL_LS05.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Læs skyggerapporten her (PDF)</a>
              </li>
            </ul>
          </div>

          {/* ── ESPDs rolle ───────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              ESPDs rolle
            </h2>
            <p>
              KBH SDG Netværk er en samling af lokale civilsamfundsorganisationer, der med verdensmålene som omdrejningspunkt kæmper for et bæredygtigt København. Vi står bag en fælles rapport om verdensmålene og bruger målene som springbræt til at fremme dialogen med beslutningstagere og andre, i håbet om at sikre en storby i social, økonomisk og miljømæssig balance.
            </p>
            <p>
              ESPD har bidraget til rapporten omkring verdensmål 5 og fortsætter med at kæmpe for ligestilling i København.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
