import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Oplæg og arrangementer — Everyday Sexism Project Danmark",
  description:
    "ESPD holder oplæg og arrangementer om sexisme, samtykke og kønnet vold.",
};

export default function OplaegPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
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
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Intro ──────────────────────────────────────── */}
          <div className="space-y-4">
            <p>
              En del af ESPDs arbejde med at bekæmpe og oplyse om hverdagssexisme er at afholde
              og deltage i paneldebatter, workshops, oplæg og andre lignende arrangementer med
              emner som fx samtykke, sexisme og voldtægtskultur. Vi mener, at vejen til oplysning
              og forståelse går gennem dialog, og derfor gør vi vores bedste for at deltage i
              alle de aktiviteter, vi bliver indbudt til, og desuden facilitere, arrangere og
              deltage i begivenheder, demonstrationer og aktioner, når vi har mulighed og
              ressourcer.
            </p>
            <p>
              Har du et arrangement, hvor det vil være relevant med et indslag fra Everyday
              Sexism Project Danmark?{" "}
              <a
                href="/kontakt/kontakt-os"
                className="underline hover:text-accent-gold transition-colors"
              >
                Kontakt os
              </a>{" "}
              — så finder vi ud af mulighederne for samarbejde.
            </p>
          </div>

          {/* ── Oplæg og workshops ─────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Oplæg og workshops
            </h2>
            <p>
              ESPD holder løbende oplæg og workshops om fx sexisme, flirt, samtykke og kønnet
              vold — inviteret af politiske ungdomsorganisationer, højskoler, gymnasier, på Talk
              Town m.fl. Senest har vi afholdt vores nye bystander-workshop
              &ldquo;Everyday Sexism Fighter&rdquo;, hvor man kan få idéer til at bekæmpe sexisme
              i hverdagen.
            </p>
            <p>
              Hvis du, din organisation, arbejdsplads eller skole er interesseret i at få os ud,
              så{" "}
              <a
                href="/kontakt/kontakt-os"
                className="underline hover:text-accent-gold transition-colors"
              >
                skriv til os
              </a>
              , så kan vi finde ud af, hvad der passer til jer.
            </p>
          </div>

          {/* ── Udstilling ─────────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Udstilling: Fra voldtægtskultur til samtykkekultur
            </h2>
            <p>
              I august 2021 holdt ESPD udstillingen &ldquo;Fra voldtægtskultur til
              samtykkekultur&rdquo; i Aarhus på KØN. I den forbindelse holdt vi også en række
              talks med eksperter i alt fra digitale krænkelser til racisme og #MeToo, samt en
              talk med Laura Bates — stifter af The Everyday Sexism Project — om hendes bog
              &ldquo;Men who hate Women&rdquo;.
            </p>
            <p>
              I januar/februar 2022 flyttede udstillingen ind i Sex og Samfunds lokaler i
              København. Står du med et ledigt lokale til vores udstilling, så{" "}
              <a
                href="/kontakt/kontakt-os"
                className="underline hover:text-accent-gold transition-colors"
              >
                kontakt os endelig
              </a>
              .
            </p>
          </div>

          {/* ── SamtykkelovNu demo ─────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              SamtykkelovNU-demonstration
            </h2>
            <p>
              Den 14. august 2020 arrangerede ESPD på initiativ med Kirstine Holst en stor
              demonstration i København med tusindvis af deltagere og talere, der repræsenterede
              forskellige offerperspektiver — fra &ldquo;almindelige&rdquo; ofre og LGBTQ+
              personer til racialiserede, tykfobiperspektiv, børn og mænd.
            </p>
          </div>

          {/* ── Åbent arrangement på Sway ──────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Åbent arrangement på Sway i Aarhus
            </h2>
            <p>
              I anledning af Kvindernes Internationale Kampdag den 8. marts 2020 arrangerede ESPD
              en fejring i Aarhus med oplæg, burlesque, Spoken Word, musik og andre kunstneriske
              indslag. Aftenen blev sluttet af med en safer space-fest med feministisk DJ.
            </p>
            <p>
              Forinden dette deltog ESPD i workshop om samtykke for børn og unge på Kvindemuseet
              og gik med i Equality March under temaet &ldquo;Feministiske Fremtider&rdquo;.
            </p>
            <p>
              Vores 8. marts-fest skulle give et kunstnerisk bud på samtykke, kvindekamp og
              sexisme og åbne op for en diskussion af, hvad det betyder i Danmark i dag. Fejringen
              foregik på baren Sway med Mette Schak Dahlmann (også kendt som Mette Murer) som
              konferencier.
            </p>
            <p>
              ESPD modtog 4.000 kr. i støtte fra puljen PUKK, som gav fire unge kunstnere
              mulighed for at skabe kunstværker under temaet &ldquo;samtykke&rdquo;. De fire
              kunstnere var Clara Breum, Laura Laura, Anna-Maria Sote Dueholm og Kamar Oueiti.
              Helene Thyrsted holdt et oplæg om sin kamp mod tykfobi, Isabel Donen sang nummeret
              &ldquo;Victory&rdquo;, og BurlyQueens lavede et burlesque show. Sidsel Lieknins
              Vestertjele sang &ldquo;Ikke din skyld&rdquo;, dedikeret til ESPD.
            </p>
          </div>

          {/* ── Talk Town ──────────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              ESPD til Talk Town
            </h2>
            <p>
              ESPD har deltaget på{" "}
              <a
                href="https://talktown.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                Talk Town
              </a>{" "}
              rundt om i landet, flere gange med hjælp fra{" "}
              <a
                href="https://kvinderaadet.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                Kvinderådet
              </a>
              . Talk Town er en feministisk debatfestival, der finder sted årligt i Aarhus og
              København. Vi er meget glade for samarbejdet med Talk Town, som har givet os
              mulighed for at afholde flirteworkshops, paneldebatter og oplæg om sexisme for et
              bredt og deltagende publikum.
            </p>
          </div>

          {/* ── Roskilde Festival Vinterfest ───────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Roskilde Festival Vinterfest 2020: Sexisme og sprog
            </h2>
            <p>
              ESPD havde i januar fornøjelsen af at deltage i Roskilde Festivals Vinterfest.
              Roskilde Festival havde fokus på &ldquo;frirummets muligheder og dilemmaer&rdquo;,
              som vi også gav vores perspektiv på. Vi er meget begejstrede og glade for vores
              samarbejde med Roskilde Festival og takker dem for at invitere os med.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
