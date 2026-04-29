import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import groupWorkshopImage from "./flirteworkshop-group.jpg";
import heroImage from "./flirteworkshop-hero.jpg";

export const metadata: Metadata = {
  title: "ESPDs Flirteworkshop — Everyday Sexism Project Danmark",
  description:
    "Læs om ESPDs flirteworkshop om grænser, samtykke og respektfuld flirt.",
};

const workshopVideoUrl = "https://player.vimeo.com/video/360472110?autopause=0&loop=1&title=0&portrait=0&byline=1";

export default function FlirteworkshopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-white text-black">
        <Image
          src={heroImage}
          alt="Deltagere til ESPDs flirteworkshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-white/50" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[420px] max-w-[1200px] flex-col items-center justify-center px-4 py-16 text-center md:min-h-[560px] md:py-24">
          <div className="max-w-[780px] rounded-sm border border-white/20 bg-white/45 px-6 py-6 backdrop-blur-sm md:px-8 md:py-8">
            <div className="space-y-4 font-body leading-relaxed text-black">
              <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-black md:text-5xl">
                ESPDs Flirteworkshop
              </h1>

              <p>
                Er du stødt på påstande om, at man ikke kan flirte mere efter #MeToo? Har du
                hørt nogen sige, at &lsquo;man ikke må noget mere&rsquo;, når det kommer til
                flirteri?
              </p>

              <p>
                Så er der hjælp at hente i ESPDs flirteworkshop. Er du nysgerrig på, hvad
                konceptet indeholder, så læs med her.
              </p>
            </div>
          </div>
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
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:items-start">
            <div className="space-y-6 font-body leading-relaxed text-body-text">
              <p>
                Vores flirteworkshop er et koncept, vi selv har udviklet, hvor formålet er at
                skabe dialog om, hvad der udgør en god flirt og hvad der udgør en ikke-så-god
                flirt. Vi har efterhånden holdt mange flirteworkshops over hele landet — blandt
                andet på Roskilde Festival, på Talk Town, samt i Aarhus på Institut for (X).
              </p>

              <p>
                Vi starter med at inddele folk i mindre grupper, og moderatoren begynder
                herefter at beskrive et flirtescenarie. I gruppen diskuterer deltagerne, hvordan
                situationen bedst gribes an, og finder frem til det bedste bud på, hvordan man
                flirter på den sjoveste og bedste måde uden at overskride en andens grænser. På
                samme tid diskuteres, hvad der er en dårlig fremgangsmåde — altså hvordan
                undgår man at kikse en flirt?
              </p>
            </div>

            <blockquote className="border-l-4 border-accent-gold pl-4 font-body italic leading-relaxed text-dark-text md:self-center">
              Et eksempel på et scenarie kan være følgende: &ldquo;Det er lykkedes dig at score
              et nummer fra én, du har mødt i baren, og du vil gerne invitere på en date —
              hvad gør du? Hvad gør du ikke?&rdquo;
            </blockquote>
          </div>

          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:items-start">
            <div className="overflow-hidden rounded-sm bg-primary-black shadow-sm">
              <div className="relative aspect-video">
                <iframe
                  src={workshopVideoUrl}
                  title="Flirteworkshop på Roskilde Festival"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
            </div>

            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <p>
                Se filmen fra Roskilde Festival 2019, hvor vi havde fornøjelsen af at holde
                flirteworkshop med Roskilde Festival Højskole.
              </p>
              <p>
                Du og din gruppe vil blive præsenteret for en række scenarier, tilpasset jeres
                gruppe. Mellem hver runde udpeger moderatoren den gruppe, der har det bedste,
                sjoveste eller bedst begrundede svar, og denne gruppe får tildelt et point. I
                slutningen af flirteworkshoppen kåres et vinderhold.
              </p>
              <p>
                Pointen med flirteworkshoppen er at indgå i en dialog om flirt og reflektere
                over, hvordan man bærer sig bedst ad — med humor in mente hele vejen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <figure className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={groupWorkshopImage}
                  alt="Deltagere i ESPDs flirteworkshop"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>

            <div className="order-1 space-y-6 font-body leading-relaxed text-body-text lg:order-2">
              <p>
                Udgangspunktet er, at flirt er sjovt, skønt og et mål i sig selv. Når man
                skaber en positiv kontakt, får begge parter det godt med sig selv. Workshoppen
                hjælper med til at tale om det gode udgangspunkt for flirt.
              </p>

              <p>
                <Link
                  href="/kontakt/kontakt-os"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  Kontakt os
                </Link>
                , hvis du afholder et arrangement, hvor flirteworkshoppen vil være oplagt.
              </p>

              <p>
                <a
                  href="https://politiken.dk/kultur/musik/roskildefestival/art6620388/%C2%BBAlts%C3%A5-hvorn%C3%A5r-har-%E2%80%99god-r%C3%B8v%E2%80%99-sidst-virket-som-scorereplik%C2%AB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  I 2018 var Politiken med ESPD til flirteworkshop på Roskilde Festival — læs
                  artiklen her
                </a>
                .
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
