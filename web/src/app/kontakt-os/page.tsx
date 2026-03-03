import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt os",
  description:
    "Kontakt Everyday Sexism Project Danmark – vi vil gerne høre fra dig.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
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
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase">
            Kontakt os
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt-os" }, { label: "Kontakt os" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16">
          <div className="mb-10 font-body text-body-text leading-relaxed space-y-4">
            <p>
              Har du spørgsmål, kommentarer eller vil du gerne samarbejde med os?
              Udfyld formularen nedenfor, eller skriv direkte til os på{" "}
              <a
                href="mailto:espdanmark@gmail.com"
                className="underline hover:text-accent-gold transition-colors text-dark-text"
              >
                espdanmark@gmail.com
              </a>
            </p>
            <p>
              Vil du være frivillig? Skriv til{" "}
              <a
                href="mailto:espdfrivillig@gmail.com"
                className="underline hover:text-accent-gold transition-colors text-dark-text"
              >
                espdfrivillig@gmail.com
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
