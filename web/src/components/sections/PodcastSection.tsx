import Image from "next/image";
import Link from "next/link";

interface PodcastSectionProps {
  heading?: string;
  imageSrc: string;
  imageAlt?: string;
  podcastLink: string;
  linkText?: string;
}

export function PodcastSection({
  heading = "ESPD Podcast",
  imageSrc,
  imageAlt = "ESPD Podcast",
  podcastLink,
  linkText = "Klik her for at åbne podcast",
}: PodcastSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-6 font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-dark-text">
              {heading}
            </h2>
            <Link
              href={podcastLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={400}
                className="mx-auto md:mx-0 w-[300px] h-auto rounded-sm"
              />
            </Link>
            <p className="mt-4 font-body text-body-text">
              <Link
                href={podcastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent-gold transition-colors"
              >
                {linkText}
              </Link>
            </p>
          </div>

          <div className="flex-1">
            {/* Placeholder for TikTok or social embed */}
            <div className="rounded-sm bg-gray-50 p-8 text-center text-sm text-body-text">
              <p className="font-heading uppercase tracking-wide">
                Social medie indhold
              </p>
              <p className="mt-2 text-xs">
                TikTok / Instagram embed vises her efter cookie-samtykke
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
