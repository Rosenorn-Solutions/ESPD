import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  heading?: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  backgroundClass?: string;
}

export function ContentSection({
  heading,
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
          <h2 className="mb-8 text-center font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-dark-text">
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
          <div className="flex-1 font-body text-body-text leading-relaxed space-y-4">
            {children}
          </div>

          {imageSrc && (
            <div className="flex-1 w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto rounded-sm object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
