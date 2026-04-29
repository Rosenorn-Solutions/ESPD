"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

interface PodcastSectionProps {
  heading?: string;
  imageSrc: string;
  imageAlt?: string;
  podcastLink: string;
  linkText?: string;
}

function hasAcceptedCookieConsent() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split("; ")
    .some((cookie) => cookie === "cookie_consent=accepted");
}

export function PodcastSection({
  heading = "ESPD Podcast",
  imageSrc,
  imageAlt = "ESPD Podcast",
  podcastLink,
  linkText = "Klik her for at åbne podcast",
}: PodcastSectionProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
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
            {hasConsent ? (
              <div className="rounded-sm bg-gray-50 p-4 text-center text-sm text-body-text">
                <p className="mb-4 font-heading uppercase tracking-wide text-dark-text">
                  Social medie indhold
                </p>
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
                <Script
                  src="https://www.tiktok.com/embed.js"
                  strategy="lazyOnload"
                />
              </div>
            ) : (
              <div className="rounded-sm bg-gray-50 p-8 text-center text-sm text-body-text">
                <p className="font-heading uppercase tracking-wide">
                  Social medie indhold
                </p>
                <p className="mt-2 text-xs">
                  TikTok / Instagram embed vises her efter cookie-samtykke
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
