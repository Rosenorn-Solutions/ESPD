import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "ESPDs Flirteworkshop — Everyday Sexism Project Danmark",
  description:
    "Læs om ESPDs flirteworkshop om grænser, samtykke og respektfuld flirt.",
};

export default function FlirteworkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            ESPDs Flirteworkshop
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Aktiviteter" },
          { label: "ESPDs Flirteworkshop" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-6">

          <p>
            Er du stødt på påstande om, at man ikke kan flirte mere efter #MeToo? Har du hørt
            nogen sige, at &lsquo;man ikke må noget mere&rsquo;, når det kommer til flirteri?
          </p>

          <p>
            Så er der hjælp at hente i ESPDs flirteworkshop. Er du nysgerrig på, hvad konceptet
            indeholder, så læs med her.
          </p>

          <p>
            Vores flirteworkshop er et koncept, vi selv har udviklet, hvor formålet er at skabe
            dialog om, hvad der udgør en god flirt og hvad der udgør en ikke-så-god flirt. Vi
            har efterhånden holdt mange flirteworkshops over hele landet — blandt andet på
            Roskilde Festival, på Talk Town, samt i Aarhus på Institut for (X).
          </p>

          <p>
            Vi starter med at inddele folk i mindre grupper, og moderatoren begynder herefter at
            beskrive et flirtescenarie. I gruppen diskuterer deltagerne, hvordan situationen
            bedst gribes an, og finder frem til det bedste bud på, hvordan man flirter på den
            sjoveste og bedste måde uden at overskride en andens grænser. På samme tid
            diskuteres, hvad der er en dårlig fremgangsmåde — altså hvordan undgår man at kikse
            en flirt?
          </p>

          <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
            Et eksempel på et scenarie kan være følgende: &ldquo;Det er lykkedes dig at score
            et nummer fra én, du har mødt i baren, og du vil gerne invitere på en date — hvad
            gør du? Hvad gør du ikke?&rdquo;
          </blockquote>

          <p>
            Du og din gruppe vil blive præsenteret for en række scenarier, tilpasset jeres
            gruppe. Mellem hver runde udpeger moderatoren den gruppe, der har det bedste,
            sjoveste eller bedst begrundede svar, og denne gruppe får tildelt et point. I
            slutningen af flirteworkshoppen kåres et vinderhold.
          </p>

          <p>
            Pointen med flirteworkshoppen er at indgå i en dialog om flirt og reflektere over,
            hvordan man bærer sig bedst ad — med humor in mente hele vejen.
          </p>

          <p>
            Udgangspunktet er, at flirt er sjovt, skønt og et mål i sig selv. Når man skaber en
            positiv kontakt, får begge parter det godt med sig selv. Workshoppen hjælper med til
            at tale om det gode udgangspunkt for flirt.
          </p>

          <p>
            <a
              href="/kontakt/kontakt-os"
              className="underline hover:text-accent-gold transition-colors"
            >
              Kontakt os
            </a>
            , hvis du afholder et arrangement, hvor flirteworkshoppen vil være oplagt.
          </p>

          <p>
            <a
              href="https://politiken.dk/kultur/musik/roskildefestival/art6620388/%C2%BBAlts%C3%A5-hvorn%C3%A5r-har-%E2%80%99god-r%C3%B8v%E2%80%99-sidst-virket-som-scorereplik%C2%AB"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent-gold transition-colors"
            >
              I 2018 var Politiken med ESPD til flirteworkshop på Roskilde Festival — læs
              artiklen her
            </a>
            .
          </p>

        </div>
      </section>
    </>
  );
}
