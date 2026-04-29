"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";
import type { NavItem } from "@/types";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="nav:hidden fixed inset-0 z-50 overflow-y-auto bg-black/85 text-white backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Mobilmenu"
    >
      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 inline-flex items-center gap-2 text-sm font-heading uppercase tracking-wide text-white transition-colors hover:text-accent-gold"
          aria-label="Luk menu"
        >
          <FaTimes className="h-5 w-5" />
          Luk
        </button>

        <ul className="w-full max-w-[720px] space-y-3 text-center">
          {mainNavigation.map((item) => (
            <MobileNavItem key={item.title} item={item} onClose={onClose} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onClose,
  depth = 0,
}: {
  item: NavItem;
  onClose: () => void;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <li>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-center gap-3 py-3 font-heading text-base font-medium uppercase tracking-wide text-white transition-colors hover:text-accent-gold"
          style={{ marginLeft: `${depth * 16}px` }}
          aria-expanded={expanded}
        >
          {item.title}
          {expanded ? (
            <FaAngleUp className="w-4 h-4" />
          ) : (
            <FaAngleDown className="w-4 h-4" />
          )}
        </button>
        {expanded && (
          <ul className="space-y-1">
            {item.children.map((child) => (
              <MobileNavItem
                key={child.title}
                item={child}
                onClose={onClose}
                depth={depth + 1}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href ?? "#"}
        onClick={onClose}
        className="block py-3 font-heading text-base font-medium uppercase tracking-wide text-white transition-colors hover:text-accent-gold"
        style={{ marginLeft: `${depth * 16}px` }}
      >
        {item.title}
      </Link>
    </li>
  );
}
