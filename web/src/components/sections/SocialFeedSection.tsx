"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";

// Footer-style link-only platforms shown below the embedded content row.
const socialPlatforms = [
  {
    name: "Facebook",
    icon: FaFacebookSquare,
    href: "https://www.facebook.com/TheEverydaySexismProjectDanmark/",
  },
  {
    name: "Twitter",
    icon: FaTwitterSquare,
    href: "https://x.com/espdanmark?lang=en",
  },
];

interface SocialFeedSectionProps {
  heading?: string;
  description?: string;
  podcastImageSrc: string;
  podcastLink: string;
  podcastLinkText?: string;
}

// External embeds are only loaded after the visitor has accepted cookies.
function hasAcceptedCookieConsent() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split("; ")
    .some((cookie) => cookie === "cookie_consent=accepted");
}

export function SocialFeedSection({
  heading = "Følg os her",
  description,
  podcastImageSrc,
  podcastLink,
  podcastLinkText = "Klik her for at åbne podcast",
}: SocialFeedSectionProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Keep local state in sync with the shared cookie-consent banner.
    function updateConsent() {
      setHasConsent(hasAcceptedCookieConsent());
    }

    updateConsent();
    window.addEventListener("cookie-consent-change", updateConsent);

    return () => {
      window.removeEventListener("cookie-consent-change", updateConsent);
    };
  }, []);

  return (
    <section className="bg-white">
      {hasConsent && (
        <Script
          src="https://www.tiktok.com/embed.js"
          strategy="lazyOnload"
        />
      )}

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        {/* Section heading and intro copy for the social feeds row. */}
        <h2 className="mb-4 text-center font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-dark-text">
          {heading}
        </h2>

        {description && (
          <p className="mx-auto mb-10 max-w-[700px] text-center font-body text-body-text leading-relaxed">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center">
            <Link
              href={podcastLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center justify-center text-primary-black transition-colors hover:text-accent-gold"
              aria-label="Spotify podcast"
            >
              <FaSpotify className="h-15 w-15" />
            </Link>
            <Link
              href={podcastLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={podcastImageSrc}
                alt=""
                width={400}
                height={400}
                className="mx-auto h-auto w-[300px] rounded-sm"
              />
            </Link>
            <p className="mt-4 font-body text-body-text">
              <Link
                href={podcastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-accent-gold"
              >
                {podcastLinkText}
              </Link>
            </p>
          </div>

          <div className="text-center">
            <Link
              href="https://www.instagram.com/everydaysexismprojectdanmark/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center justify-center text-primary-black transition-colors hover:text-accent-gold"
              aria-label="Instagram"
            >
              <FaInstagram className="h-15 w-15" />
            </Link>

            {hasConsent ? (
              <div className="overflow-hidden rounded-sm border border-gray-200 bg-gray-50">
                <iframe
                  src="https://www.instagram.com/everydaysexismprojectdanmark/embed"
                  title="Instagram feed fra Everyday Sexism Project Danmark"
                  loading="lazy"
                  className="h-[420px] w-full border-0"
                />
              </div>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center rounded-sm border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm text-body-text">
                  Instagram feed
                  <br />
                  <span className="text-xs text-light-gray">
                    (Indlæses efter cookie-samtykke)
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link
              href="https://www.tiktok.com/@espdanmark"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center justify-center text-primary-black transition-colors hover:text-accent-gold"
              aria-label="TikTok"
            >
              <FaTiktok className="h-15 w-15" />
            </Link>

            {hasConsent ? (
              <div className="rounded-sm bg-gray-50 p-4 text-center text-sm text-body-text">
                <blockquote
                  className="tiktok-embed mx-auto"
                  cite="https://www.tiktok.com/@espdanmark"
                  data-unique-id="espdanmark"
                  data-embed-type="creator"
                  style={{ maxWidth: "780px", minWidth: "288px" }}
                >
                  <section>
                    <a
                      href="https://www.tiktok.com/@espdanmark?refer=creator_embed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @espdanmark
                    </a>
                  </section>
                </blockquote>
              </div>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center rounded-sm border border-gray-200 bg-gray-50 p-6">
                <p className="text-sm text-body-text">
                  TikTok feed
                  <br />
                  <span className="text-xs text-light-gray">
                    (Indlæses efter cookie-samtykke)
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-10">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="text-center">
              <Link
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-primary-black transition-colors hover:text-accent-gold"
                aria-label={platform.name}
              >
                <platform.icon className="w-15 h-15" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
