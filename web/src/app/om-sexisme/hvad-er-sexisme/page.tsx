import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hvad er sexisme? — Everyday Sexism Project Danmark",
  description:
    "Læs om hvad sexisme er, og hvordan det påvirker hverdagen for mange mennesker.",
};

const bannerImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/03/20190308_162743-e1572811438769-768x583.jpg";

const stereotypeImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/11/karl-fredrickson-GEJxI_QRPwM-unsplash.jpg";

const mediaLanguageImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2020/03/MedieESPD-1.jpg";

const violenceCultureImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2019/12/philipp-wuthrich-2HMrBMbbbYg-unsplash-900x1024.jpg";

export default function HvadErSexismePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerImageUrl}
          alt="Demonstration på kvindernes internationale kampdag"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/35" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1200px] items-center justify-center px-4 py-16 md:min-h-[360px] md:py-24 text-center">
          <div className="inline-flex bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase text-accent-gold md:text-3xl">
              Hvad er sexisme?
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Om sexisme" },
          { label: "Hvad er sexisme?" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.9fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <p className="text-lg font-semibold text-dark-text">
                Sexisme er fordomme eller diskrimination på baggrund af køn.
              </p>

              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Begrebet sexisme
              </h2>
              <p>
                Begrebet sexisme blev introduceret i 1965 af Pauline M. Leet og kom på skrift i
                1968 ved den engelske, feministiske forfatter Caroline Bird (<em>On Being Born
                Female</em>). Begge kvinder sidestiller sexisme med racisme og anser det for at
                være et strukturelt problem.
              </p>
              <p>
                Sexisme er både diskrimination baseret på køn og de holdninger, handlinger,
                stereotyper og kulturelle elementer, der opretholder og fremmer denne
                diskrimination. I dag er der nogen, der mener, at der kun er tale om sexisme,
                hvis diskriminationen er rettet mod kvinder, og hvis det rettes mod andre, er
                det &lsquo;kun&rsquo; diskrimination. Man kan sige, at det kun er sexisme, hvis
                diskriminationen er baseret på en historisk, kulturel magtposition, som kvinder
                ikke har haft og stadig ikke har i mange lande endnu.
              </p>
              <p>
                I sexismen ligger en overbevisning om, at der er en kønnet påvirkning af,
                hvordan en person handler eller tænker, og at det påvirker personens evne til at
                udføre bestemte opgaver eller erhverv. Sexisme fører derfor ofte til
                diskrimination og nedvurdering af kvinder, og forårsager samtidig en negativ,
                usaglig forskelsbehandling.
              </p>
              <p>
                I ESPD mener vi, at sexisme stadig er et udbredt problem, som gennemsyrer vores
                kultur i det daglige.
              </p>
              <p>
                Sexismen går igen i vores sprog og kultur, herunder reklamer, film og medier, og
                derfor også i måden, vi opdrager vores børn på. Kønningen og sexismen er så
                almindelig for mange mennesker, at det er blevet en ubevidst del af deres
                verdensbillede, og derfor kan det umiddelbart være svært overhovedet at anerkende
                problematikken. Men de valg, vi træffer i hverdagen, er baseret på det
                verdensbillede, vi er opdraget i og med — og det er herfra begrebet
                hverdagssexisme er udsprunget.
              </p>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={bannerImageUrl}
                  alt="ESPD ved kvindernes internationale kampdag"
                  width={768}
                  height={583}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                ESPD 8. marts 2019
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.2fr)] md:items-start">
            <figure className="order-2 space-y-3 md:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={stereotypeImageUrl}
                  alt="Børn holder hinanden i hænderne"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Foto: Unsplash
              </figcaption>
            </figure>

            <div className="order-1 space-y-4 font-body leading-relaxed text-body-text md:order-2">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Hverdagssexisme og kønsstereotyper
              </h2>
              <p>
                Sexisme i hverdagen kommer til udtryk i flere forskellige sammenhænge. Det kan
                være &lsquo;uskyldige&rsquo; overbevisninger, som at kvinder ikke kan køre bil,
                at mænd ikke kan multitaske, og at det er en kompliment at råbe af nogen eller
                fløjte efter dem på gaden. Det hele udspringer af en &lsquo;nedarvet&rsquo;
                forståelse af køn, som samtidig retfærdiggør forskelsbehandling. Børn lærer fra
                små, hvordan en &lsquo;rigtig pige/kvinde&rsquo; og &lsquo;en rigtig
                dreng/mand&rsquo; bør opføre sig og se ud.
              </p>
              <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
                &ldquo;A gender stereotype is a generalised view or preconception about
                attributes or characteristics, or the roles that are or ought to be possessed
                by, or performed by women and men.&rdquo;
                <br />
                <span className="not-italic text-sm text-body-text">
                  — FN&apos;s Højkommissariat for Menneskerettigheder
                </span>
              </blockquote>
              <p>
                Børn klædes i blåt eller lyserødt, de får dukker eller værktøj at lege med, og
                de opdrages til at være &lsquo;stille og følsomme&rsquo; eller &lsquo;vilde og
                stærke&rsquo;, afhængigt af deres køn. Den måde, som vi opdrager vores børn på,
                er ofte så internaliseret, at mange end ikke opdager eller tænker over, at vi
                præger børn i forskellige og særligt kønnede retninger. Og fordi vi ikke er
                bevidste om det, overvejer vi heller aldrig, at vi kunne gøre noget andet, og
                derfor gentager vi mønsteret.
              </p>
              <p>
                I ESPD har vi fået flere beretninger fra forældre, der har oplevet, at der i
                deres børns børnehaver, skoler, fritidshjem og sportsklubber bliver lavet
                kønsopdelte aktiviteter. Ved at lave aktiviteter for piger, som inkluderer
                shopping eller stillesiddende kreative ting, indikerer man, at (kun) piger er
                optaget af fine, smukke ting og af deres udseende. Omvendt er aktiviteter for
                &lsquo;rigtige drenge&rsquo; med til at fastholde en kultur, hvor piger og
                kvinder — også fra egen side — opfattes som mindre værd end drenge. Det
                ekskluderer endvidere børn, der falder uden for disse fastlåste kategorier,
                eksempelvis drenge, der kan lide at lave perler og ikke gider spille fodbold.
              </p>
              <p>
                Vi ser kønsstereotyper som skadelige for alle køn, fordi de begrænser vores
                handlemuligheder og giver os ringere mulighed for at udtrykke os selv frit.
                Kønsroller kan fx lægge begrænsninger på børns forestillinger om, hvad de kan
                blive til som voksne, og indsnævre deres interesser. Samtidig er de mennesker,
                som falder uden for en kønsstereotyp, ofte udsat for latterliggørelse eller
                bemærkninger om at være &lsquo;mærkelige&rsquo;, hvilket skaber en følelse af at
                være forkert.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.9fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Sexisme og sprogbrug
              </h2>
              <p>
                Vores sprogbrug er også vigtigt, da det er med til at influere den måde, vi
                opfatter os selv og hinanden på, og påvirker opfattelsen af, hvordan vi
                &lsquo;burde&rsquo; opføre os. Ved eksempelvis at bruge nedsættende udtryk som
                &lsquo;tøsedreng&rsquo; fastholder vi en opfattelse af, at drenge skal være
                modige og frygtløse, men at piger er det modsatte. Det samme gælder, når drenge
                kaldes for &lsquo;bøsserøv&rsquo; eller &lsquo;gay&rsquo;, hvis de går op i
                deres tøj eller har interesser, som typisk forbindes med piger. Det samme sker,
                hvis de udviser følsomhed — for &lsquo;rigtige&rsquo; drenge græder ikke. På
                den måde hænger homofobi og sexisme også sammen.
              </p>
              <p>
                Vi mødes således af sprogbrug, der bekræfter og fastholder kønsstereotyper. Når
                vi bruger negativt ladede ord som &lsquo;pigefnidder&rsquo;, &lsquo;drama
                queen&rsquo; og &lsquo;bitch&rsquo;, reproducerer vi forestillingen om, at piger
                og kvinder opfører sig på bestemte måder.
              </p>
              <p>
                Derimod er udtrykket &lsquo;not like other girls&rsquo; en positiv betegnelse
                for piger, der er seje og frække, har mange drengevenner og &lsquo;ikke laver
                drama&rsquo;. Det udtrykker en cool drengepige og er en nedvurdering af den
                almindelige opfattelse af, hvordan piger opfører sig.
              </p>
              <p>
                I medierne er sexistisk sprogbrug desværre også noget, vi ofte oplever. Vi ser
                det fx, når der i overskrifter om en kvindelig politiker, musiker eller
                idrætsudøver fokuseres på hendes udseende og evt. moderskab i stedet for hendes
                præstation. Det kan også være voldtægt, der italesættes som &lsquo;sex&rsquo;,
                hvorved man bekræfter gerningspersonens perspektiv og ikke ofrets.
              </p>
              <p>
                <a
                  href="https://journalisten.dk/sexoverfald-eller-voldtaegt-hvilke-ord-skal-medierne-holde-sig-fra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  Læs mere om ESPDs opfordring til medierne om at ændre sprogbrug i forbindelse
                  med voldtægt og seksualiserede overgreb
                </a>
                .
              </p>
            </div>

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={mediaLanguageImageUrl}
                  alt="Eksempel på sprogbrug i medierne"
                  width={1008}
                  height={630}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Eksempler på sprogbrug i medierne
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.2fr)] md:items-start">
            <figure className="order-2 space-y-3 md:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={violenceCultureImageUrl}
                  alt="Kvinde alene i byrum"
                  width={900}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.2em] text-body-text">
                Foto: Unsplash
              </figcaption>
            </figure>

            <div className="order-1 space-y-4 font-body leading-relaxed text-body-text md:order-2">
              <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                Sexisme som overgreb og chikane
              </h2>
              <p>
                Uønskede berøringer i det offentlige rum og i nattelivet har i mange år været en
                del af hverdagen for — især unge — kvinder. En Gallup-undersøgelse fra 2016
                viste, at 57% kvinder (mod 18% mænd) mellem 18 og 35 år havde oplevet
                uopfordrede berøringer i nattelivet. 48% af mændene svarede i samme undersøgelse,
                at de syntes det var sjovt, mens kun 2% af kvinderne syntes det samme.
              </p>
              <p>
                Det har længe været den generelle opfattelse, at det var kvindens eget ansvar at
                sige fra og passe på sig selv — eksempelvis ved ikke at drikke sig for fuld,
                ikke have udfordrende tøj på eller aldrig at færdes alene. Ligeledes gør de
                samme holdninger sig ofte gældende ved grovere seksualiserede overgreb, herunder
                voldtægt. Vi ser udbredt victimblaming, i form af bemærkninger til offeret om,
                hvad hxn kunne have gjort anderledes. Eller hører spørgsmål som &ldquo;er du
                sikker på, at det er sket?&rdquo; En anden udbredt forestilling om voldtægt er,
                at kvinder anmelder en voldtægt, fordi &ldquo;hun har fortrudt og vil hævne
                sig&rdquo;.
              </p>
              <p>
                ESPD kæmper for at ændre denne kultur, samt for at skylden for en voldtægt eller
                et overgreb placeres hos gerningspersonen.
              </p>
              <p>
                <a
                  href="/vores-arbejde/maerkesager/samtykkebaseret-voldtaegtslovgivning"
                  className="underline transition-colors hover:text-accent-gold"
                >
                  Læs mere om samtykke og voldtægt her
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
