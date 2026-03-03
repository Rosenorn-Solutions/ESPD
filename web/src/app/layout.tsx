import type { Metadata } from "next";
import { Raleway, Roboto, Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieConsent } from "@/components/ui/CookieConsent";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Everyday Sexism Project Danmark",
    template: "%s — Everyday Sexism Project Danmark",
  },
  description:
    "ESPD er en frivilligdrevet NGO, der bekæmper og oplyser om hverdagssexisme i Danmark.",
  metadataBase: new URL("https://everydaysexismproject.dk"),
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    locale: "da_DK",
    type: "website",
    siteName: "Everyday Sexism Project Danmark",
    images: [{ url: "/images/espd-logo-front.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da-DK">
      <body
        className={`${raleway.variable} ${roboto.variable} ${shadowsIntoLight.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Gå til indhold
        </a>
        <Header />
        <main id="main" role="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
