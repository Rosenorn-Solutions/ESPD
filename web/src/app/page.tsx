import type { Metadata } from "next";

import Image from "next/image";

import { ContentSection } from "@/components/sections/ContentSection";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { Divider } from "@/components/ui/Divider";

import armbandsImage from "../../media/armbands.jpg";
import consentNowImage from "../../media/concentnow.jpg";
import everydaySexismImage from "../../media/everydaysex.jpeg";
import resistImage from "../../media/resist.jpg";
import samlingImage from "../../media/samling.jpg";
import samtykkelovImage from "../../media/samtykkelov.jpg";

export const metadata: Metadata = {
  title: "Home — Everyday Sexism Project Danmark",
  description:
    "Vores mission er at skabe en kulturændring, hvor hverdagssexisme er uacceptabel. ESPD er en frivilligdrevet NGO, der bekæmper og oplyser om hverdagssexisme.",
};

const missionImages = [
  { src: armbandsImage, alt: "ESPD armbånd" },
  { src: consentNowImage, alt: "Samtykke nu kampagne" },
  { src: everydaySexismImage, alt: "Everyday Sexism motiv" },
  { src: resistImage, alt: "Resist motiv" },
  { src: samlingImage, alt: "ESPD samling" },
  { src: samtykkelovImage, alt: "Samtykkelov kampagne" },
];

const meetUsCards = [
  {
    title: "Frivilligcafé for nye interesserede",
    imageSrc: "/images/card-cafe.jpg",
    imageAlt: "Frivilligcafé",
    description:
      "ESPD holder jævnligt frivilligcafé i Aarhus og nogle gange København, skriv til espdanmark@gmail.com, hvis du vil være frivillig!",
  },
  {
    title: "ESPD Oplæg og Workshops",
    imageSrc: "/images/card-workshop.jpg",
    imageAlt: "Oplæg og Workshops",
    description:
      "ESPD holder oplæg om bla. sexisme, samtykke og kønnet vold, samt workshops om flirt, grænser og hvordan man bliver en Everyday Sexism Fighter.",
  },
  {
    title: "Demoer og Events",
    imageSrc: "/images/card-demo.jpg",
    imageAlt: "Demoer og Events",
    description:
      "Du kan også møde ESPD ved demonstrationer, talks eller andre events, både i København og Aarhus. Hold øje med nyt på vores sociale medier!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Welcome heading ─────────────────────────────── */}
      <section className="bg-white">
        <div className="px-4 py-10">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-3 text-center">
            <h1 className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight">
              <span className="text-dark-text">Velkommen til Everyday Sexism Project </span>
              <span className="text-accent-gold">Danmark</span>
            </h1>
            <div className="w-[clamp(70px,10vw,120px)] shrink-0">
              <Image
                src="/images/espd-logo-front.png"
                alt="ESPD logo"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission section with cloud divider ──────────── */}
      <section className="bg-primary-white text-primary-black">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-16 md:py-24 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="font-kamal text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Vores mission er at skabe en kulturændring, hvor hverdagssexisme er uacceptabel
            </h2>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {missionImages.map((image) => (
                <div
                  key={image.alt}
                  className="relative aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hvem er ESPD? ───────────────────────────────── */}
      <Divider />
      <ContentSection
        heading="Hvem er ESPD?"
        headingAlign="left"
        imageSrc="/images/about-1.jpg"
        imageAlt="ESPD frivillige"
        imagePosition="left"
      >
        <p>
          ESPD er en frivilligdrevet NGO, der bekæmper og oplyser om
          hverdagssexisme.
        </p>
        <p>
          Målet med foreningen er at bekæmpe den sexisme, som primært kvinder
          oplever, dvs. kønsrelateret undertrykkelse og negativ
          forskelsbehandling af forskellig art.
        </p>
      </ContentSection>

      <ContentSection
        imageSrc="/images/about-2.jpg"
        imageAlt="ESPD demonstration"
        imagePosition="right"
      >
        <p>
          ESPD har fokus på eksistensen og udbredelsen af sexisme og på oplysning
          om, hvordan sexisme bekæmpes.
        </p>
        <p>
          Vi deltager bl.a. i den offentlige debat i medierne, holder oplæg og
          samarbejder med forskellige organisationer.
        </p>
        <p>
          I alt vores arbejde, har vi fokus både på oplysning og
          løsningsforslag.
        </p>
      </ContentSection>

      {/* ── Hvor kan du møde os? ────────────────────────── */}
      <Divider />
      <CardGrid heading="Hvor kan du møde os?" cards={meetUsCards} />

      {/* ── Følg os + Social feeds ──────────────────────── */}
      <Divider />
      <SocialFeedSection
        heading="Følg os her"
        description="I det daglige arbejder vi primært med vidensdeling fra vores facebookside og andre sociale medier. Vi viser eksempler på alt, fra stereotype fremstillinger af kvinder i medier og reklamer, til faglig marginalisering på studiet og jobbet, og til overgreb og partnervold."
        podcastLink="https://anchor.fm/espd"
        podcastImageSrc="/images/podcast-cover.jpeg"
      />

      {/* ── CTA: Tell your story ────────────────────────── */}
      <CTASection
        heading="Fortæl os din oplevelse med hverdagssexisme"
        description="En vigtig del af at opnå vores formål, er blandt andet ved at indsamle oplevelser. Det gør vi for at synliggøre hverdagssexisme, og vi opfordrer derfor dig til at bidrage med din historie. Vi indsamler alle oplevelser – de små og de store."
        buttonText="Del din historie"
        buttonLink="https://everydaysexism.com/country/dk"
      />
    </>
  );
}
