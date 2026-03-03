import { clsx, type ClassValue } from "clsx";

/**
 * Minimal `cn` helper – concatenates class names, filtering out falsy values.
 * If clsx is not installed yet this falls back to a simple join.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
