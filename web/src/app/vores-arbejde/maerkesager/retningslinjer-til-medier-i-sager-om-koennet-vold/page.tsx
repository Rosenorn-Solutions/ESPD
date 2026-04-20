import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Retningslinjer til medier i sager om kønnet vold — Everyday Sexism Project Danmark",
  description:
    "ESPDs retningslinjer til medier i sager om kønnet vold og seksuelle krænkelser.",
};

export default function RetningslinjerTilMedierPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Retningslinjer til medier i sager om kønnet vold
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Mærkesager" },
          { label: "Retningslinjer til medier" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-8">

          {/* ── Download ───────────────────────────────────── */}
          <p>
            <a
              href="https://everydaysexismproject.dk/wp-content/uploads/2024/01/Retningslinjer-til-medier-i-sager-om-koennet-vold.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent-gold transition-colors font-semibold"
            >
              Download retningslinjer her (PDF)
            </a>
          </p>

          {/* ── Baggrund ───────────────────────────────────── */}
          <div className="space-y-4">
            <p>
              Fra Everyday Sexism Project Danmark startede, er vi jævnligt blevet kontaktet af
              medierne og spurgt, om vi kan finde cases til dem, og/eller om vi selv ville være
              villige til at stille op til artikler og indslag, der handler om kønnet vold. Det
              gør vi ofte og gerne, ligesom vi hjælper med at finde cases, som vi dernæst
              forbereder på, hvordan det kan være at stille sig frem.
            </p>
            <p>
              I den tid vi har været aktive, har vi imidlertid oplevet, at det ikke er alle
              medier, der er lige gode til at håndtere sager med personer, som har været ofre
              for krænkelser og overgreb. Det er heller ikke alle medier, der er opmærksomme
              på, hvad der forårsager kønnet vold, eller hvordan deres egen sprogbrug påvirker
              måden vores samfund generelt behandler og betragter ofre på. Endelig gør den
              omsiggribende brug af sociale medier det endnu vigtigere at være opmærksom på,
              hvordan kommentarspor kan være med til at udbrede fx skadelige myter om kønnet
              vold.
            </p>
            <p>
              Retningslinjerne er inspirerede af både internationalt materiale og de mange, som
              kontakter ESPD, fordi de følger mediernes dækning af emnet og kommentarsporene på
              sociale medier. Retningslinjerne er skrevet for at give medier og journalister
              konkrete råd og vejledning i dækning af et emne, der bl.a. med #MeToo har fået en
              mere fremtrædende rolle de senere år, og ikke altid er nemt at sætte sig ind i.
            </p>
            <p>
              Kontakt os endelig, hvis du som medie eller journalist har spørgsmål eller
              kommentarer til retningslinjerne. De vil løbende blive opdateret.
            </p>
          </div>

          {/* ── Samarbejde ─────────────────────────────────── */}
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-dark-text font-semibold">
              Retningslinjerne er udarbejdet i samarbejde med Lotte Rosdahl, som er forfatter og
              journalist og udvikler af metoden Inkluderende Journalistik. I 2020 udgav hun en
              bog om metoden.
            </p>
          </div>

          {/* ── Kontakt ────────────────────────────────────── */}
          <p>
            Har du spørgsmål?{" "}
            <a
              href="/kontakt/kontakt-os"
              className="underline hover:text-accent-gold transition-colors"
            >
              Kontakt os
            </a>
            .
          </p>

        </div>
      </section>
    </>
  );
}
