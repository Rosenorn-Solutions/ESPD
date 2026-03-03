import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PodcastSection } from "@/components/sections/PodcastSection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { Divider } from "@/components/ui/Divider";
import { ImageGallery } from "@/components/ui/ImageGallery";

export const metadata: Metadata = {
  title: "Home — Everyday Sexism Project Danmark",
  description:
    "Vores mission er at skabe en kulturændring, hvor hverdagssexisme er uacceptabel. ESPD er en frivilligdrevet NGO, der bekæmper og oplyser om hverdagssexisme.",
};

/*
 * Image paths – to be replaced by Sanity CMS content in production.
 */
const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "ESPD aktivitet" },
  { src: "/images/gallery-2.jpg", alt: "ESPD kampagne – SamtykkelovNU" },
  { src: "/images/gallery-3.jpg", alt: "ESPD event" },
  { src: "/images/gallery-4.png", alt: "ESPD frivillige" },
  { src: "/images/gallery-5.jpg", alt: "ESPD demonstration" },
  { src: "/images/gallery-6.jpg", alt: "ESPD arrangement" },
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
          <div className="flex items-center justify-center gap-0 whitespace-nowrap">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              <span className="text-dark-text">Velkommen til Everyday Sexism Project </span>
              <span className="text-accent-gold">Danmark</span>
            </h1>
            <div className="w-[120px] shrink-0 mb-4 self-start mt-auto">
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
      <HeroSection
        heading="Vores mission er at skabe en kulturændring, hvor hverdagssexisme er uacceptabel"
        backgroundClass="bg-primary-white text-black"
      >
        <div className="w-full max-w-[500px]">
          <ImageGallery images={galleryImages} />
        </div>
      </HeroSection>

      {/* ── Hvem er ESPD? ───────────────────────────────── */}
      <Divider />
      <ContentSection
        heading="Hvem er ESPD?"
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
      />

      {/* ── Podcast ─────────────────────────────────────── */}
      <PodcastSection
        imageSrc="/images/podcast-cover.jpeg"
        podcastLink="https://anchor.fm/espd"
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
