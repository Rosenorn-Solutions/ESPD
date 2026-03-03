import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://da-dk.facebook.com/TheEverydaySexismProjectDanmark/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://twitter.com/EspDanmark",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/everydaysexismprojectdanmark/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/espdanmark/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer
      id="colophon"
      className="bg-footer-bg text-footer-text"
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Support */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest mb-3">
              Støt ESPD
            </h3>
            <p className="text-sm leading-relaxed font-body">
              Støt vores arbejde eller bliv medlem. Hør mere ved at sende en mail
              til{" "}
              <a
                href="mailto:espdtilmelding@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdtilmelding@gmail.com
              </a>
            </p>
          </div>

          {/* Volunteer */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest mb-3">
              Bliv frivillig
            </h3>
            <p className="text-sm leading-relaxed font-body">
              Hør mere ved at sende en mail til{" "}
              <a
                href="mailto:espdfrivillig@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdfrivillig@gmail.com
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-widest mb-3">
              Skriv til os
            </h3>
            <p className="text-sm leading-relaxed font-body">
              Hvis du har spørgsmål eller i øvrigt vil i kontakt på{" "}
              <a
                href="mailto:espdanmark@gmail.com"
                className="underline hover:text-accent-gold transition-colors"
              >
                espdanmark@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social icons */}
        <div className="text-center">
          <h3 className="font-heading text-lg font-bold uppercase tracking-widest mb-4">
            Følg os
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent-gold hover:text-primary-black transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs font-body text-footer-text/70">
          <p>
            &copy; {new Date().getFullYear()} Everyday Sexism Project Danmark.
            Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
