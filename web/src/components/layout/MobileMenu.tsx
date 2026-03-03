"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";
import type { NavItem } from "@/types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div
      className="nav:hidden fixed inset-0 z-50 bg-white overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobilmenu"
    >
      <div className="px-6 py-4">
        <ul className="space-y-1">
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
          className="flex w-full items-center justify-between py-3 font-heading text-sm font-medium uppercase tracking-wide text-primary-black hover:text-accent-gold transition-colors"
          style={{ paddingLeft: `${depth * 16}px` }}
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
        className="block py-3 font-heading text-sm font-medium uppercase tracking-wide text-primary-black hover:text-accent-gold transition-colors"
        style={{ paddingLeft: `${depth * 16}px` }}
      >
        {item.title}
      </Link>
    </li>
  );
}
