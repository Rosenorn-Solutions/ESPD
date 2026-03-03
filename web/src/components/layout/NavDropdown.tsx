"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/types";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

interface NavDropdownProps {
  item: NavItem;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-6 py-6 font-heading text-lg font-medium uppercase tracking-wide text-primary-black hover:text-accent-gold transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {item.title}
        <FaAngleDown className="w-3 h-3" />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-50 min-w-[270px] border border-white bg-white shadow-lg">
          {item.children?.map((child) => (
            <li
              key={child.title}
              className="relative group/sub border-b border-gray-100 last:border-b-0"
            >
              {child.children ? (
                <SubDropdown item={child} />
              ) : (
                <Link
                  href={child.href ?? "#"}
                  className="block px-5 py-3 font-heading text-xs font-normal uppercase tracking-wider text-dark-text hover:bg-gray-200 hover:text-dark-text transition-colors"
                >
                  {child.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SubDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between px-5 py-3 font-heading text-xs font-normal uppercase tracking-wider text-dark-text hover:bg-gray-200 transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {item.title}
        <FaAngleRight className="w-3 h-3" />
      </button>

      {open && (
        <ul className="absolute left-full top-0 z-50 min-w-[270px] border border-white bg-white shadow-lg">
          {item.children?.map((child) => (
            <li
              key={child.title}
              className="border-b border-gray-100 last:border-b-0"
            >
              <Link
                href={child.href ?? "#"}
                className="block px-5 py-3 font-heading text-xs font-normal uppercase tracking-wider text-dark-text hover:bg-gray-200 transition-colors"
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
