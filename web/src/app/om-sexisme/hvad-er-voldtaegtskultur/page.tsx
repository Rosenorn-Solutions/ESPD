import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hvad er voldtægtskultur? — Everyday Sexism Project Danmark",
  description:
    "Læs om hvad voldtægtskultur er, og hvordan den opstår og reproduceres i samfundet.",
};

export default function HvadErVoldtaegtskulturPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Hvad er voldtægtskultur?
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Om sexisme" },
          { label: "Hvad er voldtægtskultur?" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Intro ──────────────────────────────────────── */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2 border-l-4 border-accent-gold pl-4 italic text-dark-text font-semibold">
              <p>&ldquo;Hun var jo også fuld&nbsp;…&rdquo;</p>
              <p>&ldquo;Kvinder siger &lsquo;nej&rsquo;, men mener &lsquo;ja&rsquo;&rdquo;</p>
              <p>&ldquo;Sådan er drenge!&rdquo;</p>
            </div>
            <p>
              Voldtægtskultur. Det er et voldsomt ord, og mange reagerer derfor ved at tænke:
              &lsquo;Det har vi da ikke i Danmark. Vi har en lovgivning, der straffer dem, der
              begår voldtægt! Og ingen kan da lide nogen, der voldtager!&rsquo;
            </p>
            <p>
              Men voldtægtskultur udmønter sig i mere end lovgivning. Vi mærker den, hver gang
              der bliver sat spørgsmålstegn ved sandheden i en voldtægtsanmeldelse. Hver gang
              vi hører, at et offer kunne have undgået voldtægten, hvis bare der var blevet
              sagt ordentligt fra, eller slået, sparket, skreget, bidt eller råbt på hjælp.
              Eller at den anklagede person er jo virkelig rar, så det kan ikke passe.
            </p>
            <p>
              Voldtægtskulturen består af forskellige elementer, som alle er til stede i det
              danske samfund.
            </p>
            <p>
              I en voldtægtskultur har de samfundsmæssige holdninger til køn og seksualitet
              normaliseret den almindelige forestilling om, hvad en voldtægt er. Denne
              forestilling påvirker den måde, vi tænker og taler om voldtægt på, og indebærer
              victimblaming, slut-shaming, seksuel objektificering og trivialisering af
              voldtægt. Endvidere medfører det benægtelse af, at voldtægt er et udbredt
              problem, samt manglende anerkendelse af den skade, som seksualiseret vold
              påfører offeret.
            </p>
            <p>
              Voldtægtskulturen udmønter sig i fire forskellige elementer, som alle er til
              stede i det danske samfund, og som bl.a. ses i vores lovgivning og politiets
              generelle håndtering af voldtægtssager.
            </p>
          </div>

          {/* ── #1 Scorekultur ─────────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              #1 Scorekultur
            </h2>
            <p>
              Det har i mange år været en almindelig opfattelse i vores kultur, at det er
              manden, der skal erobre kvinden. En scorekultur indbefatter således idéen om, at
              kvinden skal være den passive, og at det er manden, der med sin charme og
              gentleman-opførsel skal score kvinden. Ved at kurtisere hende, kan han overbevise
              hende om, at han er værd at give efter for, så det ender med, at hun gerne vil
              have sex med ham.
            </p>
            <p>
              Denne opfattelse kan give nogle mænd en idé om, at når kvinden siger nej, vil
              det stadig være muligt at score hende, og at hun bare siger &lsquo;nej&rsquo;
              for at spille kostbar eller blot fortsat skal bearbejdes.
            </p>
            <p>
              Yderligere er det prestigefyldt for drenge og mænd at have mange seksualpartnere,
              hvor det modsatte er tilfældet for piger og kvinder.
            </p>
          </div>

          {/* ── #2 Victimblaming ───────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              #2 Victimblaming
            </h2>
            <p>
              Det er desværre stadig almindeligt, at ofre for voldtægt og andre seksualiserede
              overgreb bebrejdes for, at forbrydelsen fandt sted. Ofte skal ofre høre fra
              omverdenen, at de selv var ude om det, fordi de havde drukket for meget, gik
              udfordrende klædt, eller jo allerede havde kysset med gerningspersonen. Denne
              form for victimblaming er så normaliseret i vores samfund, at den også påvirker
              en institution som politiet. Det kan komme til udtryk, når politiet spørger til
              offerets påklædning og opførsel op til en voldtægt.
            </p>
            <p>
              Slut-shaming er en anden form for victimblaming, hvor især piger og kvinder
              kritiseres, fordi de bryder med normen for, hvordan en kvinde &lsquo;bør&rsquo;
              se ud og opføre sig. Begrebet bruges af både mænd og kvinder, der mener, at
              kvinder, der går udfordrende klædt og har et seksuelt udtryk, falder uden for,
              hvad der er socialt accepteret. Er man udsat for en voldtægt, mens man har en
              kort nederdel på, &lsquo;har man selv bedt om det&rsquo;.
            </p>
            <p>
              En{" "}
              <a
                href="https://pure.vive.dk/ws/files/1765711/100739_Unges_opfattelser_af_k_n.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                undersøgelse fra VIVE 2018
              </a>{" "}
              viser, at 18-årige piger og drenge er næsten lige seksuelt erfarne. Men hvor de
              seksuelt erfarne piger med skiftende partnere generelt mødes med fordømmelse,
              hyldes og beundres drengene for samme handling.
            </p>
            <p>
              Ifølge undersøgelsen varierer denne dobbeltmoral dog fra interview til interview
              samt mellem forskellige vennegrupper og lokalområder. Mange af de unge tager
              personligt afstand fra denne dobbeltmoral, mens andre unge accepterer de
              klassiske forestillinger: Pigerne har seksuelle grænser, som de må værne om, og
              drengene er erobrere, der opnår anerkendelse for at have været sammen med en ny
              seksuel partner.
            </p>
          </div>

          {/* ── #3 Sexisme og seksuel objektivisering ─────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              #3 Sexisme og seksuel objektivisering
            </h2>
            <p>
              Objektiviseringen af kvinder sker, når der i samfundet tales om kvinder på en
              måde, der fremstiller dem som værende mindre værd end mænd. Her spiller både den
              daglige tale og medierne en rolle for, hvordan vi som samfund opfatter kvinder.
              Du kan{" "}
              <a
                href="/om-sexisme/hvad-er-sexisme"
                className="underline hover:text-accent-gold transition-colors"
              >
                læse mere om sexisme her
              </a>
              .
            </p>
            <p>
              Den seksuelle objektivisering sker, når kvinder bliver reduceret til en
              scoringsstatistik, og dermed et tal og/eller et objekt, hvor de får frataget
              deres individuelle egenskaber. Kvinder bliver således vurderet ud fra deres
              udseende og brugbarhed til sex, og bliver derfor nedvurderet i forhold til mænd.
              Det gør, at nogle mænd føler sig berettigede til at komme med kommentarer, og
              somme tider også nedsættende bemærkninger, til kvinders kroppe. Mange har
              ligeledes den opfattelse, at kommentarerne er komplimenter, og at kvinden da bare
              burde være glad for at få opmærksomhed.
            </p>
            <p>
              Det er ikke kun i det daglige og mellem mennesker, at kvinder bliver
              objektiviseret og udsat for sexisme. Billedet af kvinden som et objekt, der skal
              erobres, gengives hyppigt i mediebilledet og reklamer.
            </p>
            <p>
              I Danmark kan det være svært at &lsquo;få lov&rsquo; til at sige fra over for
              sexisme. Siger man fra over for sexisme eller overgreb, sker det ofte, at man
              får at vide, at man &lsquo;skal slappe lidt af, det er jo bare for
              sjov&rsquo;. Endvidere kan man blive beskyldt for at være snerpet,
              krænkelsesparat eller &lsquo;at alt skal være så politisk korrekt&rsquo;. Den
              måde, som #MeToo-bevægelsen er modtaget i Danmark, er et tydeligt eksempel på,
              hvordan kvinder, der siger fra over for overgreb, latterliggøres,
              mistænkeliggøres og nedgøres.
            </p>
            <p>
              Vi oplever bl.a. dette, når folk fortæller voldtægtsjokes, hvor den sexistiske
              humor reproducerer kvindeundertrykkende seksuelle problematikker. Du kan{" "}
              <a
                href="https://pov.international/voldtaegtsjokes-der-er-overhovedet-ingen-grund-til-at-grine/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                læse mere om ESPDs syn på voldtægtsjokes her
              </a>
              .
            </p>
          </div>

          {/* ── #4 Falske anklager ─────────────────────────── */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
              #4 Falske anklager
            </h2>
            <p>
              Voldtægtskulturen er også det, der gør, at vi har så mange ofre for
              seksualiserede overgreb og voldtægt, der ikke anmelder. Det gør de ikke, fordi
              de enten risikerer at blive mødt med mistro, anklager for at være ude efter
              opmærksomhed (mest kvindelige ofre) eller for at blive latterliggjort (mest
              mandlige ofre). Processen i at anmelde disse sager er så hård, at den af nogle
              ofre opleves som endnu et overgreb. De mister venner, de oplever fremmede, der
              siger, at det var deres egen skyld, og folk, der synes det er værre, at nogen de
              kender er blevet anklaget for voldtægt, end selve overgrebet er.
            </p>
            <p>
              I Amnesty Internationals rapport <em>»Giv os respekt og retfærdighed!«</em> fra
              2019, der omhandler retspraksis omkring voldtægt i Danmark, hører vi, hvordan
              kvinder og piger svigtes af en forældet voldtægtslovgivning og mødes af myter og
              kønsstereotyper, når de anmelder en voldtægt. Når kvinder, der har været udsat
              for seksuelt overgreb, vil anmelde hændelsen, oplever de somme tider, at politiet
              har en formodning om, at hændelsen er fiktion, fordi de har fortrudt eller vil
              have hævn for &lsquo;dårlig sex&rsquo;. Eller de mødes med victimblaming og
              slut-shaming, eller beskyldes for at søge opmærksomhed.
            </p>
          </div>

          {/* ── Læs mere ───────────────────────────────────── */}
          <div className="space-y-3 border-t border-light-gray pt-8">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              Læs mere her
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="https://www.unwomen.org/en/news/stories/2019/11/compilation-ways-you-can-stand-against-rape-culture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent-gold transition-colors"
                >
                  UN Women: 16 forslag til, hvordan du kan sige fra over for voldtægtskulturen
                </a>
              </li>
              <li>
                <a
                  href="https://amnesty.dk/media/5406/denmark-report.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent-gold transition-colors"
                >
                  Amnesty International: »Giv os respekt og retfærdighed!« — adgang til
                  retfærdighed for kvindelige voldtægtsoverlevere i Danmark (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://rucforsk.ruc.dk/ws/portalfiles/portal/60988844/Voldtagtskultur_i_Danmark___Projekt_3._semester.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent-gold transition-colors"
                >
                  Roskilde Universitet: »Voldtægtskultur i Danmark« (projektopgave, PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
