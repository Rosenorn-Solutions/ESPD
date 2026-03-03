import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  heading?: string;
  headingAlign?: "left" | "right" | "center";
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  backgroundClass?: string;
}

export function ContentSection({
  heading,
  headingAlign = "center",
  children,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  backgroundClass = "bg-white",
}: ContentSectionProps) {
  return (
    <section className={backgroundClass}>
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        {heading && (
          <h2
            className={cn(
              "mb-16 font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-dark-text",
              headingAlign === "left" && "text-left",
              headingAlign === "right" && "text-right",
              headingAlign === "center" && "text-center"
            )}
          >
            {heading}
          </h2>
        )}

        <div
          className={cn(
            "flex flex-col gap-8 items-center",
            imageSrc && "md:flex-row",
            imageSrc && imagePosition === "left" && "md:flex-row-reverse"
          )}
        >
          <div className="flex-1 max-w-md font-body text-xl text-body-text leading-relaxed space-y-4">
            {children}
          </div>

          {imageSrc && (
            <div className="flex-1 w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={485}
                height={404}
                className="rounded-sm object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
