import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  color?: string;
  align?: "left" | "right";
}

export function Divider({ className, color, align = "left" }: DividerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1200px] py-4",
        className
      )}
    >
      <div
        className={cn(
          "flex",
          align === "right" ? "justify-end" : "justify-start"
        )}
      >
        <div
          className="h-1 w-24 rounded-full bg-accent-gold"
          style={color ? { backgroundColor: color } : undefined}
        />
      </div>
    </div>
  );
}
