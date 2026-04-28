import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import controllersImage from "./controllers.jpg";
import gamingExperiencesImage from "./gaming_oplevelser.png";

export const metadata: Metadata = {
  title: "Sexisme i Gaming og Rollespil — Everyday Sexism Project Danmark",
  description:
    "ESPDs samarbejde om sexisme i gaming- og rollespilsmiljøet.",
};

const bannerImageUrl =
  "https://everydaysexismproject.dk/wp-content/uploads/2020/03/war-battle-middlage-25755-2.jpg";

export default function SexismeIGamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerImageUrl}
          alt="Fantasy-kampscene"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/55" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[280px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[360px] md:py-24">
          <div className="inline-flex bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase text-accent-gold md:text-3xl">
              Sexisme i Gaming og Rollespil
            </h1>
          </div>
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
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">

          {/* ── Citater og oplevelser ─────────────────────── */}
          <div className="grid gap-10 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] md:items-start">
            <figure className="order-2 md:order-1">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={gamingExperiencesImage}
                  alt="Grafik om oplevelser med sexisme i gaming"
                  width={1200}
                  height={1200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>

            <div className="order-1 space-y-4 font-body leading-relaxed text-body-text md:order-2">
              <blockquote className="border-l-4 border-accent-gold pl-4 italic text-dark-text">
                &ldquo;Jeg oplever klamme kommentarer i massevis. Og folk der begynder at spørge om personlige ting: ’hvor mange har du haft sex med?’ ’Hvor bor du?’ ’Er du alene?’ ’Hvad har du på?’ Ting som de aldrig ville spørge en mandelig spiller om.&rdquo;
                <br />
                <span className="text-sm not-italic">Fra danmark.everydaysexism.com</span>
              </blockquote>
              <p>
                Kvinder oplever i rollespil, at grænsen mellem deres karakter og deres virkelige person bliver forsøgt udvisket, og i gamingmiljøet er der historier om lumre kommentarspor relateret til kvinders udseende. Mange kvinder i rollespilsmiljøet har længe forsøgt at bekæmpe sexismen indefra, men oplevede at deres bekymringer blev slået hen med victimshaming, og at højtrangerende arrangører holdt hånden over hinanden, selv når de havde kendskab til grænseoverskridende adfærd.
              </p>
            </div>
          </div>

          {/* ── ESPDs arbejde og samarbejde ──────────────── */}
          <div className="mt-12 grid gap-10 border-t border-light-gray pt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:items-start">
            <div className="space-y-4 font-body leading-relaxed text-body-text">
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

            <figure className="space-y-3">
              <div className="overflow-hidden rounded-sm bg-light-gray/20 shadow-sm">
                <Image
                  src={controllersImage}
                  alt="Spillecontrollere"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="font-heading text-xs uppercase tracking-[0.15em] text-dark-text">
                HAR DU OPLEVET SEXISME I GAMING ELLER ROLLESPIL, KAN DU DELE DIN HISTORIE HER.
              </figcaption>
            </figure>
          </div>

          {/* ── Del din historie ───────────────────────────── */}
          <div className="mt-12 space-y-4 border-t border-light-gray pt-8 font-body leading-relaxed text-body-text">
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
