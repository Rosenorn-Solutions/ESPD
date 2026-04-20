import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om ESPD — Everyday Sexism Project Danmark",
  description:
    "Læs om Everyday Sexism Project Danmarks formål, mission og baggrund.",
};

export default function OmEspdPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
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
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-6">
          <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
            Baggrund og historie
          </h2>

          <p>
            The Everyday Sexism Project blev startet af Laura Bates i april 2012, efter at hun
            gentagne gange på en uge havde været udsat for uønskede seksuelle kommentarer, tilråb
            og befamlinger. I stedet for at tie om det, som hun plejede og fortsat acceptere det
            som et vilkår for hverdagen som kvinde, begyndte hun at tale om sine oplevelser.
          </p>

          <p>
            Da Bates først begyndte at fortælle om sine oplevelser med hverdagssexisme, opdagede
            hun, at der var overvældende mange andre kvinder, der havde mange lignende oplevelser.
            Hun oprettede derfor et website — The Everyday Sexism Project — et åbent forum for
            alle, der har lyst til at dele deres oplevelser.
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
            I november 2014 blev Everyday Sexism Project Danmark delt i to selvstændige enheder,
            og ESPD blev et selvstændigt projekt — og i foråret 2015 etableret som forening.
          </p>
        </div>
      </section>

      {/* ── ESPD i dag ────────────────────────────────────── */}
      <section className="bg-white border-t border-light-gray">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-6">
          <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
            ESPD i dag
          </h2>

          <p>
            I dag er Everyday Sexism Project Danmark en NGO, som drives udelukkende af frivillige
            kræfter. ESPD arbejder stadig på at dokumentere problemerne med sexisme, der hele
            tiden viser sig på nye måder og forskellige platforme. Formålet med at samle
            oplevelser er dels at synliggøre eksistensen af sexisme, og dels at skabe et rum,
            hvor man ikke skal føle sig alene med sine oplevelser.
          </p>

          <p>
            Vi arbejder primært med sexisme rettet mod kvinder og piger. Det gør vi, fordi det
            engelske projekt er sådan indrettet, men også fordi kvinder — både historisk set og i
            dag — er dem, der overvejende udsættes for sexisme. Det betyder ikke, at vi ikke
            anerkender, at andre køn kan opleve diskrimination, og derfor arbejder vi også meget
            med kønsstereotyper, som vi mener påvirker alle køn på en uhensigtsmæssig måde.
          </p>

          <p>
            Den strukturelle sexisme ser vi i alle lag — fra tidlig opdeling af piger og drenge,
            hvilke aktiviteter og farver der tilhører et bestemt køn, til &lsquo;uskyldige&rsquo;
            vittigheder om kvinder, forskelsbehandling på arbejdspladser og til grovere tilfælde,
            hvor der sker overgreb, voldtægt og, i værste tilfælde, mord.
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
            ESPD arbejder primært og i det daglige fra Facebook og Instagram, for gennem oplysning
            og formidling at nå vores mål: At skabe en kulturændring, hvor hverdagssexisme ikke
            er acceptabel.
          </p>
        </div>
      </section>
    </>
  );
}
