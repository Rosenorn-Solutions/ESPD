import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import bannerImage from "./lifering.jpg";

export const metadata: Metadata = {
  title: "Hvor kan jeg få hjælp? — Everyday Sexism Project Danmark",
  description:
    "Er du udsat for overgreb eller vold? Her finder du hjælp og ressourcer.",
};

interface HelpResource {
  name: string;
  description: string;
  href: string;
  linkLabel: string;
}

interface HelpGroup {
  title: string;
  resources: HelpResource[];
}

interface HelpSection {
  title: string;
  groups: HelpGroup[];
}

const helpSections: HelpSection[] = [
  {
    title:
      "Hjælp til personer udsat for voldtægtsforsøg, voldtægt eller andre seksualiserede overgreb",
    groups: [
      {
        title: "Akut hjælp fra regionshospitalerne",
        resources: [
          {
            name: "Center for Voldtægtsofre, Aalborg Universitetshospital",
            description:
              "Er et tværfagligt center, der tilbyder behandling til personer, der har været udsat for en voldtægt eller forsøg på voldtægt.",
            href: "https://aalborguh.rn.dk/afsnit-og-ambulatorier/sexologisk-center/afsnit/center-for-voldtaegtsofre",
            linkLabel: "Kontakt aalborguh.rn.dk",
          },
          {
            name: "Center for Voldtægtsofre, Regionshospitalet Herning",
            description:
              "Tilbyder hjælp efter et seksuelt overgreb, voldtægt eller voldtægtsforsøg.",
            href: "https://www.vest.rm.dk/afdelinger/akutafdelingen/om-os/afsnit/center-for-voldtaegtsofre/",
            linkLabel: "Kontakt vest.rm.dk",
          },
          {
            name: "Center for Voldtægtsofre, Aarhus Universitetshospital",
            description:
              "Kan hjælpe dig, hvis du har været udsat for en voldtægt, voldtægtsforsøg eller et andet seksualiseret overgreb.",
            href: "https://www.voldtaegt.dk/",
            linkLabel: "Kontakt voldtaegt.dk",
          },
          {
            name: "Center for Voldtægtsofre, Kolding Sygehus",
            description:
              "Modtager unge piger og drenge samt voksne kvinder og mænd, der har været udsat for seksualiseret vold.",
            href: "http://www.sygehuslillebaelt.dk/wm225685",
            linkLabel: "Kontakt sygehuslillebaelt.dk",
          },
          {
            name: "Center for Voldtægtsofre, Odense Universitetshospital",
            description:
              "Tilbyder hjælp til både unge og ældre, kvinder og mænd, der har været udsat for voldtægt eller voldtægtsforsøg.",
            href: "https://www.regionsyddanmark.dk/wm374185",
            linkLabel: "Kontakt regionsyddanmark.dk",
          },
          {
            name: "Center for Voldtægtsofre, Nykøbing F.",
            description:
              "Hvis du har været udsat for voldtægt eller et seksuelt overgreb, kan du få hjælp på et af de to centre i Region Sjælland på Nykøbing F. Sygehus og Holbæk Sygehus.",
            href: "https://www.regionsjaelland.dk/Sundhed/Andre-sundhedstilbud/Centre-for-Voldtaegtsofre/Sider/default.aspx",
            linkLabel: "Kontakt regionsjaelland.dk",
          },
          {
            name: "Center for Voldtægtsofre, Holbæk Sygehus",
            description:
              "Hvis du har været udsat for voldtægt eller et seksuelt overgreb, kan du få hjælp på et af de to centre i Region Sjælland på Nykøbing F. Sygehus og Holbæk Sygehus.",
            href: "https://www.regionsjaelland.dk/Sundhed/Andre-sundhedstilbud/Centre-for-Voldtaegtsofre/Sider/default.aspx",
            linkLabel: "Kontakt regionsjaelland.dk",
          },
          {
            name: "Center for Voldtægtsofre, Nordsjællands Hospital, Hillerød",
            description:
              "På Klinik for Voldtægtsofre kan du få gratis hjælp, hvis du har været udsat for voldtægt, voldtægtsforsøg eller seksuelt overgreb.",
            href: "https://www.nordsjaellandshospital.dk/afdelinger-og-klinikker/gynaekologisk-obstetrisk-afdeling/gynaekologi/ambulatorier/Sider/Klinik-for-Voldtaegtsofre.aspx",
            linkLabel: "Kontakt nordsjaellandshospital.dk",
          },
          {
            name: "Center for Seksuelle Overgreb, Rigshospitalet",
            description:
              "Tager sig af børn, unge og voksne i Region Hovedstaden, der har været udsat for et seksuelt overgreb.",
            href: "https://www.rigshospitalet.dk/afdelinger-og-klinikker/julianemarie/center-for-seksuelle-overgreb/Sider/default.aspx",
            linkLabel: "Kontakt rigshospitalet.dk",
          },
        ],
      },
      {
        title: "Hjælp fra andre organisationer",
        resources: [
          {
            name: "Joan Søstrene",
            description:
              "Rådgiver kvinder, som har været udsat for vold, voldtægt, incest eller seksuel chikane.",
            href: "http://www.joan-soestrene.dk/?fbclid=IwAR1OIJBNCAQKwnLjLrDfKGYEDXVAiR60hWUry-hOkIYWHpr5IxS9fruR0c4",
            linkLabel: "Kontakt joan-soestrene.dk",
          },
          {
            name: "Landsorganisationen mod Seksuelle Overgreb (LMSO)",
            description:
              "Hjælper personer udsat for seksuelle overgreb. Der findes 19 medlemscentre over hele landet, og de har også en hotline-telefon.",
            href: "https://www.lmso.dk/",
            linkLabel: "Kontakt lmso.dk",
          },
        ],
      },
      {
        title: "Særligt for voksne, der har været udsat for overgreb i barndommen",
        resources: [
          {
            name: "Kvisten",
            description:
              "Er en organisation, der laver frivilligt socialt arbejde for personer, der har været udsat for seksuelle overgreb. De tilbyder behandling til voksne over 18 år, hvor overgrebet har fundet sted inden det fyldte 18 år.",
            href: "https://www.kvistene.dk/om-kvisten/",
            linkLabel: "Kontakt kvistene.dk",
          },
          {
            name: "Center for Seksuelt Misbrugte (CSM)",
            description:
              "Tilbyder rådgivning, socialrådgivning og psykologbehandling for personer over 18 år, der har været udsat for incest eller andre seksualiserede overgreb i barndommen.",
            href: "https://csm-danmark.dk/ost/",
            linkLabel: "Kontakt CSM-Danmark.dk",
          },
        ],
      },
    ],
  },
  {
    title: "Hjælp til personer udsat for vold",
    groups: [
      {
        title: "",
        resources: [
          {
            name: "Hjælp Voldsofre",
            description:
              "Arbejder for at hjælpe udsatte for vold. Er du offer for vold eller pårørende til et offer.",
            href: "http://voldsofre.dk/",
            linkLabel: "Kontakt voldsofre.dk",
          },
          {
            name: "Lev Uden Vold",
            description:
              "Er et videnscenter, der arbejder for at sikre mere og bedre hjælp til mennesker, der oplever vold i nære relationer. De tilbyder hjælp og rådgivning.",
            href: "https://levudenvold.dk/",
            linkLabel: "Kontakt levudenvold.dk",
          },
          {
            name: "Liste over kvindekrisecentre",
            description: "Se liste over kvindekrisecentre.",
            href: "https://www.lokk.dk/krisecentre/liste-over-krisecentre/",
            linkLabel: "Se liste HER",
          },
          {
            name: "Liste over mandekrisecentre",
            description: "Se liste over mandekrisecentre.",
            href: "https://levudenvold.dk/for-fagfolk/krisecentre-og-andre-radgivningstilbud/mandekrisecentre/",
            linkLabel: "Se liste HER",
          },
        ],
      },
    ],
  },
  {
    title: "Hjælp til personer udsat for en voldsom hændelse",
    groups: [
      {
        title: "",
        resources: [
          {
            name: "Offerrådgivningen",
            description:
              "Hjælper ofre, vidner og pårørende i forbindelse med voldsomme og chokerende oplevelser som ulykker, kriminalitet og trafikuheld.",
            href: "https://offerraadgivning.dk/forside/er-du-offer/",
            linkLabel: "Kontakt offerraadgivning.dk",
          },
          {
            name: "Tegn Ud af Volden",
            description:
              "Hjælper kvinder med hørenedsættelse, der taler tegnsprog.",
            href: "http://tegnudafvolden.dk/",
            linkLabel: "Kontakt Tegn Ud af Volden",
          },
        ],
      },
    ],
  },
  {
    title: "Hjælp til stalkingramte",
    groups: [
      {
        title: "",
        resources: [
          {
            name: "Dansk Stalking Center",
            description:
              "Tilbyder hjælp til personer udsat for stalking og digital stalking samt for stalkere.",
            href: "https://www.danskstalkingcenter.dk/",
            linkLabel: "Kontakt danskstalkingcenter.dk",
          },
        ],
      },
    ],
  },
  {
    title: "Hjælp til ofre for digitale krænkelser",
    groups: [
      {
        title: "",
        resources: [
          {
            name: "Red Barnet",
            description:
              "Er du under 18 år, og har fået delt billeder eller video uden dit samtykke, kan du få hjælp hos Red Barnet.",
            href: "https://redbarnet.dk/sletdet/",
            linkLabel: "Kontakt redbarnet.dk",
          },
          {
            name: "Dansk Kvindesamfund StopChikane",
            description:
              "Er du over 18 år og er eller har været udsat for digitale billedkrænkelser, kan du få hjælp hos Dansk Kvindesamfunds tilbud StopChikane.",
            href: "https://danskkvindesamfund.dk/stopchikane/",
            linkLabel: "Kontakt danskkvindesamfund.dk",
          },
          {
            name: "Anmeld digitale krænkelser",
            description:
              "Ønsker du at anmelde en digital krænkelse, herunder dick pics, kan du gøre det online.",
            href: "https://www.politi.dk/da/borgerservice/anmeldelser/digitalesexkraenkelser",
            linkLabel: "Anmeld online HER",
          },
        ],
      },
    ],
  },
];

