import type { Metadata } from "next";

import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kontakt os",
  description:
    "Kontakt Everyday Sexism Project Danmark – vi vil gerne høre fra dig.",
};

const socialLinks = [
  {
    href: "https://da-dk.facebook.com/TheEverydaySexismProjectDanmark/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/EspDanmark",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/everydaysexismprojectdanmark/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/espdanmark/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#FFDD00] text-primary-black">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-[50px] md:h-[80px]"
          >
            <path
              className="fill-white"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-black">
            Kontakt os
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Kontakt" }, { label: "Kontakt os" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
          <div className="mx-auto max-w-[800px] font-body text-body-text leading-relaxed space-y-4 text-center">
            <p>
              Du er meget velkommen til at kontakte os via nedenstående kontaktinformationer.
            </p>
            <p>
              Vi vender tilbage til dig hurtigst muligt.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex h-full flex-col items-center justify-between rounded-sm border border-light-gray bg-white p-6 text-center md:p-8">
              <div className="space-y-3">
                <FaEnvelope className="mx-auto h-10 w-10 text-accent-gold" aria-hidden="true" />
                <h2 className="font-heading text-xl font-bold uppercase text-dark-text">
                  Skriv til os
                </h2>
                <p className="font-body leading-relaxed text-body-text">
                  Medier, organisationer eller privatpersoner, der ønsker at booke ESPD til et
                  foredrag, kan kontakte os på nedenstående mail:
                </p>
              </div>
              <a
                href="mailto:espdanmark@gmail.com"
                className="mt-6 font-heading text-lg uppercase font-bold text-dark-text underline transition-colors hover:text-accent-gold"
              >
                espdanmark@gmail.com
              </a>
            </div>

            <div className="flex h-full flex-col items-center justify-between rounded-sm border border-light-gray bg-white p-6 text-center md:p-8">
              <div className="space-y-3">
                <FaPhone className="mx-auto h-10 w-10 text-accent-gold" aria-hidden="true" />
                <h2 className="font-heading text-xl font-bold uppercase text-dark-text">
                  Pressetelefon
                </h2>
                <p className="font-body leading-relaxed text-body-text">
                  Medievirksomheder, journalister og nyhedsorganisationer kan i hastesager
                  kontakte ESPD på telefon:
                </p>
              </div>
              <a
                href="tel:+4550550219"
                className="mt-6 font-heading text-lg uppercase font-bold text-dark-text underline transition-colors hover:text-accent-gold"
              >
                +45 50 55 02 19
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-light-gray pt-10 text-center">
            <h2 className="font-heading text-xl font-bold uppercase text-dark-text">
              Følg os
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-light-gray text-primary-black transition-colors hover:border-accent-gold hover:text-accent-gold"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
