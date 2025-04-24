import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

interface ColorBlockProps {
  number: string;
  title: string;
  description: string;
  color: "red" | "yellow" | "green";
  icon?: React.ReactNode;
  className?: string;
}

export function ColorBlock({
  number,
  title,
  description,
  color,
  icon,
  className
}: ColorBlockProps) {
  const { theme } = useTheme();

  const getBgColor = () => {
    if (theme === 'dark') {
      switch (color) {
        case "red":
        case "yellow":
        case "green":
          return "bg-[#071330]";
        default:
          return "bg-zinc-900";
      }
    } else {
      switch (color) {
        case "red":
        case "yellow":
        case "green":
          return "bg-blue-50";
        default:
          return "bg-zinc-100";
      }
    }
  };

  const getTextColor = () => {
    switch (color) {
      case "red":
      case "yellow":
      case "green":
        return "text-[#0e62fe]";
      default:
        return theme === 'dark' ? "text-white" : "text-zinc-900";
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative rounded-lg p-8 overflow-hidden transition-all",
        getBgColor(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <span className={cn("text-2xl md:text-3xl font-medium opacity-70", getTextColor())}>
            {number}
          </span>
          {icon && (
            <motion.div
              className={cn("w-16 h-16 md:w-20 md:h-20", getTextColor())}
              initial={{ scale: 1 }}
              animate={isHovered ? { rotate: 5, scale: 1.05 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {icon}
            </motion.div>
          )}
        </div>

        <div className="mt-auto">
          <motion.h3 
            className={cn("text-xl md:text-2xl font-medium mb-2", getTextColor())}
            initial={{ y: 0 }}
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className={`text-sm md:text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}
            initial={{ opacity: 0.8 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

      </div>
    </motion.div>
  );
}