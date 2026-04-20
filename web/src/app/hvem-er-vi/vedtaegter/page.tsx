import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Vedtægter — Everyday Sexism Project Danmark",
  description:
    "Læs vedtægterne for Everyday Sexism Project Danmark.",
};

export default function VedtaegterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Vedtægter
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Hvem er vi?" },
          { label: "Vedtægter" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-10">

          {/* §1 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §1 Foreningens navn: Everyday Sexism Project Danmark
            </h2>
            <p>Foreningen er stiftet den 9. april 2015.</p>
          </div>

          {/* §2 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §2 Hjemsted
            </h2>
            <p>
              Adresse: c/o Anja Ellen Grue, Kronborggade 2, 3.th., 2200 København N
            </p>
          </div>

          {/* §3 */}
          <div className="space-y-3">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §3 Formål
            </h2>
            <p>
              Målet med foreningen er at bekæmpe den sexisme, som kvinder oplever, dvs.
              kønsrelateret undertrykkelse og negativ forskelsbehandling af forskellig art.
              Det kan være alt fra stereotype fremstillinger af kvinder i medier og reklamer,
              faglig marginalisering på studiet og jobbet over irriterende/grænseoverskridende
              tilråb på gaden og uønsket fysisk kontakt i det offentlige rum m.v., over trusler
              og seksualiseret chikane til overgreb, forskellige former for vold og voldtægt.
            </p>
            <p>
              Formålet søges opnået blandt andet ved indsamling af oplevelser på foreningens
              hjemmeside. Disse bruges sammen med anden viden til at oplyse om sexisme på
              sociale medier, ved deltagelse i den offentlige debat i medierne og andre steder,
              ved afholdelse af oplæg, kontakt til beslutningstagere, samt samarbejde med
              relevante partnere. I alt arbejde søges det at have fokus både på oplysning og
              løsningsforslag.
            </p>
            <p>
              Foreningen har fokus på eksistensen og udbredelsen af samt oplysning om sexisme
              og hvordan sexisme bekæmpes. Dette fokus søges fastholdt på en måde, så debatten
              ikke afspores og opmærksomheden dermed fjernes fra vores formål.
            </p>
          </div>

          {/* §4 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §4 Medlemskab
            </h2>
            <p>Stk. 1 Foreningen optager medlemmer, der støtter foreningens formål, jf. §3.</p>
            <p>Stk. 2 Kontingent er fastsat til 100 kr. årligt og forfalder efter et år.</p>
            <p>
              Stk. 3 Kontingentsatser fastsættes hvert år af den ordinære generalforsamling i
              forbindelse med vedtagelse af budget.
            </p>
            <p>
              Stk. 4 Bestyrelsen har pligt til at opbevare medlemskartoteket aflåst og på et
              sikkert sted.
            </p>
          </div>

          {/* §5 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §5 Ophør af medlemskab
            </h2>
            <p>
              Stk. 1 Udmeldelse sker ved henvendelse på{" "}
              <a
                href="mailto:espdtilmelding@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdtilmelding@gmail.com
              </a>{" "}
              og allerede indbetalt kontingent refunderes ikke.
            </p>
            <p>
              Stk. 2 Medlemmer, der ikke har betalt kontingent senest 30 dage efter
              opkrævning, ophører med at være medlemmer af foreningen.
            </p>
            <p>
              Stk. 3 Medlemsrettigheder kan først generhverves, når skyldigt kontingent til
              foreningen er betalt.
            </p>
          </div>

          {/* §6 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §6 Valgbarhed og stemmeret
            </h2>
            <p>
              Stk. 1 For at have stemmeret og valgbarhed i foreningen skal man have været
              medlem i mindst to måneder. Hvis et medlem er i restance med et eventuelt
              kontingent, fortabes stemmeret og valgbarhed.
            </p>
            <p>
              Stk. 2 Valgbare til bestyrelsen, interne revisorposter samt andre udvalgs- og
              lederposter i foreningen skal godkendes af og stemmes ind af et flertal af
              fremmødte foreningsmedlemmer.
            </p>
            <p>
              Stk. 3 Valgbare til bestyrelsen, interne revisorposter samt andre udvalgs- og
              lederposter fastsættes af foreningens medlemmer ved en årlig generalforsamling.
            </p>
          </div>

          {/* §7 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §7 Udelukkelse
            </h2>
            <p>
              Stk. 1 Bestyrelsen kan træffe beslutning om udelukkelse eller eksklusion af et
              medlem, såfremt vedkommendes opførsel strider imod foreningens vedtægter og
              formål.
            </p>
            <p>
              Stk. 2 Beslutning om udelukkelse skal træffes af bestyrelsen senest 3 måneder
              efter, at denne har fået kendskab til de omhandlede forhold.
            </p>
            <p>
              Stk. 3 Et udelukket medlem kan sende en anmodning om genoptagelse i foreningen.
              Anmodningen skal behandles på førstkommende ordinære generalforsamling og afgøres
              ved et simpelt flertal blandt de fremmødte medlemmer.
            </p>
          </div>

          {/* §8 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §8 Økonomi, regnskab og revision
            </h2>
            <p>Stk. 1 Foreningens regnskabsår følger kalenderåret.</p>
            <p>
              Stk. 2 Bestyrelsen står til ansvar for budget og regnskab, overfor
              generalforsamlingen.
            </p>
            <p>
              Stk. 3 Foreningens regnskab føres af kassereren, der tillige fører foreningens
              medlemsregister.
            </p>
            <p>
              Stk. 4 Regnskabet revideres af de på generalforsamlingen valgte revisorer.
            </p>
          </div>

          {/* §9 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §9 Hæftelse
            </h2>
            <p>
              Stk. 1 Bestyrelsens medlemmer hæfter ikke personligt for de af foreningen
              indgåede forpligtelser.
            </p>
            <p>
              Stk. 2 Foreningens medlemmer hæfter ikke personligt for økonomiske forpligtelser
              indgået af bestyrelsen på vegne af foreningen.
            </p>
          </div>

          {/* §10 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §10 Tegningsret
            </h2>
            <p>Stk. 1 Foreningen tegnes af Forpersonen sammen med Kassereren.</p>
          </div>

          {/* §11 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §11 Generalforsamling
            </h2>
            <p>Stk. 1 Generalforsamlingen er foreningens øverste myndighed.</p>
            <p>
              Stk. 2 Foreningen afholder sin årlige ordinære generalforsamling inden udgangen
              af maj måned med indkaldelse via mail mindst 30 dage før generalforsamlingens
              afholdelse.
            </p>
            <p>
              Stk. 3 Indkomne forslag skal tilsendes{" "}
              <a
                href="mailto:espdanmark@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdanmark@gmail.com
              </a>{" "}
              senest 8 dage før generalforsamlingens afholdelse.
            </p>
            <p>Stk. 4 Generalforsamlingen er kun for foreningens medlemmer.</p>
            <p>Stk. 5 Dagsorden for den ordinære generalforsamling er:</p>
            <ol className="list-decimal list-inside space-y-1 pl-4">
              <li>Valg af ordstyrer</li>
              <li>Valg af referent</li>
              <li>Forpersonen aflægger årsberetning</li>
              <li>Godkendelse af regnskab og budget</li>
              <li>Behandling af eventuelle indkomne forslag</li>
              <li>Valg af bestyrelsesmedlemmer og evt. 1–2 suppleanter til bestyrelsen</li>
              <li>Valg af revisor</li>
              <li>Fastsættelse af kontingent</li>
              <li>Eventuelt</li>
            </ol>
            <p>
              Valg af Forperson er gældende for 2 år ad gangen. Kasserer vælges for 2 år ad
              gangen. Bestyrelsesmedlemmer er på valg for 2 år ad gangen, dog forskudt, så to
              vælges til en 2-årig periode og året efter er det 3, der er på valg til en
              2-årig periode. Derved sikres kontinuitet. Revisor er på valg årligt.
            </p>
            <p>
              Generalforsamlingen kan efter indstilling fra bestyrelsen beslutte, at posten som
              valgt revisor varetages af eksterne samarbejdspartnere/firmaer.
            </p>
            <p>Der kan vælges 1–2 suppleanter til bestyrelsen for 1 år.</p>
            <p>Bestyrelsen eller generalforsamlingen kan nedsætte udvalg.</p>
            <p>
              Stk. 6 Beslutninger på den ordinære generalforsamling vedtages med simpelt
              flertal, med mindre andet er angivet i vedtægterne. Skriftlig afstemning skal
              anvendes, såfremt fem medlemmer forlanger det.
            </p>
            <p>
              Stk. 7 Der kan ikke stemmes ved fuldmagt, men kun ved personligt fremmøde.
            </p>
            <p>
              Stk. 8 Referat fra den ordinære generalforsamling godkendes og underskrives af
              dirigenten. Referat skal ligge til gennemsyn på foreningens kontor senest 1
              måned efter generalforsamlingens afholdelse.
            </p>
          </div>

          {/* §12 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §12 Ekstraordinær generalforsamling
            </h2>
            <p>
              Stk. 1 Bestyrelsen kan til enhver tid kræve en ekstraordinær generalforsamling
              indkaldt med 14 dages varsel.
            </p>
            <p>
              Stk. 2 Den ekstraordinære generalforsamling skal indkaldes, når 40% af
              foreningens medlemmer fremsender skriftlig begrundet forslag herom. Herefter
              skal bestyrelsen inden for 30 dage med indkaldelse via mail med 14 dages varsel
              indkalde medlemmerne.
            </p>
            <p>
              Stk. 3 Foruden de to ovenstående stykker, gælder de samme vedtægter ved den
              ekstraordinære generalforsamling som ved den ordinære generalforsamling.
              Indkomne forslag skal tilsendes{" "}
              <a
                href="mailto:espdanmark@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdanmark@gmail.com
              </a>{" "}
              senest 8 dage før den ekstraordinære generalforsamlings afholdelse.
            </p>
            <p>
              Stk. 4 Beslutninger på den ekstraordinære generalforsamling vedtages med simpelt
              flertal, med mindre andet er angivet i vedtægterne. Skriftlig afstemning skal
              anvendes, såfremt fem medlemmer forlanger det.
            </p>
            <p>
              Stk. 5 Referat fra den ekstraordinære generalforsamling godkendes og
              underskrives af dirigenten.
            </p>
            <p>
              Stk. 6 Den ekstraordinære generalforsamling er kun for foreningens medlemmer.
            </p>
          </div>

          {/* §13 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §13 Bestyrelsen
            </h2>
            <p>
              Stk. 1 Bestyrelsen konstituerer sig selv på den stiftende generalforsamling.
              Hvis bestyrelsesmedlemmer går ud indenfor en periode, re-konstituerer
              bestyrelsen sig.
            </p>
            <p>
              Stk. 2 Valg af Forperson er gældende for 2 år ad gangen. Kasserer vælges for 2
              år ad gangen. Bestyrelsesmedlemmer er på valg for 2 år ad gangen, dog forskudt.
              Revisor er på valg årligt.
            </p>
            <p>
              Stk. 3 Der kan dannes arbejdsgrupper til varetagelse af særlige opgaver. Sådanne
              grupper godkendes af bestyrelsen. Hver gruppe har pligt til at udpege en
              kontaktperson til bestyrelsen samt en stedfortræder for denne.
            </p>
            <p>
              Stk. 4 Bestyrelsen fører driftsregnskab. Bestyrelsen er bemyndiget til at
              opkræve alle med foreningens drift forbundne indtægter og er berettiget til at
              afholde alle forfaldne udgifter, ifølge vedtaget budget. Ekstraordinære
              bevillinger skal fremstå i det reviderede regnskab som selvstændige poster.
            </p>
            <p>Stk. 5 Bestyrelsen fastlægger selv sin forretningsorden.</p>
          </div>

          {/* §14 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §14 Organisation
            </h2>
            <p>
              Stk. 1 Foreningen er til enhver tid forpligtet til at opbygge sin administrative
              og økonomiske organisation således, at den fremmer foreningens formål og midler,
              jf. §3.
            </p>
          </div>

          {/* §15 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §15 Vedtægtsændringer
            </h2>
            <p>
              Stk. 1 Forslag til vedtægtsændringer skal forelægges den ordinære
              generalforsamling.
            </p>
            <p>
              Stk. 2 For vedtagelse af vedtægtsændringer kræves, at mindst 2/3 af de fremmødte
              stemmer for det stillede forslag. Dette gælder både på ordinære og ekstraordinære
              generalforsamlinger, og træder i kraft med virkning fra den generalforsamling, de
              vedtages på.
            </p>
          </div>

          {/* §16 */}
          <div className="space-y-2">
            <h2 className="font-heading text-base font-bold uppercase text-dark-text">
              §16 Opløsning af foreningen
            </h2>
            <p>
              Stk. 1 Opløsning af foreningen kan kun finde sted ved afstemning med 2/3 flertal
              på to af hinanden følgende generalforsamlinger, hvoraf den ene skal være ordinær.
            </p>
            <p>
              Stk. 2 Foreningens formue skal, i tilfælde af opløsning, anvendes i
              overensstemmelse med de i §3 fastsatte formål eller til andre almennyttige
              formål. Beslutning om den konkrete anvendelse af formuen træffes af den
              opløsende generalforsamling.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
