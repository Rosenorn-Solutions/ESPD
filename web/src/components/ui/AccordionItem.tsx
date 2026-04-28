"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-light-gray">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-heading text-base font-semibold text-dark-text hover:text-accent-gold transition-colors"
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <FaMinus className="w-4 h-4 shrink-0 ml-4" />
        ) : (
          <FaPlus className="w-4 h-4 shrink-0 ml-4" />
        )}
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,padding] duration-300",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 flex flex-col gap-4 font-body text-body-text leading-relaxed whitespace-pre-line [&>p]:block [&>p]:whitespace-normal">
          {answer}
        </div>
      </div>
    </div>
  );
}
