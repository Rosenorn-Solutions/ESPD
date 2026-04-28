import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om ESPD — Everyday Sexism Project Danmark",
  description:
    "Læs om Everyday Sexism Project Danmarks formål, mission og baggrund.",
};

const bannerImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/06/Sk%C3%A6rmbillede-2019-06-12-kl.-14.20.18-e1560342075308.png";

const historyImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/03/IMG_2472-e1554049740231.jpg";

export default function OmEspdPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerImageUrl}
          alt="Frivillige fra ESPD ved et arrangement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/40" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[360px] md:py-24">
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
            Om ESPD
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Hvem er vi?" },
          { label: "Om ESPD" },
        ]}
      />

      {/* ── Baggrund og historie ──────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.9fr)] md:items-start md:py-16">
          <div className="space-y-6 font-body leading-relaxed text-body-text">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              Baggrund og historie
            </h2>

            <p>
              The Everyday Sexism Project blev startet af Laura Bates i april 2012, efter at hun
              gentagne gange på en uge havde været udsat for uønskede seksuelle kommentarer,
              tilråb og befamlinger. I stedet for at tie om det, som hun plejede og fortsat
              acceptere det som et vilkår for hverdagen som kvinde, begyndte hun at tale om sine
              oplevelser.
            </p>

            <p>
              Da Bates først begyndte at fortælle om sine oplevelser med hverdagssexisme,
              opdagede hun, at der var overvældende mange andre kvinder, der havde mange lignende
              oplevelser. Hun oprettede derfor et website — The Everyday Sexism Project — et
              åbent forum for alle, der har lyst til at dele deres oplevelser.
            </p>

            <p>
              Everyday Sexism Project Danmark (ESPD) er en selvstændig afdeling af det engelske
              projekt. ESPD blev stiftet i august 2013 af projektleder og journalist Irene
              Manteufel, i samarbejde med Dansk Kvindesamfund.
            </p>

            <p>
              Den danske afdeling fik sit eget website til indsamling af kvinders oplevelser af
              hverdagssexisme, som fra starten har været projektets kerne. Projektet blev en stor
              succes og en afgørende del af den nye opblomstring af feminisme og aktivisme i
              Danmark. Derfor blev projektet i september 2014 tildelt Suzanne Gieses Mindelegat,
              for at have &ldquo;skabt et totalt kursskifte i den offentlige samtale, når det
              gælder sexisme&rdquo;.
            </p>

            <p>
              I november 2014 blev Everyday Sexism Project Danmark delt i to selvstændige
              enheder, og ESPD blev et selvstændigt projekt — og i foråret 2015 etableret som
              forening.
            </p>
          </div>

          <div className="md:sticky md:top-6">
            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src={historyImageUrl}
                alt="Aktivister fra ESPD til et arrangement"
                width={510}
                height={535}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPD i dag ────────────────────────────────────── */}
      <section className="bg-white border-t border-light-gray">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.25fr)] md:items-start md:py-16">
          <div className="order-2 space-y-6 font-body leading-relaxed text-body-text md:order-2">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              ESPD i dag
            </h2>

            <p>
              I dag er Everyday Sexism Project Danmark en NGO, som drives udelukkende af
              frivillige kræfter. ESPD arbejder stadig på at dokumentere problemerne med
              sexisme, der hele tiden viser sig på nye måder og forskellige platforme. Formålet
              med at samle oplevelser er dels at synliggøre eksistensen af sexisme, og dels at
              skabe et rum, hvor man ikke skal føle sig alene med sine oplevelser.
            </p>

            <p>
              Vi arbejder primært med sexisme rettet mod kvinder og piger. Det gør vi, fordi det
              engelske projekt er sådan indrettet, men også fordi kvinder — både historisk set
              og i dag — er dem, der overvejende udsættes for sexisme. Det betyder ikke, at vi
              ikke anerkender, at andre køn kan opleve diskrimination, og derfor arbejder vi
              også meget med kønsstereotyper, som vi mener påvirker alle køn på en
              uhensigtsmæssig måde.
            </p>

            <p>
              Den strukturelle sexisme ser vi i alle lag — fra tidlig opdeling af piger og
              drenge, hvilke aktiviteter og farver der tilhører et bestemt køn, til
              &lsquo;uskyldige&rsquo; vittigheder om kvinder, forskelsbehandling på arbejdspladser
              og til grovere tilfælde, hvor der sker overgreb, voldtægt og, i værste tilfælde,
              mord.
            </p>

            <p>
              I dag er foreningen meget mere end indsamling af oplevelser. ESPD deltager i, og
              iværksætter en række forskellige aktiviteter, som har til formål at oplyse om og
              bekæmpe sexisme. Vi deltager i alt fra dialog med beslutningstagere, til debat i
              medierne, foredrag og oplæg, demonstrationer og høringssvar på lovgivning.
            </p>

            <p>
              Derudover deltager ESPD i fora, der beskæftiger sig med kønnet vold, arbejder med
              unge mennesker om samtykke og grænser, og meget mere.
            </p>

            <p>
              ESPD arbejder primært og i det daglige fra Facebook og Instagram, for gennem
              oplysning og formidling at nå vores mål: At skabe en kulturændring, hvor
              hverdagssexisme ikke er acceptabel.
            </p>
          </div>

          <div className="order-1 md:order-1 md:sticky md:top-6">
            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src="/images/about-2.jpg"
                alt="Demonstration med ESPD-aktivist"
                width={450}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
