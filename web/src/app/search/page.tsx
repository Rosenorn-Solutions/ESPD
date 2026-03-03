"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  // TODO: Replace with real Sanity search query via server action or API route
  const results: { title: string; slug: string; excerpt: string }[] = [];

  return (
    <>
      {query ? (
        <>
          <p className="font-body text-body-text mb-8">
            Viser resultater for: <strong className="text-dark-text">&ldquo;{query}&rdquo;</strong>
          </p>

          {results.length === 0 ? (
            <p className="font-body text-body-text">
              Ingen resultater fundet. Prøv et andet søgeord.
            </p>
          ) : (
            <ul className="space-y-6">
              {results.map((r) => (
                <li key={r.slug} className="border-b border-gray-200 pb-6">
                  <Link
                    href={`/${r.slug}`}
                    className="font-heading text-lg font-semibold text-dark-text hover:text-accent-gold transition-colors"
                  >
                    {r.title}
                  </Link>
                  <p className="font-body text-body-text text-sm mt-1">
                    {r.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="font-body text-body-text">
          Indtast et søgeord ovenfor for at søge på sitet.
        </p>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-black text-white">
        <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24 text-center">
          <h1 className="font-heading text-2xl md:text-3xl font-bold uppercase">
            Søg
          </h1>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Søg" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-[800px] px-4 py-12 md:py-16">
          {/* Search form */}
          <form action="/search" method="get" className="mb-10">
            <div className="flex gap-2">
              <input
                name="q"
                type="search"
                placeholder="Søg…"
                className="flex-1 rounded-sm border border-gray-300 px-4 py-2 text-sm text-dark-text
                           focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <button
                type="submit"
                className="bg-accent-gold text-primary-black font-heading font-bold uppercase text-sm
                           px-6 py-2 rounded-sm hover:brightness-110 transition-all"
              >
                Søg
              </button>
            </div>
          </form>

          <Suspense fallback={<p className="text-body-text">Indlæser…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}
