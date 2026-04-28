import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import fighterImage from "./oplaeg-fighter.jpg";
import heroImage from "./oplaeg-hero.jpg";
import samtykkelovnuImage from "./oplaeg-samtykkelovnu.jpg";
import swayImageOne from "./oplaeg-sway-1.jpg";
import swayImageTwo from "./oplaeg-sway-2.jpg";
import talkTownGalleryOne from "./oplaeg-talktown-1.jpg";
import talkTownGalleryTwo from "./oplaeg-talktown-2.jpg";
import talkTownGalleryThree from "./oplaeg-talktown-3.jpg";
import talkTownMainImage from "./oplaeg-talktown-main.jpg";
import talkTownThumb from "./oplaeg-talktown-thumb.jpg";
import udstillingImage from "./oplaeg-udstilling.jpg";
import vinterfestImageOne from "./oplaeg-vinterfest-1.jpeg";
import vinterfestImageTwo from "./oplaeg-vinterfest-2.jpeg";
import workshopsImage from "./oplaeg-workshops.jpg";

export const metadata: Metadata = {
  title: "Oplæg og arrangementer — Everyday Sexism Project Danmark",
  description:
    "ESPD holder oplæg og arrangementer om sexisme, samtykke og kønnet vold.",
};

export default function OplaegPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={heroImage}
          alt="ESPD-stand ved arrangement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/50" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[300px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[380px] md:py-24">
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
            Oplæg og arrangementer
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Aktiviteter" },
          { label: "Oplæg og arrangementer" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          {/* ── Intro ──────────────────────────────────────── */}
          <div className="space-y-4 font-body leading-relaxed text-body-text">
            <p>
              En del af ESPDs arbejde med at bekæmpe og oplyse om hverdagssexisme er at afholde
              og deltage i paneldebatter, workshops, oplæg og andre lignende arrangementer med
              emner som fx samtykke, sexisme og voldtægtskultur. Vi mener, at vejen til
              oplysning og forståelse går gennem dialog, og derfor gør vi vores bedste for at
              deltage i alle de aktiviteter, vi bliver indbudt til, og desuden facilitere,
              arrangere og deltage i begivenheder, demonstrationer og aktioner, når vi har
              mulighed og ressourcer.
            </p>
            <p>
              Har du et arrangement, hvor det vil være relevant med et indslag fra Everyday
              Sexism Project Danmark?{" "}
              <a
                href="/kontakt/kontakt-os"
                className="underline transition-colors hover:text-accent-gold"
              >
                Kontakt os
              </a>{" "}
              — så finder vi ud af mulighederne for samarbejde.
            </p>
          </div>

          {/* ── Oplæg og workshops ─────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Oplæg og workshops
              </h2>
              <p>
                ESPD holder løbende oplæg og workshops om fx sexisme, flirt, samtykke og
                kønnet vold — inviteret af politiske ungdomsorganisationer, højskoler,
                gymnasier, på Talk Town m.fl. Senest har vi afholdt vores nye
                bystander-workshop &ldquo;Everyday Sexism Fighter&rdquo;, hvor man kan få idéer
                til at bekæmpe sexisme i hverdagen.
              </p>
              <p>
                Hvis du, din organisation, arbejdsplads eller skole er interesseret i at få os
                ud, så{" "}
                <a
                  href="/kontakt/kontakt-os"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  skriv til os
                </a>
                , så kan vi finde ud af, hvad der passer til jer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm sm:col-span-2">
                <Image
                  src={workshopsImage}
                  alt="Zen og Anja til oplæg"
                  width={1024}
                  height={844}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm sm:col-span-2">
                <Image
                  src={fighterImage}
                  alt="Everyday Sexism Fighter-workshop"
                  width={1024}
                  height={540}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Udstilling ─────────────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <figure className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={udstillingImage}
                  alt="Udstillingen Fra voldtægtskultur til samtykkekultur på KØN"
                  width={1024}
                  height={606}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>

            <div className="order-1 space-y-4 font-body leading-relaxed text-body-text lg:order-2">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Udstilling: Fra voldtægtskultur til samtykkekultur
              </h2>
              <p>
                I august 2021 holdt ESPD udstillingen &ldquo;Fra voldtægtskultur til
                samtykkekultur&rdquo; i Aarhus på KØN. I den forbindelse holdt vi også en række
                talks med eksperter i alt fra digitale krænkelser til racisme og #MeToo, samt
                en talk med Laura Bates — stifter af The Everyday Sexism Project — om hendes
                bog &ldquo;Men who hate Women&rdquo;.
              </p>
              <p>
                I januar/februar 2022 flyttede udstillingen ind i Sex og Samfunds lokaler i
                København. Står du med et ledigt lokale til vores udstilling, så{" "}
                <a
                  href="/kontakt/kontakt-os"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  kontakt os endelig
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── SamtykkelovNu demo ─────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                SamtykkelovNU-demonstration
              </h2>
              <p>
                Den 14. august 2020 arrangerede ESPD på initiativ med Kirstine Holst en stor
                demonstration i København med tusindvis af deltagere og talere, der
                repræsenterede forskellige offerperspektiver — fra &ldquo;almindelige&rdquo;
                ofre og LGBTQ+ personer til racialiserede, tykfobiperspektiv, børn og mænd.
              </p>
            </div>

            <figure>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={samtykkelovnuImage}
                  alt="SamtykkelovNU-demonstration"
                  width={1024}
                  height={668}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>
          </div>

          {/* ── Åbent arrangement på Sway ──────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={swayImageOne}
                  alt="Arrangement på Sway i Aarhus"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={swayImageTwo}
                  alt="Kunstnerisk indslag på Sway"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Åbent arrangement på Sway i Aarhus
              </h2>
              <p>
                I anledning af Kvindernes Internationale Kampdag den 8. marts 2020 arrangerede
                ESPD en fejring i Aarhus med oplæg, burlesque, Spoken Word, musik og andre
                kunstneriske indslag. Aftenen blev sluttet af med en safer space-fest med
                feministisk DJ.
              </p>
              <p>
                Forinden dette deltog ESPD i workshop om samtykke for børn og unge på
                Kvindemuseet og gik med i Equality March under temaet &ldquo;Feministiske
                Fremtider&rdquo;.
              </p>
              <p>
                Vores 8. marts-fest skulle give et kunstnerisk bud på samtykke, kvindekamp og
                sexisme og åbne op for en diskussion af, hvad det betyder i Danmark i dag.
                Fejringen foregik på baren Sway med Mette Schak Dahlmann (også kendt som Mette
                Murer) som konferencier.
              </p>
              <p>
                ESPD modtog 4.000 kr. i støtte fra puljen PUKK, som gav fire unge kunstnere
                mulighed for at skabe kunstværker under temaet &ldquo;samtykke&rdquo;. De fire
                kunstnere var Clara Breum, Laura Laura, Anna-Maria Sote Dueholm og Kamar
                Oueiti. Helene Thyrsted holdt et oplæg om sin kamp mod tykfobi, Isabel Donen
                sang nummeret &ldquo;Victory&rdquo;, og BurlyQueens lavede et burlesque show.
                Sidsel Lieknins Vestertjele sang &ldquo;Ikke din skyld&rdquo;, dedikeret til
                ESPD.
              </p>
            </div>
          </div>

          {/* ── Talk Town ──────────────────────────────────── */}
          <div className="mt-12 space-y-6 border-t border-light-gray pt-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:items-start">
              <div className="space-y-4 font-body leading-relaxed text-body-text">
                <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                  ESPD til Talk Town
                </h2>
                <p>
                  ESPD har deltaget på{" "}
                  <a
                    href="https://talktown.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-accent-gold"
                  >
                    Talk Town
                  </a>{" "}
                  rundt om i landet, flere gange med hjælp fra{" "}
                  <a
                    href="https://kvinderaadet.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-accent-gold"
                  >
                    Kvinderådet
                  </a>
                  . Talk Town er en feministisk debatfestival, der finder sted årligt i Aarhus
                  og København. Vi er meget glade for samarbejdet med Talk Town, som har givet
                  os mulighed for at afholde flirteworkshops, paneldebatter og oplæg om sexisme
                  for et bredt og deltagende publikum.
                </p>
                <p className="text-sm uppercase tracking-[0.12em] text-dark-text">
                  Billeder fra Talk Town i Roskilde, 22. februar 2020
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-[96px_minmax(0,1fr)]">
                <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                  <Image
                    src={talkTownThumb}
                    alt="Talk Town-logo"
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                  <Image
                    src={talkTownMainImage}
                    alt="ESPD til Talk Town"
                    width={1600}
                    height={1200}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={talkTownGalleryOne}
                  alt="Talk Town-billede 1"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={talkTownGalleryTwo}
                  alt="Talk Town-billede 2"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={talkTownGalleryThree}
                  alt="Talk Town-billede 3"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── Roskilde Festival Vinterfest ───────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={vinterfestImageOne}
                  alt="Roskilde Festival Vinterfest 2020"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={vinterfestImageTwo}
                  alt="ESPD på Roskilde Festivals Vinterfest"
                  width={1024}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Roskilde Festival Vinterfest 2020: Sexisme og sprog
              </h2>
              <p>
                ESPD havde i januar fornøjelsen af at deltage i Roskilde Festivals Vinterfest.
                Roskilde Festival havde fokus på &ldquo;frirummets muligheder og
                dilemmaer&rdquo;, som vi også gav vores perspektiv på. Vi er meget begejstrede
                og glade for vores samarbejde med Roskilde Festival og takker dem for at
                invitere os med.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
