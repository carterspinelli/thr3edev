import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textSize?: "sm" | "md" | "lg";
}

export function Logo({ className, textSize = "md" }: LogoProps) {
  const { theme } = useTheme();
  
  // Define tamaños de texto basados en el parámetro textSize
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  
  return (
    <div className={cn("font-bold flex items-center", sizes[textSize], className)}>
      <span className={theme === 'dark' ? 'text-white' : 'text-zinc-900'}>thr</span>
      <span className="text-[#0e62fe]">3</span>
      <span className={theme === 'dark' ? 'text-white' : 'text-zinc-900'}>.dev</span>
    </div>
  );
}