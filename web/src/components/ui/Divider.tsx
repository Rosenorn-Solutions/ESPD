import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  color?: string;
}

export function Divider({ className, color }: DividerProps) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-4 py-4", className)}>
      <hr
        className="border-t border-light-gray"
        style={color ? { borderColor: color } : undefined}
      />
    </div>
  );
}
