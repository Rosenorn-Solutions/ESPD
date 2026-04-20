import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sexisme i Gaming og Rollespil — Everyday Sexism Project Danmark",
  description:
    "ESPDs samarbejde om sexisme i gaming- og rollespilsmiljøet.",
};

export default function SexismeIGamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Sexisme i Gaming og Rollespil
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Vores arbejde" },
          { label: "Samarbejde" },
          { label: "Sexisme i Gaming og Rollespil" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-12">

          {/* ── Citater og oplevelser ─────────────────────── */}
          <div className="space-y-4">
            <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
              &ldquo;Jeg oplever klamme kommentarer i massevis. Og folk der begynder at spørge om personlige ting: ’hvor mange har du haft sex med?’ ’Hvor bor du?’ ’Er du alene?’ ’Hvad har du på?’ Ting som de aldrig ville spørge en mandelig spiller om.&rdquo;
              <br />
              <span className="not-italic text-sm">Fra danmark.everydaysexism.com</span>
            </blockquote>
            <p>
              Kvinder oplever i rollespil, at grænsen mellem deres karakter og deres virkelige person bliver forsøgt udvisket, og i gamingmiljøet er der historier om lumre kommentarspor relateret til kvinders udseende. Mange kvinder i rollespilsmiljøet har længe forsøgt at bekæmpe sexismen indefra, men oplevede at deres bekymringer blev slået hen med victimshaming, og at højtrangerende arrangører holdt hånden over hinanden, selv når de havde kendskab til grænseoverskridende adfærd.
            </p>
          </div>

          {/* ── ESPDs arbejde og samarbejde ──────────────── */}
          <div className="space-y-4">
            <p>
              Efter at ESPD blev gjort opmærksom på den sexistiske omgangstone i gamingmiljøet, startede vi i 2017 et samarbejde med rollespillere. Vi blev sat i forbindelse med to kvindelige gamere, der også spiller rollespil og er aktive i Larp Woman Unite (Larp: Live Action Role Play). Det blev startskuddet på et langvarigt samarbejde mellem ESPD og Landsforeningen for Rollespil, Bifrost.
            </p>
            <p>
              ESPD har siden haft stande på blandt andet rollespilsscenariet Sunfall og rollespilskongressen Forum, hvor vi oplyste om sexisme. Vi har også haft møder og holdt oplæg i Landsforeningen for Rollespil, med og for en bred skare af medlemmer. Vi ønsker fremadrettet at være mere opsøgende overfor online gamingmiljøet og indsamle viden og flere historier fra de mange kvinder, der gamer og spiller rollespil.
            </p>
            <p>
              Selvom kønsfordelingen i gamermiljøet er tæt på at være lige, vælger de kvinder vi talte med, af frygt for chikane, ikke at oplyse deres køn når de spiller online. Rollespilskulturen beskrives som et indspist miljø, hvor voksne mænd længe er sluppet konsekvensfrit fra at groome og isolere nytilkomne piger, også dem under 18 år.
            </p>
          </div>

          {/* ── Del din historie ───────────────────────────── */}
          <div className="space-y-4">
            <p>
              Har du oplevet sexisme i gaming eller rollespil? Du kan dele din historie anonymt på
              {" "}
              <a
                href="http://danmark.everydaysexism.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                danmark.everydaysexism.com
              </a>
              .
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
