import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kønsbaseret vold — Everyday Sexism Project Danmark",
  description:
    "ESPDs arbejde mod kønsbaseret vold og seksuelle overgreb.",
};

export default function KoensbaseretVoldPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Kønsbaseret vold
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Mærkesager" },
          { label: "Kønsbaseret vold" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Intro ──────────────────────────────────────── */}
          <div className="space-y-4">
            <p>
              Drab på og vold mod kvinder skal have langt større prioritet på den politiske
              dagsorden. Der skal tilføres langt flere ressourcer til forebyggelse — og der
              skal handling bag, når politikerne udtaler, at det selvfølgelig skal tages
              alvorligt.
            </p>
            <p>
              Hvert år bliver cirka 12 kvinder dræbt af deres (eks)partner, 38.000 kvinder
              bliver udsat for fysisk partnervold, og omkring 70.000 kvinder bliver udsat for
              psykisk partnervold. Tallene har ikke ændret sig de seneste år, og selvom
              drabstallene i Danmark generelt er faldende, gælder det ikke (eks)partnerdrab på
              kvinder.
            </p>
            <p>
              Forskning offentliggjort sommeren 2019 viser, at partnerdrab på kvinder udgør
              den største kategori af drab i Danmark — 300 ud af 536 kvinder er i de sidste 25
              år blevet dræbt af deres partner eller ekspartner.
            </p>
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
              &ldquo;Alle former for vold mod alle kvinder og piger i de offentlige og private
              rum skal elimineres, herunder menneskehandel og seksuel og andre former for
              udnyttelse.&rdquo;
              <br />
              <span className="not-italic text-sm">— FN&apos;s Verdensmål 5, delmål 5.2</span>
            </blockquote>
            <p>
              I anledningen af den internationale dag for forebyggelse af vold mod kvinder d.
              25. november 2019 var ESPD arrangør af en &ldquo;Sit Down&rdquo;-aktion på
              Hovedbanegården i København og på banegården i Aarhus. Aktionen foregik i
              solidaritet med de mange kvinder, der er dræbt de seneste år, og i sympati med
              deres pårørende. Vi håber aktionen er med til at skabe fokus på området.
            </p>
          </div>

          {/* ── Hvad ligger bag drabet? ────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Hvad ligger bag drabet?
            </h2>
            <p>
              Drab på kvindelige (eks)partnere sker sjældent som et udslag af sindssyge eller
              stress, som medierne ofte angiver som &ldquo;årsag&rdquo;. Drabene begås på
              baggrund af følelser, som vi alle kan genkende, men som ikke får os til at slå
              ihjel. Flere undersøgelser viser, at der ofte ses et mønster forud for drabet,
              hvor gerningsmanden gentagende gange har truet, udøvet psykisk og/eller fysisk
              vold og/eller stalket kvinden — et mønster der handler om magtudøvelse og
              manglende evne til at håndtere kontroltab eller nederlag. Offeret har også ofte
              fortalt sin omgangskreds, at hun følte sig truet.
            </p>
            <p>
              Der er viden fra forskning om stadier før (eks)partnerdrab, som kan bruges til at
              lave en risikovurdering fra systemet, og det er vigtigt at ofre for vold kan
              hjælpes bedre end de bliver i dag.
            </p>
            <p>
              <a
                href="https://journals.sagepub.com/doi/10.1177/1077801219863876"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                Læs forskningen om &ldquo;De 8 stadier før drab på en (eks)partner&rdquo;
              </a>
            </p>
          </div>

          {/* ── Hvad kan du gøre? ──────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Hvad kan du gøre?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Tal med dine nærmeste om at være opmærksom ved tegn på partnervold. Desværre er
                det ofte ikke synligt, men lad mistanken komme et evt. offer til gode og stol
                altid på den, der betror sig.
              </li>
              <li>
                Hvis du hører noget hos naboen, der lyder som vold — eller er du i tvivl — så
                bank på døren, spørg om du kan hjælpe, ring evt. forud til politiet. Du kan
                redde liv ved at afbryde vold.
              </li>
              <li>
                Meld det til politiet, hvis du hører nogen der kan være udsat for partnervold
                og du ikke selv vil involveres.
              </li>
              <li>
                Meld det altid til politiet og/eller kommunen, hvis der er børn involveret.
              </li>
              <li>
                Tilbyd din hjælp, hvis nogen fortæller dig, eller du tror nogen kan være udsat
                for partnervold.
              </li>
              <li>
                Pres dine valgte politikere til at afsætte flere ressourcer til politi og
                krisecentre og anden rådgivning og hjælp til voldsramte.
              </li>
            </ul>
            <p>
              Er du udsat for vold?{" "}
              <a
                href="/kontakt/hvor-kan-jeg-faa-hjaelp"
                className="underline hover:text-accent-gold transition-colors"
              >
                Find hjælp her
              </a>
              .
            </p>
          </div>

          {/* ── Lev Uden Vold-kampagne ─────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              Lev Uden Vold: De 5 kærlighedssprog
            </h2>
            <p>
              Den 1. april 2020 lancerede Lev Uden Vold kampagnen &ldquo;De 5
              kærlighedssprog&rdquo;. Formålet med kampagnen er at sætte fokus på partnervold
              for at hjælpe flere til at række tidligt ud efter hjælp.
            </p>
            <p>
              Den primære målgruppe er kvinder og mænd i alderen 25–45 år, der oplever vold i
              et parforhold — både hvis man er udsat for vold eller udøver vold. Et parforhold
              starter med en kærlighedsrelation, og selvom der er vold, kan der også være
              kærlige øjeblikke. Voldelige handlinger i et parforhold starter ofte i det små og
              udvikler sig gradvist, så volden normaliseres og kan blive en del af måden at være
              sammen på.
            </p>
            <p>
              Den 1. april 2020 er årsdagen for kriminaliseringen af psykisk vold i Danmark. De
              seneste tal viser, at det har resulteret i 182 anmeldelser og 53 sigtelser af
              psykisk vold på landsplan. Kriminaliseringen sender et klart signal om, at vi som
              samfund ikke accepterer denne form for vold — men vi skal stadig gøre mere, inden
              den psykiske vold udvikler sig til seksuel eller fysisk vold, og i værste instans
              ender i drab.
            </p>
            <p>
              <a
                href="https://levudenvold.dk/aktuelt/de-5-kaerlighedssprog/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                Gå til Lev Uden Volds kampagne &ldquo;De 5 kærlighedssprog&rdquo;
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
