import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Roskilde Festival — Everyday Sexism Project Danmark",
  description:
    "ESPDs samarbejde med Roskilde Festival om sexisme og ligestilling.",
};

export default function RoskildeFestivalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Roskilde Festival
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Samarbejde" },
          { label: "Roskilde Festival" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Samarbejde ────────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">Samarbejde med Roskilde Festival</h2>
            <p>
              ESPDs samarbejde med Roskilde Festival startede i 2015, da vi oplevede et stigende antal beretninger om krænkelser og overgreb på festivalen. Roskilde Festival oplevede det samme og havde fået flere tilbagemeldinger fra vagtpersonalet om overgreb eller uønskede berøringer. Samarbejdet begyndte med fokus på at dokumentere problemer med sexisme og overgreb for at få indblik i problemets omfang og afklare, hvad der skulle gøres for at mindske det.
            </p>
          </div>

          {/* ── Orange Together ───────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">Orange Together</h2>
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
              &ldquo;Det er som om, når folk kommer på festivalen, så bliver det ligemeget med samtykke, fordi der er andre regler der gælder&rdquo;
              <br />
              <span className="not-italic text-sm">Oplevelse fra Roskilde Festival 2017</span>
            </blockquote>
            <p>
              Orange Together blev overskriften for Roskilde Festivals indsats for ’god Roskilde-stil’. I 2018 og 2019 var i alt 120 frivillige fra seks forskellige organisationer afsted på festivalen for at lave dialogarbejde og tale med gæsterne om grænseoverskridende adfærd, overgreb og chikane.
            </p>
            <p>
              Via et dialogspil inddrog vi festivaldeltagerne i en snak om respekt for fællesskabet og andres grænser. Orange Together handler om at understøtte frirummet og have respekt for hinanden, selvom man er afsted for at glemme hverdagens forpligtelser. Fokus er på det unikke fællesskab, der findes på Roskilde Festival — et fællesskab baseret på tillid til, at alle deltagere ønsker at bakke op om og passe på fællesskabet.
            </p>
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
              &ldquo;Vi vil ikke acceptere, at kommentarer som ’Hey, det’ jo Roskilde’ bruges som undskyldning for at overskride andres grænser&rdquo;
              <br />
              <span className="not-italic text-sm">Christina Bilde, talskvinde Roskilde Festival, oktober 2018</span>
            </blockquote>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://www.roskilde-festival.dk/media/1513/rf_orangetogether_rapport.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Orange Together rapport 2018 (PDF)</a>
              </li>
              <li>
                <a href="https://www.roskilde-festival.dk/media/2926/rf_orangetogether_rapport_2019_web.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Orange Together rapport 2019 (PDF)</a>
              </li>
              <li>
                <a href="https://www.sdu.dk/da/om_sdu/institutter_centre/i_miljo_og_erhvervsoekonomi/nyhedime/ny+forskning+undersoeger+tryghed+og+graenseoverskridende+adfaerd+paa+roskilde+festival" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">SDU-undersøgelse om tryghed og grænseoverskridende adfærd</a>
              </li>
              <li>
                <a href="https://www.facebook.com/SexismeRF19/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">SexismeRF19 på Facebook</a>
              </li>
              <li>
                <a href="https://presscloud.com/csp/vocast/message.csp?KEY=802879092900260" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">Pressemeddelelse: Health & Safety Innovation Award 2019</a>
              </li>
            </ul>
          </div>

          {/* ── Dialogarbejde og kortspil ─────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">Dialogarbejde og kortspil</h2>
            <p>
              Under festivalerne har ESPD haft mange gode samtaler om samtykke, svære flirtesituationer, kønsstereotyper og grænseoverskridende adfærd. Festivalgæsterne vil meget gerne tale om emner som flirt og samtykke, samt krænkende og grænseoverskridende adfærd.
            </p>
            <p>
              Kortspillet — Exploring lols, lust, love & limits — var et centralt element i dialogarbejdet og lagde op til samtaler baseret på situationer, som de fleste kan genkende. Det gav anledning til at tale om, hvorfor man kan være bange for at spørge, hvordan man ved om den anden har lyst til sex, og hvornår man egentlig skal sikre sig, at den anden (stadig) har lyst.
            </p>
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
              &ldquo;Hvis der siges stop eller nej, ville jeg ønske folk greb ind&rdquo;
              <br />
              <span className="not-italic text-sm">Citat fra rapporten Orange Together</span>
            </blockquote>
          </div>

          {/* ── Hashtag og afslutning ─────────────────────── */}
          <div className="space-y-4">
            <p>
              Roskilde Festival og ESPD lancerede hashtagget <a href="https://www.facebook.com/SexismeRF19/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">#SexismeRF15</a> for at sætte fokus på seksuel chikane på festivalen. Det blev brugt til at vise, at sexisme ikke er acceptabelt på Roskilde Festival, men også som led i en kortlægning af problemets omfang. De indsamlede historier har været med til at belyse særlige situationer, hvor seksuel chikane opstår.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
