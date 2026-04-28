import type { Metadata } from "next";
import type { ReactNode } from "react";

import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AccordionItem } from "@/components/ui/AccordionItem";

import faqBanner from "./faqbanner.jpg";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Ofte stillede spørgsmål om Everyday Sexism Project Danmark og hverdagssexisme.",
};

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Om vores arbejde med sexisme",
    items: [
      {
        question: "Er sexisme virkelig så stort et problem i Danmark?",
        answer:
          <>
            <p>I Danmark har vi indtil nu indsamlet over 3500 oplevelser om sexisme og hver gang vi er ude til oplæg og andet møder vi kvinder der gennem deres liv, har oplevet det i forskellige former, og det samme har vi selv. Så ja, vi mener problemet er stort nok til at det fortjener noget fokus.<br /><br />Hvis vi kigger på undersøgelser, så vi ser de at gennemsnitligt 12 kvinder om året dræbes af deres (eks) partner – ofte efter et længere forløb med trusler og fysisk/psykisk vold. En undersøgelse offentliggjort sommeren 2019 som undersøgte drab i Danmark over 25 år viste at for kvinder er 56 procent af drabene på dem et (eks) partnerdrab – 300 ud af 536 drab på kvinder i den årrække. Tallet for drab har generelt været faldende i den periode, men ikke denne type drab på kvinder. Mænd bliver også udsat for partnerdrab. 79 mænd blev hen over de 25 år dræbt af deres partner. Men her viser forskningsprojektet fra Aarhus Universitet, at drabene ofte sker efter forudgående trusler og vold mod kvinden. Det er også viden, som støttes af internationale undersøgelser.</p>
            <p>Det skønnes at ca. 38.000 kvinder i Danmark årligt udsættes for fysisk partnervold (cirka 19.000 mænd det samme). Tal fra en rapport fra 2018 lavet af VIVE (SFI) viser at knap 4 ud af 100 kvinder (mod godt 1 ud af 100 mænd) udsættes for psykisk vold årligt. Rapporten ser blandt andet også på, hvordan den psykiske vold hænger sammen med fysisk, seksuel og økonomisk partnervold. Samlet set har hver 20. kvinde i Danmark i løbet af et år været udsat for mindst én form for partnervold i følge rapporten.</p>
            <p>En undersøgelse fra 2018 fra Statens Institut for Folkesundhed viser at mellem 57.000 og 79.000 kvinder (2017 tal) udsættes for seksuelle overgreb årligt, herunder udsættes anslået 24.000 kvinder for tvunget samleje eller forsøg på det (2017 tallene for mænd der udsættes for seksuelle overgreb er mellem 9.000 og 15.000 tallene for tvunget samleje og forsøg på det med mandlige ofre er ifølge SIF for små til, at de kan tages med). I 2016 blev 66 personer dømt for voldtægt eller forsøg. Det Kriminalpræventive Råd anslår ud fra en livstidsundersøgelse (fra 0-75 år) at 84 % af voldtægtsofre er kvinder og 16 % mænd. Der findes ikke danske tal for personer, der ikke falder ind under de binære køn.</p>
            <p>I en EU undersøgelse, som blev offentliggjort i 2014 svarer 19 % af danske kvinder, at de har været udsat for én eller flere former for seksuel vold én eller flere gange efter de fyldte 15 år.</p>
            <p>Resultatet for kvinder der har været udsat for seksuel vold af en ikke-partner de seneste 12 måneder er 1 % og seksuel vold fra en partner også 1 %. Oversat til hele befolkningen vil det sige at 47.248 kvinder har svaret ja til at de indenfor de seneste 12 måneder 1) er blevet tvunget til samleje ved at blive holdt nede eller gjort ondt 2) udover dette forsøgt at blive tvunget til samleje ved at ved at blive holdt nede eller gjort ondt 3) udover dette tvunget til at deltage i en form for seksuel aktivitet mod sin vilje 4) indvilliget i seksuel aktivitet på grund af frygt – af enten en partner eller en ikke-partner.</p>
            <p>EU undersøgelsen viser at 13 % af danske kvinder har oplevet et seksuelt overgreb fra en voksen, før de fyldte 15 år.</p> 
            <p>Endnu en EU undersøgelse udført i sommeren 2016 afdækker holdninger til kønsbaseret vold, herunder voldtægt.</p>
            <p>I den svarer 17 % af danskerne at samleje uden samtykke kan retfærdiggøres i visse tilfælde (på EU plan er det 25 % af respondenterne der mener det).</p>
            <p>Heraf viser de danske svar, at flest (7 %) mener at det kan retfærdiggøres, hvis kvinden følger med manden hjem eller (6 %) hvis kvinden ikke kæmper imod eller siger nej (i det sidste tilfælde siger dobbelt så mange mænd som kvinder, at det kan retfærdiggøres).</p>
            <p>23 % af danskerne i 2016 undersøgelsen er tilbøjelige til at være enige i eller er fuldstændige enige i at kvinder ofte opdigter eller overdriver påstande om misbrug og voldtægt (modsat de maksimalt 7 % falske anmeldelser som er registreret i Danmark, hvilket også omfatter tilbagetrækning af anmeldelser pga. trusler og anmeldelser, hvor der ikke er udpeget konkrete gerningsmænd).</p>
            <p>16 % af danskerne i 2016 undersøgelsen er tilbøjelige til at være enige i eller er fuldstændige enige i at vold mod kvinder ofte provokeres af offeret selv.</p>
            <p>6 % af danskerne i 2016 undersøgelsen er tilbøjelige til at være enige i eller er fuldstændige enige i at vold i hjemmet er en privat sag, og skal håndteres internt i familien.</p>
            <p>En undersøgelse Justitsministeriet offentliggjorde i 2013 viser at kvinders risiko for at blive udsat for stalking er 20 % større end mænds når der ses på det seneste år, mens den er næsten dobbelt så stor, når der ses på et helt livsforløb. Kønsfordelingen blandt de stalkingramte i undersøgelsen var 37 % mænd og 63 % kvinder. Ud af de 1.000 telefonhenvendelser som Dansk Antistalking Forening havde registreret i 2015 var der i 82 procent af tilfældene er tale om en mandlig stalker.</p>
            <p>Omkring 90 procent af ofrene for såkaldt hævnporno er kvinder ifølge en amerikansk undersøgelse (der er ikke lavet nogle større undersøgelser i Danmark).</p>
            <p>Sammenlagt er der 60 % af danske kvinder som i EU undersøgelsen fra 2014 svarer ja til, at de har været udsat for psykiske overgreb fra en partner siden de fyldte 15 år. Herunder tæller kontrollerende adfærd, krænkende adfærd, såkaldt økonomisk vold og trusler om eller vold mod kvindens børn.</p>
            <p>Sexisme er udbredt i medierne med fokus på kvinders udseende fremfor præstationer og en skæv kønsfordeling i personer der interviewes som eksperter. Det samme gør sig gældende i reklamer, hvor kvinder ofte portrætteres afklædte og både mænd og kvinder præsenteres i kønsstereotype roller. I kulturlivet er kvinders udseende også et stærkere fokus end mænds, ligesom kvindelige kunstnere er dårligere repræsenterede på fx museer og på scenen.</p>
            <p>Fokus på kvinders kroppe i stedet for deres kunnen er udbredt både på arbejdet og i det private liv. Det anses fx som normalt at skulle finde sig i kommentarer som “smil” og “god røv” fra tilfældige forbipasserende, når man er kvinde, fordi man skal tage det som en kompliment.</p>
            <p>I nattelivet er almindeligt som kvinde at blive udsat for gramserier, og hvis man siger fra fører det ofte til en aggressiv reaktion. I den offentlige transport er der ligeledes en del, der føler sig utrygge, fordi de har prøvet at blive udsat for seksuel chikane af medpassagerer.</p>
            <p>Kvindelige politikere udsættes for chikane som går på deres køn i et omfang, som klart overstiger de mandlige politikeres.</p>
            <p>I institutioner og i skolen bliver drenge og piger stadig nogle steder opdelt efter det, man formoder er deres interesser baseret på gamle stereotyper om, at piger (kun) er interesserede i noget der er stillesiddende og har med udseende eller nuttede dyr at gøre, og drenge (altid) interesserede i noget “vildt” og sport. <br /><br />Sexisme udtrykt som kønsstereotyper kan begrænse og skade individet fx når omverdenens forventninger – og latterliggørelse, hvis man ikke lever op til dem – bliver bestemmende for, hvordan man ser sig selv som individ, behandler andre eller vælger arbejde. Og drenge/mænd rammes selvfølgelig også af dette. Denne type sexisme er udbredt mange steder i Danmark.</p>
            <p>Sammenfattende så mener vi at sexisme i Danmark er et stort nok problem til at det er værd at beskæftige sig med og bekæmpe.</p>
          </>,
      },
      {
        question:
          "Alt det der med et klap i røven eller en sjov bemærkning er da ikke så vigtigt. Hvorfor skriver I ikke kun om de vigtige ting som fx voldtægt?",
        answer:
          <>
            <p> I Danmark har vi meget travlt med at fremstille personer, der taler om sexisme som hysteriske, snerpede, humorforladte og puritanske personer, der ikke forstår at sætte tingene i proportioner. Derfor passer det folk virkelig godt, hvis de kan fremstille foreninger som vores, som nogen der blæser små ting op til kæmpe problemer. Hvis man følger med på vores SoMe vil man dog se, at vi beskæftiger os med både mindre og større problematikker.</p>
            <p> Det gør vi, fordi de “små ting” er en lille dråbe som dryp, dryp, dryp sammen med alle mulige andre fremstillinger i medier, reklamer osv., der objektgør og seksualiserer kvinder lægger sig til de andre dryp, dryp, dryp af kvindenedgørende omtale og behandling, som sammen med gramserier, chikane og overgreb bliver til den flod af hverdagssexisme, som rigtig mange kvinder skal svømme igennem, hvor mændene stort set tørskoede kan slentre over broen af grundlæggende respekt for deres menneskelighed til den anden side. Så lad os slå det fast én gang for alle: Nej, det er ikke alt vi taler/skriver om der er det største problem i verden. Det, vi ønsker, er ved at skrive om “små ting” er, at man tænker over, hvordan kønsstereotyper er med til at normalisere forskelsbehandling og forskellige forventninger til kønnene – hvilket ER skadeligt vel og mærke for alle køn. Fx ifht drenge og mænd, der føler de skal leve op til et billede af at være en “rigtig” dreng/mand og ikke kan, og får det dårligt fordi de dermed udskammes som forkerte – og fx ikke lærer at mænd godt kan opleve overgreb og gerne må være svage og bede om hjælp. Eller at kvinder ”for sjov” anses som hysteriske når de har menstruation, hvilket bruges til at affærdige berettiget kritik eller en bøn om hjælp som overdrevet og derfor usand.</p>
          </>,
      },
      {
        question: "Er I ikke med til at skabe unødige konflikter?",
        answer:
          <>
            <p>Det hører aldrig ind under feel-good, når man påpeger et problem, men det hører under nødvendighed, hvis man skal have løst det. Et problem der skjules, kan ikke løses.</p>
            <p>Man kan spørge hvem der egentlig skaber en dårlig stemning; er det dem der opfører sig grænseoverskridende eller dem, der påpeger at de er det? Vi forsøger ikke at fortælle enkeltpersoner at de er skyld i alt eller fx at alle mænd er dumme, vi ønsker at påpege det dårlige ved en kultur, der understøtter sexistiske holdninger og opførsel. Derfor mener vi ikke at vi ”skaber” konflikter, men nogle gange har vi desværre oplevet at når vi har peget på sexisme, så bliver det blæst ud af proportioner. Det er desværre et vilkår, når vi har medier der er interesseret i konfliktstof, bliver det desværre blæst ud af proportioner.</p>
          </>,
      },
      {
        question:
          "Men må der nu ikke være forskel på kønnene? Alle skal vel ikke være ens?",
        answer:
          <>
            <p>Sexisme er blandt andet når folk putter hinanden ind i ’kasser’, der er baseret på stereotype forestillinger om hvordan de to køn skal være hver især. Derfor er det netop en pointe at man ikke skal behandle alle ens, men anerkende at folk er forskellige – også på tværs af køn. Hvis en dreng kan lide at spille fodbold og er en ”vildbasse” er det fint, men det er også fint hvis han ikke gider fodbold og hellere vil sidde stille og strikke. Derfor skal vi droppe at kalde ham for en ”tøsedreng”, hvilket i sig selv indikerer at det at være pige ikke er ønskeligt. Det samme gælder for piger. Hvis din niece bare elsker prinsessekjoler og at sidde og tegne nuttede dyr er det selvfølgelig helt i orden, men det er det også hvis hun mudrer kjolen til og ikke kan sidde stille – det gør hende ikke til en ”drengepige”. Som det er nu styres meget af vores adfærd over både børn og voksne af hvordan vi opfatter deres køn. Forskning viser at der er lige så meget forskel på hjernen indenfor kønnene (kvinder og kvinder imellem eller mænd og mænd imellem) som der er imellem kønnene. Der er ingen der helt præcist kan redegøre for hvad hormoner fx gør for adfærd og interesser og hvad der kan henføres til kultur, men meget af det vi tidligere har troet var afhængigt af køn har vist sig at være kultur. Derfor er der ingen grund til at begrænse den måde vi behandler børn og voksne ud fra vores opfattelse af køn.</p>
          </>,
      
      },
    ],
  },
  {
    title: "Er vi ikke bare nogle krænkede feminister?",
    items: [
      {
        question: "Er jeres projekt ikke bare et udtryk for krænkelseskultur?",
        answer:
          <>
            <p>Det med at bruge ordet “krænkelseskultur” er i bedste fald en misforstået og underlig måde at forsøge at lukke munden på folk, der kritiserer noget, man er uenig i. I værste fald bidrager det til at ofre for diverse former for overgreb ikke tør tale om det.</p>
          </>,
      },
      {
        question:
          "Hvorfor er det et problem, hvis en fyr giver en pige en kompliment på gaden?",
        answer:
          <>
            <p>Det er ikke en kompliment, hvis det føles ubehageligt, truende, nedladende og respektløst. Nogle synes det er dejligt at fremmede kommenterer deres udseende – mange synes ikke. Så hvis man reelt er interesseret i at give en kompliment, så må man gå ind på præmissen, at det er noget, der skal få den anden person til at synes det er rart og føles godt. Hvis ikke den anden person synes det, så er det ikke en kompliment. Så derfor er det sikreste at spare komplimenterne til dem man kender og/eller fx give komplimenter, der går på stil, personlighed, eller præstationer – og <b>ikke</b> kropsdele. Og lad være med at forvente et ”tak” igen. Hvis modtageren ikke reagerer positivt, så må man tage imod det og reflektere – og aldrig blive aggressiv. Desværre oplever en del piger/kvinder at der er overdrevent fokus på deres udseende, og derfor har de ikke lyst til at få kommenteret det, uanset om det er godt ment.</p>
          </>

      },
      {
        question:
          "Kvinder kan jo bare sige fra. Gør I ikke kvinder til svage ofre ved den måde I taler om sexisme på?",
        answer:
          <>
            <p>Erfaringer viser netop, at problemet ikke kan løses bare ved at sige fra. Kvinder oplever alt fra udskamning til aggression, når de siger fra – og når det gælder voldtægt og andre fysiske og psykiske overgreb, så er det heller ikke let at sige fra. Tidligere oplevelser kan også sætte sig i kroppen og gøre det svært at ”sige fra” eller bare fjerne sig fra en ubehagelig situation. <br />Vi mener ikke at svaghed som begreb er relevant i en diskussion om strukturel ulighed og overgreb. Og hvis man er offer for et overgreb, så er det heller ikke noget der er forkert, det er bare et faktum. Der er heller ikke noget galt i at være eller føle sig svag. Kvinder kan ligesom mænd være stærke og svage og begge dele, men sexisme er et problem uanset hvad. Hvis man udsættes for sexisme, så er det ens ret at sige fra som individ, men det er aldrig en pligt – det er altid den der opfører sig grænseoverskridende eller dumt eller begår et overgreb, der har ansvaret. Vi taler netop ikke om sexisme som et individuelt problem fordi vi mener at det er et problem, der berører samfundet som helhed og derfor også bør løses af samfundet som helhed – alle køn.</p>
          </>
      },
      {
        question: "Er vi feminister?",
        answer:
        <>
          <p>ESPDer ikke et feministisk forum, og vi diskuterer ikke hvilken retning indenfor feminisme, der er den rigtige. Vi tilslutter os naturligvis alle at være feminister, da vi går ind for lige rettigheder for alle køn</p>
          <p>Vi diskuterer ikke om det er rigtigt at være afklædt eller påklædt, med eller uden make-up, med eller uden kropsbehåring, med eller uden tørklæde, burka eller niqab, men vi kæmper for at alle skal have lov til at være den de gerne vil og ikke bliver udskammet for det ene eller det andet.</p>
        </>

      },
    ],
  },
  {
    title: "Hvad med mændene",
    items: [
      {
        question: "Går I kun ind for ligestilling for kvinder?",
        answer:
          <>
            <p>Vi går ind for generel ligestilling, ens menneskerettigheder for alle og en række andre ting, men netop dette projekt har fokus på sexisme. Det betyder ikke at vi ikke anerkender, at mænd har udfordringer og mange af dem hænger sammen med den sexisme, vi forsøger at bekæmpe. Derfor har vi fx også et godt samarbejde med Daregender. Man kan heldigvis godt arbejde med en bestemt problemstilling, samtidig med at man anerkender andre.</p>
          </>
      },
      {
        question: "Kan mænd så også skrive ind, når de oplever sexisme?",
        answer:
          <>
            <p>Vi skriver nogle gange på sociale medier om de udfordringer mænd oplever, som har baggrund i kønsstereotyper, fx latterliggørelse når de fortæller om voldtægt. Alle er velkomne til at bidrage, men den sexisme vi har fokus på er den klassiske sexisme, der er rettet mod kvinder enkeltvis eller som køn.</p>
            <p>Fra link på britisk esp:
            Short definition: Sexism is both discrimination based on gender and the attitudes, stereotypes, and the cultural elements that promote this discrimination. Given the historical and continued imbalance of power, where men as a class are privileged over women as a class (see male privilege), an important, but often overlooked, part of the term is that sexism is prejudice pluspower. Thus feminists reject the notion that women can be sexist towards men because women lack the institutional power that men have.
            ..That ‘+ power’ portion of the equation is one of the most important parts. This is not to say that the disenfranchised cannot be prejudiced, because many of them are, but without power, they are not actually working within the systematic framework of advantage created by the majority to privilege themselves. Thus it is only “racism” if the person is capable of using that framework; otherwise, it is prejudice”</p>
            <p>Det betyder ikke at sexisme ikke skader mænd. Mænd oplever også at kønsstereotyper begrænser dem og at de mødes med diskrimination og fordomme. Mænd bliver fx også udsat for partnervold og voldtægt, men omfanget og den kulturelle baggrund er ikke den samme som for kvinder.</p>
          </>
      },
      {
        question: "Men det er jo ikke alle mænd, der begår overgreb og vold!",
        answer:
          <>
            <p>Fællestrækkene for vold og drab er at mænd i altovervejende grad er dem, der er gerningsperson, både når ofrene er mænd og kvinder. I godt ni ud af ti voldstilfælde er gerningspersonen en mand. Kvinder er i altovervejende grad ofre for partnervold, partnerdrab, seksualiseret vold og vold på arbejdet. Mænd er i højere grad udsat for vold, overfald fra fremmede og vold på offentlige steder og blandt drabsofre de seneste 25 år er 60 % mænd.</p>
            <p>ESPD mener ikke at mænds vold er uundgåelig og en del af deres biologi, som derfor ikke kan ændres. Hvis det var tilfældet, ville vi se de mænd, der begår seksualiserede overgreb og vold “i affekt”, “fordi de var pressede”, “provokerede” eller “opstemte” og “blevet forført” gøre det i langt flere situationer, fx hvor der var vidner, sammen med mænd der ikke delte deres kvindesyn, på stranden om sommeren osv. Vi ville også se flere mænd i det hele taget, der begår vold uanset tid og sted – og det tal er faktisk for nedadgående.</p>
            <p>Vi mener at det er respektløst over for mænd at tænke, at voldsproblemet er en kvindesag, og fortælle dem, at de er styret af biologi, og vi ikke kan gøre noget med fornuft og kultur. Vi har en fælles sag omend problemet har en kønnet slagside. Så det er ikke mandehad at tale om, at mænd udøver gruppevoldtægter, myrder fordi deres kone vil gå fra dem eller køber rohypnol for at drugge og begå overgreb. Det er et wake-up call til os allesammen om at indse, at vi kan gøre en forskel ved at se på, hvordan nogle maskulinitetsidealer er skadelige for kvinder – og mænd. Voldtægt og partnervold er selvfølgelig ikke kun et spørgsmål om had mod kvinder, men mere generelt et problem, som handler om hvordan mænd i mange kulturer – herunder den vestlige verden – får indprentet en måde at anskue maskulinitet, som skader ikke bare dem selv, men også ofte omgivelserne (nej ikke alle mænd og nej ikke alle former for maskulinitet – se længere nede).</p>
            <p>Som phd. og mandeforsker Jackson Katz skriver:</p>
            <p>“We talk amongst ourselves about how so many boys and men in our society are conditioned to see violence as a solution to their problems, a resolution of their anxieties, or a means of exacting revenge against those they perceive as taking something from them. We share with each other news stories, websites and YouTube videos that demonstrate the connection between deeply ingrained cultural ideas about manhood and individual acts of violence that operationalize those ideas…”</p>
            <p>“Don’t buy the manipulative argument that it’s somehow “anti-male” to focus on questions about manhood in the wake of these ongoing tragedies. Men commit the vast majority of violence and almost all rampage killings. It’s long past time that we summoned the courage as a society to look this fact squarely in the eye and then do something about it. Women in media can initiate this discussion, but men bear the ultimate responsibility for addressing the masculinity crisis at the heart of these tragedies.”</p>
            <p>For nej SELVFØLGELIG handler dette her ikke om mænd eller maskulinitet i al almindelighed. Det handler om den skadelige del af maskulinitetskulturen. Den har vi alle sammen et ansvar for at stoppe og sige fra overfor. For den fører i sidste instans til tragedier ikke blot i enkelte personers liv – mænd, kvinders og andres – men også på et større plan.</p>
          </>
          },
    ],
  },
  {
    title: "Om vores indsamling af oplevelser",
    items: [
      {
        question: "Har I tjekket, om alle de oplevelser I får ind er rigtige?",
        answer:
          <>
            <p>Vi er åbne om, at vi selvsagt ikke har overværet samtlige indrapporterede hændelser og heller ikke hørt sexisme-udøvernes version af sagerne. Vi dokumenterer altså på samme måde som medier dagligt gør i ethvert personligt interview om oplevelser, hvor modparten ikke også opsøges af journalisten og oplevelsen ej heller er registreret via rapporter, film/lydoptagelser eller med uvildige vidner. Typen af interviews kaldes ”erfaringsinterviews.” Her har man også ofte en undersøgelse eller statistik som udgangspunkt, og så finder man en såkaldt ”case”, altså en person som repræsenterer erfaring med emnet for det indsamlede materiale. Her er det normal praksis at lade vedkommendes ord stå til troende i og med at statistik/undersøgelse viser at typen af erfaring har en udbredelse, som i sig selv sandsynliggør sandhedsværdien i casens udsagn.</p>
            <p>De fleste oplevelser på hjemmesiden er nogle vi har indsamlet rundt omkring på sociale medier herunder vores egne sider, hvor vi har spurgt dem der har beskrevet en oplevelse, om vi måtte poste den anonymiseret. En del andre oplevelser har vi fået fortalt, når vi har været ude fx på Roskilde Festival eller andre steder. Her har vi gentaget det personen har fortalt, og efter at have fået tilladelse skrevet oplevelsen ind. En mindre del af oplevelserne er nogle folk selv har indtastet uden forudgående kontakt. Her læser vi alt igennem før det publiceres, og hvis der er navne der kan afsløre personer eller steder, der ikke kan tage til genmæle, så anonymiseres det. Vi poster ikke oplevelser vi af forskellige årsager synes virker utroværdige eller som ikke er relevante for projektet. Vi kan naturligvis ikke garantere at folk ikke fortæller os løgne, men de oplevelser vi får ind understøttes af statistikker og undersøgelser.</p>
          </>
      },
      {
        question:
          "Hvordan kan det ændre noget, at en masse kvinder fortæller, hvad de har oplevet?",
        answer:
          <>
          <p>Vi har siden 2013 indsamlet over 3500 oplevelser på vores hjemmeside <a href="http://www.danmark.everydaysexism.com/">www.danmark.everydaysexism.com</a>. For det første kan oplevelserne vise noget om omfanget og de mange måder sexisme eksisterer på, så det bliver taget alvorligt. For det andet kan det, at andre kvinder fortæller deres historier, gøre det acceptabelt for stadig flere at tale om deres egne oplevelser. På den måde kan den enkelte få bevis for, at det ikke bare er hende, der er snerpet, sart eller forkert, sådan som mange kvinder føler, når de fortæller om sexisme, de har oplevet. Det kan af-individualisere problemet, og måske kan det også føre til at flere – af alle køn – begynder at være opmærksomme på og sige fra overfor grænseoverskridende eller krænkende adfærd.</p>
          <p>Fra link på britisk esp:</p>
          <p><strong>Short definition:&nbsp;</strong>Sexism is both discrimination based on gender and the attitudes, stereotypes, and the cultural elements that promote this discrimination. Given the historical and continued imbalance of power, where men as a class are privileged over women as a class (see <a href="http://finallyfeminism101.wordpress.com/2007/03/11/faq-what-is-male-privilege/">male privilege</a>), an important, but often overlooked, part of the term is that sexism is prejudice <em>plus</em>power. Thus feminists reject the notion that women can be sexist towards men because women lack the institutional power that men have.</p>
          <p>That ‘+ power’ portion of the equation is one of the most important parts. This is not to say that the disenfranchised cannot be prejudiced, because many of them are, but without power, they are not actually working within the systematic framework of advantage created by the majority to privilege themselves. Thus it is only “racism” if the person is capable of using that framework; otherwise, it is prejudice.</p>
          <p>Det betyder ikke at sexisme ikke skader mænd, selvom det i særlig grad er noget piger/kvinder kæmper med nu og har kæmpet med historisk. Mænd oplever også at kønsstereotyper begrænser dem og at de mødes med diskrimination og fordomme. Mænd bliver fx også udsat for partnervold og voldtægt – og det er rædselsfuldt – forskellen er at omfanget er ikke det samme, som for; kvinder og det har ikke samme kulturelle baggrund. Sexisme er fordomme, stereotyper og diskrimination på baggrund af køn og det har historisk og kulturelt givet sig udslag på forskellig måde afhængig af køn og det skader forskelligt både ifht omfang og indhold.</p>
          </>,
      },
      {
        question: "Hvorfor er vores oplevelser anonymiserede?",
        answer:
          <>
            <p>Alle specifikke navne på arbejdspladser, uddannelsessteder eller lignende bliver generelt set fjernet inden bidragene bliver offentliggjort. Ligeledes skjuler vi næsten altid profilbilleder og navne, hvis vi deler opslag eller kommentarer.</p>
            <p>&nbsp;Dette sker under hensyntagen til, at de pågældende steder eller personer ikke har mulighed for at tage til genmæle over for den fremlagte beretning.<span className="apple-converted-space">&nbsp;Vi har heller ikke til hensigt at hænge nogen ud, men kun at gøre opmærksom på tendenser og problemstillinger.&nbsp;</span></p>
          </>

      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="absolute inset-0">
          <Image
            src={faqBanner}
            alt="FAQ"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white">
            FAQ
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* FAQ accordion */}
      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 space-y-12">
          {faqSections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-heading text-xl md:text-2xl font-semibold uppercase text-dark-text">
                {section.title}
              </h2>
              <div>
                {section.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
