import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  buttonTarget?: string;
}

export function CTASection({
  heading,
  description,
  buttonText,
  buttonLink,
  buttonTarget = "_blank",
}: CTASectionProps) {
  return (
    <section className="relative bg-primary-black text-white">
      {/* Curve divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
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

      <div className="mx-auto max-w-[800px] px-4 pt-24 pb-16 text-center">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
          {heading}
        </h2>

        {description && (
          <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-8">
            {description}
          </p>
        )}

        <Button href={buttonLink} variant="secondary" size="lg" target={buttonTarget}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
