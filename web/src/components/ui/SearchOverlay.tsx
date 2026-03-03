"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

interface SearchOverlayProps {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  }

  return (
    <div className="border-t border-light-gray bg-white px-4 py-4">
      <div className="mx-auto max-w-[600px]">
        <form onSubmit={handleSubmit} className="relative" role="search">
          <label htmlFor="search-input" className="sr-only">
            Søg
          </label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Søgning"
            autoFocus
            className="w-full rounded-sm border border-light-gray px-4 py-3 pr-10 text-sm text-dark-text font-body placeholder:text-body-text focus:outline-none focus:border-accent-gold"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-body-text hover:text-accent-gold transition-colors"
            aria-label="Luk søgning"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
