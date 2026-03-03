import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const socialPlatforms = [
  {
    name: "Facebook",
    icon: FaFacebookSquare,
    href: "https://da-dk.facebook.com/TheEverydaySexismProjectDanmark/",
    embedPlaceholder: "Facebook-side feed",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/everydaysexismprojectdanmark/",
    embedPlaceholder: "Instagram feed",
  },
  {
    name: "Twitter",
    icon: FaTwitterSquare,
    href: "https://twitter.com/espdanmark",
    embedPlaceholder: "Twitter tidslinje",
  },
];

interface SocialFeedSectionProps {
  heading?: string;
  description?: string;
}

export function SocialFeedSection({
  heading = "Følg os her",
  description,
}: SocialFeedSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <h2 className="mb-4 text-center font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-dark-text">
          {heading}
        </h2>

        {description && (
          <p className="mx-auto mb-10 max-w-[700px] text-center font-body text-body-text leading-relaxed">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="text-center">
              <Link
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-primary-black hover:text-accent-gold transition-colors mb-4"
                aria-label={platform.name}
              >
                <platform.icon className="w-10 h-10" />
              </Link>

              {/* Embed placeholder – replaced with real embeds after cookie consent */}
              <div className="rounded-sm border border-gray-200 bg-gray-50 p-6 min-h-[300px] flex items-center justify-center">
                <p className="text-sm text-body-text">
                  {platform.embedPlaceholder}
                  <br />
                  <span className="text-xs text-light-gray">
                    (Indlæses efter cookie-samtykke)
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
