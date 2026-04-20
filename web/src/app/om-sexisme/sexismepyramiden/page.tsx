import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sexismepyramiden — Everyday Sexism Project Danmark",
  description:
    "Forstå sexismepyramiden og de forskellige niveauer af sexistisk adfærd.",
};

export default function SexismepyramidenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Sexismepyramiden
          </h1>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Om sexisme" },
          { label: "Sexismepyramiden" },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16 font-body text-body-text leading-relaxed space-y-8">

          <p>
            Sexismepyramiden er et grafisk billede af, hvordan sexisme og voldtægtskultur
            påvirker vores hverdag på forskellige planer. Adfærd og holdninger, der accepteres
            og normaliseres på de nedre trin, er med til at muliggøre, forstærke og undskylde
            adfærd på de højere trin.
          </p>

          <p>
            Hvis omfanget af vold og seksualiserede overgreb mod kvinder skal ændres, må vi
            ændre kulturen først. Derfor opfordrer vi til, at alle siger fra over for sexisme
            i hverdagen.
          </p>

          {/* TODO: Download pyramid image and save to /public/images/sexismepyramiden.jpg */}
          <div className="relative w-full">
            <Image
              src="https://everydaysexismproject.dk/wp-content/uploads/2021/03/espd-pyramide-instagram-med-side-tekst-1-1024x907.jpg"
              alt="Sexismepyramiden — grafisk fremstilling af sexisme og voldtægtskultur på forskellige niveauer"
              width={1024}
              height={907}
              className="w-full h-auto rounded-sm"
            />
          </div>

          <p className="text-center font-heading font-semibold text-dark-text text-lg uppercase">
            Du kan være med til at ændre kulturen ved at sige fra over for sexisme i hverdagen!
          </p>

        </div>
      </section>
    </>
  );
}
