"use client";

import { useSyncExternalStore } from "react";

import Link from "next/link";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("cookie-consent-change", onStoreChange);

  return () => {
    window.removeEventListener("cookie-consent-change", onStoreChange);
  };
}

function getSnapshot() {
  const consent = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("cookie_consent="));

  return consent ?? null;
}

function getServerSnapshot() {
  return null;
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = consent === null;

  function accept() {
    document.cookie =
      "cookie_consent=accepted; path=/; max-age=31536000; SameSite=Lax";
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  function reject() {
    document.cookie =
      "cookie_consent=rejected; path=/; max-age=31536000; SameSite=Lax";
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 border-t border-light-gray bg-white p-4 shadow-lg"
      role="dialog"
      aria-label="Cookie-samtykke"
    >
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-dark-text font-body">
          Vi bruger cookies til at forbedre din oplevelse på vores hjemmeside. Ved
          at klikke &quot;Acceptér&quot; samtykker du til brugen af cookies.{" "}
          <Link href="/privatlivspolitik" className="underline hover:text-accent-gold">
            Læs mere
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-heading uppercase tracking-wide border border-primary-black text-primary-black hover:bg-gray-100 transition-colors rounded-sm"
          >
            Afvis
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-heading uppercase tracking-wide bg-primary-black text-white hover:bg-accent-gold hover:text-primary-black transition-colors rounded-sm"
          >
            Acceptér
          </button>
        </div>
      </div>
    </div>
  );
}
