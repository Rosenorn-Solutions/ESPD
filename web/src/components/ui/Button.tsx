import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  target?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-primary-black text-white hover:bg-accent-gold hover:text-primary-black",
  secondary:
    "bg-accent-gold text-primary-black hover:bg-primary-black hover:text-white",
  outline:
    "border-2 border-primary-black text-primary-black hover:bg-primary-black hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-heading font-medium uppercase tracking-wide transition-colors duration-200 rounded-sm",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
