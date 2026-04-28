import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import demoAarhusImage from "./samtykke-demo-aarhus.jpg";
import heroImage from "./samtykke-hero.jpg";
import whatIsConsentImage from "./samtykke-hvad-er-samtykke.png";

export const metadata: Metadata = {
  title: "Samtykkebaseret voldtægtslovgivning — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde for en samtykkebaseret voldtægtslovgivning i Danmark.",
};

const teaConsentVideoUrl = "https://www.youtube.com/embed/oQbei5JGiT8?si=E7CgqNoe3r-QPzX3";

export default function SamtykkebaseretVoldtaegtslovgivningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={heroImage}
          alt="Plakat for samtykkelov nu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/45" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[300px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[380px] md:py-24">
          <div className="bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase text-accent-gold md:text-3xl">
              Samtykkebaseret voldtægtslovgivning
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Mærkesager" },
          { label: "Samtykkebaseret voldtægtslovgivning" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          {/* ── Intro og statistik ─────────────────────────── */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <p className="text-sm italic text-body-text">Foto: Søren Østerlund</p>
              <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
                &ldquo;Samtykke kan gives mundtligt og kropsligt, og det skal gives kontinuerligt.&rdquo;
              </blockquote>
              <p>
                Ifølge en{" "}
                <a
                  href="https://www.sdu.dk/da/sif/rapporter/2018/vold_og_seksuelle_kraenkelser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  undersøgelse fra Syddansk Universitet
                </a>{" "}
                blev cirka 24.000 kvinder i Danmark tvunget til samleje eller forsøg på samme i
                2017. I 2018 modtog politiet 1.079 anmeldelser for voldtægt eller
                voldtægtsforsøg, hvoraf kun 69 personer blev fundet skyldige. Disse tal viser
                tydeligt, at den nuværende lovgivning langt fra er tilstrækkelig til at få
                overgrebspersoner dømt.
              </p>
              <p>
                Derfor ønsker ESPD, at manglende samtykke til sex skal indføres i dansk lov som
                grundlag for at dømme for voldtægt. Det har vi arbejdet for siden starten af
                2017, for som loven er formuleret i dag, har vi i princippet sagt ja til sex
                med hvem som helst – indtil vi siger nej.
              </p>
            </div>

            <aside className="border-l-4 border-accent-gold pl-4 font-body leading-relaxed text-dark-text md:self-center">
              <p className="italic">
                &ldquo;Hvis du er sammen med en partner, som er fuld eller sover, så kan
                vedkommende ikke give samtykke.&rdquo;
              </p>
            </aside>
          </div>

          {/* ── Retssystemet i dag ────────────────────────── */}
          <div className="mt-12 space-y-4 border-t border-light-gray pt-12 font-body leading-relaxed text-body-text">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              Retssystemet i dag
            </h2>
            <p>
              I ESPD har vi ofte fået henvendelser fra kvinder, der har været udsat for
              seksualiserede overgreb. I sådan en situation er det vigtigt, at man mødes med
              respekt og omsorg, både af familie og nære, men i lige så høj grad af
              retssystemet. Desværre oplever mange ofre det modsatte: De oplever, at deres
              oplevelser bagatelliseres og at de mødes med mistro. De oplever, at der sættes
              spørgsmålstegn ved deres opførsel og ved hvilke signaler de har udsendt. De bliver
              spurgt, om de gjorde nok modstand, om de sagde tydeligt fra, eller om det i
              virkeligheden bare er fordi, de efterfølgende har fortrudt.
            </p>
            <p>
              I den type spørgsmål fokuseres der på, om offeret har sagt ‘nej’. Men indføres
              samtykke i lovgivningen, flytter vi fokus fra om ofret har sagt ’nej’ til,
              hvorvidt begge parter har sikret sig et ’ja’. Med andre ord betyder det, at vi
              som samfund anerkender, at sex er baseret på samtykke, frivillighed og
              gensidighed.
            </p>
            <p>
              Samtykkebaseret sex er ikke fravær af modstand, men tilstedeværelse af
              opmærksomhed på hinandens signaler.
            </p>
          </div>

          {/* ── Lovgivningen er ikke tilstrækkelig ────────── */}
          <div className="mt-12 space-y-4 border-t border-light-gray pt-12 font-body leading-relaxed text-body-text">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              Lovgivningen er ikke tilstrækkelig
            </h2>
            <p>
              Som loven er i dag, er der ingen hjælp at hente, hvis offeret under overgrebet
              ‘stivner’ eller ‘fryser’, altså oplever at blive passiv. Der skal nemlig være
              tvang, vold eller trusler om vold involveret, før man kan dømme for voldtægt.
              Eller man skal være ude af stand til at kæmpe imod, fx hvis man sover, er
              sanseløst beruset eller påvirket af medicin.
            </p>
            <p>
              Når man føler sig truet, som i en overgrebssituation, er det dog helt naturligt,
              at kroppen reagerer med fight, flight or freeze. En svensk undersøgelse fra 2017
              viser, at 70 % af voldtægtsofre har oplevet at ‘fryse’ eller ‘stivne’ under et
              overgreb. Det er bl.a. derfor, at ESPD mener, at den nuværende lovgivning er
              utilstrækkelig, fordi den kræver et udtalt ‘nej’, hvis der skal dømmes, eller at
              offeret kæmpede imod.
            </p>
            <p>
              Loven omfatter ikke tonisk immobilitet (at fryse) og anerkender ikke, at et
              offer kan være ude af stand til at bevæge sig pga. angst.
            </p>
          </div>

          {/* ── Frivillighed eller samtykke? ──────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Frivillighed eller samtykke?
              </h2>
              <p>
                Begrebet samtykke udtrykker den gensidighed, vi efterlyser i lovgivningen, og er
                en aktiv tilkendegivelse af, at man har lyst til og gerne vil have sex. Det
                indebærer, at man kontinuerligt sikrer sig, at den anden/de andre også har lyst
                til det, som man selv har lyst til. Fx kan man godt have sagt ja til at have
                samleje, men ikke oralsex.
              </p>
              <p>
                Får vi en ny lovgivning, som er baseret på frivillighed, forudsætter det ikke
                nødvendigvis gensidighed, eftersom passivitet kan tolkes som frivillighed.
                Dermed er der risiko for, at der fortsat ikke vil blive taget højde for, at man
                kan ‘fryse’ pga. angst.
              </p>
            </div>

            <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
              <Image
                src={whatIsConsentImage}
                alt="Grafik om hvad samtykke er"
                width={1600}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* ── Hvad er samtykke? ─────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Hvad er samtykke?
              </h2>
              <p>
                I Storbritannien har kravet om samtykke været indskrevet i lovgivningen siden
                2003, og det samme gør sig gældende i flere andre europæiske lande.
              </p>
              <p>
                Det britiske politi har lavet den berømte video Tea Consent, hvor det ved hjælp
                af en te-driknings-analogi på en let og forståelig måde forklares, hvad samtykke
                går ud på.
              </p>
              <p>Billeder og konkrete eksempler forklarer ofte bedre end ord.</p>
            </div>

            <div className="overflow-hidden rounded-sm bg-primary-black shadow-sm">
              <div className="relative aspect-video">
                <iframe
                  src={teaConsentVideoUrl}
                  title="Tea Consent"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>

          {/* ── Modstand mod samtykkelovgivning ───────────── */}
          <div className="mt-12 space-y-4 border-t border-light-gray pt-12 font-body leading-relaxed text-body-text">
            <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
              Hvorfor møder samtykkelovgivning modstand?
            </h2>
            <p>
              Selvom der nu endelig ser ud til at være en ændring af voldtægtslovgivningen på
              vej, er der stadig en del modstand mod tanken om at få samtykke skrevet ind i
              loven – både i befolkningen og blandt politikere.
            </p>
            <p>
              Meget af den modstand ESPD i tidens løb er blevet præsenteret for, udspringer af
              en ubegrundet frygt for falske anmeldelser. Eksempelvis er der frygt for, at en
              kvinde vil anmelde en mand for voldtægt som hævn. Men der er intet belæg for at
              sige, at kvinder generelt bruger anmeldelser af voldtægt som hævn, eller fordi de
              fortryder.
            </p>
            <p>
              En undersøgelse fra Det Kriminalpræventive Råd i 2009 undersøgte 1.364 sager om
              voldtægtsanmeldelser. Af undersøgelsen fremgik det, at 10-15 mænd årligt blev
              falsk anmeldt og derefter sigtet (og de fleste sager blev opklaret inden for få
              uger). Flere af mændene havde dog ikke engang haft sex med den anklagende, og
              nogle kendte slet ikke anmelderen. Der er lidt over 2 millioner mænd mellem 15 og
              70 år i Danmark, og hvis vi benytter ovenstående tal, kan vi forvente at
              gennemsnitligt 14 mænd årligt vil blive falsk anklaget for voldtægt, hvilket
              påviser, at den reelle risiko for at blive falsk anmeldt er meget lav. I ESPD
              mener vi dog også, at der er alt for lidt viden på dette område, og vi opfordrer
              derfor både regering og øvrige organisationer til at undersøge de reelle tal
              nærmere.
            </p>
            <p>
              Nogen frygter et skred i retssikkerheden for mænd. Og endnu en udbredt
              misforståelse er, at konsekvensen af en samtykkebaseret lovgivning bliver
              ‘omvendt bevisbyrde’. Det er dog ikke sandt. Det vil stadig være
              anklagemyndigheden, der har bevisbyrden, hvilket er udgangspunktet i strafferet
              generelt. Du kan se strafferetsprofessor Jørn Vestergaard forklare det{" "}
              <a
                href="https://kvinfo.dk/samtykkebaseret-voldtaegtslovgivning-forklaret/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-accent-gold"
              >
                her
              </a>
              .
            </p>
          </div>

          {/* ── Forventet effekt ───────────────────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Men kommer det til at gøre en forskel?
              </h2>
              <p>
                Mange spørger, om det at indføre en samtykkebestemmelse nu også vil gøre en
                forskel, og om der kommer til at være flere dømte i voldtægtssager i kølvandet
                på en samtykkebaseret lov. Det ved vi selvfølgelig ikke. Men det vi håber, er,
                at nogle af de sager, hvor der har været bevis for vold, men hvor
                gerningspersonen alligevel er frikendt, fordi der ikke er kæmpet synligt imod
                eller sagt højt nok fra, vil falde anderledes ud fremover.
              </p>
              <p>
                Vi har en forventning om, at offeret i en retssag ikke i samme grad vil blive
                udsat for ydmygende spørgsmål, der fokuserer på påklædning, opførsel eller
                seksuelle præferencer. Vi har også en forventning om, at fokus på samtykke i
                stedet for vold og modstand vil hjælpe mange ofre til bedre at forstå, hvad de
                har været udsat for, og dermed forhåbentlig også føle mindre skam og skyld.
              </p>
              <p>
                Vi håber, at en ny voldtægtslovgivning vil flytte ansvar fra offeret til
                gerningspersonen og påvirke kulturen på en måde, så vi kommer til at tale meget
                mere om samtykkebaseret sex.
              </p>
              <p>
                <a
                  href="/vores-arbejde/hoeringssvar"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  Læs mere om ESPDs holdning og anbefalinger under Høringssvar
                </a>
              </p>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={demoAarhusImage}
                  alt="ESPD til demonstration i Aarhus"
                  width={1600}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-sm font-semibold uppercase text-dark-text">
                ESPD til demo i Aarhus, i kampen for en ny voldtægtslov
              </figcaption>
            </figure>
          </div>

        </div>
      </section>
    </>
  );
}
