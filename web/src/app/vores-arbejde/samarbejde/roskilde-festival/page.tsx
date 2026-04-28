import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import bannerImageUrl from "./roskildebanner.jpg";
import closingImageOneUrl from "./roskildeclosing.jpg";
import closingImageTwoUrl from "./roskilde7.jpg";
import dialogImageUrl from "./roskildedialog.jpg";
import galleryImageOneUrl from "./roskilde3.jpg";
import galleryImageThreeUrl from "./roskilde4.jpg";
import galleryImageTwoUrl from "./roskilde2.jpg";
import introImageUrl from "./roskilde1.jpg";

export const metadata: Metadata = {
  title: "Roskilde Festival — Everyday Sexism Project Danmark",
  description:
    "ESPDs samarbejde med Roskilde Festival om sexisme og ligestilling.",
};

const orangeTogetherGraphicUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/04/OrangeTogether-01-1024x387.png";

const orangeTogetherPhotoUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/04/roskilde03.jpg";

const firstVideoUrl =
  "https://player.vimeo.com/video/345691431?color&autopause=0&loop=1&muted=0&title=0&portrait=0&byline=0&h=3fbc1187f9#t=";

const secondVideoUrl =
  "https://player.vimeo.com/video/345691492?color&autopause=0&loop=1&muted=0&title=0&portrait=0&byline=0&h=f45ec6c5c5#t=";

export default function RoskildeFestivalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerImageUrl}
          alt="Festivalgæster på Roskilde Festival"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/45" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[360px] md:py-24">
          <div className="inline-flex bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase text-accent-gold md:text-3xl">
              Roskilde Festival
            </h1>
          </div>
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
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          {/* ── Samarbejde ────────────────────────────────── */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Samarbejde med Roskilde Festival
              </h2>
              <p>
                ESPDs samarbejde med Roskilde Festival startede i 2015, da vi oplevede et
                stigende antal beretninger om krænkelser og overgreb på festivalen. Roskilde
                Festival oplevede det samme og havde fået flere tilbagemeldinger fra
                vagtpersonalet om overgreb eller uønskede berøringer. Samarbejdet begyndte med
                fokus på at dokumentere problemer med sexisme og overgreb for at få indblik i
                problemets omfang og afklare, hvad der skulle gøres for at mindske det.
              </p>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={introImageUrl}
                  alt="ESPD på Roskilde Festival"
                  width={768}
                  height={512}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Alle fotos: Søren Østerlund
              </figcaption>
            </figure>
          </div>

          {/* ── Orange Together ───────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Orange Together
              </h2>
              <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
                &ldquo;Det er som om, når folk kommer på festivalen, så bliver det ligemeget med samtykke, fordi der er andre regler der gælder&rdquo;
                <br />
                <span className="text-sm not-italic">Oplevelse fra Roskilde Festival 2017</span>
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
                <span className="text-sm not-italic">Christina Bilde, talskvinde Roskilde Festival, oktober 2018</span>
              </blockquote>
              <ul className="list-disc space-y-2 pl-6">
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

            <div className="space-y-6">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={orangeTogetherGraphicUrl}
                  alt="Orange Together grafik"
                  width={1024}
                  height={387}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={orangeTogetherPhotoUrl}
                  alt="Orange Together på Roskilde Festival"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-light-gray pt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src={galleryImageOneUrl}
                alt="Roskilde Festival galleri 1"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src={galleryImageTwoUrl}
                alt="Roskilde Festival galleri 2"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src={galleryImageThreeUrl}
                alt="Roskilde Festival galleri 3"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ── Dialogarbejde og kortspil ─────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Dialogarbejde og kortspil
              </h2>
              <p>
                Under festivalerne har ESPD haft mange gode samtaler om samtykke, svære flirtesituationer, kønsstereotyper og grænseoverskridende adfærd. Festivalgæsterne vil meget gerne tale om emner som flirt og samtykke, samt krænkende og grænseoverskridende adfærd.
              </p>
              <p>
                Kortspillet — Exploring lols, lust, love & limits — var et centralt element i dialogarbejdet og lagde op til samtaler baseret på situationer, som de fleste kan genkende. Det gav anledning til at tale om, hvorfor man kan være bange for at spørge, hvordan man ved om den anden har lyst til sex, og hvornår man egentlig skal sikre sig, at den anden (stadig) har lyst.
              </p>
              <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
                &ldquo;Hvis der siges stop eller nej, ville jeg ønske folk greb ind&rdquo;
                <br />
                <span className="text-sm not-italic">Citat fra rapporten Orange Together</span>
              </blockquote>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={dialogImageUrl}
                  alt="Dialogarbejde på Roskilde Festival"
                  width={971}
                  height={765}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>
          </div>

          <div className="mt-12 grid gap-8 border-t border-light-gray pt-12 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="aspect-video overflow-hidden rounded-sm bg-primary-black shadow-sm">
                <iframe
                  src={firstVideoUrl}
                  title="Vimeo videoafspiller 1"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Video: Tim Panduro
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-video overflow-hidden rounded-sm bg-primary-black shadow-sm">
                <iframe
                  src={secondVideoUrl}
                  title="Vimeo videoafspiller 2"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Video: Tim Panduro
              </p>
            </div>
          </div>

          {/* ── Hashtag og afslutning ─────────────────────── */}
          <div className="mt-12 grid gap-8 border-t border-light-gray pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <p>
                Roskilde Festival og ESPD lancerede hashtagget <a href="https://www.facebook.com/SexismeRF19/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">#SexismeRF15</a> for at sætte fokus på seksuel chikane på festivalen. Det blev brugt til at vise, at sexisme ikke er acceptabelt på Roskilde Festival, men også som led i en kortlægning af problemets omfang. De indsamlede historier har været med til at belyse særlige situationer, hvor seksuel chikane opstår.
              </p>
              <p>
                Følg vores aktiviteter fra Roskilde Festival på Facebooksiden <a href="https://www.facebook.com/SexismeRF19/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-gold transition-colors">SexismeRF19</a>.
              </p>
            </div>

            <div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={closingImageOneUrl}
                  alt="Roskilde Festival afslutningsfoto 1"
                  width={455}
                  height={519}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
            <Image
              src={closingImageTwoUrl}
              alt="Roskilde Festival afslutningsfoto 2"
              width={1024}
              height={683}
              className="h-auto w-full object-cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}
