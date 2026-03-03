import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AccordionItem } from "@/components/ui/AccordionItem";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Ofte stillede spørgsmål om Everyday Sexism Project Danmark og hverdagssexisme.",
};

/**
 * Placeholder FAQ items – in production these come from Sanity CMS.
 */
const faqItems: FAQItem[] = [
  {
    question: "Hvad er Everyday Sexism Project Danmark?",
    answer:
      "ESPD er en frivilligdrevet NGO, der bekæmper og oplyser om hverdagssexisme. Vi er den danske afdeling af det internationale Everyday Sexism Project.",
  },
  {
    question: "Hvad er hverdagssexisme?",
    answer:
      "Hverdagssexisme er den sexisme, som primært kvinder oplever i hverdagen – fra tilråb på gaden og seksualiserede kommentarer, til forskelsbehandling på arbejdspladsen og stereotype fremstillinger i medierne.",
  },
  {
    question: "Hvordan kan jeg bidrage?",
    answer:
      "Du kan bidrage ved at dele din oplevelse med hverdagssexisme på everydaysexism.com/country/dk, blive frivillig, eller støtte os økonomisk. Skriv til espdanmark@gmail.com for mere info.",
  },
  {
    question: "Hvordan bliver jeg frivillig?",
    answer:
      "Send en mail til espdfrivillig@gmail.com, så vender vi tilbage med information om, hvordan du kan bidrage til vores arbejde.",
  },
  {
    question: "Hvor holder I til?",
    answer:
      "Vi er primært aktive i Aarhus og København, men arbejder på tværs af hele Danmark gennem digitale kanaler og events.",
  },
  {
    question: "Kan I holde oplæg hos os?",
    answer:
      "Ja! Vi holder gerne oplæg om sexisme, samtykke, kønnet vold og relaterede emner. Kontakt os på espdanmark@gmail.com for at lave en aftale.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase">
            FAQ
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* FAQ accordion */}
      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
}