export default function FindHjaelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-black text-white">
        <Image
          src={bannerImage}
          alt="Livredningskrans på vand"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-black/45" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[300px] max-w-[1200px] items-center justify-center px-4 py-16 text-center md:min-h-[380px] md:py-24">
          <div className="bg-white px-6 py-3 shadow-sm md:px-8 md:py-4">
            <h1 className="font-heading text-2xl font-bold uppercase leading-tight text-accent-gold md:text-3xl">
              Udsat for overgreb eller vold?
              <br />
              Find hjælp her
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Kontakt" },
          { label: "Hvor kan jeg få hjælp?" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <div className="space-y-6 font-body leading-relaxed text-body-text">
            <p>
              ESPD har udarbejdet en liste over steder, hvor du eller dine
              nærmeste kan få hjælp. Er du, eller en der er tæt på dig, udsat
              for vold, overgreb, voldtægt, stalking eller lignende, kan man
              henvende sig hos nedenstående organisationer og centre.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {helpSections.map((section) => (
              <section key={section.title} className="space-y-6">
                <h2 className="font-heading text-xl font-semibold uppercase text-dark-text md:text-2xl">
                  {section.title}
                </h2>

                {section.groups.map((group) => (
                  <div key={`${section.title}-${group.title || "default"}`} className="space-y-4">
                    {group.title ? (
                      <h3 className="font-heading text-base font-semibold uppercase text-dark-text">
                        {group.title}
                      </h3>
                    ) : null}

                    <div className="space-y-6">
                      {group.resources.map((resource) => (
                        <div
                          key={resource.name}
                          className="rounded-sm border border-gray-200 p-6"
                        >
                          <h4 className="mb-2 font-heading text-lg font-semibold text-dark-text">
                            {resource.name}
                          </h4>
                          <p className="mb-3 font-body text-sm text-body-text">
                            {resource.description}
                          </p>
                          <Link
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-dark-text underline transition-colors hover:text-accent-gold"
                          >
                            {resource.linkLabel}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
