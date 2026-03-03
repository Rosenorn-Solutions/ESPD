"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavDropdown } from "./NavDropdown";
import { MobileMenu } from "./MobileMenu";
import { SearchOverlay } from "@/components/ui/SearchOverlay";
import { mainNavigation } from "@/lib/navigation";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      id="site-header"
      className="w-full bg-white border-b border-light-gray"
      itemScope
      itemType="https://schema.org/WPHeader"
      role="banner"
    >
      {/* Top row: logo */}
      <div className="bg-white py-5">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center justify-center">
            <Link href="/" aria-label="Everyday Sexism Project Danmark – forside">
              <Image
                src="/images/espd-logo.png"
                alt="Everyday Sexism Project Danmark"
                width={1182}
                height={287}
                priority
                className="h-auto w-[220px] md:w-[300px]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom row: navigation */}
      <nav
        id="site-navigation"
        className="hidden nav:block bg-white"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
        role="navigation"
        aria-label="Hovedmenu"
      >
        <div className="mx-auto max-w-[1200px] px-4">
          <ul className="flex items-center justify-center gap-0">
            {mainNavigation.map((item) => (
              <li key={item.title} className="relative group">
                {item.children ? (
                  <NavDropdown item={item} />
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    className="block px-6 py-6 font-heading text-lg font-medium uppercase tracking-wide text-primary-black hover:text-accent-gold transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}

            {/* Search toggle */}
            <li>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="px-4 py-6 text-primary-black hover:text-accent-gold transition-colors"
                aria-label="Søg på hjemmesiden"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </div>

        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </nav>

      {/* Mobile hamburger */}
      <div className="nav:hidden flex items-center justify-end px-4 py-3 bg-white">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-primary-black hover:text-accent-gold transition-colors p-2"
          aria-label={mobileMenuOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
          <span className="ml-2 font-heading text-sm uppercase">
            {mobileMenuOpen ? "Luk" : "Menu"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
